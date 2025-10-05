"use client";

interface SelfBadgeProps {
  status?: "unverified" | "pending" | "verified" | "error";
  className?: string;
}

const statusCopy: Record<
  Required<SelfBadgeProps>["status"],
  { label: string; tone: string }
> = {
  unverified: {
    label: "Self: unverified",
    tone: "bg-[#eef2ff] text-[#44506b] border-[#d1d7eb]",
  },
  pending: {
    label: "Self: pending",
    tone: "bg-[#e0e7ff] text-[#2f3950] border-[#447bff]/60",
  },
  verified: {
    label: "Self: verified",
    tone: "bg-[#447bff] text-white border-[#447bff]",
  },
  error: {
    label: "Self: error",
    tone: "bg-[#ffe4e4] text-[#a61b2a] border-[#ffb2b2]",
  },
};

export function SelfBadge({
  status = "unverified",
  className = "",
}: SelfBadgeProps) {
  const { label, tone } = statusCopy[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${tone} ${className}`.trim()}
    >
      <span className="text-base" aria-hidden>
        {status === "verified" ? "✅" : status === "error" ? "⚠️" : "🌀"}
      </span>
      {label}
    </span>
  );
}

export default SelfBadge;
