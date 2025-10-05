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
    <div className="space-y-3 text-[#0f1621]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Chat</p>
        <span className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
          Farcaster
        </span>
      </div>
      <p className="text-xs text-[#44506b]">
        Comparte actualizaciones rápidas con la manada.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={2}
          placeholder="Escribe un cast..."
          className="w-full rounded-xl border border-[#d1d7eb] bg-white px-3 py-2 text-sm text-[#0f1621] placeholder:text-[#9aa5c3] focus:border-[#447bff] focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-[#447bff] py-2 text-sm font-medium text-white transition hover:bg-[#5d8cff]"
        >
          Enviar cast
        </button>
      </form>
    </div>
  );
}

export default MiniChat;
