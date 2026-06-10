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

  const w = window as unknown as {
    gtag?: (command: string, eventName: string, params?: GtagParams) => void;
    dataLayer?: GtagParams[];
  };

  // Push to the GTM dataLayer (GTM-PLNHDTLG) so the event can be used as a
  // Custom Event trigger inside Tag Manager.
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...clean });
  }

  // Also fire directly to gtag for the standalone GA4 tag, if present.
  if (typeof w.gtag === "function") {
    w.gtag("event", name, clean);
  }
}
