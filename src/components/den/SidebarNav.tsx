"use client";

import {
  BarChart3,
  ChevronDown,
  Gamepad2,
  LayoutGrid,
  MapPinned,
  ScanQrCode,
  Settings,
  Settings2,
  ShieldCheck,
  Sparkles,
  SquareStack,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
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

const sectionIcons: Record<
  (typeof navSections)[number]["key"],
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  experiences: LayoutGrid,
  utilities: Settings2,
};

export function SidebarNav() {
  const t = useTranslations("SidebarNav");
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<
    (typeof navSections)[number]["key"] | null
  >(navSections[0].key);

  return (
    <div className="flex h-full flex-col justify-between gap-8 p-5 text-[color:var(--foreground)]">
      <div className="space-y-8">
        <div className="wolf-card--muted flex items-center gap-3 rounded-[1.6rem] border border-[rgba(123,255,104,0.16)] px-4 py-4">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[rgba(123,255,104,0.24)] bg-[rgba(15,20,28,0.85)] shadow-[0_18px_40px_-22px_rgba(123,255,120,0.35)]">
            <Image
              src="/wolf-den-bn.png"
              alt={t("branding.badgeAlt")}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold uppercase tracking-[0.22em] text-white">
              {t("branding.title")}
            </h1>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[color:var(--wolf-text-subtle)]">
              {t("branding.subtitle")}
            </p>
          </div>
        </div>

        <nav className="space-y-8 text-[color:var(--foreground)]">
          {navSections.map((section) => (
            <div key={section.key} className="space-y-3">
              <button
                type="button"
                onClick={() =>
                  setOpenSection((current) =>
                    current === section.key ? null : section.key,
                  )
                }
                className={`group flex w-full items-center justify-between rounded-full border px-4 py-3 text-left transition ${
                  openSection === section.key
                    ? "border-[rgba(123,255,104,0.45)] bg-[rgba(123,255,120,0.15)] text-white shadow-[0_18px_45px_-28px_rgba(123,255,120,0.45)]"
                    : "border-[rgba(123,255,104,0.12)] bg-[rgba(15,20,28,0.6)] text-[color:var(--wolf-text-subtle)] hover:border-[rgba(123,255,104,0.2)] hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                      openSection === section.key
                        ? "bg-[linear-gradient(120deg,#74ff78,#3bcf5f)] text-[#08120b]"
                        : "bg-[rgba(123,255,120,0.16)] text-[color:var(--wolf-emerald)] group-hover:bg-[rgba(123,255,120,0.24)]"
                    }`}
                  >
                    {(() => {
                      const SectionIcon = sectionIcons[section.key];
                      return <SectionIcon className="h-4 w-4" aria-hidden />;
                    })()}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                    {t(`sections.${section.key}.title`)}
                  </span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openSection === section.key
                      ? "rotate-180 text-white"
                      : "text-[color:var(--wolf-text-subtle)]"
                  }`}
                  aria-hidden
                />
              </button>
              <ul
                className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
                  openSection === section.key
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } space-y-2 pl-2`}
              >
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
                        className={`group relative flex items-center gap-4 rounded-full border px-4 py-3 pl-5 text-sm transition-all duration-150 ${
                          isActive
                            ? "border-[rgba(123,255,104,0.4)] bg-[rgba(123,255,120,0.14)] text-white shadow-[0_18px_42px_-28px_rgba(123,255,120,0.45)]"
                            : "border-[rgba(123,255,104,0.08)] bg-[rgba(15,20,28,0.6)] text-[color:var(--wolf-text-subtle)] hover:border-[rgba(123,255,104,0.18)] hover:text-white"
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                            isActive
                              ? "bg-[linear-gradient(120deg,#74ff78,#3bcf5f)] text-[#08120b]"
                              : "bg-[rgba(123,255,120,0.16)] text-[color:var(--wolf-emerald)] group-hover:bg-[rgba(123,255,120,0.24)]"
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-sm font-medium uppercase tracking-[0.18em]">
                          {t(`sections.${section.key}.items.${item.key}`)}
                        </span>
                        {isActive ? (
                          <span className="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[linear-gradient(120deg,#74ff78,#3bcf5f)] shadow-[0_0_20px_rgba(123,255,120,0.45)]" />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="wolf-card--muted rounded-[1.4rem] border border-[rgba(123,255,104,0.12)] px-4 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-[color:var(--wolf-text-subtle)]">
        {t("footer.copy")}
      </div>
    </div>
  );
}

export default SidebarNav;
