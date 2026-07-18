import Link from "next/link";
import Image from "next/image";
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
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
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
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#2D5A47] hover:text-[#D4883E] transition-colors shrink-0"
          >
            All services <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Primary 6 cards with images + floating icon badge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.slug} className="reveal">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-[#E5DDD3] overflow-hidden shadow-[0_2px_8px_rgba(45,90,71,0.05)] hover:shadow-[0_18px_40px_rgba(45,90,71,0.15)] hover:-translate-y-1.5 hover:border-[#2D5A47]/25 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={`${svc.name} service in the Seattle area`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13271d]/75 via-[#1E3D30]/15 to-transparent" />
                    {svc.urgent && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#B86E2A] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        7-Day Emergency
                      </div>
                    )}
                  </div>
                  <div className="relative p-6 pt-9 flex flex-col flex-1">
                    {/* floating icon badge, overlaps up onto the image */}
                    <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8A85E] to-[#D4883E] flex items-center justify-center shadow-[0_8px_20px_rgba(212,136,62,0.45)] ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-black text-[#1E3D30] text-lg mb-2 group-hover:text-[#2D5A47] transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-[#374151] text-sm leading-relaxed flex-1">{svc.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#D4883E]">
                      Learn more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#E5DDD3]" />
          <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider px-2">Additional Services</span>
          <div className="flex-1 h-px bg-[#E5DDD3]" />
        </div>

        {/* Secondary 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SECONDARY.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.slug} className="reveal">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group relative flex items-start gap-4 h-full bg-white rounded-2xl border border-[#E5DDD3] p-6 overflow-hidden shadow-[0_2px_8px_rgba(45,90,71,0.05)] hover:shadow-[0_12px_28px_rgba(45,90,71,0.11)] hover:border-[#2D5A47]/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2D5A47] to-[#1E3D30] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(30,61,48,0.22)]">
                    <Icon size={19} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3D30] mb-1.5 group-hover:text-[#2D5A47] transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-[#374151] text-sm leading-relaxed">{svc.desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#D4883E]">
                      Learn more
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full bg-[#D4883E] transition-all duration-300" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
