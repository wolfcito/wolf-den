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
    cyan: "bg-wolf-cyan/20 text-wolf-cyan",
    violet: "bg-wolf-violet/20 text-wolf-violet/80",
    neutral: "bg-white/10 text-wolf-bone/70",
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">
          {t("appearance.title")}
        </h3>
        <p className="mt-2 text-sm text-wolf-bone/70">
          {t("appearance.description")}
        </p>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </section>
      <section className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">
          {t("language.title")}
        </h3>
        <p className="mt-2 text-sm text-wolf-bone/70">
          {t("language.description")}
        </p>
        <LanguageSwitcher className="mt-3" />
      </section>
      <section className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">
          {t("privacy.title")}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-wolf-bone/70">
          {privacyItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
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
