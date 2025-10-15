import { useTranslations } from "next-intl";

export function StatsPanel() {
  const t = useTranslations("StatsPanel");
  const stats = t.raw("metrics.items") as Array<{
    label: string;
    value: string;
    helper: string;
  }>;

  return (
    <div className="space-y-5 text-[#0f1621]">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 py-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">{t("hero.title")}</p>
        <p className="mt-1 text-sm">{t("hero.description")}</p>
      </div>
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-5 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{t("metrics.title")}</h3>
        </div>
        <p className="mt-2 text-sm text-[#44506b]">
          {t("metrics.description")}
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
