"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, HardHat, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book a Free Inspection",
    desc: "Call or fill out the form. We'll get you on the schedule fast, usually within a day. No commitment, no charge.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Get a Written Quote",
    desc: "We look at the roof, document what we find, and hand you a detailed written quote. No surprises on the bill.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "We Do the Work",
    desc: "Same crew that quoted it does the job. We clean up each day and keep you in the loop throughout.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Walk It With You",
    desc: "We walk the finished job together, answer your questions, and hand over your warranty docs before we leave.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-[#1E3D30] relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">From Call to Complete</p>
          <h2
            className="text-white leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontFamily: "var(--font-display)",
            }}
          >
            Four Steps. No Runaround.
          </h2>
          <p className="mt-3 text-white/50 text-base max-w-md mx-auto">
            Here&apos;s exactly what happens when you call Everpeak.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.09] transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#D4883E] flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-4xl font-black text-[#D4883E]/20">{step.step}</span>
                </div>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
