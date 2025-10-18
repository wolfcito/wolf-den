import { useTranslations } from "next-intl";

export function LeaderboardList() {
  const t = useTranslations("LeaderboardList");
  const leaderboard = t.raw("entries") as Array<{
    position: number;
    team: string;
    points: number;
  }>;

  return (
    <div className="text-wolf-foreground">
      <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-white/90">
        {t("title")}
      </h3>
      <p className="mt-1 text-sm text-wolf-text-subtle">{t("subtitle")}</p>
      <div className="mt-4 space-y-3">
        {leaderboard.map((entry) => (
          <div
            key={entry.team}
            className="wolf-card--muted flex items-center justify-between rounded-[1.75rem] border border-wolf-border-mid px-5 py-4"
          >
            <div className="flex items-center gap-3 text-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-wolf-emerald-tint text-wolf-emerald">
                #{entry.position}
              </span>
              <p className="font-medium text-white/85">{entry.team}</p>
            </div>
            <span className="text-sm text-wolf-text-subtle">
              {t("points", { count: entry.points })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardList;
