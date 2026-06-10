"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Global click listener that fires a GA4 `phone_call_click` event whenever any
// tel: link is clicked, anywhere on the site. This lets us track phone-call
// intent without converting every server-rendered <a href="tel:"> into a client
// component. Mounted once in app/layout.tsx.
export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      const link = el?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;
      trackEvent("phone_call_click", {
        phone_number: link.getAttribute("href")?.replace("tel:", "") ?? "",
        link_text: link.textContent?.trim().slice(0, 80) || undefined,
      });
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
