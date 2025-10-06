"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HowlBadge } from "@/components/ui/HowlBadge";
import { SelfBadge } from "@/components/ui/SelfBadge";

const moduleMeta: Record<string, { title: string; description: string }> = {
  "/quests": {
    title: "Quests",
    description: "Misiones activas para la manada",
  },
  "/checkin": {
    title: "Check-in",
    description: "Escanea y registra asistencia",
  },
  "/mentorship": {
    title: "Mentoría",
    description: "Agenda sesiones con mentores",
  },
  "/showcase": {
    title: "Showcase",
    description: "Destaca proyectos y demos",
  },
  "/voting": {
    title: "Voting",
    description: "Demo Day y votaciones",
  },
  "/stats": {
    title: "Stats",
    description: "HOWL, streak y métricas",
  },
  "/leaderboard": {
    title: "Leaderboard",
    description: "Ranking de la manada",
  },
  "/settings": {
    title: "Settings",
    description: "Preferencias e idioma",
  },
  "/mind-games": {
    title: "Mind Games",
    description: "Flujos MVP y dinámicas",
  },
  "/auth": {
    title: "Self Auth",
    description: "Verifica tu identidad con Self",
  },
};

export function TopBar() {
  const pathname = usePathname();
  const activeKey = Object.keys(moduleMeta).find(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );
  const meta = activeKey
    ? moduleMeta[activeKey]
    : { title: "Taberna - Wolf Den", description: "Sé parte de la manada." };

  return (
    <header className="flex flex-col justify-between gap-4 text-[#0f1621]">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex h-10 w-10 items-center gap-2 rounded-full border border-[#d1d7eb] bg-white/80 px-3 py-1 text-xs text-[#0f1621] transition hover:border-[#447bff]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          {/* <span>Back</span> */}
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
