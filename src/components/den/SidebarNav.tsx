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
    <div className="flex h-full flex-col justify-between p-4 text-sm text-wolf-bone/80">
      <div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-wolf-bone">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wolf-cyan/20 text-lg">
            <span className="font-semibold text-wolf-cyan">W</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-wolf-bone/60">
              Wolf Den
            </p>
            <p className="text-base font-semibold">Control Center</p>
          </div>
        </div>

        <nav className="mt-8 space-y-8">
          {navSections.map((section) => (
            <div key={section.title}>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-wolf-bone/50">
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
                              ? "border-wolf-cyan/50 bg-wolf-cyan/15 text-wolf-bone"
                              : "hover:border-white/5 hover:bg-white/5"
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

      <div className="rounded-2xl border border-white/5 bg-wolf-panel/50 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-wolf-bone/50">
          Notas
        </p>
        <p className="mt-2 text-sm text-wolf-bone/70">
          Mantén la experiencia consistente: colores Wolf, bordes 2XL y copy
          bilingüe.
        </p>
      </div>
    </div>
  );
}

export default SidebarNav;
