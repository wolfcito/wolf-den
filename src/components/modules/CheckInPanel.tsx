import Image from "next/image";
import SelfBadge from "@/components/ui/SelfBadge";
import StatusPill from "@/components/ui/StatusPill";

interface CheckInPanelProps {
  qrUrl: string;
  status: "unverified" | "pending" | "verified" | "error";
}

export function CheckInPanel({ qrUrl, status }: CheckInPanelProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h3 className="text-lg font-semibold text-wolf-bone">Check-in</h3>
        <Image
          src={qrUrl}
          alt="QR para check-in"
          width={256}
          height={256}
          className="mt-4 h-64 w-64 rounded-2xl border border-white/10 object-cover object-center shadow-lg"
        />
        <StatusPill status={status} />
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-wolf-cyan/20 py-3 text-sm font-medium text-wolf-cyan transition hover:bg-wolf-cyan/30"
        >
          Firmar con Manada
        </button>
      </div>
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6">
        <h4 className="text-base font-semibold text-wolf-bone">
          Cómo funciona
        </h4>
        <ol className="mt-3 space-y-2 text-sm text-wolf-bone/70">
          <li>1) Escanea el QR desde la app Manada.</li>
          <li>2) Firma el reto con tu wallet (Privy).</li>
          <li>3) ¡Listo! asistencia registrada.</li>
        </ol>
        <SelfBadge
          className="mt-6"
          status={status === "verified" ? "verified" : "pending"}
        />
      </div>
    </div>
  );
}

export default CheckInPanel;
