"use client";

import Link from "next/link";
import { Phone, ChevronRight, ShieldCheck, Star, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star,        label: "5-Star Rated" },
  { icon: MapPin,      label: "18 Cities Served" },
  { icon: Clock,       label: "24-Hr Emergency" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3528] via-[#2D5A47] to-[#1a3528]" />

      {/* Decorative roofline shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large angled roof shape - top right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-[0.06]"
          style={{
            background: "white",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            borderRadius: "0 0 0 40%",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Warm glow accent */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4883E]/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-3xl">

          {/* Label */}
          <motion.div {...fade(0.1)} className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#D4883E]/20 border border-[#D4883E]/30 text-[#E8A85E] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4883E] animate-pulse" />
              Seattle&apos;s Roofing Experts
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fade(0.2)}
            className="text-white leading-[1.08] mb-6"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 4.6rem)",
              fontFamily: "var(--font-display)",
            }}
          >
            Seattle&apos;s Roof Repair &amp;{" "}
            <span className="text-[#D4883E]">Replacement</span>{" "}
            Experts.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            {...fade(0.3)}
            className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Licensed, insured, and up on roofs across the Puget Sound.
            Free estimates, honest pricing — no pressure, no upsells.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.4)} className="flex flex-col sm:flex-row gap-3 mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(212,136,62,0.4)] hover:shadow-[0_6px_28px_rgba(212,136,62,0.55)] hover:-translate-y-0.5"
            >
              Book a Free Roof Assessment
              <ChevronRight size={18} />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/10"
            >
              <Phone size={16} />
              {PHONE}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fade(0.55)}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/60">
                <Icon size={15} className="text-[#D4883E]" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-[#FAF3EB]">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
