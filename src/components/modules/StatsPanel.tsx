import { useTranslations } from "next-intl";

export function StatsPanel() {
  const t = useTranslations("StatsPanel");
  const stats = t.raw("metrics.items") as Array<{
    label: string;
    value: string;
    helper: string;
  }>;

  return (
    <div className="space-y-5 text-[color:var(--foreground)]">
      <div className="wolf-card flex flex-col gap-2 rounded-[1.75rem] border border-[rgba(123,255,104,0.2)] px-6 py-6 text-sm text-white/80">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--wolf-text-subtle)]">
          {t("hero.title")}
        </p>
        <p className="text-sm text-white/90">{t("hero.description")}</p>
      </div>
      <div className="wolf-card rounded-[1.9rem] border border-[rgba(123,255,104,0.26)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white/90">
            {t("metrics.title")}
          </h3>
          <span className="wolf-pill bg-[rgba(123,255,120,0.12)] text-xs uppercase tracking-[0.3em] text-[color:var(--wolf-emerald)]">
            HOWL Pulse
          </span>
        </div>
        <p className="mt-2 text-sm text-[color:var(--wolf-text-subtle)]">
          {t("metrics.description")}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="wolf-card--muted rounded-[1.6rem] border border-[rgba(123,255,104,0.18)] p-4 text-center shadow-[0_25px_70px_-60px_rgba(0,0,0,0.55)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--wolf-text-subtle)]">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white/90">
                {item.value}
              </p>
              <p className="text-xs text-[color:var(--wolf-text-subtle)]">
                {item.helper}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;
