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
  unverified:
    "bg-transparent text-[color:var(--wolf-text-subtle)] border border-[color:var(--wolf-border)]",
  pending:
    "bg-[rgba(123,255,104,0.12)] border border-[color:var(--wolf-border-strong)] text-[color:var(--wolf-emerald)]",
  verified:
    "bg-[linear-gradient(115deg,#74ff78,#3bcf5f)] text-[color:var(--wolf-soft)] border border-[rgba(41,197,94,0.45)] shadow-[0_0_20px_rgba(115,255,140,0.35)]",
  error:
    "bg-[rgba(255,75,75,0.12)] text-[#ff8f94] border border-[rgba(255,99,99,0.4)]",
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
