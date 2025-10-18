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
  unverified: "text-wolf-text-subtle border-wolf-border",
  pending:
    "text-wolf-emerald border-wolf-border-strong bg-wolf-emerald-soft shadow-[0_0_20px_rgba(123,255,120,0.15)]",
  verified:
    "text-wolf-soft border-wolf-emerald-border-strong bg-[linear-gradient(120deg,#74ff78,#3bcf5f)] shadow-[0_0_20px_rgba(123,255,120,0.3)]",
  error:
    "text-[#ff8f94] border-wolf-error-border bg-wolf-error-soft shadow-[0_0_18px_rgba(255,92,92,0.25)]",
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
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${statusTone[status]} ${className}`.trim()}
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
