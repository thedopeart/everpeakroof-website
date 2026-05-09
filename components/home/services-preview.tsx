"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Home, Zap, Search, Grid3x3, Building2, Droplets, FileCheck, Wrench as WrenchAlt } from "lucide-react";

const SERVICES = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    icon: Wrench,
    desc: "Leaks, storm damage, flashing failures, missing shingles. We diagnose fast and fix it right.",
    image: "/images/roof-repair-progress.jpg",
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    icon: Home,
    desc: "Full tear-off and replacement for shingle and cedar shake roofs across the Puget Sound.",
    image: "/images/shingle-replacement.jpg",
  },
  {
    slug: "emergency-roof-repair",
    name: "Emergency Repair",
    icon: Zap,
    desc: "Fast response for active leaks, storm damage, fallen trees, and emergency tarping. 7 days a week.",
    image: "/images/Emergency Roof Repair.jpeg",
    urgent: true,
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    icon: Search,
    desc: "Free inspections for homeowners, buyers, and insurance. Full condition report included.",
    image: "/images/Roof inspector Juan.png",
  },
  {
    slug: "shingle-installation",
    name: "Shingle Installation",
    icon: Grid3x3,
    desc: "Architectural, 3-tab, designer, and impact-resistant shingles for every budget.",
    image: "/images/shingle-closeup.jpg",
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    icon: Building2,
    desc: "TPO, PVC, and metal panel systems for offices, warehouses, and multi-unit buildings.",
    image: "/images/craftsman-roof-build.jpg",
  },
];

const SECONDARY = [
  {
    slug: "soft-washing",
    name: "Soft Wash & Moss Removal",
    icon: Droplets,
    desc: "Low-pressure cleaning that removes moss, algae, and debris without damaging shingles.",
  },
  {
    slug: "insurance-restoration",
    name: "Insurance Claims",
    icon: FileCheck,
    desc: "We handle the paperwork. Storm documentation, adjuster coordination, and direct billing.",
  },
  {
    slug: "maintenance-program",
    name: "Maintenance Plans",
    icon: WrenchAlt,
    desc: "Annual inspections and maintenance to catch small problems before they become expensive ones.",
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
              className="text-[#1E3D30] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
            >
              Every Roofing Service<br />
              <span className="text-[#2D5A47]">Under One Roof</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-sm font-bold text-[#2D5A47] hover:text-[#D4883E] transition-colors shrink-0"
          >
            All services <ArrowRight size={15} />
          </Link>
        </div>

        {/* Primary 6 cards with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
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
                  className="group flex flex-col h-full bg-white rounded-2xl border border-[#E5DDD3] overflow-hidden shadow-[0_1px_4px_rgba(45,90,71,0.06)] hover:shadow-[0_8px_28px_rgba(45,90,71,0.12)] hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={`${svc.name} service`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {svc.urgent && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#B86E2A] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        7-Day Emergency
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[#2D5A47]/10">
                        <Icon size={17} className="text-[#2D5A47]" />
                      </div>
                      <h3 className="font-bold text-[#1E3D30] text-lg group-hover:text-[#2D5A47] transition-colors">
                        {svc.name}
                      </h3>
                    </div>
                    <p className="text-[#374151] text-sm leading-relaxed flex-1">{svc.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-bold text-[#D4883E] opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary 3 cards — no image, accent border */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SECONDARY.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex items-start gap-4 h-full bg-white rounded-2xl border border-[#E5DDD3] p-6 shadow-[0_1px_4px_rgba(45,90,71,0.06)] hover:shadow-[0_6px_20px_rgba(45,90,71,0.10)] hover:border-[#2D5A47]/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#D4883E]/10 mt-0.5">
                    <Icon size={18} className="text-[#D4883E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3D30] mb-1.5 group-hover:text-[#2D5A47] transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-[#374151] text-sm leading-relaxed">{svc.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#D4883E] opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
