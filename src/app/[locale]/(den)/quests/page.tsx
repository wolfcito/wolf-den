import { useTranslations } from "next-intl";
import QuestsGrid from "@/components/modules/QuestsGrid";

export default function QuestsPage() {
  const t = useTranslations("QuestsPage");

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 py-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">{t("title")}</p>
        <p className="mt-1 text-sm">{t("description")}</p>
      </div>
      <QuestsGrid />
    </div>
  );
}
