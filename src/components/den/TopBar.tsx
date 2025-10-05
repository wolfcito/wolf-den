"use client";

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
};

export function TopBar() {
  const pathname = usePathname();
  const activeKey = Object.keys(moduleMeta).find(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );
  const meta = activeKey
    ? moduleMeta[activeKey]
    : { title: "Wolf Den", description: "Sé parte de la manada." };

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 text-[#0f1621]">
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-[#d1d7eb] bg-white/80 px-3 py-1 text-xs text-[#0f1621] transition hover:border-[#447bff]"
        >
          <span aria-hidden className="text-lg">
            ←
          </span>
          <span>Back</span>
        </Link>
        <div>
          <div className="flex items-center gap-3 text-[#0f1621]">
            <h1 className="text-xl font-semibold text-wolf-bone">
              {meta.title}
            </h1>
            <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#447bff]">
              Wolf Den Originals
            </span>
          </div>
          <p className="text-sm text-[#44506b]">{meta.description}</p>
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
