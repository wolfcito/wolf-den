"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "Módulos",
    items: [
      { label: "Quests", href: "/quests", icon: "🗺️" },
      { label: "Check-in", href: "/checkin", icon: "📍" },
      { label: "Mentoría", href: "/mentorship", icon: "🧠" },
      { label: "Showcase", href: "/showcase", icon: "💎" },
      { label: "Voting", href: "/voting", icon: "🗳️" },
      { label: "Mind Games", href: "/mind-games", icon: "🎲" },
    ],
  },
  {
    title: "Utilidades",
    items: [
      { label: "Self Auth", href: "/auth", icon: "🔐" },
      { label: "Stats", href: "/stats", icon: "📊" },
      { label: "Leaderboard", href: "/leaderboard", icon: "🏆" },
      { label: "Settings", href: "/settings", icon: "⚙️" },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col justify-between p-4 text-sm text-[#0f1621]">
      <div>
        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#0f1621] shadow-[0_20px_50px_-40px_rgba(15,22,33,0.55)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ff] text-lg text-[#0f1621]">
            <span className="font-semibold text-[#447bff]">W</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5e6a84]">
              Wolf Den
            </p>
            <p className="text-base font-semibold">Control Center</p>
          </div>
        </div>

        <nav className="mt-8 space-y-8 text-[#0f1621]">
          {navSections.map((section) => (
            <div key={section.title}>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const isActive =
                    item.href === "/auth"
                      ? pathname?.startsWith(item.href)
                      : pathname === item.href ||
                        pathname?.startsWith(`${item.href}/`);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 transition-all duration-150
                          ${
                            isActive
                              ? "border-[#447bff]/60 bg-[#447bff]/10 text-[#0b1320]"
                              : "hover:border-[#d1d7eb] hover:bg-white/70"
                          }
                        `}
                      >
                        <span className="text-lg" aria-hidden>
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium">
                          {item.label}
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
