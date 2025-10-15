"use client";

import {
  BarChart3,
  Gamepad2,
  MapPinned,
  ScanQrCode,
  Settings,
  ShieldCheck,
  Sparkles,
  SquareStack,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

const navSections = [
  {
    key: "experiences",
    items: [
      { key: "showcase", href: "/showcase", icon: SquareStack },
      { key: "quests", href: "/quests", icon: MapPinned },
      { key: "mindGames", href: "/mind-games", icon: Gamepad2 },
      { key: "taberna", href: "/taberna", icon: UsersRound },
    ] satisfies Array<{
      key: "showcase" | "quests" | "mindGames" | "taberna";
      href: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }>,
  },
  {
    key: "utilities",
    items: [
      { key: "checkin", href: "/checkin", icon: ScanQrCode },
      { key: "auth", href: "/auth", icon: ShieldCheck },
      { key: "stats", href: "/stats", icon: BarChart3 },
      { key: "leaderboard", href: "/leaderboard", icon: Sparkles },
      { key: "settings", href: "/settings", icon: Settings },
    ] satisfies Array<{
      key: "checkin" | "auth" | "stats" | "leaderboard" | "settings";
      href: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }>,
  },
] as const;

export function SidebarNav() {
  const t = useTranslations("SidebarNav");
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col justify-between p-4 text-sm text-[#0f1621]">
      <div>
        <div className="flex flex-col items-start gap-3 px-4 py-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#d1d7eb] bg-[#eef2ff]">
            <Image
              src="/wolf-den-bn.png"
              alt={t("branding.badgeAlt")}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#0b1320]">
              {t("branding.title")}
            </h1>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5e6a84]">
              {t("branding.subtitle")}
            </p>
          </div>
        </div>

        <nav className="mt-6 space-y-8 text-[#0f1621]">
          {navSections.map((section) => (
            <div key={section.key}>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                {t(`sections.${section.key}.title`)}
              </p>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const isActive =
                    item.href === "/auth"
                      ? pathname?.startsWith(item.href)
                      : pathname === item.href ||
                        pathname?.startsWith(`${item.href}/`);

                  const Icon = item.icon;

                  return (
                    <li key={`${item.href}-${item.key}`}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 rounded-full border border-transparent px-4 py-3 transition-all duration-150
                          ${
                            isActive
                              ? "border-[#447bff]/60 bg-[#447bff]/10 text-[#0b1320]"
                              : "hover:border-[#d1d7eb] hover:bg-white/70"
                          }
                        `}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                        <span className="text-sm font-medium">
                          {t(`sections.${section.key}.items.${item.key}`)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SidebarNav;
