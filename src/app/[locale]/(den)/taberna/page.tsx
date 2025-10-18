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
    <div className="space-y-6 text-[color:var(--foreground)]">
      <section className="wolf-card rounded-[2.1rem] border border-[rgba(123,255,104,0.22)] px-6 py-6 shadow-[0_35px_105px_-75px_rgba(0,0,0,0.75)]">
        <div className="space-y-5">
          <iframe
            src={tabernaUrl}
            title="Wolf Den Taberna"
            allow={iframeAllow}
            className="aspect-[16/10] w-full rounded-[1.8rem] border border-[rgba(123,255,104,0.18)] bg-[rgba(13,13,13,0.75)] sm:min-h-[420px]"
          />
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="wolf-pill bg-[rgba(123,255,120,0.12)] text-xs uppercase tracking-[0.28em] text-[color:var(--wolf-emerald)]">
              Live Mission Stream
            </span>
            <div className="ml-auto flex items-center gap-3">
              <a
                href="https://github.com/wolfcito/wolf-den"
                target="_blank"
                title="GitHub"
                aria-label="GitHub"
                rel="noopener"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(123,255,104,0.2)] bg-[rgba(13,13,13,0.7)] text-[color:var(--foreground)] transition hover:border-[rgba(123,255,104,0.32)] hover:text-[color:var(--wolf-emerald)]"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(123,255,104,0.2)] bg-[rgba(13,13,13,0.7)] text-[color:var(--foreground)] transition hover:border-[rgba(123,255,104,0.32)] hover:text-[color:var(--wolf-emerald)]"
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
        </div>
      </section>
    </div>
  );
}
