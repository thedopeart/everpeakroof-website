import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Roofing Services | Seattle Repair, Replacement & More",
  description:
    "Full roofing services in Seattle and the Puget Sound — repair, replacement, emergency, inspections, shingles, commercial, and insurance claims.",
  alternates: { canonical: "https://everpeakroof.com/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <div className="mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">What We Do</p>
          <h1 className="font-black text-[#1E3D30] leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Roofing Services
          </h1>
          <p className="text-[#374151] text-lg max-w-xl">
            Every roofing service your home or building might need — from a single leak to a full replacement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-[#E5DDD3] overflow-hidden hover:shadow-[0_8px_28px_rgba(45,90,71,0.12)] hover:-translate-y-1 transition-all duration-200"
            >
              {svc.image && (
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={`${svc.name} service`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-bold text-[#1E3D30] text-lg group-hover:text-[#2D5A47] transition-colors">
                    {svc.name}
                  </h2>
                  {svc.featured && (
                    <span className="text-xs font-bold bg-[#2D5A47]/10 text-[#2D5A47] px-2.5 py-1 rounded-full shrink-0">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#374151] leading-relaxed flex-1">{svc.shortDesc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-bold text-[#D4883E] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
