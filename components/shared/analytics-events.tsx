"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// One global click listener for the whole site, mounted once in app/layout.tsx.
// It tracks the two conversion-relevant button types without converting every
// server-rendered <a> into a client component:
//   1. phone_call_click, any tel: link, anywhere.
//   2. cta_click, any link to the contact/estimate page (the primary CTA),
//                         plus any element opting in with a data-cta attribute.
// generate_lead still fires from the contact form itself on submit.
export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el || !el.closest) return;

      // 1) Phone-call intent
      const tel = el.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (tel) {
        trackEvent("phone_call_click", {
          phone_number: tel.getAttribute("href")?.replace("tel:", "") ?? "",
          link_text: tel.textContent?.trim().slice(0, 80) || undefined,
          page_path: window.location.pathname,
        });
        return;
      }

      // 2) Estimate / contact CTAs + any explicit data-cta element
      const cta = el.closest(
        'a[href="/contact"], a[href^="/contact?"], a[href^="/contact#"], [data-cta]'
      ) as HTMLElement | null;
      if (cta) {
        const label =
          cta.getAttribute("data-cta") ||
          cta.textContent?.trim().slice(0, 60) ||
          "cta";
        trackEvent("cta_click", {
          cta_text: label,
          destination: cta.getAttribute("href") || undefined,
          page_path: window.location.pathname,
        });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
