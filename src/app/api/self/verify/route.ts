import {
  AllIds,
  type AttestationId,
  DefaultConfigStore,
  SelfBackendVerifier,
} from "@selfxyz/core";
import { type NextRequest, NextResponse } from "next/server";
import { normalizeSelfEndpoint } from "@/lib/selfEndpoint";

const scope = process.env.NEXT_PUBLIC_SELF_SCOPE ?? "";
const endpoint = normalizeSelfEndpoint(
  process.env.NEXT_PUBLIC_SELF_ENDPOINT ?? "",
);
const sandboxEnv = process.env.SELF_USE_SANDBOX;
const useMock =
  sandboxEnv != null
    ? sandboxEnv === "true"
    : process.env.NODE_ENV !== "production";

if (!scope || !endpoint) {
  console.warn(
    "SELF integration misconfigured: ensure NEXT_PUBLIC_SELF_SCOPE and NEXT_PUBLIC_SELF_ENDPOINT are set.",
  );
}

console.info(
  "[SelfVerifier] configured",
  JSON.stringify({
    scope,
    endpoint,
    sandbox: useMock,
  }),
);

const configStore = new DefaultConfigStore({
  minimumAge: 18,
  excludedCountries: [],
  ofac: !useMock,
});

const allowedAttestations: Map<AttestationId, boolean> = useMock
  ? AllIds
  : new Map([[1, true]]);

const verifier = new SelfBackendVerifier(
  scope,
  endpoint,
  useMock,
  allowedAttestations,
  configStore,
  "uuid",
);

type ProofPayload = {
  a: [string, string];
  b: [[string, string], [string, string]];
  c: [string, string];
};

type VerifyBody = {
  attestationId?: number;
  proof?: Partial<ProofPayload>;
  publicSignals?: string[];
  userContextData?: string;
};

function isProofPayload(proof: Partial<ProofPayload>): proof is ProofPayload {
  const { a, b, c } = proof;
  return (
    Array.isArray(a) &&
    a.length === 2 &&
    Array.isArray(b) &&
    b.length === 2 &&
    b.every((row) => Array.isArray(row) && row.length === 2) &&
    Array.isArray(c) &&
    c.length === 2
  );
}

export async function POST(request: NextRequest) {
  let body: VerifyBody;

  try {
    body = await request.json();
  } catch (_error) {
    return NextResponse.json(
      { status: "error", result: false, reason: "Invalid JSON payload" },
      { status: 200 },
    );
  }

  const { attestationId, proof, publicSignals, userContextData } = body;

  if (
    attestationId == null ||
    !proof ||
    !isProofPayload(proof) ||
    !Array.isArray(publicSignals) ||
    publicSignals.length === 0 ||
    typeof userContextData !== "string"
  ) {
    return NextResponse.json(
      {
        status: "error",
        result: false,
        reason:
          "attestationId, proof, publicSignals, and userContextData are required",
      },
      { status: 200 },
    );
  }

  if (attestationId !== 1) {
    return NextResponse.json(
      { status: "error", result: false, reason: "Unsupported attestationId" },
      { status: 200 },
    );
  }

  const typedAttestationId = attestationId as AttestationId;
  try {
    const result = await verifier.verify(
      typedAttestationId,
      proof,
      publicSignals,
      userContextData,
    );

    const validity = result.isValidDetails;

    if (
      !validity?.isValid ||
      validity.isMinimumAgeValid === false ||
      validity.isOfacValid === false
    ) {
      return NextResponse.json(
        {
          status: "error",
          result: false,
          reason: "Verification failed",
          details: validity,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        status: "success",
        result: true,
        userData: result.userData,
        discloseOutput: result.discloseOutput,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error verifying Self proof", error);
    return NextResponse.json(
      {
        status: "error",
        result: false,
        reason:
          error instanceof Error
            ? error.message
            : "Unexpected verification error",
      },
      { status: 200 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    {
      message:
        "Self verification endpoint. Use POST with verification payload.",
    },
    { status: 200 },
  );
}
