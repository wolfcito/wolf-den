"use client";

import { useState } from "react";

export function MiniChat() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;
    // TODO: integrate Farcaster cast/share
    setMessage("");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-wolf-bone">Chat</p>
        <span className="text-xs uppercase tracking-[0.3em] text-wolf-bone/50">
          Farcaster
        </span>
      </div>
      <p className="mt-2 text-xs text-wolf-bone/60">
        Comparte actualizaciones rápidas con la manada.
      </p>
      <form onSubmit={handleSubmit} className="mt-3 space-y-2">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={2}
          placeholder="Escribe un cast..."
          className="w-full rounded-xl border border-white/10 bg-wolf-panel/60 px-3 py-2 text-sm text-wolf-bone placeholder:text-wolf-bone/40 focus:border-wolf-cyan/50 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-wolf-cyan/20 py-2 text-sm font-medium text-wolf-cyan transition hover:bg-wolf-cyan/30"
        >
          Enviar cast
        </button>
      </form>
    </div>
  );
}

export default MiniChat;
