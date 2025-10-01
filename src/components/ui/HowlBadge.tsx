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
    tone: "bg-white/5 text-wolf-bone/70 border-white/10",
  },
  Lobo: {
    label: "HOWL • Lobo",
    tone: "bg-wolf-cyan/15 text-wolf-cyan border-wolf-cyan/40",
  },
  Alfa: {
    label: "HOWL • Alfa",
    tone: "bg-wolf-violet/15 text-wolf-violet border-wolf-violet/40",
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
      <span className="text-base" aria-hidden>
        🌕
      </span>
      {badge.label}
    </span>
  );
}

export default HowlBadge;
