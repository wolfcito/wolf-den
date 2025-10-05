import Link from "next/link";
import type { CSSProperties } from "react";

const bitcountStyle: CSSProperties = { fontFamily: ""Bitcount Single Ink", var(--font-geist-sans)" } as const;

const strategicPillars = [
  {
    title: "Identity First",
    description:
      "Self verification gates access to the pack. Every critical action is protected by cryptographic trust.",
  },
  {
    title: "Relentless Gamification",
    description:
      "Quests, showcases, voting, and mind games keep builders earning HOWL, streaks, and recognition.",
  },
  {
    title: "Immersive Atmosphere",
    description:
      "A tactile HQ with crisp surfaces keeps the Den unmistakable while staying focused and calm.",
  },
];

const objectives = [
  "Increase weekly participation in quests and on-site happenings.",
  "Verify 100% of voters and attendees through Self before action.",
  "Match builders and mentors through clear, bookable slots.",
  "Expose live progress across HOWL, streaks, and leaderboard standings.",
];

const modules = [
  {
    title: "Quests",
    description:
      "Mission control grid tracking available, submitted, and locked quests with point rewards and submissions.",
    cta: { label: "Run Missions", href: "/quests" },
  },
  {
    title: "Check-in",
    description:
      "QR-driven attendance backed by Self and wallet signatures anchoring real-world participation.",
    cta: { label: "View Check-in", href: "/checkin" },
  },
  {
    title: "Mind Games",
    description:
      "Mines MVP blending bet strategy, mine counts, and cashout momentum inside a cinematic grid.",
    cta: { label: "Enter Mind Games", href: "/mind-games" },
  },
  {
    title: "Showcase",
    description:
      "Spotlight demos with repo and live links so the pack can rally behind active builds.",
    cta: { label: "Open Showcase", href: "/showcase" },
  },
  {
    title: "Voting",
    description:
      "Demo Day ballots with eligibility checks for HOWL level and Self verification before each vote.",
    cta: { label: "Start Voting", href: "/voting" },
  },
  {
    title: "Mentorship",
    description:
      "Reserve mentor slots, share objectives, and unlock the next breakthrough faster.",
    cta: { label: "Book Mentors", href: "/mentorship" },
  },
  {
    title: "Stats",
    description:
      "Analyze HOWL, streaks, and moon perks with badge-driven storytelling across the Den.",
    cta: { label: "Read Stats", href: "/stats" },
  },
  {
    title: "Leaderboard",
    description:
      "Weekly pack rankings that celebrate squads pushing the frontier forward.",
    cta: { label: "See Leaderboard", href: "/leaderboard" },
  },
];

const flows = [
  {
    title: "Onboarding",
    description:
      "Landing on / pulls builders into mission context immediately, framing the Den as HQ from day zero.",
  },
  {
    title: "Self Verification",
    description:
      "QR scan, disclosures, and instant status upgrade to unlock the Den's gated experiences.",
  },
  {
    title: "Event Check-in",
    description:
      "Physical QR + wallet signature confirms presence and updates badges in real time.",
  },
  {
    title: "Demo Day Voting",
    description:
      "Eligibility, evaluation, and votes in one seamless flow that captures the community pulse.",
  },
  {
    title: "Mind Games Run",
    description:
      "Bet, reveal, and cash out in a high-tension loop purpose-built to reward bold builders.",
  },
];

export default function HomeLanding() {
  return (
    <div className="relative overflow-hidden bg-[#f2f4fb] text-[#0f1621]">
      <div className="pointer-events-none absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-[#ffffff] blur-[140px]" />
      <div className="pointer-events-none absolute top-20 -right-24 h-[520px] w-[520px] rounded-full bg-[#dfe5fb] blur-[180px]" />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16">
        <section className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#447bff] shadow-[0_15px_40px_-30px_rgba(16,22,33,0.6)]">
              Wolf Den Originals
            </span>
            <h1
              className="text-4xl font-semibold uppercase leading-tight text-[#0b1320] sm:text-5xl lg:text-6xl"
              style={bitcountStyle}
            >
              Wolf Den is the digital control center for the pack
            </h1>
            <p className="max-w-[42ch] text-lg text-[#2f3950]">
              We orchestrate missions, mind games, and community engagement in a
              precise, cool-toned HQ where every critical move is backed by Self
              verification and HOWL-driven rewards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/showcase"
                className="rounded-full bg-[#0b1320] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f2f4fb] transition hover:bg-[#131d30]"
              >
                Enter the Den
              </Link>
              <Link
                href="/auth"
                className="rounded-full border border-[#d1d7eb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f1621] transition hover:border-[#447bff]"
              >
                Verify with Self
              </Link>
            </div>
          </div>
          <div className="relative h-full min-h-[340px] rounded-[2.5rem] border border-[#e2e6f5] bg-white p-10 shadow-[0_40px_90px_-60px_rgba(15,22,33,0.55)]">
            <div className="absolute inset-x-10 top-10 h-12 rounded-full bg-[#edf0fb]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7f87a3]">
                Product Vision
              </p>
              <p className="text-2xl font-semibold text-[#0f1621]">
                "Wolf Den acts as the digital control center for coordinating
                missions, mind games, and community engagement with a triptych
                layout that keeps the pack locked in."
              </p>
              <div className="text-xs uppercase tracking-[0.3em] text-[#9ca4c3]">
                Extracted from wolf-den-prd.md
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-14">
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                Strategic Pillars
              </p>
              <h2
                className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]"
                style={bitcountStyle}
              >
                What powers the Den
              </h2>
            </div>
            <p className="max-w-[36ch] text-sm text-[#44506b]">
              Built for builders who crave momentum: security, motivation, and
              an unforgettable atmosphere work together to keep the pack in
              sync.
            </p>
          </header>
          <div className="grid gap-8 lg:grid-cols-3">
            {strategicPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-3xl border border-[#e2e6f5] bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,22,33,0.55)] transition hover:-translate-y-1"
              >
                <div className="absolute -top-28 right-6 h-32 w-32 rounded-full bg-[#d6e2ff] blur-3xl transition group-hover:bg-[#bcd1ff]" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-[#0b1320]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#404d68]">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                Objectives
              </p>
              <h2
                className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]"
                style={bitcountStyle}
              >
                Targets for the pack
              </h2>
            </div>
          </header>
          <ul className="grid gap-6 sm:grid-cols-2">
            {objectives.map((objective) => (
              <li
                key={objective}
                className="rounded-3xl border border-[#e2e6f5] bg-white px-6 py-6 text-sm text-[#3a475f] shadow-[0_28px_75px_-60px_rgba(15,22,33,0.55)]"
              >
                {objective}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-12">
          <header className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
              Modules
            </p>
            <h2
              className="text-3xl font-semibold uppercase text-[#0b1320]"
              style={bitcountStyle}
            >
              Mission surfaces across the Den
            </h2>
            <p className="max-w-[60ch] text-sm text-[#44506b]">
              Every module is a touchpoint where HOWL is earned, community trust
              is reinforced, and Wolf Den's identity stays unmistakable.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-4">
            {modules.map((module) => (
              <article
                key={module.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]"
              >
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#95a2c5]">
                    Module
                  </p>
                  <h3 className="text-xl font-semibold uppercase text-[#0b1320]">
                    {module.title}
                  </h3>
                  <p className="text-sm text-[#3f4c67]">{module.description}</p>
                </div>
                <Link
                  href={module.cta.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#447bff] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#5d8cff]"
                >
                  {module.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                Flows
              </p>
              <h2
                className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]"
                style={bitcountStyle}
              >
                Sequencing the pack journey
              </h2>
            </div>
            <p className="max-w-[34ch] text-sm text-[#44506b]">
              Each flow keeps momentum high and safeguards the experience from
              onboarding to high-stakes gameplay.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-5">
            {flows.map((flow, index) => (
              <article
                key={flow.title}
                className="relative flex flex-col gap-4 rounded-3xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]"
              >
                <span className="text-4xl font-black text-[#7ca3ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold uppercase text-[#0b1320]">
                    {flow.title}
                  </h3>
                  <p className="text-sm text-[#3f4c67]">{flow.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[3rem] border border-[#e2e6f5] bg-white p-12 shadow-[0_45px_100px_-70px_rgba(15,22,33,0.55)]">
          <div className="absolute inset-x-12 top-0 h-24 rounded-b-[3rem] bg-[#edf0fb]" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[36ch] space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#93a0c1]">
                Join the pack
              </p>
              <h2
              className="text-3xl font-semibold uppercase text-[#0b1320]"
              style={bitcountStyle}
            >
                Ready to sync with Wolf Den?
              </h2>
              <p className="text-sm text-[#3f4c67]">
                Verify with Self, claim your HOWL badge, and explore every
                module built for unstoppable builders.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth"
                className="rounded-full bg-[#447bff] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#5d8cff]"
              >
                Start Verification
              </Link>
              <Link
                href="/showcase"
                className="rounded-full border border-[#d1d7eb] bg-[#f2f4fb] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f1621] transition hover:border-[#447bff]"
              >
                Explore Showcase
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
