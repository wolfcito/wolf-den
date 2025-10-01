interface StatusPillProps {
  status: "unverified" | "pending" | "verified" | "error";
}

const copy: Record<StatusPillProps["status"], { label: string; tone: string }> =
  {
    unverified: {
      label: "Unverified",
      tone: "bg-white/5 text-wolf-bone/70 border-white/10",
    },
    pending: {
      label: "Pending",
      tone: "bg-wolf-violet/15 text-wolf-violet border-wolf-violet/40",
    },
    verified: {
      label: "Verified",
      tone: "bg-wolf-cyan/20 text-wolf-cyan border-wolf-cyan/40",
    },
    error: {
      label: "Error",
      tone: "bg-red-500/10 text-red-300 border-red-400/40",
    },
  };

export function StatusPill({ status }: StatusPillProps) {
  const config = copy[status];

  return (
    <span
      className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${config.tone}`}
    >
      <span className="text-lg" aria-hidden>
        {status === "verified" ? "✅" : status === "error" ? "⚠️" : "🌀"}
      </span>
      {config.label}
    </span>
  );
}

export default StatusPill;
