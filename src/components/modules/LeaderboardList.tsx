const leaderboard = [
  { position: 1, team: "Lunares", points: 1480 },
  { position: 2, team: "Pack Builders", points: 1340 },
  { position: 3, team: "Cosmic Wolves", points: 1295 },
  { position: 4, team: "Nebula Pack", points: 1102 },
];

export function LeaderboardList() {
  return (
    <div className="rounded-2xl border border-[#e2e6f5] bg-white p-5 text-[#0f1621] shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
      <h3 className="text-lg font-semibold">Leaderboard</h3>
      <p className="text-sm text-[#44506b]">Ranking semanal de la manada.</p>
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
            <span className="text-sm text-[#44506b]">{entry.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardList;
