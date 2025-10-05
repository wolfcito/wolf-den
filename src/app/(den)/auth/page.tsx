import SelfAuth from "@/components/SelfAuth";

export default function AuthPage() {
  return (
    <div className="space-y-6 text-[#0f1621]">
      <section className="rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
              Identity & Trust
            </p>
            <p className="mt-2 max-w-[52ch] text-sm text-[#44506b]">
              Asegura tu identidad para acceder a votaciones, check-ins y perks
              de la manada. Escanea y confirma desde la app Self.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#e2e6f5] bg-white p-8 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
        <div className="grid lg:items-center">
          <SelfAuth />
          <div className="space-y-6">
            <div className="rounded-2xl py-4 mb-2 text-sm text-[#0f1621]">
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
          
        </div>
      </section>
    </div>
  );
}
