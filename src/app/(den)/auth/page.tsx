import SelfAuth from "@/components/SelfAuth";

export default function AuthPage() {
  return (
    <div className="space-y-6 text-[#0f1621]">
      <section className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
              Identity & Trust
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-[#0b1320]">
              Verificación con Self
            </h1>
            <p className="mt-2 max-w-[52ch] text-sm text-[#44506b]">
              Asegura tu identidad para acceder a votaciones, check-ins y perks
              de la manada. Escanea y confirma desde la app Self.
            </p>
          </div>
          <div className="rounded-2xl border border-[#d1d7eb] bg-[#eef2ff] px-5 py-4 text-sm text-[#0f1621]">
            <p className="font-semibold uppercase tracking-[0.3em] text-[#8894b3]">
              Requisitos
            </p>
            <ul className="mt-2 space-y-1 text-xs text-[#44506b]">
              <li>• App Self instalada</li>
              <li>• Wallet conectada</li>
              <li>• Aceptar disclosures solicitados</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#e2e6f5] bg-white p-8 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#0b1320]">
                Conecta y valida
              </h2>
              <p className="mt-2 text-sm text-[#44506b]">
                Escanea el código QR, revisa los disclosures y aprueba para
                desbloquear quests avanzadas, votaciones y perks del Wolf Den.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d1d7eb] bg-[#f5f7ff] px-5 py-4 text-sm text-[#0f1621]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                Tips de verificación
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#44506b]">
                <li>• Mantén tu dispositivo Self a la mano.</li>
                <li>• Asegúrate de estar en una red confiable.</li>
                <li>• Si falla, refresca el QR e inténtalo de nuevo.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-[#d1d7eb] bg-white/80 p-6 shadow-[0_28px_75px_-60px_rgba(15,22,33,0.45)]">
            <SelfAuth />
          </div>
        </div>
      </section>
    </div>
  );
}
