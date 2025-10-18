import { CalendarClock, NotebookPen } from "lucide-react";
import { useTranslations } from "next-intl";

export function MentorBooking() {
  const t = useTranslations("MentorBooking");
  const slots = t.raw("slots") as Array<{
    id: string;
    mentor: string;
    time: string;
    available: boolean;
  }>;
  const prepChecklist = t.raw("preparation.items") as string[];

  return (
    <div className="grid gap-6 text-[color:var(--foreground)] lg:grid-cols-[360px_1fr]">
      <div className="wolf-card p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(123,255,120,0.14)] text-[color:var(--wolf-emerald)]">
            <CalendarClock className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-white/90">
            {t("title")}
          </h3>
        </div>
        <p className="mt-2 text-sm text-[color:var(--wolf-text-subtle)]">
          {t("subtitle")}
        </p>
        <ul className="mt-5 space-y-3">
          {slots.map((slot) => (
            <li
              key={slot.id}
              className={`wolf-card--muted flex flex-col gap-1 rounded-[1.5rem] border border-[rgba(123,255,104,0.12)] px-4 py-4 text-sm transition ${
                slot.available
                  ? "hover:border-[rgba(123,255,104,0.35)] hover:shadow-[0_15px_45px_-35px_rgba(123,255,104,0.4)]"
                  : "opacity-60"
              }`}
            >
              <p className="text-sm font-medium text-white/90">{slot.mentor}</p>
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--wolf-text-subtle)]">
                {slot.time}
              </p>
              {slot.available ? (
                <span className="wolf-pill mt-2 bg-[rgba(123,255,120,0.08)] text-xs uppercase tracking-[0.24em] text-[color:var(--wolf-emerald)]">
                  Available
                </span>
              ) : (
                <span className="wolf-pill mt-2 border border-[rgba(255,255,255,0.08)] bg-transparent text-xs uppercase tracking-[0.24em] text-[color:var(--wolf-text-subtle)]">
                  Filled
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="wolf-card p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(123,255,120,0.14)] text-[color:var(--wolf-emerald)]">
            <NotebookPen className="h-5 w-5" aria-hidden />
          </span>
          <h4 className="text-base font-semibold uppercase tracking-[0.2em] text-white/90">
            {t("preparation.title")}
          </h4>
        </div>
        <div className="mt-4 space-y-3 text-sm text-[color:var(--foreground)]/80">
          {prepChecklist.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[linear-gradient(120deg,#74ff78,#3bcf5f)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#08120b] transition hover:brightness-110"
        >
          {t("preparation.cta")}
        </button>
      </div>
    </div>
  );
}

export default MentorBooking;
