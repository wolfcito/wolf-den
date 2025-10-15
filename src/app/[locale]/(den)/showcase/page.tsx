import { useTranslations } from "next-intl";
import ShowcaseGrid from "@/components/modules/ShowcaseGrid";

export default function ShowcasePage() {
  const t = useTranslations("ShowcasePage");

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 py-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">{t("title")}</p>
        <p className="mt-1">{t("description")}</p>
      </div>
      <ShowcaseGrid />
    </div>
  );
}
