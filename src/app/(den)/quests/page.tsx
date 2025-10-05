import QuestsGrid from "@/components/modules/QuestsGrid";

export default function QuestsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 py-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">Misión del día</p>
        <p className="mt-1 text-sm">
          Completa tu check-in, comparte progreso en Showcase y envía evidencia
          para sumar puntos HOWL.
        </p>
      </div>
      <QuestsGrid />
    </div>
  );
}
