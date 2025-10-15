import { NextRequest, NextResponse } from "next/server";
import {
  DefaultConfigStore,
  SelfBackendVerifier,
} from "@selfxyz/core";

const scope = process.env.NEXT_PUBLIC_SELF_SCOPE ?? "";
const endpoint = process.env.NEXT_PUBLIC_SELF_ENDPOINT ?? "";
const useMock = process.env.SELF_USE_SANDBOX === "true";

if (!scope || !endpoint) {
  console.warn(
    "SELF integration misconfigured: ensure NEXT_PUBLIC_SELF_SCOPE and NEXT_PUBLIC_SELF_ENDPOINT are set.",
  );
}

const configStore = new DefaultConfigStore({
  minimumAge: 18,
  ofac: true,
});

const allowedAttestations = new Map([[1, true]]);

const verifier = new SelfBackendVerifier(
  scope,
  endpoint,
  useMock,
  allowedAttestations,
  configStore,
  "uuid",
);

type VerifyBody = {
  attestationId?: number;
  proof?: unknown;
  publicSignals?: unknown;
  userContextData?: string;
};

export async function POST(request: NextRequest) {
  let body: VerifyBody;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const { attestationId, proof, publicSignals, userContextData } = body;

  if (
    attestationId == null ||
    proof == null ||
    publicSignals == null ||
    typeof userContextData !== "string"
  ) {
    return NextResponse.json(
      {
        message:
          "attestationId, proof, publicSignals, and userContextData are required",
      },
      { status: 400 },
    );
  }

  try {
    const result = await verifier.verify(
      attestationId,
      proof,
      publicSignals as unknown[],
      userContextData,
    );

    const validity = result.isValidDetails;

    if (!validity.isValid || !validity.isMinimumAgeValid || !validity.isOfacValid) {
      return NextResponse.json(
        {
          status: "error",
          result: false,
          message: "Verification failed",
          details: validity,
        },
        { status: 401 },
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
        message:
          error instanceof Error ? error.message : "Unexpected verification error",
      },
      { status: 500 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    {
      message: "Self verification endpoint. Use POST with verification payload.",
    },
    { status: 200 },
  );
}
