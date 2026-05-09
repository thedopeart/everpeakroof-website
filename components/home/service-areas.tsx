"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { tier1Cities, tier2Cities, tier3Cities } from "@/lib/cities";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-pad bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Where We Work</p>
          <h2
            className="text-[#1E3D30] leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
          >
            20 Cities Across<br />
            <span className="text-[#2D5A47]">Greater Puget Sound</span>
          </h2>
          <p className="text-[#374151] text-base max-w-md">
            From Seattle proper to the Eastside, South Sound, and everything in between. Within 50 miles of downtown Seattle, we serve your area.
          </p>
        </div>

        {/* Tier 1 — primary cities, larger */}
        <div className="mb-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#374151]/50 mb-3">Primary Cities</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tier1Cities.map((city, i) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={`/${city.slug}`}
                  className="group flex items-center justify-between gap-2 px-5 py-4 rounded-xl border border-[#2D5A47]/25 bg-white font-bold text-[#1E3D30] text-sm hover:border-[#2D5A47] hover:bg-[#2D5A47] hover:text-white transition-all duration-150"
                >
                  {city.name}
                  <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2 + 3 — all other cities, uniform */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#374151]/50 mb-3">Extended Coverage</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {[...tier2Cities, ...tier3Cities].map((city, i) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
              >
                <Link
                  href={`/${city.slug}`}
                  className="group flex items-center justify-between gap-1.5 px-4 py-3 rounded-xl border border-[#E5DDD3] bg-white text-[#374151] font-medium text-sm hover:border-[#2D5A47]/40 hover:text-[#2D5A47] hover:bg-[#2D5A47]/5 transition-all duration-150"
                >
                  <span>{city.name}</span>
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-[#374151]/60 text-center">
          Don&apos;t see your city? Call us. We likely serve your area.
        </p>
      </div>
    </section>
  );
}
