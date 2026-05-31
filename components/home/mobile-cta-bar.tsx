"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";

export default function MobileCtaBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#1E3D30] text-white px-4 py-3 flex items-center justify-between gap-3">
      {/* Phone */}
      <a
        href="tel:+14255057142"
        className="flex items-center gap-2 font-bold text-sm text-white"
      >
        <Phone size={16} className="shrink-0" />
        (425) 505-7142
      </a>

      {/* Right side: estimate link + dismiss */}
      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="bg-[#D4883E] text-white font-bold text-sm px-4 py-2 rounded-lg whitespace-nowrap"
        >
          Free Estimate
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="text-white/60 hover:text-white p-1"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
