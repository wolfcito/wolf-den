"use client";

import { MoonStar } from "lucide-react";
import { useTranslations } from "next-intl";

interface HowlBadgeProps {
  level?: "Cachorro" | "Lobo" | "Alfa";
  className?: string;
}

const levelTone: Record<Required<HowlBadgeProps>["level"], string> = {
  Cachorro: "text-wolf-text-subtle border-wolf-border",
  Lobo: "text-wolf-emerald border-wolf-border-strong",
  Alfa: "text-white border-wolf-border-xstrong",
};

export function HowlBadge({
  level = "Cachorro",
  className = "",
}: HowlBadgeProps) {
  const t = useTranslations("HowlBadge");

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${levelTone[level]} ${className}`.trim()}
    >
      <MoonStar className="h-4 w-4" aria-hidden />
      {t(`levels.${level}`)}
    </span>
  );
}

export default HowlBadge;
