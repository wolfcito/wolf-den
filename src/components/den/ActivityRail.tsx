import { useTranslations } from "next-intl";
import { MiniChat } from "@/components/ui/MiniChat";
import { NotificationItem } from "@/components/ui/NotificationItem";

export function ActivityRail() {
  const t = useTranslations("ActivityRail");
  const feedItems = t.raw("feed") as Array<{
    title: string;
    description: string;
    timestamp: string;
    accent: "cyan" | "violet" | "neutral";
  }>;
  const recentItems = t.raw("recent") as Array<{
    title: string;
    timestamp: string;
  }>;

  return (
    <div className="flex h-full flex-col gap-4 text-[#0f1621]">
      <section className="py-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-wolf-bone">
            {t("sections.activity.title")}
          </p>
          <span className="text-[11px] uppercase tracking-[0.3em] text-wolf-bone/40">
            {t("sections.activity.label")}
          </span>
        </div>
        <div className="space-y-3">
          {feedItems.map((item) => (
            <NotificationItem key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="py-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-wolf-bone">
            {t("sections.recent.title")}
          </p>
          <span className="text-[11px] uppercase tracking-[0.3em] text-wolf-bone/40">
            {t("sections.recent.label")}
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

      <div className="py-4">
        <MiniChat />
      </div>
    </div>
  );
}

export default ActivityRail;
