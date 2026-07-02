import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ChevronRight, ShieldCheck, Clock, Navigation } from "lucide-react";
import { cities } from "@/lib/cities";
import ServiceAreaLocator from "@/components/service-area-locator";
import JsonLd from "@/components/shared/json-ld";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";
const BASE = "https://everpeakroof.com";

export const metadata: Metadata = {
  title: "Roofing Service Areas: Seattle & Greater Puget Sound",
  description:
    "See every city Everpeak Roofing covers across Greater Puget Sound. Use our interactive map to find roof repair and replacement in Seattle, Bellevue, Tacoma, and 18 more cities.",
  alternates: { canonical: `${BASE}/service-areas` },
  openGraph: {
    url: `${BASE}/service-areas`,
    title: "Roofing Service Areas | Seattle & Greater Puget Sound",
    description:
      "Interactive map of every city Everpeak Roofing serves across Greater Puget Sound, from Seattle to the Eastside, South Sound, and North Sound.",
  },
};

export default function ServiceAreasPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: BASE },
    { name: "Service Areas", url: `${BASE}/service-areas` },
  ]);

  const cityList = itemListSchema(
    "Everpeak Roofing Service Areas",
    `${BASE}/service-areas`,
    cities.map((c, i) => ({
      name: `Roofing in ${c.name}, WA`,
      url: `${BASE}/${c.slug}`,
      position: i + 1,
    }))
  );

  return (
    <div className="min-h-screen bg-[#FAF3EB]">
      <JsonLd data={breadcrumbs} />
      <JsonLd data={cityList} />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden">
        {/* subtle map grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-white/45 mb-5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-white/80 font-semibold">Service Areas</span>
          </nav>

          <div className="flex items-center gap-2 text-sm text-[#E8A85E] font-bold uppercase tracking-wider mb-3">
            <Navigation size={15} />
            Where We Work
          </div>
          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-4 max-w-5xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
          >
            Roofing across Greater Puget Sound
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-4xl mb-8">
            We cover 21 cities within about 50 miles of downtown Seattle. Find your area on the map below, then jump straight to local roofing details for your city.
          </p>

          {/* quick stats */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: MapPin, label: "21 cities served" },
              { icon: ShieldCheck, label: "Licensed & insured" },
              { icon: Clock, label: "Fast local response" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm font-semibold text-white">
                  <Icon size={15} className="text-[#E8A85E]" />
                  {s.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Interactive locator ───────────────────────────── */}
      <section className="py-12 md:py-16">
        <ServiceAreaLocator />
      </section>

      {/* ── Full city index (SEO + crawlable links) ───────── */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-black text-[#1E3D30] text-xl md:text-2xl tracking-tight mb-1.5">
            Every city we serve
          </h2>
          <p className="text-sm text-[#6B7280] mb-6">
            Each city has its own page with local neighborhoods, common roof problems, and pricing guidance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl border border-[#E5DDD3] bg-white font-semibold text-[#1E3D30] text-sm hover:border-[#2D5A47] hover:bg-[#2D5A47] hover:text-white transition-all duration-150"
              >
                {c.name}
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] rounded-2xl p-10 md:p-14 text-center">
            <h2 className="font-black text-white text-2xl md:text-3xl tracking-tight mb-3">
              Not sure if we reach you?
            </h2>
            <p className="text-white/60 text-base mb-8 max-w-2xl mx-auto">
              If you&apos;re anywhere in the Seattle metro, give us a call. Free estimates, no obligation.
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
          </div>
        </div>
      </section>
    </div>
  );
}
