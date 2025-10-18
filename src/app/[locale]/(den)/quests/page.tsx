import { useTranslations } from "next-intl";
import QuestsGrid from "@/components/modules/QuestsGrid";

export default function QuestsPage() {
  const t = useTranslations("QuestsPage");

  return (
    <div className="space-y-6 text-[color:var(--foreground)]">
      <div className="wolf-card--muted rounded-[1.9rem] border border-[rgba(123,255,104,0.16)] px-6 py-6 text-sm text-white/80">
        <p className="text-lg font-semibold text-white">{t("title")}</p>
        <p className="mt-2 text-sm text-white/70">{t("description")}</p>
      </div>
      <QuestsGrid />
    </div>
  );
}
