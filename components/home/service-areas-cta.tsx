"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ServiceAreasCta() {
  return (
    <Link
      href="/service-areas"
      onClick={() =>
        trackEvent("cta_click", { cta: "service_area_map", location: "home_service_areas" })
      }
      className="inline-flex items-center gap-2 bg-[#2D5A47] hover:bg-[#1E3D30] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
    >
      Explore the service area map
      <ArrowRight size={15} />
    </Link>
  );
}
