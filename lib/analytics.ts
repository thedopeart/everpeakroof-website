// Lightweight GA4 event helper. Fires through the gtag instance injected by
// <GoogleAnalytics> (@next/third-parties) in app/layout.tsx.
// Safe to call from anywhere: no-ops on the server or before gtag loads.

type GtagParams = Record<string, unknown>;

export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;

  // Strip undefined/empty values so we don't record blank params.
  const clean: GtagParams = {};
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== "") clean[k] = v;
  }

  const w = window as unknown as { dataLayer?: GtagParams[] };

  // GA4 runs through GTM (container GTM-PLNHDTLG). Push to the dataLayer so the
  // event fires its Custom Event trigger → GA4 event tag. (We intentionally do
  // NOT also call gtag directly, which would double-count via GTM's own gtag.)
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...clean });
}
