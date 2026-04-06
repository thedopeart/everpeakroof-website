import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin, Phone, ChevronRight,
  CloudRain, ShieldCheck, Clock, Star,
} from "lucide-react";
import { cities } from "@/lib/cities";
import { featuredServices } from "@/lib/services";

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";

const HERO_IMAGES = [
  "/images/roofer-installing.jpg",
  "/images/shingle-replacement.jpg",
  "/images/worker-on-roof.jpg",
  "/images/roof-repair-progress.jpg",
  "/images/shingle-install-hands.jpg",
  "/images/craftsman-roof-build.jpg",
];

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = cities.find((c) => c.slug === citySlug);
  if (!cityData) return {};

  const { name, description } = cityData;
  return {
    title: `Roofing in ${name}, WA | Repair, Replacement & Free Estimates`,
    description: `${description.slice(0, 155)}...`,
    alternates: { canonical: `https://everpeakroof.com/${citySlug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const cityData = cities.find((c) => c.slug === citySlug);
  if (!cityData) notFound();

  const { name, tagline, description, neighborhoods, commonIssues, roofTypes, buildingAge, mapQuery } = cityData;
  const cityIndex = cities.findIndex((c) => c.slug === citySlug);
  const heroImage = HERO_IMAGES[cityIndex % HERO_IMAGES.length];
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FAF3EB]">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative h-[420px] md:h-[480px] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={`Roofing work in ${name}, WA`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D30]/90 via-[#1E3D30]/50 to-transparent" />
        <div className="relative w-full max-w-5xl mx-auto px-5 md:px-8 pb-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-white/80 font-semibold">Roofing in {name}</span>
          </nav>
          <div className="flex items-center gap-2 text-sm text-[#D4883E] font-bold uppercase tracking-wider mb-3">
            <MapPin size={14} />
            {name}, WA
          </div>
          <h1
            className="font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Roofing in {name}
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl">{tagline}</p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-14">

        {/* Intro */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-2">
            <p className="text-[#374151] text-lg leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {roofTypes.map((rt) => (
                <span key={rt} className="px-3 py-1.5 bg-[#2D5A47]/8 border border-[#2D5A47]/15 text-[#2D5A47] text-xs font-bold rounded-full">
                  {rt}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#374151]">
              <span className="font-bold text-[#1E3D30]">Typical housing:</span> {buildingAge}
            </p>
          </div>

          {/* Sidebar CTA */}
          <div>
            <div className="bg-[#2D5A47] rounded-2xl p-7 text-white sticky top-28">
              <h3 className="font-bold text-lg mb-2">Free Estimate in {name}</h3>
              <p className="text-white/65 text-sm mb-5">
                Licensed, insured roofing in {name}. We respond fast. No commitment required.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold py-3.5 rounded-xl transition-colors text-sm mb-3"
              >
                Request Estimate
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors"
              >
                <Phone size={14} />
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        {/* ── Services ────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-black text-[#1E3D30] text-2xl tracking-tight mb-6">
            Roofing Services in {name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex flex-col bg-white rounded-xl border border-[#E5DDD3] overflow-hidden hover:shadow-[0_6px_20px_rgba(45,90,71,0.10)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {svc.image && (
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={`${svc.name} in ${name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#1E3D30] text-sm mb-1 group-hover:text-[#2D5A47] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-xs text-[#374151] leading-relaxed flex-1">
                    {svc.shortDesc.split(".")[0]}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Common Issues ───────────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-black text-[#1E3D30] text-2xl tracking-tight mb-6">
            Common Roofing Issues in {name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {commonIssues.map((issue, i) => {
              const icons = [
                /* Droplet / moisture */
                <svg key="drop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>,
                /* Wind */
                <svg key="wind" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17.7 7.7A2.5 2.5 0 0 1 17 13H2" /><path d="M9.6 4.6A2 2 0 0 1 11 8H2" /><path d="M12.6 19.4A2 2 0 0 0 14 16H2" /></svg>,
                /* Leaf / moss */
                <svg key="leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 20 4 20 4s-1 4.5-3 10.1A7 7 0 0 1 11 20z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 12 13" /></svg>,
                /* Clock / aging */
                <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
              ];
              const colors = ["#2563EB", "#D4883E", "#2D5A47", "#7C3AED"];
              const bgColors = ["#2563EB12", "#D4883E12", "#2D5A4712", "#7C3AED12"];
              const ci = i % 4;
              return (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-xl border border-[#E5DDD3] p-6 hover:shadow-[0_4px_16px_rgba(45,90,71,0.08)] transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: bgColors[ci], color: colors[ci] }}
                  >
                    {icons[ci]}
                  </div>
                  <p className="text-sm text-[#374151] leading-relaxed pt-1.5">{issue}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Neighborhoods + Map ──────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-black text-[#1E3D30] text-2xl tracking-tight mb-6">
            Neighborhoods We Serve in {name}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="px-3.5 py-2 bg-white border border-[#E5DDD3] rounded-lg text-sm font-semibold text-[#374151] hover:border-[#2D5A47]/30 hover:text-[#2D5A47] transition-colors"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                We work across all of {name} and surrounding areas. If you're not sure whether we cover your neighborhood, give us a call. We probably do.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[#E5DDD3] h-[280px]">
              <Image
                src={HERO_IMAGES[(cityIndex + 3) % HERO_IMAGES.length]}
                alt={`Roofing service area in ${name}, WA`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D30]/70 to-[#1E3D30]/20" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <MapPin size={14} className="text-[#D4883E]" />
                  {name}, WA
                </div>
                <p className="text-white/70 text-xs">Serving {neighborhoods.length} neighborhoods across {name}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Everpeak ────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-black text-[#1E3D30] text-2xl tracking-tight mb-6">
            Why {name} Homeowners Choose Everpeak
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, title: "Licensed & Insured", desc: "WA State contractor license, full liability and workers' comp coverage on every job.", color: "#2D5A47" },
              { icon: Clock, title: "Fast Response", desc: "We respond fast. No commitment required. We don't leave you waiting.", color: "#D4883E" },
              { icon: CloudRain, title: "PNW Specialists", desc: `We know ${name}'s weather, building styles, and what roofing materials hold up here.`, color: "#2563EB" },
              { icon: Star, title: "Honest Pricing", desc: "Detailed written quotes. No hidden fees, no pressure to upgrade what you don't need.", color: "#7C3AED" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-xl border border-[#E5DDD3] p-6 hover:shadow-[0_4px_16px_rgba(45,90,71,0.08)] transition-shadow">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${item.color}12` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-[#1E3D30] text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-[#374151] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CTA Banner ──────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] rounded-2xl p-10 md:p-14 text-center mb-16">
          <h2 className="font-black text-white text-2xl md:text-3xl tracking-tight mb-3">
            Need a roofer in {name}?
          </h2>
          <p className="text-white/60 text-base mb-8 max-w-md mx-auto">
            Free estimates, no obligation. We'll come out, look at your roof, and give you a straight answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)]"
            >
              Get a Free Estimate
              <ChevronRight size={16} />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-[#E8A85E] transition-colors"
            >
              <Phone size={16} className="text-[#D4883E]" />
              {PHONE}
            </a>
          </div>
        </section>

        {/* ── Other Cities ────────────────────────────────── */}
        <section>
          <h3 className="font-bold text-[#1E3D30] text-lg mb-4">Other Cities We Serve</h3>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="px-3.5 py-2 bg-white border border-[#E5DDD3] rounded-full text-sm font-semibold text-[#374151] hover:text-[#2D5A47] hover:border-[#2D5A47]/40 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
