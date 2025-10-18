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
    return "wolf-card bg-[radial-gradient(circle_at_top_left,rgba(116,255,120,0.12),rgba(17,22,31,0.88))] border border-[rgba(116,255,120,0.32)] text-white/90";
  }
  if (status === "locked") {
    return "wolf-card--muted border border-[rgba(123,255,104,0.08)] text-[color:var(--wolf-text-subtle)]";
  }
  return "wolf-card border border-[rgba(123,255,104,0.24)] text-white";
}

export function QuestsGrid() {
  const t = useTranslations("QuestsGrid");
  const quests = t.raw("items") as Quest[];

  return (
    <div className="grid gap-5 text-[color:var(--foreground)] md:grid-cols-2 xl:grid-cols-4">
      {quests.map((quest) => (
        <div
          key={quest.id}
          className={`flex h-full flex-col justify-between rounded-[1.8rem] p-5 transition hover:-translate-y-1 hover:shadow-[0_25px_80px_-55px_rgba(123,255,120,0.35)] ${questTone(
            quest.status,
          )}`}
        >
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(123,255,120,0.14)] text-[color:var(--wolf-emerald)]">
              <Target className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--wolf-text-subtle)]">
                {t("tag")}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white/90">
                {quest.title}
              </h3>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="wolf-pill border border-[rgba(123,255,104,0.14)] bg-[rgba(123,255,120,0.08)] text-xs uppercase tracking-[0.25em] text-[color:var(--wolf-emerald)]">
              {t("points", { count: quest.points })}
            </span>
            <button
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] transition ${
                quest.status === "locked"
                  ? "cursor-not-allowed bg-[rgba(123,255,120,0.05)] text-[color:var(--wolf-text-subtle)]"
                  : quest.status === "submitted"
                    ? "bg-[rgba(123,255,120,0.18)] text-[color:var(--wolf-emerald)]"
                    : "bg-[linear-gradient(120deg,#74ff78,#3bcf5f)] text-[#08120b] hover:brightness-110"
              }`}
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
