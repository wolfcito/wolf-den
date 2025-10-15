import { useTranslations } from "next-intl";
import SelfAuth from "@/components/SelfAuth";

export default function AuthPage() {
  const t = useTranslations("AuthPage");
  const tips = t.raw("tips") as string[];

  return (
    <div className="space-y-6 text-[#0f1621]">
      <section className="rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
              {t("hero.label")}
            </p>
            <p className="mt-2 max-w-[52ch] text-sm text-[#44506b]">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid lg:items-center">
          <SelfAuth />
          <div className="space-y-6">
            <div className="rounded-2xl py-4 mb-2 text-sm text-[#0f1621]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                {t("tipsTitle")}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#44506b]">
                {tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
