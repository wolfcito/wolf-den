import SelfBadge from "@/components/ui/SelfBadge";

const demos = [
  {
    id: "demo-1",
    name: "Moon Wallet",
    team: "Cosmic Labs",
    status: "open" as const,
  },
  {
    id: "demo-2",
    name: "Lobo Tracker",
    team: "Wolf Stack",
    status: "locked" as const,
  },
  {
    id: "demo-3",
    name: "Howl Rewards",
    team: "Collective XYZ",
    status: "open" as const,
  },
];

export function VotingList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-wolf-bone">Demo Day</h3>
        <SelfBadge status="pending" />
      </div>
      <div className="space-y-3">
        {demos.map((demo) => (
          <div
            key={demo.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-wolf-panel/40 px-5 py-4"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-wolf-bone/50">
                {demo.team}
              </p>
              <p className="text-lg font-semibold text-wolf-bone">
                {demo.name}
              </p>
            </div>
            <button
              type="button"
              className={`rounded-xl px-4 py-2 text-sm font-medium transition
                ${
                  demo.status === "open"
                    ? "bg-wolf-cyan/20 text-wolf-cyan hover:bg-wolf-cyan/30"
                    : "cursor-not-allowed bg-white/5 text-wolf-bone/40"
                }
              `}
              disabled={demo.status !== "open"}
            >
              {demo.status === "open" ? "Votar" : "Requiere HOWL"}
            </button>
          </div>
        ))}
      </div>
      <p className="text-xs text-wolf-bone/50">
        Las votaciones requieren verificación Self y nivel HOWL Lobo.
      </p>
    </div>
  );
}

export default VotingList;
