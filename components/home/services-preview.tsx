"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Home, Zap, Shield, Layers, Search } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Wrench, Home, Zap, Shield, Layers, Search,
};

const SERVICES = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    icon: "Wrench",
    desc: "Leaks, storm damage, flashing failures, missing shingles. We diagnose fast and fix it right.",
    accent: "#2D5A47",
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    icon: "Home",
    desc: "Full tear-off and replacement for shingle, metal, flat, and cedar shake roofs.",
    accent: "#2D5A47",
  },
  {
    slug: "emergency-roof-repair",
    name: "Emergency Repair",
    icon: "Zap",
    desc: "24-hour response for active leaks, storm damage, fallen trees, and emergency tarping.",
    accent: "#B86E2A",
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    icon: "Shield",
    desc: "Standing seam metal and corrugated panels. Built to last 40–70 years in PNW weather.",
    accent: "#2D5A47",
  },
  {
    slug: "flat-roofing",
    name: "Flat Roofing",
    icon: "Layers",
    desc: "TPO, EPDM, and torch-down systems for residential and commercial flat roofs.",
    accent: "#2D5A47",
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    icon: "Search",
    desc: "Free inspections for homeowners, buyers, and insurance. Full condition report included.",
    accent: "#2D5A47",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2
              className="font-black text-[#1E3D30] leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Every Roofing Service<br />
              <span className="text-[#2D5A47]">Under One Roof</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-sm font-bold text-[#2D5A47] hover:text-[#D4883E] transition-colors shrink-0"
          >
            All services
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon];
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-[#E5DDD3] p-7 shadow-[0_1px_4px_rgba(45,90,71,0.06)] hover:shadow-[0_8px_28px_rgba(45,90,71,0.12)] hover:-translate-y-1 transition-all duration-200"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0 transition-colors duration-200"
                    style={{ background: `${svc.accent}15` }}
                  >
                    <Icon size={20} className="transition-colors" style={{ color: svc.accent }} />
                  </div>
                  <h3 className="font-bold text-[#1E3D30] text-lg mb-2 group-hover:text-[#2D5A47] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-bold text-[#D4883E] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Extra services row */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {[
            { slug: "gutter-installation",   name: "Gutters" },
            { slug: "siding",                 name: "Siding" },
            { slug: "shingle-installation",   name: "Shingles" },
            { slug: "commercial-roofing",     name: "Commercial" },
            { slug: "insurance-restoration",  name: "Insurance Claims" },
            { slug: "maintenance-program",    name: "Maintenance Plans" },
          ].map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="px-4 py-2 bg-white border border-[#E5DDD3] rounded-full text-sm font-semibold text-[#4A5568] hover:text-[#2D5A47] hover:border-[#2D5A47] transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
