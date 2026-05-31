import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Roofing Tools & Calculators",
  description:
    "Free roofing calculators for Seattle homeowners. Estimate your roof cost or calculate pitch before calling a contractor.",
  alternates: { canonical: "https://everpeakroof.com/tools" },
};

const tools = [
  {
    title: "Roof Cost Estimator",
    description:
      "Get a ballpark price range for a new roof, major repair, or minor fix based on your home's size, pitch, and material.",
    href: "/tools/roof-cost-estimator",
  },
  {
    title: "Roof Pitch Calculator",
    description:
      "Find your roof's pitch from rise and run measurements, or convert between pitch formats before ordering materials.",
    href: "/tools/roof-pitch-calculator",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-[#374151] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#374151]/50" />
          <span className="font-semibold text-[#1E3D30]">Tools</span>
        </nav>

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Free Tools</p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Roofing Tools & Calculators
          </h1>
          <p className="text-[#374151] text-lg leading-relaxed">
            Quick calculators to help you understand your roof before you call a contractor. Numbers are based on current Seattle-area costs and standard roofing math.
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {tools.map((tool) => (
            <div
              key={tool.href}
              className="bg-white rounded-2xl p-7 border border-[#E5DDD3] flex flex-col gap-4"
            >
              <div>
                <h2 className="font-bold text-[#1E3D30] text-xl mb-2">{tool.title}</h2>
                <p className="text-[#374151] text-sm leading-relaxed">{tool.description}</p>
              </div>
              <Link
                href={tool.href}
                className="inline-flex items-center justify-center gap-2 bg-[#2D5A47] hover:bg-[#1E3D30] text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm mt-auto"
              >
                Open Calculator
              </Link>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 bg-[#2D5A47] rounded-2xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-bold text-xl md:text-2xl mb-2">Want a real number?</h3>
              <p className="text-white/75 text-sm md:text-base leading-relaxed">
                Calculators give you a range. We give you a firm written quote. No pressure, no upsell, no charge for the visit.
              </p>
            </div>
            <Link
              href="/instant-roof-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-7 py-4 rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)] whitespace-nowrap"
            >
              Get a Real Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
