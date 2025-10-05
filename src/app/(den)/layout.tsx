import type { ReactNode } from "react";
import ActivityRail from "@/components/den/ActivityRail";
import SidebarNav from "@/components/den/SidebarNav";
import TopBar from "@/components/den/TopBar";

export default function DenLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-wolf-bg text-wolf-bone">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr_320px]">
          <aside className="rounded-2xl border border-[#e2e6f5] bg-white/80 p-3 shadow-[0_25px_70px_-60px_rgba(15,22,33,0.55)] backdrop-blur">
            <SidebarNav />
          </aside>
          <main className="rounded-2xl border border-[#e2e6f5] bg-white/90 p-6 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)] backdrop-blur">
            <TopBar />
            <section className="mt-6">{children}</section>
          </main>
          <aside className="hidden rounded-2xl border border-[#e2e6f5] bg-white/80 p-4 shadow-[0_25px_70px_-60px_rgba(15,22,33,0.55)] backdrop-blur lg:block">
            <ActivityRail />
          </aside>
        </div>
        <div className="lg:hidden">
          <div className="rounded-2xl border border-[#e2e6f5] bg-white/80 p-4 shadow-[0_25px_70px_-60px_rgba(15,22,33,0.55)] backdrop-blur">
            <ActivityRail />
          </div>
        </div>
      </div>
    </div>
  );
}
