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
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">Agenda</h3>
        <p className="mt-1 text-sm text-wolf-bone/60">
          Selecciona un slot y comparte tu objetivo.
        </p>
        <ul className="mt-4 space-y-3">
          {slots.map((slot) => (
            <li
              key={slot.id}
              className={`rounded-2xl border px-4 py-3 text-sm transition
                ${
                  slot.available
                    ? "border-wolf-cyan/30 bg-wolf-cyan/10 text-wolf-cyan hover:bg-wolf-cyan/20"
                    : "border-white/5 bg-white/5 text-wolf-bone/40"
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
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h4 className="text-base font-semibold text-wolf-bone">Preparación</h4>
        <div className="mt-3 space-y-3 text-sm text-wolf-bone/70">
          <p>• Objetivo de la sesión (1 frase)</p>
          <p>• Repositorios relevantes</p>
          <p>• Pregunta clave para desbloquear</p>
        </div>
        <button
          type="button"
          className="mt-5 rounded-xl bg-wolf-violet/30 px-4 py-3 text-sm font-medium text-wolf-bone transition hover:bg-wolf-violet/40"
        >
          Reservar slot
        </button>
      </div>
    </div>
  );
}

export default MentorBooking;
