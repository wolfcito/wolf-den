import clsx from "clsx";
import { ShieldCheck } from "lucide-react";

interface VerificationBadgeProps {
  className?: string;
}

export function VerificationBadge({ className }: VerificationBadgeProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-wolf-emerald-mid/70 bg-wolf-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-wolf-emerald",
        className,
      )}
    >
      <ShieldCheck size={14} strokeWidth={2} />
      <span className="whitespace-nowrap">Powered by Self.xyz</span>
    </div>
  );
}

export default VerificationBadge;
