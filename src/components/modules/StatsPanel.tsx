const stats = [
  { label: "HOWL", value: "1,280", helper: "+120 esta semana" },
  { label: "Huella", value: "82%", helper: "Crecimiento sostenido" },
  { label: "Streak", value: "6 días", helper: "Mantén el momentum" },
];

export function StatsPanel() {
  return (
    <div className="space-y-5 text-[#0f1621]">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 py-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">Recompensas de la Luna</p>
        <p className="mt-1 text-sm">
          Completa quests avanzadas y vota en Demo Day para desbloquear perks y
          preparar tu balance para las futuras utilidades de HOWL.
        </p>
      </div>
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-5 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Panel de métricas</h3>
        </div>
        <p className="mt-2 text-sm text-[#44506b]">
          Revisa tu progreso dentro de la manada y proyecta tu impacto cuando el
          token HOWL llegue.
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
    </div>
  );
}

export default StatsPanel;
