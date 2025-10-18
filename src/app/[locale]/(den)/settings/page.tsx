import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function SettingsPage() {
  const t = useTranslations("SettingsPage");
  const privacyItems = t.raw("privacy.items") as Array<{
    label: string;
    status: string;
    tone: "cyan" | "violet" | "neutral";
  }>;

  const toneClass: Record<(typeof privacyItems)[number]["tone"], string> = {
    cyan: "bg-[rgba(123,255,120,0.18)] text-[color:var(--wolf-emerald)] border border-[rgba(123,255,104,0.32)]",
    violet:
      "bg-[rgba(147,141,255,0.18)] text-[#c1c4ff] border border-[rgba(147,141,255,0.35)]",
    neutral:
      "bg-[rgba(255,255,255,0.08)] text-white/70 border border-[rgba(255,255,255,0.12)]",
  };

  return (
    <div className="space-y-6 text-[color:var(--foreground)]">
      <section className="wolf-card--muted rounded-[1.9rem] border border-[rgba(123,255,104,0.16)] p-6">
        <h3 className="text-lg font-semibold text-white">
          {t("appearance.title")}
        </h3>
        <p className="mt-2 text-sm text-white/70">
          {t("appearance.description")}
        </p>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </section>
      <section className="wolf-card--muted rounded-[1.9rem] border border-[rgba(123,255,104,0.16)] p-6">
        <h3 className="text-lg font-semibold text-white">
          {t("language.title")}
        </h3>
        <p className="mt-2 text-sm text-white/70">
          {t("language.description")}
        </p>
        <LanguageSwitcher className="mt-3" />
      </section>
      <section className="wolf-card--muted rounded-[1.9rem] border border-[rgba(123,255,104,0.16)] p-6">
        <h3 className="text-lg font-semibold text-white">
          {t("privacy.title")}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-white/75">
          {privacyItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-[rgba(123,255,104,0.12)] bg-[rgba(13,13,13,0.6)] px-4 py-3"
            >
              <span>{item.label}</span>
              <span
                className={`rounded-full px-3 py-1 text-xs ${toneClass[item.tone]}`}
              >
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
