"use client";

import {
  type SelfApp,
  SelfAppBuilder,
  SelfQRcodeWrapper,
} from "@selfxyz/qrcode";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface SelfAuthProps {
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error) => void;
}

export default function SelfAuth({ onSuccess, onError }: SelfAuthProps) {
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null);
  const [userId] = useState(ethers.ZeroAddress);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const app = new SelfAppBuilder({
      version: 2,
      appName: "Wolf Den",
      scope: "wolf-den",
      endpoint: process.env.NEXT_PUBLIC_SELF_ENDPOINT || "",
      logoBase64: "https://i.postimg.cc/mrmVf9hm/self.png",
      userId,
      endpointType: "staging_https",
      userIdType: "hex",
      userDefinedData: "Wolf Den Authentication",
      disclosures: {
        minimumAge: 18,
        nationality: true,
        gender: true,
      },
    }).build();

    setSelfApp(app);
  }, [userId]);

  const handleSuccess = () => {
    setIsVerified(true);
    if (onSuccess) {
      onSuccess(null);
    }
    console.log("Self verification successful!");
  };

  const handleError = (data: { error_code?: string; reason?: string }) => {
    const error = new Error(data.reason || "Verification failed");
    if (onError) {
      onError(error);
    }
    console.error("Self verification error:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#d1d7eb] bg-[#f5f7ff] p-8 text-center text-[#0f1621] shadow-[0_25px_70px_-60px_rgba(15,22,33,0.45)]">
      {isVerified ? (
        <div>
          <div className="mb-2 text-4xl">✅</div>
          <h3 className="text-lg font-semibold text-[#0b1320]">
            Verificación completada
          </h3>
          <p className="mt-2 text-sm text-[#44506b]">
            Tu identidad está confirmada. ¡Explora el Wolf Den sin límites!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-[#0b1320]">
              Verifica con Self
            </h2>
            <p className="mt-2 text-sm text-[#44506b]">
              Escanea el QR con la app Self para sincronizar tu identidad con la
              manada.
            </p>
          </div>
          {selfApp ? (
            <SelfQRcodeWrapper
              selfApp={selfApp}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          ) : (
            <p className="text-sm text-[#9aa5c3]">Generando QR…</p>
          )}
        </div>
      )}
    </div>
  );
}
