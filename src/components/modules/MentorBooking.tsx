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
    <div className="grid gap-6 text-[#0f1621] lg:grid-cols-[320px_1fr]">
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
        <div className="flex items-center gap-2">
          <CalendarClock className="h-5 w-5 text-[#447bff]" aria-hidden />
          <h3 className="text-lg font-semibold">{t("title")}</h3>
        </div>
        <p className="mt-1 text-sm text-[#44506b]">{t("subtitle")}</p>
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
        <div className="flex items-center gap-2">
          <NotebookPen className="h-5 w-5 text-[#447bff]" aria-hidden />
          <h4 className="text-base font-semibold">{t("preparation.title")}</h4>
        </div>
        <div className="mt-3 space-y-3 text-sm text-[#44506b]">
          {prepChecklist.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <button
          type="button"
          className="mt-5 rounded-xl bg-[#447bff] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#5d8cff]"
        >
          {t("preparation.cta")}
        </button>
      </div>
    </div>
  );
}

export default MentorBooking;
