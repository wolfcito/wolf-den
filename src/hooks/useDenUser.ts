"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import { useEffect, useState } from "react";
import {
  getSelfVerification,
  subscribeToSelfVerification,
} from "@/lib/selfVerification";
import { fetchUserProfile } from "@/lib/userClient";

export type DenUser = {
  walletAddress: `0x${string}` | null;
  selfVerified: boolean;
  selfDid?: string | null;
  roles: string[];
  isBuilder: boolean;
  isMember: boolean;
  isAdmin: boolean;
  holdScore: number | null;
};

export function useDenUser(): DenUser {
  const { address } = useAppKitAccount();
  const [selfVerified, setSelfVerified] = useState(false);
  const [holdScore, setHoldScore] = useState<number | null>(null);

  useEffect(() => {
    setSelfVerified(getSelfVerification());
    return subscribeToSelfVerification(setSelfVerified);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchUserProfile()
      .then((profile) => {
        if (cancelled || !profile) {
          return;
        }
        setHoldScore(profile.hold_score ?? 0);
        setSelfVerified(profile.self_verified ?? false);
      })
      .catch(() => {
        if (!cancelled) {
          setHoldScore((previous) => previous ?? null);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const normalizedAddress =
    typeof address === "string" && address.startsWith("0x")
      ? (address as `0x${string}`)
      : null;

  const isBuilder = normalizedAddress !== null;
  const roles = isBuilder ? ["BUILDER"] : [];

  return {
    walletAddress: normalizedAddress,
    selfVerified,
    selfDid: null,
    roles,
    isBuilder,
    isMember: isBuilder && selfVerified,
    isAdmin: false,
    holdScore,
  };
}
