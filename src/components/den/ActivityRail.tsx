import { MiniChat } from "@/components/ui/MiniChat";
import { NotificationItem } from "@/components/ui/NotificationItem";

const feedItems = [
  {
    title: "Verificación completada",
    description: "Luna firmó su asistencia con Self",
    timestamp: "hace 5 min",
    accent: "cyan" as const,
  },
  {
    title: "Nueva misión",
    description: "Sube tu demo al Showcase",
    timestamp: "hace 1 h",
    accent: "violet" as const,
  },
];

const recentItems = [
  { title: "Misión: Primer commit", timestamp: "hoy • 09:12" },
  { title: "Mentoría: Andrés", timestamp: "ayer • 18:00" },
  { title: "Demo: Solana Kit", timestamp: "ayer • 16:30" },
];

export function ActivityRail() {
  return (
    <div className="flex h-full flex-col gap-4">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-wolf-bone">Actividad</p>
          <span className="text-[11px] uppercase tracking-[0.3em] text-wolf-bone/40">
            Feed
          </span>
        </div>
        <div className="space-y-3">
          {feedItems.map((item) => (
            <NotificationItem key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-wolf-bone">Recent</p>
          <span className="text-[11px] uppercase tracking-[0.3em] text-wolf-bone/40">
            Eventos
          </span>
        </div>
        <ul className="space-y-2 text-sm text-wolf-bone/70">
          {recentItems.map((item) => (
            <li
              key={item.title}
              className="flex items-center justify-between rounded-xl bg-wolf-panel/40 px-4 py-2"
            >
              <span>{item.title}</span>
              <span className="text-xs text-wolf-bone/40">
                {item.timestamp}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <MiniChat />
    </div>
  );
}

export default ActivityRail;
