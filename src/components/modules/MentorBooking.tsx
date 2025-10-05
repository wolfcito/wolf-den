import { CalendarClock, NotebookPen } from "lucide-react";

const slots = [
  {
    id: "slot-1",
    mentor: "Andrés • Producto",
    time: "Hoy 18:00",
    available: false,
  },
  { id: "slot-2", mentor: "Vale • Growth", time: "Hoy 19:30", available: true },
  {
    id: "slot-3",
    mentor: "Rafa • Crypto",
    time: "Mañana 10:00",
    available: true,
  },
];

export function MentorBooking() {
  return (
    <div className="grid gap-6 text-[#0f1621] lg:grid-cols-[320px_1fr]">
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
        <div className="flex items-center gap-2">
          <CalendarClock className="h-5 w-5 text-[#447bff]" aria-hidden />
          <h3 className="text-lg font-semibold">Agenda</h3>
        </div>
        <p className="mt-1 text-sm text-[#44506b]">
          Selecciona un slot y comparte tu objetivo.
        </p>
        <ul className="mt-4 space-y-3">
          {slots.map((slot) => (
            <li
              key={slot.id}
              className={`rounded-2xl border px-4 py-3 text-sm transition
                ${
                  slot.available
                    ? "border-[#447bff]/50 bg-[#eef2ff] text-[#0f1621] hover:border-[#447bff]"
                    : "border-[#d1d7eb] bg-[#f1f3fa] text-[#9aa5c3]"
                }
              `}
            >
              <p className="font-medium">{slot.mentor}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-current">
                {slot.time}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 py-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">Misión del día</p>
        <p className="mt-1 text-sm">
          Completa tu check-in, comparte progreso en Showcase y envía evidencia
          para sumar puntos HOWL.
        </p>
      </div>
    </div>
  );
}

export default MentorBooking;
