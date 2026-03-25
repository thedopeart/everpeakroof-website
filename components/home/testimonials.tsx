"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    location: "Kirkland, WA",
    rating: 5,
    text: "Had a slow leak that two other companies quoted me $4,000 to fix. Everpeak came out the same day, found the real issue — bad flashing around a vent boot — and fixed it for $380. Honest, fast, and didn't try to upsell me on a full replacement I didn't need.",
    service: "Roof Repair",
  },
  {
    name: "Sarah K.",
    location: "Seattle, WA",
    rating: 5,
    text: "Full roof replacement on a 1940s Capitol Hill house with steep pitch and old cedar shake. They handled the permit, tear-off, decking repairs, and installed architectural shingles. Crew was professional and cleaned up every day. Finished on schedule.",
    service: "Roof Replacement",
  },
  {
    name: "David R.",
    location: "Bellevue, WA",
    rating: 5,
    text: "Wind storm knocked a tree branch through my roof at 11pm. Called Everpeak and someone actually answered. They had it tarped within two hours and came back the next morning to do the repair. Handled the insurance claim documentation too.",
    service: "Emergency Repair",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="max-w-xl mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Customer Reviews</p>
          <h2
            className="text-[#1E3D30] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
          >
            What Homeowners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col bg-[#FAF3EB] rounded-2xl p-7 border border-[#E5DDD3]"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={15} className="fill-[#D4883E] text-[#D4883E]" />
                ))}
              </div>

              {/* Quote */}
              <Quote size={20} className="text-[#D4883E]/30 mb-3 -mt-1" />
              <p className="text-[#4A5568] text-sm leading-relaxed flex-1">{r.text}</p>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-[#E5DDD3]">
                <p className="font-bold text-[#1E3D30] text-sm">{r.name}</p>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-xs text-[#9CA3AF]">{r.location}</span>
                  <span className="text-xs font-semibold text-[#2D5A47] bg-[#2D5A47]/10 px-2 py-0.5 rounded-full">
                    {r.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google rating */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[#6B7280]">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4883E] text-[#D4883E]" />
            ))}
          </div>
          <span className="font-bold text-[#2C2C2C]">5.0</span>
          <span>on Google</span>
        </div>
      </div>
    </section>
  );
}
