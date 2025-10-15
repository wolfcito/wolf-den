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
  let iframeAllow = "camera; microphone; fullscreen";

  try {
    const origin = new URL(tabernaUrl).origin;
    iframeAllow = `camera ${origin}; microphone ${origin}; fullscreen`;
  } catch {
    iframeAllow = "camera; microphone; fullscreen";
  }

  return (
    <div className="grid gap-6 text-[#0f1621]">
      <section className="flex flex-col justify-between gap-6 bg-white py-6">
        <div className="space-y-4">
          <iframe
            src={tabernaUrl}
            title="Wolf Den Taberna"
            allow={iframeAllow}
            className="aspect-[16/10] w-full rounded-2xl border border-[#d1d7eb] sm:min-h-[420px]"
          />
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/wolfcito/wolf-den"
              target="_blank"
              title="GitHub"
              aria-label="GitHub"
              rel="noopener"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d1d7eb] text-[#0f1621] transition hover:bg-[#0f1621] hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.3-3.4-1.3-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-2.2-.3-4.5-1.2-4.5-5.2 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3.9 0 1.7.1 2.5.3 1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.7.7 1 1.6 1 2.7 0 4-2.3 4.9-4.5 5.2.3.2.6.7.6 1.4v2.1c0 .3.2.6.7.5 3.9-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://x.com/AKAwolfcito"
              target="_blank"
              title="X"
              aria-label="X"
              rel="noopener"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d1d7eb] text-[#0f1621] transition hover:bg-[#0f1621] hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M4.5 3h3.1l4 5.7L15.3 3H19l-5.3 7.3L20 21h-3.1l-4.4-6.3-4.4 6.3H4l6.3-8.7L4.5 3Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">X</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
