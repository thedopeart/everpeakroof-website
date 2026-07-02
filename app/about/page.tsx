import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Hammer,
  Users,
  CheckSquare,
  ChevronRight,
  Phone,
  Star,
  MapPin,
  Clock,
  BadgeCheck,
  CloudRain,
  Sprout,
  Wind,
} from "lucide-react";
import JsonLd from "@/components/shared/json-ld";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import TrustBadges from "@/components/home/trust-badges";
import StatsBar from "@/components/home/stats-bar";
import CtaBanner from "@/components/home/cta-banner";
import MobileCtaBar from "@/components/home/mobile-cta-bar";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

export const metadata: Metadata = {
  title: "About Our Seattle Roofing Company",
  description:
    "Everpeak Roofing is a Seattle based roofing company delivering reliable roof inspections, repairs, and replacements built for the Pacific Northwest.",
  alternates: { canonical: "https://everpeakroof.com/about" },
};

const HERO_TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "5.0 on Google" },
  { icon: MapPin, label: "20+ cities" },
  { icon: Clock, label: "7 days a week" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity first",
    desc: "Honest recommendations, transparent pricing, and clear communication from the first inspection through project completion.",
  },
  {
    icon: Hammer,
    title: "Quality workmanship",
    desc: "Every project is done with attention to detail and roofing best practices. We do the job right and never cut corners.",
  },
  {
    icon: Users,
    title: "Easy to work with",
    desc: "A roofing project can feel overwhelming. We keep it simple with timely communication, straight guidance, and a smooth experience start to finish.",
  },
  {
    icon: CheckSquare,
    title: "We stand behind it",
    desc: "When we make a commitment, we keep it. We treat every home with care and respect, and we own our work.",
  },
];

const PNW_CHALLENGES = [
  { icon: CloudRain, label: "Relentless rain", note: "Long, wet Pacific Northwest seasons" },
  { icon: Sprout, label: "Moss and algae", note: "Shaded, damp roof surfaces" },
  { icon: Wind, label: "Wind-driven storms", note: "Convergence-zone and coastal gusts" },
  { icon: Clock, label: "Aging systems", note: "Worn shingles, flashing, and seals" },
];

const CREDENTIALS = [
  { label: "Business", value: "Everpeak LLC" },
  { label: "License", value: "WA State Contractor #EVERPRL743KE" },
  { label: "Coverage", value: "Fully insured" },
  { label: "Service area", value: "21 cities, greater Seattle metro" },
];

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://everpeakroof.com" },
    { name: "About", url: "https://everpeakroof.com/about" },
  ]);

  return (
    <div className="bg-[#FAF3EB]">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbs} />

      {/* ───────── HERO ───────── */}
      <section className="relative isolate overflow-hidden bg-[#1E3D30]">
        <Image
          src="/images/craftsman-roof-build.jpg"
          alt="Everpeak roofing crew building a roof in the Seattle area"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#13271d]/92 via-[#1E3D30]/85 to-[#13271d]/92" />
        <div
          className="absolute -top-28 -right-24 w-[520px] h-[520px] opacity-[0.07] pointer-events-none"
          style={{ background: "white", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", borderRadius: "0 0 0 40%" }}
        />
        <div className="absolute top-1/3 right-1/5 w-96 h-96 rounded-full bg-[#D4883E]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-20 md:pb-24">
          <nav className="flex items-center gap-1.5 text-sm text-white/55 mb-7">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-semibold">About</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 bg-[#D4883E]/20 border border-[#D4883E]/30 text-[#E8A85E] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4883E]" />
              About Everpeak
            </span>

            <h1
              className="text-white leading-[1.08] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", fontFamily: "var(--font-display)" }}
            >
              Seattle roofers who give you <span className="text-[#E8A85E]">straight answers</span>
            </h1>

            <p className="text-white/85 font-medium text-lg md:text-xl leading-relaxed mb-9 max-w-2xl">
              Locally owned, licensed and insured, and up on roofs across the Puget Sound. Honest recommendations and no pressure, from the first inspection to the final cleanup.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(212,136,62,0.4)] hover:shadow-[0_6px_28px_rgba(212,136,62,0.55)] hover:-translate-y-0.5"
              >
                Get a Free Estimate
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

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-5 gap-y-2">
              {HERO_TRUST.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[13px] text-white font-semibold whitespace-nowrap">
                  <Icon size={14} className="text-[#D4883E] shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-[#FAF3EB]">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ───────── TRUST STRIP ───────── */}
      <TrustBadges />

      {/* ───────── WHO WE ARE ───────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        {/* Who we are, editorial 2-col */}
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-3">Who we are</p>
            <h2 className="text-[#1E3D30] text-3xl md:text-4xl leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Built for Pacific Northwest roofs
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed mb-5">
              At Everpeak Roofing, a roof is more than shingles and flashing. It&apos;s what protects your family, your home, and your investment. So we keep it straightforward: honest communication, dependable service, and quality craftsmanship.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Locally owned and serving homeowners across the Seattle area, we build for the region&apos;s demanding climate, not a generic template.
            </p>
          </div>

          {/* What we build for, dark challenges card */}
          <div className="bg-[#1E3D30] rounded-2xl p-7 text-white relative overflow-hidden">
            <div
              className="absolute -top-16 -right-16 w-56 h-56 opacity-[0.06] pointer-events-none"
              style={{ background: "white", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", borderRadius: "0 0 0 40%" }}
            />
            <p className="text-[#E8A85E] font-bold text-xs uppercase tracking-wider mb-5 relative">What we build for</p>
            <div className="flex flex-col divide-y divide-white/10 relative">
              {PNW_CHALLENGES.map(({ icon: Icon, label, note }) => (
                <div key={label} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                  <div className="w-9 h-9 rounded-lg bg-[#D4883E]/15 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-[#E8A85E]" />
                  </div>
                  <div>
                    <div className="font-bold text-[15px] leading-tight">{label}</div>
                    <div className="text-white/55 text-xs mt-0.5">{note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-3">What we stand for</p>
          <h2 className="text-[#1E3D30] text-3xl md:text-4xl mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Our values
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {VALUES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative bg-white rounded-2xl border border-[#E5DDD3] p-7 overflow-hidden hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(45,90,71,0.10)] hover:border-[#2D5A47]/30 transition-all duration-300"
                >
                  <span className="absolute top-3 right-5 font-black text-[5rem] leading-none text-[#1E3D30]/[0.05] select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D5A47] to-[#1E3D30] flex items-center justify-center mb-5 shadow-[0_6px_16px_rgba(30,61,48,0.25)]">
                    <Icon size={22} className="text-[#E8A85E]" />
                  </div>
                  <h3 className="relative font-black text-[#1E3D30] text-lg mb-2">{item.title}</h3>
                  <p className="relative text-sm text-[#374151] leading-relaxed">{item.desc}</p>
                  <div className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full bg-[#D4883E] transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Built on experience, text + image */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-2">Built on experience</p>
            <h2 className="font-black text-[#1E3D30] text-2xl mb-5">A roofer first, a company second</h2>
            <p className="text-[#374151] leading-relaxed">
              Everpeak Roofing was founded by a roofing professional who learned the trade in the field and by helping homeowners through the replacement process. That hands-on background, plus a solid business foundation, shaped a company built on professionalism, transparency, and long-term relationships.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#E5DDD3]">
            <Image
              src="/images/worker-on-roof.jpg"
              alt="Everpeak roofer working on a roof in the Seattle area"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D30]/30 to-transparent" />
          </div>
        </div>

        {/* Mission + Credentials */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-[#1E3D30] rounded-2xl p-8 text-white relative overflow-hidden">
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.06] pointer-events-none"
              style={{ background: "white", clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            <p className="text-[#E8A85E] font-bold text-xs uppercase tracking-wider mb-3 relative">Our mission</p>
            <p className="text-white/90 leading-relaxed relative">
              Provide high-quality roofing that protects Pacific Northwest homes, with a customer experience built on trust, communication, and solid service.
            </p>
            <p className="text-white/65 leading-relaxed mt-4 text-sm relative">
              Replacement, repair, or inspection: our goal is to help you make informed decisions and feel confident at every step.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E5DDD3] p-8">
            <div className="flex items-center gap-2 mb-5">
              <BadgeCheck size={20} className="text-[#2D5A47]" />
              <h2 className="font-black text-[#1E3D30] text-xl">Credentials</h2>
            </div>
            <dl className="flex flex-col">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 py-3 border-b border-[#F0E6D8] last:border-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[#6B7280] sm:w-28 shrink-0">{c.label}</dt>
                  <dd className="text-sm font-semibold text-[#1E3D30]">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ───────── STATS + FINAL CTA ───────── */}
      <StatsBar />
      <CtaBanner />
      <MobileCtaBar />
    </div>
  );
}
