import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronRight, ShieldCheck, Star, MapPin, Clock } from "lucide-react";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const TRUST_BADGES = [
  { icon: Star,        label: "5.0 Rated on Google" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin,      label: "21 Cities Served" },
  { icon: Clock,       label: "7 Days a Week" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cover-hero.jpg"
          alt="Everpeak Roofing, Seattle roofing contractors"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3528]/70 via-[#2D5A47]/55 to-[#1a3528]/70" />
      </div>

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
          <div className="rise rise-1 flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#D4883E]/20 border border-[#D4883E]/30 text-[#E8A85E] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4883E] animate-pulse" />
              Seattle&apos;s Roofing Experts
            </span>
          </div>

          {/* Headline */}
          <h1
            className="rise rise-2 text-white leading-[1.08] mb-6"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 4.6rem)",
              fontFamily: "var(--font-display)",
            }}
          >
            Seattle&apos;s Roof Repair &amp;{" "}
            <span className="text-[#D4883E]">Replacement</span>{" "}
            Experts.
          </h1>

          {/* Subhead */}
          <p
            className="rise rise-3 text-white font-semibold text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Licensed, insured, and up on roofs across the Puget Sound.
            Free estimates, honest pricing. No pressure, no upsells.
          </p>

          {/* CTAs */}
          <div className="rise rise-4 flex flex-col sm:flex-row gap-3 mb-14">
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
          </div>

          {/* Trust badges */}
          <div
            className="rise rise-4 flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white font-bold">
                <Icon size={15} className="text-[#D4883E]" />
                {label}
              </div>
            ))}
          </div>
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
