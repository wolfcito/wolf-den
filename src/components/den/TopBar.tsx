"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { HowlBadge } from "@/components/ui/HowlBadge";
import { SelfBadge } from "@/components/ui/SelfBadge";
import { Link, usePathname } from "@/i18n/routing";

type ModuleKey =
  | "quests"
  | "checkin"
  | "mentorship"
  | "showcase"
  | "voting"
  | "stats"
  | "leaderboard"
  | "settings"
  | "mindGames"
  | "auth";

const moduleKeys: Record<string, ModuleKey> = {
  "/quests": "quests",
  "/checkin": "checkin",
  "/mentorship": "mentorship",
  "/showcase": "showcase",
  "/voting": "voting",
  "/stats": "stats",
  "/leaderboard": "leaderboard",
  "/settings": "settings",
  "/mind-games": "mindGames",
  "/auth": "auth",
};

export function TopBar() {
  const t = useTranslations("TopBar");
  const pathname = usePathname();
  const activeKey = Object.keys(moduleKeys).find(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );
  const meta = activeKey
    ? {
        title: t(`modules.${moduleKeys[activeKey]}.title`),
        description: t(`modules.${moduleKeys[activeKey]}.description`),
      }
    : {
        title: t("fallback.title"),
        description: t("fallback.description"),
      };

  return (
    <header className="flex flex-col justify-between gap-4 text-[#0f1621]">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex h-10 w-10 items-center gap-2 rounded-full border border-[#d1d7eb] bg-white/80 px-3 py-1 text-xs text-[#0f1621] transition hover:border-[#447bff]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        </Link>
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold text-[#0b1320]">
                {meta.title}
              </h1>
            </div>
            <p className="text-sm text-[#44506b]">{meta.description}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-[#0f1621]">
        <HowlBadge level="Lobo" />
        <SelfBadge status="pending" />
      </div>
    </header>
  );
}

export default TopBar;
