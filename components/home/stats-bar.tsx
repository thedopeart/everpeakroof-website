"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "500+",  label: "Roofs Completed" },
  { value: "18",    label: "Cities Served" },
  { value: "5★",    label: "Average Rating" },
  { value: "24/7",  label: "Emergency Service" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#2D5A47]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl md:text-4xl font-black text-[#D4883E] leading-none">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
