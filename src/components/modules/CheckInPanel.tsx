import Image from "next/image";
import StatusPill from "@/components/ui/StatusPill";

interface CheckInPanelProps {
  qrUrl: string;
  status: "unverified" | "pending" | "verified" | "error";
}

export function CheckInPanel({ qrUrl, status }: CheckInPanelProps) {
  return (
<div className="space-y-6 flex">
    <div className="grid gap-6 text-[#0f1621] lg:grid-cols-[340px_1fr]">
      <div className="rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_32px_85px_-65px_rgba(15,22,33,0.55)]">
        <h3 className="text-lg font-semibold">Check-in</h3>
        <Image
          src={qrUrl}
          alt="QR para check-in"
          width={256}
          height={256}
          className="mt-4 h-64 w-64 rounded-2xl border border-[#d1d7eb] object-cover object-center shadow-[0_25px_60px_-50px_rgba(15,22,33,0.45)]"
        />
        <div className="mt-4">
          <StatusPill status={status} />
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-[#447bff] py-3 text-sm font-medium text-white transition hover:bg-[#5d8cff]"
        >
          Firmar con Manada
        </button>
      </div>
    </div>
    <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 py-6 text-sm text-wolf-bone/70">
    <p className="mt-1 text-sm">
    El check-in verificado suma HOWL y habilita perks futuros dentro de la
    economía del Den.
    </p>
  </div>
    </div>
  );
}

export default CheckInPanel;
