import HowlBadge from "@/components/ui/HowlBadge";

const stats = [
  { label: "HOWL", value: "1,280", helper: "+120 esta semana" },
  { label: "Huella", value: "82%", helper: "Crecimiento sostenido" },
  { label: "Streak", value: "6 días", helper: "Mantén el momentum" },
];

export function StatsPanel() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-wolf-bone">
            Panel de métricas
          </h3>
          <HowlBadge level="Alfa" />
        </div>
        <p className="mt-2 text-sm text-wolf-bone/60">
          Revisa tu progreso dentro de la manada.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-wolf-bone/50">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-wolf-bone">
                {item.value}
              </p>
              <p className="text-xs text-wolf-bone/50">{item.helper}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-5">
        <h4 className="text-base font-semibold text-wolf-bone">
          Recompensas de la Luna
        </h4>
        <p className="mt-2 text-sm text-wolf-bone/60">
          Completa quests avanzadas y vota en Demo Day para desbloquear perks de
          la Luna.
        </p>
      </div>
    </div>
  );
}

export default StatsPanel;
