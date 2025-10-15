"use client";

import {
  Loader2,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface SelfBadgeProps {
  status?: "unverified" | "pending" | "verified" | "error";
  className?: string;
}

const statusTone: Record<Required<SelfBadgeProps>["status"], string> = {
  unverified: {
    tone: "text-[#44506b] border-[#d1d7eb]",
  },
  pending: {
    tone: "text-[#2f3950] border-[#447bff]/60",
  },
  verified: {
    tone: "text-white border-[#447bff]",
  },
  error: {
    tone: "text-[#a61b2a] border-[#ffb2b2]",
  },
};

const statusIcon: Record<
  Required<SelfBadgeProps>["status"],
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  unverified: ShieldQuestion,
  pending: Loader2,
  verified: ShieldCheck,
  error: ShieldAlert,
};

export function SelfBadge({
  status = "unverified",
  className = "",
}: SelfBadgeProps) {
  const t = useTranslations("SelfBadge");
  const Icon = statusIcon[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-[0.2em] transition ${statusTone[status]} ${className}`.trim()}
    >
      <Icon
        className={`h-4 w-4 ${status === "pending" ? "animate-spin" : ""}`}
        aria-hidden
      />
      {t(`statuses.${status}`)}
    </span>
  );
}

export default SelfBadge;
