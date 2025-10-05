interface StatusPillProps {
  status: "unverified" | "pending" | "verified" | "error";
}

const copy: Record<StatusPillProps["status"], { label: string; tone: string }> =
  {
    unverified: {
      label: "Unverified",
      tone: "bg-[#eef2ff] text-[#5e6a84] border-[#d1d7eb]",
    },
    pending: {
      label: "Pending",
      tone: "bg-[#e0e7ff] text-[#2f3950] border-[#447bff]/50",
    },
    verified: {
      label: "Verified",
      tone: "bg-[#447bff] text-white border-[#447bff]",
    },
    error: {
      label: "Error",
      tone: "bg-[#ffe4e4] text-[#a61b2a] border-[#ffb2b2]",
    },
  };

export function StatusPill({ status }: StatusPillProps) {
  const config = copy[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${config.tone}`}
    >
      <span className="text-lg" aria-hidden>
        {status === "verified" ? "✅" : status === "error" ? "⚠️" : "🌀"}
      </span>
      {config.label}
    </span>
  );
}

export default StatusPill;
