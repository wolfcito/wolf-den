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
  unverified: "bg-[#eef2ff] text-[#5e6a84] border-[#d1d7eb]",
  pending: "bg-[#e0e7ff] text-[#2f3950] border-[#447bff]/50",
  verified: "bg-[#447bff] text-white border-[#447bff]",
  error: "bg-[#ffe4e4] text-[#a61b2a] border-[#ffb2b2]",
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
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${statusTone[status]}`}
    >
      <Icon
        className={`h-4 w-4 ${status === "pending" ? "animate-spin" : ""}`}
        aria-hidden
      />
      {t(`statuses.${status}`)}
    </span>
  );
}

export default StatusPill;
