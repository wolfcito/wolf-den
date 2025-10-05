import Link from "next/link";

const strategicPillars = [
  {
    title: "Verified Trust",
    description:
      "Self verification keeps every interaction high-signal so you can build with confidence.",
  },
  {
    title: "Gamified Progress",
    description:
      "Quests, showcases, and voting reward contributions with HOWL streaks and future token perks.",
  },
  {
    title: "Community Momentum",
    description:
      "Mentors, weekly events, and collaborative spaces help the pack ship faster together.",
  },
];

const modules = [
  {
    title: "Quests",
    description:
      "Mission control for quests that pay you in HOWL progress and future token perks.",
    cta: { label: "Run Missions", href: "/quests" },
  },
  {
    title: "Check-in",
    description:
      "QR-driven attendance backed by Self so real-world moments count toward your streak.",
    cta: { label: "View Check-in", href: "/checkin" },
  },
  {
    title: "Mind Games",
    description:
      "Mines MVP blending strategy and stakes—earn bragging rights while gamification levels up.",
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
      "Demo Day ballots gated by Self verification and HOWL tiers to reward meaningful votes.",
    cta: { label: "Start Voting", href: "/voting" },
  },
  {
    title: "Mentorship",
    description:
      "Book mentors who have shipped before—arrive with goals, leave with unblockers.",
    cta: { label: "Book Mentors", href: "/mentorship" },
  },
  {
    title: "Stats",
    description:
      "Analyze HOWL, streaks, and perks as you climb the ladder toward token-enabled rewards.",
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
    title: "Verify with Self",
    description:
      "Quick verification brings you into the trusted network so every contribution counts.",
  },
  {
    title: "Complete Quests",
    description:
      "Ship projects, help others, and stack HOWL points through quests and weekly events.",
  },
  {
    title: "Level Up",
    description:
      "Unlock mentorship, perks, and the upcoming HOWL token economy as you climb the ranks.",
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
            <h1 className="text-4xl font-semibold uppercase leading-tight text-[#0b1320] sm:text-5xl lg:text-6xl">
              Wolf Den is the digital control center for the pack
            </h1>
            <p className="text-xs uppercase tracking-[0.4em] text-[#8894b3]">
              Build together. Get recognized. Level up.
            </p>
            <p className="max-w-[42ch] text-lg text-[#2f3950]">
              Join a verified pack of builders who ship fast, earn recognition,
              and unlock the future HOWL economy. Mentors, quests, and rewards
              are here to accelerate your next release.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth"
                className="rounded-full bg-[#0b1320] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f2f4fb] transition hover:bg-[#131d30]"
              >
                Start Building Today
              </Link>
              <Link
                href="/showcase"
                className="rounded-full border border-[#d1d7eb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f1621] transition hover:border-[#447bff]"
              >
                Explore Projects
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

        <section className="rounded-3xl border border-[#e2e6f5] bg-white/90 p-10 text-[#0f1621] shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[36ch]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                Join the pack
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                500+ verified builders
              </h2>
              <p className="mt-2 text-sm text-[#44506b]">
                Build together, get recognized, and level up. Wolf Den is where
                quests, mentors, and future HOWL rewards converge.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 text-center text-[#0f1621] sm:grid-cols-4">
              {[
                { value: "500+", label: "Active Builders" },
                { value: "50+", label: "Expert Mentors" },
                { value: "100+", label: "Projects Shipped" },
                { value: "20+", label: "Weekly Events" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-[#d1d7eb] bg-[#eef2ff] px-4 py-3 shadow-[0_20px_55px_-50px_rgba(15,22,33,0.45)]"
                >
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8894b3]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-14">
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                Strategic Pillars
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                What powers the Den
              </h2>
            </div>
            <p className="max-w-[36ch] text-sm text-[#44506b]">
              Built for builders who crave momentum: verification, recognition,
              and shared resources keep the pack moving while future HOWL
              rewards await.
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
                Why Wolf Den
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                Grow faster with the pack
              </h2>
            </div>
          </header>
          <ul className="grid gap-6 sm:grid-cols-2">
            {[
              "Earn recognition through quests, events, and verified contributions.",
              "Book 1-on-1 mentorship with experts who have shipped real products.",
              "Collaborate inside a trusted Self-verified network of builders.",
              "Showcase progress, get feedback, and level up together.",
            ].map((reason) => (
              <li
                key={reason}
                className="rounded-3xl border border-[#e2e6f5] bg-white px-6 py-6 text-sm text-[#3a475f] shadow-[0_28px_75px_-60px_rgba(15,22,33,0.55)]"
              >
                {reason}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-12">
          <header className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
              Modules
            </p>
            <h2 className="text-3xl font-semibold uppercase text-[#0b1320]">
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

        <section className="space-y-12">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                Why builders choose Wolf Den
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                Rewards, mentors, and recognition
              </h2>
            </div>
          </header>
          <div className="grid gap-4 text-sm text-[#3f4c67] md:grid-cols-2">
            {[
              "Access to exclusive workshops and events",
              "Direct mentorship from industry experts",
              "Showcase your projects to the community",
              "Earn rewards for contributions",
              "Join a verified network of builders",
              "Compete in weekly challenges",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#e2e6f5] bg-white px-6 py-5 shadow-[0_28px_75px_-60px_rgba(15,22,33,0.55)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                Flows
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                Sequencing the pack journey
              </h2>
            </div>
            <p className="max-w-[34ch] text-sm text-[#44506b]">
              Each flow keeps momentum high: verify, contribute, and watch your
              HOWL influence grow.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
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

        <section className="space-y-10">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#447bff]">
                What's coming next
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase text-[#0b1320]">
                Building the future with HOWL
              </h2>
            </div>
            <p className="max-w-[40ch] text-sm text-[#44506b]">
              We are evolving the Wolf Den economy so every contribution can
              earn more than kudos.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Enhanced Gamification",
                status: "In Progress",
                description:
                  "More quest types, achievements, and progression systems to reward streaks.",
              },
              {
                title: "HOWL Token Economy",
                status: "Planned",
                description:
                  "Tradeable tokens for contributions, unlocking premium features and rewards.",
              },
              {
                title: "Marketplace & Perks",
                status: "Planned",
                description:
                  "Redeem points for exclusive swag, builder tools, and community opportunities.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                  {item.status}
                </p>
                <h3 className="mt-2 text-lg font-semibold uppercase text-[#0b1320]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[#3f4c67]">
                  {item.description}
                </p>
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
              <h2 className="text-3xl font-semibold uppercase text-[#0b1320]">
                Ready to sync with Wolf Den?
              </h2>
              <p className="text-sm text-[#3f4c67]">
                Verify with Self, earn HOWL as you contribute, and unlock
                mentors, perks, and future token rewards.
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
                View Leaderboard
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
