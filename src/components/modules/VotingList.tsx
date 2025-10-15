import { Check, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

type DemoStatus = "open" | "locked";

export function VotingList() {
  const t = useTranslations("VotingList");
  const demos = t.raw("demos") as Array<{
    id: string;
    name: string;
    team: string;
    status: DemoStatus;
  }>;

  return (
    <div className="space-y-6 text-[#0f1621]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{t("title")}</h3>
      </div>
      <div className="space-y-3">
        {demos.map((demo) => {
          const Icon = demo.status === "open" ? Check : Lock;
          return (
            <div
              key={demo.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#e2e6f5] bg-white px-5 py-4 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]"
            >
              <div>
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#8894b3]">
                  <Icon className="h-4 w-4" aria-hidden />
                  {demo.team}
                </p>
                <p className="text-lg font-semibold">{demo.name}</p>
              </div>
              <button
                type="button"
                className={`rounded-xl px-4 py-2 text-sm font-medium transition
                  ${
                    demo.status === "open"
                      ? "bg-[#447bff] text-white hover:bg-[#5d8cff]"
                      : "cursor-not-allowed bg-[#e3e6f2] text-[#9aa5c3]"
                  }
                `}
                disabled={demo.status !== "open"}
              >
                {t(`actions.${demo.status}`)}
              </button>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-[#44506b]">{t("footnote")}</p>
    </div>
  );
}

export default VotingList;
