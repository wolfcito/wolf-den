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
    tone: "bg-white/5 text-wolf-bone/70 border-white/10",
  },
  pending: {
    label: "Self: pending",
    tone: "bg-wolf-violet/15 text-wolf-violet border-wolf-violet/40",
  },
  verified: {
    label: "Self: verified",
    tone: "bg-wolf-cyan/15 text-wolf-cyan border-wolf-cyan/40",
  },
  error: {
    label: "Self: error",
    tone: "bg-red-500/10 text-red-300 border-red-400/40",
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
