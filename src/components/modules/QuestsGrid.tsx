import { Target } from "lucide-react";
import { useTranslations } from "next-intl";

type QuestStatus = "available" | "submitted" | "locked";

interface Quest {
  id: string;
  title: string;
  points: number;
  status: QuestStatus;
}

function questTone(status: QuestStatus) {
  if (status === "submitted") {
    return "border-[#447bff]/60 bg-[#eef2ff] text-[#0f1621]";
  }
  if (status === "locked") {
    return "border-[#d1d7eb] bg-[#eef1f8] text-[#9aa5c3]";
  }
  return "border-[#e2e6f5] bg-white text-[#0f1621]";
}

export function QuestsGrid() {
  const t = useTranslations("QuestsGrid");
  const quests = t.raw("items") as Quest[];

  return (
    <div className="grid gap-4 text-[#0f1621] md:grid-cols-2 xl:grid-cols-4">
      {quests.map((quest) => (
        <div
          key={quest.id}
          className={`flex h-full flex-col justify-between rounded-2xl border p-5 shadow-[0_28px_75px_-60px_rgba(15,22,33,0.55)] transition hover:-translate-y-1 hover:border-[#447bff]/60 hover:bg-[#eef2ff]/60 ${questTone(quest.status)}`}
        >
          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-[#447bff]" aria-hidden />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                {t("tag")}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{quest.title}</h3>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs text-[#44506b]">
              {t("points", { count: quest.points })}
            </span>
            <button
              type="button"
              className={`rounded-xl px-4 py-2 text-sm font-medium transition
                ${
                  quest.status === "locked"
                    ? "cursor-not-allowed bg-[#e3e6f2] text-[#9aa5c3]"
                    : "bg-[#447bff] text-white hover:bg-[#5d8cff]"
                }
              `}
              disabled={quest.status !== "available"}
            >
              {t(`actions.${quest.status}`)}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestsGrid;
