"use client";

import { MoonStar } from "lucide-react";
import { useTranslations } from "next-intl";

interface HowlBadgeProps {
  level?: "Cachorro" | "Lobo" | "Alfa";
  className?: string;
}

const levelTone: Record<Required<HowlBadgeProps>["level"], string> = {
  Cachorro: "text-[#44506b] border-[#d1d7eb]",
  Lobo: "text-[#447bff] border-[#447bff]/40",
  Alfa: "text-[#0b1320] border-[#0b1320]/40",
};

export function HowlBadge({
  level = "Cachorro",
  className = "",
}: HowlBadgeProps) {
  const t = useTranslations("HowlBadge");

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.2em] ${levelTone[level]} ${className}`.trim()}
    >
      <MoonStar className="h-4 w-4" aria-hidden />
      {t(`levels.${level}`)}
    </span>
  );
}

export default HowlBadge;
