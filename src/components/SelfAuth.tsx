"use client";

import { type SelfApp, SelfAppBuilder } from "@selfxyz/qrcode";
import { useTranslations } from "next-intl";
import { type ReactElement, useEffect, useRef, useState } from "react";
import { normalizeSelfEndpoint } from "@/lib/selfEndpoint";

interface SelfAuthProps {
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error) => void;
}

type QrWrapperProps = {
  selfApp: SelfApp;
  onSuccess: () => void;
  onError: (data: { error_code?: string; reason?: string }) => void;
  size?: number;
  darkMode?: boolean;
};

type QrWrapperComponent = (props: QrWrapperProps) => ReactElement | null;

export default function SelfAuth({ onSuccess, onError }: SelfAuthProps) {
  const t = useTranslations("SelfAuth");
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [missingConfig, setMissingConfig] = useState<string[]>([]);
  const [qrWrapper, setQrWrapper] = useState<QrWrapperComponent | null>(null);
  const [qrWrapperError, setQrWrapperError] = useState(false);
  const userIdRef = useRef<string | null>(null);
  const Wrapper = qrWrapper;

  useEffect(() => {
    const endpoint = normalizeSelfEndpoint(
      process.env.NEXT_PUBLIC_SELF_ENDPOINT ?? "",
    );
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

    const devModeSetting = process.env.NEXT_PUBLIC_SELF_DEV_MODE;
    const devMode =
      devModeSetting != null
        ? devModeSetting === "true"
        : process.env.NODE_ENV !== "production";
    const endpointType = devMode ? "staging_https" : "https";
    const chainID = devMode ? 44787 : 42220;

    const compliance = {
      minimumAge: 18,
      excludedCountries: [] as string[],
      ofac: !devMode,
    };

    const app = new SelfAppBuilder({
      appName,
      scope,
      endpoint,
      logoBase64: "https://i.postimg.cc/mrmVf9hm/self.png",
      userId: userIdRef.current ?? "",
      userIdType: "uuid",
      devMode,
      endpointType,
      chainID,
      disclosures: {
        ...compliance,
        nationality: true,
        gender: true,
      },
    }).build();

    setMissingConfig([]);
    setSelfApp(app);
  }, []);

  useEffect(() => {
    let isActive = true;

    void import("@selfxyz/qrcode")
      .then((mod) => {
        if (!isActive) {
          return;
        }
        type SelfQrModule = {
          SelfQRcodeWrapper?: unknown;
          SelfQRcode?: unknown;
          default?: {
            SelfQRcodeWrapper?: unknown;
          };
        };

        const moduleExports = mod as unknown as SelfQrModule;
        const exportedWrapper =
          moduleExports.SelfQRcodeWrapper ??
          moduleExports.SelfQRcode ??
          moduleExports.default?.SelfQRcodeWrapper;

        if (typeof exportedWrapper === "function") {
          setQrWrapper(() => exportedWrapper as QrWrapperComponent);
          setQrWrapperError(false);
        } else {
          console.error(
            "Self verification unavailable: SelfQRcodeWrapper export not found. Verify @selfxyz/qrcode version.",
          );
          setQrWrapper(null);
          setQrWrapperError(true);
        }
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }
        console.error(
          "Self verification unavailable: failed to load SelfQRcodeWrapper.",
          error,
        );
        setQrWrapper(null);
        setQrWrapperError(true);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const handleSuccess = () => {
    setIsVerified(true);
    onSuccess?.(undefined);
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
    <div className="wolf-card flex flex-col items-center justify-center gap-5 rounded-[1.9rem] border border-wolf-border-strong px-6 py-8 text-center text-wolf-foreground">
      {missingConfig.length > 0 ? (
        <div className="space-y-3">
          <div className="text-4xl">⚠️</div>
          <h3 className="text-lg font-semibold text-white">
            {t("error.missingConfig.title")}
          </h3>
          <p className="text-sm text-white/70">
            {t("error.missingConfig.body", {
              vars: missingConfig.join(", "),
            })}
          </p>
          <p className="text-xs text-wolf-text-subtle">
            {t("error.missingConfig.hint")}
          </p>
        </div>
      ) : isVerified ? (
        <div>
          <div className="mb-2 text-4xl">✅</div>
          <h3 className="text-lg font-semibold text-white">
            {t("success.title")}
          </h3>
          <p className="mt-2 text-sm text-white/70">{t("success.body")}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-white">
              {t("intro.title")}
            </h2>
            <p className="mt-2 text-sm text-white/70">{t("intro.body")}</p>
          </div>
          {selfApp ? (
            Wrapper ? (
              <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] [&>div>div:first-child]:hidden [&>div>div:last-child]:overflow-hidden [&>div>div:last-child]:rounded-[1.15rem] [&>div>div:last-child]:border [&>div>div:last-child]:border-wolf-border-soft [&>div>div:last-child]:bg-wolf-charcoal-90/85 [&>div>div:last-child]:shadow-[0_28px_75px_-55px_rgba(0,0,0,0.7)]">
                <Wrapper
                  selfApp={selfApp}
                  onSuccess={handleSuccess}
                  onError={handleError}
                  size={260}
                  darkMode
                />
              </div>
            ) : qrWrapperError ? (
              <p className="text-sm text-[#ff8f94]">
                {t("error.missingWrapper")}
              </p>
            ) : (
              <p className="text-sm text-wolf-text-subtle">
                {t("intro.loading")}
              </p>
            )
          ) : (
            <p className="text-sm text-wolf-text-subtle">
              {t("intro.loading")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
