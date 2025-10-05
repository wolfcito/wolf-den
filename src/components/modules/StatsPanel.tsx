import HowlBadge from "@/components/ui/HowlBadge";

const stats = [
  { label: "HOWL", value: "1,280", helper: "+120 esta semana" },
  { label: "Huella", value: "82%", helper: "Crecimiento sostenido" },
  { label: "Streak", value: "6 días", helper: "Mantén el momentum" },
];

export function StatsPanel() {
  return (
    <div className="space-y-5 text-[#0f1621]">
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-5 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Panel de métricas</h3>
          <HowlBadge level="Alfa" />
        </div>
        <p className="mt-2 text-sm text-[#44506b]">
          Revisa tu progreso dentro de la manada.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#e2e6f5] bg-[#eef2ff] p-4 text-center shadow-[0_25px_70px_-60px_rgba(15,22,33,0.4)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
              <p className="text-xs text-[#44506b]">{item.helper}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-5 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
        <h4 className="text-base font-semibold">Recompensas de la Luna</h4>
        <p className="mt-2 text-sm text-[#44506b]">
          Completa quests avanzadas y vota en Demo Day para desbloquear perks de
          la Luna.
        </p>
      </div>
    </div>
  );
}

export default StatsPanel;
