"use client";

import {
  SelfAppBuilder,
  SelfQRcodeWrapper,
  type SelfApp,
} from "@selfxyz/qrcode";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

interface SelfAuthProps {
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error) => void;
}

export default function SelfAuth({ onSuccess, onError }: SelfAuthProps) {
  const t = useTranslations("SelfAuth");
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [missingConfig, setMissingConfig] = useState<string[]>([]);
  const userIdRef = useRef<string | null>(null);

  useEffect(() => {
    const endpoint = process.env.NEXT_PUBLIC_SELF_ENDPOINT ?? "";
    const appName = process.env.NEXT_PUBLIC_SELF_APP_NAME ?? "";
    const scope = process.env.NEXT_PUBLIC_SELF_SCOPE ?? "";

    const missing: string[] = [];
    if (!appName) missing.push("NEXT_PUBLIC_SELF_APP_NAME");
    if (!scope) missing.push("NEXT_PUBLIC_SELF_SCOPE");
    if (!endpoint) missing.push("NEXT_PUBLIC_SELF_ENDPOINT");

    if (missing.length > 0) {
      setMissingConfig(missing);
      setSelfApp(null);
      return;
    }

    if (!userIdRef.current) {
      const randomId =
        typeof globalThis !== "undefined" &&
        typeof globalThis.crypto?.randomUUID === "function"
          ? globalThis.crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      userIdRef.current = randomId;
    }

    const app = new SelfAppBuilder({
      appName,
      scope,
      endpoint,
      logoBase64: "https://i.postimg.cc/mrmVf9hm/self.png",
      userId: userIdRef.current ?? "",
      disclosures: {
        minimumAge: 18,
        nationality: true,
        gender: true,
      },
    }).build();

    setMissingConfig([]);
    setSelfApp(app);
  }, []);

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
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#d1d7eb] bg-[#f5f7ff] py-8 text-center text-[#0f1621] shadow-[0_25px_70px_-60px_rgba(15,22,33,0.45)]">
      {missingConfig.length > 0 ? (
        <div className="space-y-3">
          <div className="text-4xl">⚠️</div>
          <h3 className="text-lg font-semibold text-[#0b1320]">
            {t("error.missingConfig.title")}
          </h3>
          <p className="text-sm text-[#44506b]">
            {t("error.missingConfig.body", {
              vars: missingConfig.join(", "),
            })}
          </p>
          <p className="text-xs text-[#8894b3]">
            {t("error.missingConfig.hint")}
          </p>
        </div>
      ) : isVerified ? (
        <div>
          <div className="mb-2 text-4xl">✅</div>
          <h3 className="text-lg font-semibold text-[#0b1320]">
            {t("success.title")}
          </h3>
          <p className="mt-2 text-sm text-[#44506b]">{t("success.body")}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-[#0b1320]">
              {t("intro.title")}
            </h2>
            <p className="mt-2 text-sm text-[#44506b]">{t("intro.body")}</p>
          </div>
          {selfApp ? (
            <SelfQRcodeWrapper
              selfApp={selfApp}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          ) : (
            <p className="text-sm text-[#9aa5c3]">{t("intro.loading")}</p>
          )}
        </div>
      )}
    </div>
  );
}
