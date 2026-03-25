"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, HardHat, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Schedule a Free Inspection",
    desc: "Call or fill out the form. We'll schedule a time to come out — usually within 24 hours. No commitment, no charge.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Get a Written Estimate",
    desc: "We inspect the roof, document what we find, and give you a detailed written quote before any work starts. No surprises.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "We Handle the Work",
    desc: "Our crew does the job — same people who quoted it. We clean up each day and keep you updated throughout.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Final Walkthrough",
    desc: "We walk the completed job with you, answer questions, and provide your warranty documentation before we leave.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-[#1E3D30] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">The Process</p>
          <h2
            className="text-white leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontFamily: "var(--font-display)",
            }}
          >
            How It Works
          </h2>
          <p className="mt-3 text-white/50 text-base max-w-md mx-auto">
            No mystery, no runaround. Here&apos;s exactly what happens when you call Everpeak.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col"
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-white/10 -translate-y-0.5 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
                )}

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-[#D4883E]" />
                    </div>
                    <span className="text-3xl font-black text-white/10">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-base">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
