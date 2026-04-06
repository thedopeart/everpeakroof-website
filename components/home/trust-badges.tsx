"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Scale } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    name: "Licensed & Insured",
    detail: "WA State Contractor License",
    color: "#2D5A47",
  },
  {
    icon: Award,
    name: "GAF Certified",
    detail: "Factory-Certified Installer",
    color: "#B86E2A",
  },
  {
    icon: Scale,
    name: "BBB Accredited",
    detail: "Better Business Bureau",
    color: "#2D5A47",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#FAF3EB] border-y border-[#E5DDD3]">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-10">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#374151] mb-8">
          Credentials
        </p>
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
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${badge.color}12` }}
                >
                  <Icon size={20} style={{ color: badge.color }} />
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
