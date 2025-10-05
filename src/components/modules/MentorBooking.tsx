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
        <h3 className="text-lg font-semibold">Agenda</h3>
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
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
        <h4 className="text-base font-semibold">Preparación</h4>
        <div className="mt-3 space-y-3 text-sm text-[#44506b]">
          <p>• Objetivo de la sesión (1 frase)</p>
          <p>• Repositorios relevantes</p>
          <p>• Pregunta clave para desbloquear</p>
        </div>
        <button
          type="button"
          className="mt-5 rounded-xl bg-[#447bff] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#5d8cff]"
        >
          Reservar slot
        </button>
      </div>
    </div>
  );
}

export default MentorBooking;
