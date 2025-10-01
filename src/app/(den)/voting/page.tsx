import VotingList from "@/components/modules/VotingList";

export default function VotingPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">Voting Requirements</p>
        <p className="mt-1">
          Necesitas verificación Self y nivel HOWL Lobo para votar. Mantén tu
          streak activa.
        </p>
      </div>
      <VotingList />
    </div>
  );
}
