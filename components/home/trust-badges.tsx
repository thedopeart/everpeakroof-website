"use client";

import { motion } from "framer-motion";

// Placeholder badge data — swap these for real manufacturer logo SVGs/PNGs when available
const BADGES = [
  { name: "GAF Certified",          detail: "Certified Contractor",    abbr: "GAF" },
  { name: "Owens Corning",          detail: "Preferred Contractor",    abbr: "OC" },
  { name: "CertainTeed",            detail: "SELECT ShingleMaster",    abbr: "CT" },
  { name: "BBB Accredited",         detail: "A+ Rating",               abbr: "BBB" },
  { name: "Licensed & Insured",     detail: "WA Lic. #EVERPRL123XX",  abbr: "WA" },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#FAF3EB] border-y border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-6">
          Certifications &amp; Partnerships
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center gap-1.5 group"
            >
              {/* Placeholder logo — replace with <Image> when real logos are available */}
              <div className="w-16 h-10 rounded-lg bg-white border border-[#E5DDD3] flex items-center justify-center shadow-[0_1px_3px_rgba(45,90,71,0.06)] group-hover:shadow-[0_2px_8px_rgba(45,90,71,0.10)] transition-shadow">
                <span className="text-xs font-black text-[#2D5A47] tracking-tight">{badge.abbr}</span>
              </div>
              <div className="text-center">
                <div className="text-[10px] font-bold text-[#2C2C2C] leading-tight">{badge.name}</div>
                <div className="text-[9px] text-[#9CA3AF]">{badge.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
