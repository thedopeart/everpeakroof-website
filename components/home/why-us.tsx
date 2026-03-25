"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, DollarSign, ThumbsUp, Wrench, FileCheck } from "lucide-react";

const REASONS = [
  {
    icon: CheckCircle2,
    title: "Licensed & Insured",
    desc: "We carry full liability and workers' comp coverage. You're protected on every job, no exceptions.",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    desc: "We call back fast. Most estimates are scheduled within 24 hours. Emergency calls answered around the clock.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    desc: "Detailed written estimates before any work starts. No hidden fees, no upsells, no surprises on the final bill.",
  },
  {
    icon: Wrench,
    title: "Built for PNW Weather",
    desc: "Seattle rain, moss, wind, and cold require materials and installation methods that differ from drier climates. We know the difference.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claims Handled",
    desc: "We work directly with adjusters, handle storm documentation, and can file claims on your behalf.",
  },
  {
    icon: ThumbsUp,
    title: "Workmanship Warranty",
    desc: "All installation work is warranted. Manufacturer warranties on materials. We stand behind every job we do.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="max-w-xl mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Why Everpeak</p>
          <h2
            className="font-black text-[#1E3D30] leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            We&apos;re Not the Cheapest.<br />
            <span className="text-[#2D5A47]">We&apos;re the Most Reliable.</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-base leading-relaxed">
            There&apos;s no shortage of roofers in the Puget Sound. Here&apos;s what makes the difference between a job you feel good about and one you regret.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF3EB] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={19} className="text-[#2D5A47]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3D30] mb-1">{r.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
