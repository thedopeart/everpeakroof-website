"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Clock } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    name: "Licensed & Insured",
    detail: "WA Contractor Lic. #EVERPRL743KE",
    color: "#2D5A47",
  },
  {
    icon: FileText,
    name: "Free Written Estimates",
    detail: "Detailed quote before any work begins",
    color: "#2D5A47",
  },
  {
    icon: Clock,
    name: "7-Day Service",
    detail: "Emergency calls answered any day",
    color: "#2D5A47",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#FAF3EB] border-b border-[#E5DDD3]">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-7">
        <div className="flex flex-wrap justify-center items-stretch gap-5 md:gap-8">
          {BADGES.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 bg-white rounded-xl border border-[#E5DDD3] px-5 py-4 shadow-[0_1px_4px_rgba(45,90,71,0.06)]"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-[#2D5A47]/10">
                  <Icon size={20} className="text-[#2D5A47]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1E3D30] leading-tight">{badge.name}</div>
                  <div className="text-xs text-[#374151] mt-0.5">{badge.detail}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
