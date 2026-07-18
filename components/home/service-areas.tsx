import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities";
import ServiceAreasCta from "@/components/home/service-areas-cta";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-pad bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="reveal mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Where We Work</p>
          <h2
            className="text-[#1E3D30] leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
          >
            21 Cities Across<br />
            <span className="text-[#2D5A47]">Greater Puget Sound</span>
          </h2>
          <p className="text-[#374151] text-base max-w-2xl">
            From Seattle proper to the Eastside, South Sound, and everything in between. Within 50 miles of downtown Seattle, we serve your area.
          </p>
        </div>

        {/* All cities in one grid */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl border border-[#E5DDD3] bg-white font-semibold text-[#1E3D30] text-sm hover:border-[#2D5A47] hover:bg-[#2D5A47] hover:text-white transition-all duration-150"
            >
              {city.name}
              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ServiceAreasCta />
          <p className="text-xs text-[#374151]/60 text-center sm:text-left">
            Don&apos;t see your city? Call us. We likely serve your area.
          </p>
        </div>
      </div>
    </section>
  );
}
