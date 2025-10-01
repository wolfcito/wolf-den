import type { ReactNode } from "react";
import ActivityRail from "@/components/den/ActivityRail";
import SidebarNav from "@/components/den/SidebarNav";
import TopBar from "@/components/den/TopBar";

export default function DenLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wolf-bg via-[#11173d] to-[#1a1f4d] text-wolf-bone">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr_320px]">
          <aside className="rounded-2xl border border-white/5 bg-wolf-panel/60 p-3 backdrop-blur">
            <SidebarNav />
          </aside>
          <main className="rounded-2xl border border-white/5 bg-wolf-panel/50 p-6 backdrop-blur">
            <TopBar />
            <section className="mt-6">{children}</section>
          </main>
          <aside className="hidden rounded-2xl border border-white/5 bg-wolf-panel/60 p-4 backdrop-blur lg:block">
            <ActivityRail />
          </aside>
        </div>
        <div className="lg:hidden">
          <ActivityRail />
        </div>
      </div>
    </div>
  );
}
