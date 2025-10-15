import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface ModuleCard {
  id: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export default function HomeLanding() {
  const t = useTranslations("HomeLanding");

  const strategicPillars = t.raw("pillars.items") as Array<{
    title: string;
    description: string;
  }>;
  const modules = t.raw("modules") as ModuleCard[];
  const flows = t.raw("flows.items") as Array<{
    title: string;
    description: string;
  }>;
  const metrics = t.raw("metrics.items") as Array<{
    value: string;
    label: string;
  }>;

  return (
    <div className="relative overflow-hidden bg-[#f2f4fb] text-[#0f1621]">
      <div className="pointer-events-none absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-[#ffffff] blur-[140px]" />
      <div className="pointer-events-none absolute top-20 -right-24 h-[520px] w-[520px] rounded-full bg-[#dfe5fb] blur-[180px]" />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16">
        <section className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#447bff] shadow-[0_15px_40px_-30px_rgba(16,22,33,0.6)]">
              {t("hero.tagline")}
            </span>
            <h1 className="text-4xl font-semibold uppercase leading-tight text-[#0b1320] sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="text-xs uppercase tracking-[0.4em] text-[#8894b3]">
              {t("hero.subtitle")}
            </p>
            <p className="max-w-[42ch] text-lg text-[#2f3950]">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={t("hero.primaryCta.href")}
                className="rounded-full bg-[#0b1320] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f2f4fb] transition hover:bg-[#131d30]"
              >
                {t("hero.primaryCta.label")}
              </Link>
              <Link
                href={t("hero.secondaryCta.href")}
                className="rounded-full border border-[#d1d7eb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f1621] transition hover:border-[#447bff]"
              >
                {t("hero.secondaryCta.label")}
              </Link>
            </div>
          </div>
          <div className="relative h-full min-h-[340px] rounded-[2.5rem] border border-[#e2e6f5] bg-white p-10 shadow-[0_40px_90px_-60px_rgba(15,22,33,0.55)]">
            <div className="absolute inset-x-10 top-10 h-12 rounded-full bg-[#edf0fb]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7f87a3]">
                {t("hero.visionLabel")}
              </p>
              <p className="text-2xl font-semibold text-[#0f1621]">
                {t("hero.visionQuote")}
              </p>
              <div className="text-xs uppercase tracking-[0.3em] text-[#9ca4c3]">
                {t("hero.visionSource")}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#e2e6f5] bg-white/90 p-10 text-[#0f1621] shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[36ch]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                {t("metrics.label")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                {t("metrics.title")}
              </h2>
              <p className="mt-2 text-sm text-[#44506b]">
                {t("metrics.description")}
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 text-center text-[#0f1621] sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-[#d1d7eb] bg-[#eef2ff] px-4 py-3 shadow-[0_20px_55px_-50px_rgba(15,22,33,0.45)]"
                >
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8894b3]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-14">
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                {t("pillars.label")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                {t("pillars.title")}
              </h2>
            </div>
            <p className="max-w-[36ch] text-sm text-[#44506b]">
              {t("pillars.description")}
            </p>
          </header>
          <div className="grid gap-8 lg:grid-cols-3">
            {strategicPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_26px_80px_-60px_rgba(15,22,33,0.45)]"
              >
                <h3 className="text-xl font-semibold text-[#0b1320]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-[#44506b]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-16 rounded-3xl border border-[#e2e6f5] bg-white/80 p-10 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                {t("modulesLabel")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                {t("modulesTitle")}
              </h2>
            </div>
            <p className="max-w-[38ch] text-sm text-[#44506b]">
              {t("modulesDescription")}
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.id}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#d1d7eb] bg-white p-6 shadow-[0_30px_90px_-70px_rgba(15,22,33,0.55)] transition hover:-translate-y-1 hover:border-[#447bff]/60 hover:bg-[#eef2ff]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#0b1320]">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#44506b]">
                    {module.description}
                  </p>
                </div>
                <Link
                  href={module.cta.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#447bff] transition hover:text-[#5d8cff]"
                >
                  {module.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <header>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
              {t("flows.label")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
              {t("flows.title")}
            </h2>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {flows.map((flow) => (
              <article
                key={flow.title}
                className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_30px_85px_-65px_rgba(15,22,33,0.55)]"
              >
                <h3 className="text-xl font-semibold text-[#0b1320]">
                  {flow.title}
                </h3>
                <p className="mt-3 text-sm text-[#44506b]">
                  {flow.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
