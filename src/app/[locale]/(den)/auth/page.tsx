import { useTranslations } from "next-intl";
import SelfAuth from "@/components/SelfAuth";

export default function AuthPage() {
  const t = useTranslations("AuthPage");
  const tips = t.raw("tips") as string[];

  return (
    <div className="space-y-8 text-[color:var(--foreground)]">
      <section className="wolf-card--muted rounded-[1.9rem] border border-[rgba(123,255,104,0.18)] px-6 py-6">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--wolf-text-subtle)]">
          {t("hero.label")}
        </p>
        <p className="mt-3 max-w-[52ch] text-sm text-white/75">
          {t("hero.description")}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start">
        <SelfAuth />
        <div className="wolf-card--muted rounded-[1.9rem] border border-[rgba(123,255,104,0.16)] px-6 py-6 text-sm text-white/75">
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--wolf-text-subtle)]">
            {t("tipsTitle")}
          </p>
          <ul className="mt-3 space-y-2">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
