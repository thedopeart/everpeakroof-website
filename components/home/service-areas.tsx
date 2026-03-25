"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-pad bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Where We Work</p>
            <h2
              className="text-[#1E3D30] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
            >
              18 Cities Across<br />
              <span className="text-[#2D5A47]">Greater Puget Sound</span>
            </h2>
            <p className="mt-3 text-[#6B7280] text-base max-w-md">
              From Seattle proper to the Eastside, South Sound, and everything in between. If you&apos;re within 50 miles of downtown Seattle, we serve your area.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#6B7280] shrink-0">
            <MapPin size={15} className="text-[#2D5A47]" />
            Greater Seattle, WA
          </div>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <Link
                href={`/${city.slug}`}
                className={`
                  group flex items-center justify-between gap-2 px-4 py-3 rounded-xl border
                  font-semibold text-sm transition-all duration-150
                  ${city.tier === 1
                    ? "bg-[#2D5A47] text-white border-[#2D5A47] hover:bg-[#1E3D30]"
                    : city.tier === 2
                    ? "bg-white text-[#2D5A47] border-[#2D5A47]/30 hover:border-[#2D5A47] hover:bg-[#2D5A47]/5"
                    : "bg-white text-[#4A5568] border-[#E5DDD3] hover:border-[#2D5A47]/40 hover:text-[#2D5A47]"
                  }
                `}
              >
                <span>{city.name}</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-6 text-xs text-[#9CA3AF] text-center">
          Don&apos;t see your city? Call us — we likely serve your area.
        </p>
      </div>
    </section>
  );
}
