import Image from "next/image";
import { useTranslations } from "next-intl";
import StatusPill from "@/components/ui/StatusPill";

interface CheckInPanelProps {
  qrUrl: string;
  status: "unverified" | "pending" | "verified" | "error";
}

export function CheckInPanel({ qrUrl, status }: CheckInPanelProps) {
  const t = useTranslations("CheckInPanel");
  const steps = t.raw("howItWorks.steps") as string[];

  return (
    <div className="grid gap-6 text-[#0f1621] lg:grid-cols-[340px_1fr]">
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
        <h3 className="text-lg font-semibold">{t("title")}</h3>
        <Image
          src={qrUrl}
          alt={t("qrAlt")}
          width={256}
          height={256}
          className="mt-4 h-64 w-64 rounded-2xl border border-[#d1d7eb] object-cover object-center shadow-[0_25px_60px_-50px_rgba(15,22,33,0.45)]"
        />
        <div className="mt-4">
          <StatusPill status={status} />
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-[#447bff] py-3 text-sm font-medium text-white transition hover:bg-[#5d8cff]"
        >
          {t("cta")}
        </button>
      </div>
      <div className="py-6">
        <p className="text-base">{t("howItWorks.title")}</p>
        <ol className="mt-3 space-y-2 text-sm text-[#44506b]">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-[#8894b3]">{t("footnote")}</p>
      </div>
    </div>
  );
}

export default CheckInPanel;
