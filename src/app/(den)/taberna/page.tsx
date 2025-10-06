const DEFAULT_TABERNA_URL = "https://wolf-labs.vercel.app";

function normalizeUrl(rawUrl: string) {
  if (!rawUrl) return DEFAULT_TABERNA_URL;
  if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
    return rawUrl;
  }
  const sanitized = rawUrl.replace(/^\/+/, "");
  return `https://${sanitized}`;
}

export default function TabernaPage() {
  const configuredUrl = process.env.NEXT_PUBLIC_TABERNA_URL ?? "";
  const tabernaUrl = normalizeUrl(configuredUrl || DEFAULT_TABERNA_URL);

  return (
    <div className="grid gap-6 text-[#0f1621]">
    <section className="flex flex-col justify-between gap-6 bg-white py-6">
          <div className="space-y-4">

            <iframe
          src={tabernaUrl}
          title="Wolf Den Taberna"
          allow="camera; microphone; fullscreen"
          className="h-[72vh] w-full rounded-[1.75rem] border border-[#d1d7eb]"
        />
          </div>
        </section>
    </div>
  );
}
