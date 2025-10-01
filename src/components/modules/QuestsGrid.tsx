interface Quest {
  id: string;
  title: string;
  points: number;
  status: "available" | "submitted" | "locked";
}

const sampleQuests: Quest[] = [
  { id: "quest-1", title: "Primer commit", points: 50, status: "available" },
  {
    id: "quest-2",
    title: "Post Demo en Warpcast",
    points: 80,
    status: "available",
  },
  {
    id: "quest-3",
    title: "Mentoría completada",
    points: 40,
    status: "submitted",
  },
  {
    id: "quest-4",
    title: "Feedback a otro equipo",
    points: 30,
    status: "locked",
  },
  {
    id: "quest-5",
    title: "Publica tu roadmap",
    points: 60,
    status: "available",
  },
];

function questTone(status: Quest["status"]) {
  if (status === "submitted")
    return "border-wolf-cyan/40 bg-wolf-cyan/10 text-wolf-cyan";
  if (status === "locked") return "border-white/5 bg-white/5 text-wolf-bone/40";
  return "border-white/10 bg-wolf-panel/40 text-wolf-bone";
}

export function QuestsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {sampleQuests.map((quest) => (
        <div
          key={quest.id}
          className={`flex h-full flex-col justify-between rounded-2xl border p-5 transition hover:border-wolf-violet/40 hover:bg-wolf-violet/10 ${questTone(quest.status)}`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-wolf-bone/50">
              Quest
            </p>
            <h3 className="mt-2 text-lg font-semibold">{quest.title}</h3>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-wolf-bone/60">
              {quest.points} pts
            </span>
            <button
              type="button"
              className={`rounded-xl px-4 py-2 text-sm font-medium transition
                ${
                  quest.status === "locked"
                    ? "cursor-not-allowed bg-white/5 text-wolf-bone/30"
                    : "bg-wolf-violet/30 text-wolf-bone hover:bg-wolf-violet/50"
                }
              `}
              disabled={quest.status !== "available"}
            >
              {quest.status === "submitted"
                ? "En revisión"
                : quest.status === "locked"
                  ? "Bloqueada"
                  : "Enviar prueba"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestsGrid;
