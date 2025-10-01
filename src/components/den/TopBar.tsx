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
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-wolf-bone/80 transition hover:bg-white/10"
        >
          <span aria-hidden className="text-lg">
            ←
          </span>
          <span>Back</span>
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-wolf-bone">
              {meta.title}
            </h1>
            <span className="rounded-full bg-wolf-violet/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-wolf-violet/80">
              Wolf Den Originals
            </span>
          </div>
          <p className="text-sm text-wolf-bone/70">{meta.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <HowlBadge level="Lobo" />
        <SelfBadge status="pending" />
      </div>
    </header>
  );
}

export default TopBar;
