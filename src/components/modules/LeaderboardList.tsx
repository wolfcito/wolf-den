import { useTranslations } from "next-intl";

export function LeaderboardList() {
  const t = useTranslations("LeaderboardList");
  const leaderboard = t.raw("entries") as Array<{
    position: number;
    team: string;
    points: number;
  }>;

  return (
    <div>
      <h3 className="text-lg font-semibold">{t("title")}</h3>
      <p className="text-sm text-[#44506b]">{t("subtitle")}</p>
      <div className="mt-4 space-y-3">
        {leaderboard.map((entry) => (
          <div
            key={entry.team}
            className="flex items-center justify-between rounded-2xl border border-[#d1d7eb] bg-[#eef2ff] px-4 py-3"
          >
            <div className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#447bff]/15 text-[#447bff]">
                #{entry.position}
              </span>
              <p className="font-medium">{entry.team}</p>
            </div>
            <span className="text-sm text-[#44506b]">
              {t("points", { count: entry.points })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardList;
