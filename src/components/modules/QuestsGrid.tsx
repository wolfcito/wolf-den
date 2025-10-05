import { Target } from "lucide-react";

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
    return "border-[#447bff]/60 bg-[#eef2ff] text-[#0f1621]";
  if (status === "locked")
    return "border-[#d1d7eb] bg-[#eef1f8] text-[#9aa5c3]";
  return "border-[#e2e6f5] bg-white text-[#0f1621]";
}

export function QuestsGrid() {
  return (
    <div className="grid gap-4 text-[#0f1621] md:grid-cols-2 xl:grid-cols-4">
      {sampleQuests.map((quest) => (
        <div
          key={quest.id}
          className={`flex h-full flex-col justify-between rounded-2xl border p-5 shadow-[0_28px_75px_-60px_rgba(15,22,33,0.55)] transition hover:-translate-y-1 hover:border-[#447bff]/60 hover:bg-[#eef2ff]/60 ${questTone(quest.status)}`}
        >
          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-[#447bff]" aria-hidden />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                Quest
              </p>
              <h3 className="mt-2 text-lg font-semibold">{quest.title}</h3>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs text-[#44506b]">
              {quest.points} pts
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
