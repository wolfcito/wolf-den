import ThemeToggle from "@/components/ui/ThemeToggle";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">Appearance</h3>
        <p className="mt-2 text-sm text-wolf-bone/70">
          Switch between light and dark mode to match your workspace.
        </p>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </section>
      <section className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">Idioma</h3>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <button
            type="button"
            className="rounded-xl bg-wolf-cyan/20 px-4 py-2 text-wolf-cyan"
          >
            ES
          </button>
          <button
            type="button"
            className="rounded-xl bg-white/5 px-4 py-2 text-wolf-bone/60"
          >
            EN
          </button>
        </div>
      </section>
      <section className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">Privacidad</h3>
        <ul className="mt-3 space-y-2 text-sm text-wolf-bone/70">
          <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <span>Compartir streak con la manada</span>
            <span className="rounded-full bg-wolf-cyan/20 px-3 py-1 text-xs text-wolf-cyan">
              On
            </span>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <span>Mostrar repos públicos</span>
            <span className="rounded-full bg-wolf-violet/20 px-3 py-1 text-xs text-wolf-violet/80">
              Custom
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
