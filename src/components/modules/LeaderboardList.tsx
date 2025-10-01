const leaderboard = [
  { position: 1, team: "Lunares", points: 1480 },
  { position: 2, team: "Pack Builders", points: 1340 },
  { position: 3, team: "Cosmic Wolves", points: 1295 },
  { position: 4, team: "Nebula Pack", points: 1102 },
];

export function LeaderboardList() {
  return (
    <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-5">
      <h3 className="text-lg font-semibold text-wolf-bone">Leaderboard</h3>
      <p className="text-sm text-wolf-bone/60">Ranking semanal de la manada.</p>
      <div className="mt-4 space-y-3">
        {leaderboard.map((entry) => (
          <div
            key={entry.team}
            className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
          >
            <div className="flex items-center gap-3 text-sm text-wolf-bone">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-wolf-violet/30 text-wolf-violet">
                #{entry.position}
              </span>
              <p className="font-medium">{entry.team}</p>
            </div>
            <span className="text-sm text-wolf-bone/70">
              {entry.points} pts
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardList;
