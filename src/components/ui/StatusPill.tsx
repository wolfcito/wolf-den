import {
  Loader2,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
} from "lucide-react";

interface StatusPillProps {
  status: "unverified" | "pending" | "verified" | "error";
}

const copy: Record<
  StatusPillProps["status"],
  {
    label: string;
    tone: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
> = {
  unverified: {
    label: "Unverified",
    tone: "bg-[#eef2ff] text-[#5e6a84] border-[#d1d7eb]",
    icon: ShieldQuestion,
  },
  pending: {
    label: "Pending",
    tone: "bg-[#e0e7ff] text-[#2f3950] border-[#447bff]/50",
    icon: Loader2,
  },
  verified: {
    label: "Verified",
    tone: "bg-[#447bff] text-white border-[#447bff]",
    icon: ShieldCheck,
  },
  error: {
    label: "Error",
    tone: "bg-[#ffe4e4] text-[#a61b2a] border-[#ffb2b2]",
    icon: ShieldAlert,
  },
};

export function StatusPill({ status }: StatusPillProps) {
  const { label, tone, icon: Icon } = copy[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${tone}`}
    >
      <Icon
        className={`h-4 w-4 ${status === "pending" ? "animate-spin" : ""}`}
        aria-hidden
      />
      {label}
    </span>
  );
}

export default StatusPill;
