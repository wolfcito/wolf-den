import { MoonStar } from "lucide-react";

interface HowlBadgeProps {
  level?: "Cachorro" | "Lobo" | "Alfa";
  className?: string;
}

const levelConfig: Record<
  Required<HowlBadgeProps>["level"],
  { label: string; tone: string }
> = {
  Cachorro: {
    label: "HOWL • Cachorro",
    tone: "text-[#44506b] border-[#d1d7eb]",
  },
  Lobo: {
    label: "HOWL • Wolf",
    tone: "text-[#447bff] border-[#447bff]/40",
  },
  Alfa: {
    label: "HOWL • Alfa",
    tone: "text-[#0b1320] border-[#0b1320]/40",
  },
};

export function HowlBadge({
  level = "Cachorro",
  className = "",
}: HowlBadgeProps) {
  const badge = levelConfig[level];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.2em] ${badge.tone} ${className}`.trim()}
    >
      <MoonStar className="h-4 w-4" aria-hidden />
      {badge.label}
    </span>
  );
}

export default HowlBadge;
