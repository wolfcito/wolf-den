const NGROK_WARNING_PARAM = "ngrok-skip-browser-warning";

export function normalizeSelfEndpoint(rawEndpoint: string): string {
  if (!rawEndpoint) {
    return rawEndpoint;
  }

  try {
    const url = new URL(rawEndpoint);

    if (
      (url.hostname.endsWith("ngrok-free.app") ||
        url.hostname.endsWith("ngrok-free.dev")) &&
      !url.searchParams.has(NGROK_WARNING_PARAM)
    ) {
      url.searchParams.set(NGROK_WARNING_PARAM, "true");
      return url.toString();
    }

    return rawEndpoint;
  } catch {
    return rawEndpoint;
  }
}
