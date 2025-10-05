"use client";

import {
  Loader2,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
} from "lucide-react";

interface SelfBadgeProps {
  status?: "unverified" | "pending" | "verified" | "error";
  className?: string;
}

const statusCopy: Record<
  Required<SelfBadgeProps>["status"],
  {
    label: string;
    tone: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
> = {
  unverified: {
    label: "Self: unverified",
    tone: "text-[#44506b] border-[#d1d7eb]",
    icon: ShieldQuestion,
  },
  pending: {
    label: "Self: pending",
    tone: "text-[#2f3950] border-[#447bff]/60",
    icon: Loader2,
  },
  verified: {
    label: "Self: verified",
    tone: "text-white border-[#447bff]",
    icon: ShieldCheck,
  },
  error: {
    label: "Self: error",
    tone: "text-[#a61b2a] border-[#ffb2b2]",
    icon: ShieldAlert,
  },
};

export function SelfBadge({
  status = "unverified",
  className = "",
}: SelfBadgeProps) {
  const { label, tone, icon: Icon } = statusCopy[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-[0.2em] transition ${tone} ${className}`.trim()}
    >
      <Icon
        className={`h-4 w-4 ${status === "pending" ? "animate-spin" : ""}`}
        aria-hidden
      />
      {label}
    </span>
  );
}

export default SelfBadge;
