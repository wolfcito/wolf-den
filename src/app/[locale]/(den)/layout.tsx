import type { ReactNode } from "react";
import ActivityRail from "@/components/den/ActivityRail";
import SidebarNav from "@/components/den/SidebarNav";
import TopBar from "@/components/den/TopBar";

export default function DenLayout({ children }: { children: ReactNode }) {
  return (
    <div className="wolf-neon-backdrop text-wolf-foreground">
      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr_320px]">
          <aside className="wolf-card--muted rounded-[1.9rem] border border-wolf-border p-3 shadow-[0_30px_95px_-70px_rgba(0,0,0,0.75)] backdrop-blur">
            <SidebarNav />
          </aside>
          <main className="wolf-card rounded-[2.2rem] border border-wolf-border-strong p-6 shadow-[0_40px_110px_-80px_rgba(0,0,0,0.75)] backdrop-blur">
            <TopBar />
            <section className="mt-6">{children}</section>
          </main>
          <aside className="hidden lg:block">
            <div className="wolf-card--muted rounded-[1.9rem] border border-wolf-border p-4 shadow-[0_30px_95px_-70px_rgba(0,0,0,0.75)] backdrop-blur">
              <ActivityRail />
            </div>
          </aside>
        </div>
        <div className="lg:hidden">
          <div className="wolf-card--muted rounded-[1.9rem] border border-wolf-border p-4 shadow-[0_30px_95px_-70px_rgba(0,0,0,0.75)] backdrop-blur">
            <ActivityRail />
          </div>
        </div>
      </div>
    </div>
  );
}
