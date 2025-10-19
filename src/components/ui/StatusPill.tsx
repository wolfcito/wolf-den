"use client";

import {
  Loader2,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface StatusPillProps {
  status: "unverified" | "pending" | "verified" | "error";
}

const statusTone: Record<StatusPillProps["status"], string> = {
  unverified: "bg-transparent text-wolf-text-subtle border border-wolf-border",
  pending:
    "bg-wolf-emerald-soft border border-wolf-border-strong text-wolf-emerald",
  verified:
    "bg-[linear-gradient(115deg,#a5cd60,#7ba142)] text-wolf-soft border border-wolf-emerald-border-strong shadow-[0_0_20px_rgba(165,205,96,0.35)]",
  error: "bg-wolf-error-soft text-[#ff8f94] border border-wolf-error-border",
};

const statusIcon: Record<
  StatusPillProps["status"],
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  unverified: ShieldQuestion,
  pending: Loader2,
  verified: ShieldCheck,
  error: ShieldAlert,
};

export function StatusPill({ status }: StatusPillProps) {
  const t = useTranslations("StatusPill");
  const Icon = statusIcon[status];

  return (
    <span className={`wolf-pill text-sm ${statusTone[status]}`}>
      <Icon
        className={`h-4 w-4 ${
          status === "pending" ? "animate-spin" : ""
        } text-current`}
        aria-hidden
      />
      {t(`statuses.${status}`)}
    </span>
  );
}

export default StatusPill;
