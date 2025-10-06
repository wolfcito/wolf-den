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
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "Experiencias",
    items: [
      { label: "Showcase", href: "/showcase", icon: SquareStack },
      { label: "Quests", href: "/quests", icon: MapPinned },
      { label: "Wolf Games", href: "/mind-games", icon: Gamepad2 },
      { label: "Taberna", href: "/taberna", icon: UsersRound },
    ],
  },
  {
    title: "Utilidades",
    items: [
      { label: "Check-in", href: "/checkin", icon: ScanQrCode },
      { label: "Self Auth", href: "/auth", icon: ShieldCheck },
      { label: "Stats", href: "/stats", icon: BarChart3 },
      { label: "Leaderboard", href: "/leaderboard", icon: Sparkles },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col justify-between p-4 text-sm text-[#0f1621]">
      <div>
        <div className="flex flex-col items-start gap-3 px-4 py-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#d1d7eb] bg-[#eef2ff]">
            <Image
              src="/wolf-den-bn.png"
              alt="Wolf's Den"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#0b1320]">Wolf Den</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5e6a84]">
              Control Center
            </p>
          </div>
        </div>

        <nav className="mt-6 space-y-8 text-[#0f1621]">
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

                  const Icon = item.icon;

                  return (
                    <li key={`${item.href}-${item.label}`}>
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
