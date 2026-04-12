import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RoofCostCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Roof Cost Estimator | Seattle Roof Pricing Tool | Everpeak Roofing",
  description:
    "Free roof cost estimator for Seattle homeowners. Get a ballpark price on replacement, major, and minor roof work based on size, pitch, and material.",
  alternates: { canonical: "https://everpeakroof.com/tools/roof-cost-estimator" },
};

export default function RoofCostEstimatorPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-[#374151] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#374151]/50" />
          <Link href="/tools" className="hover:text-[#2D5A47] transition-colors">Tools</Link>
          <ChevronRight size={14} className="text-[#374151]/50" />
          <span className="font-semibold text-[#1E3D30]">Roof Cost Estimator</span>
        </nav>

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Free Tools</p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Roof Cost Estimator
          </h1>
          <p className="text-[#374151] text-lg leading-relaxed">
            Plug in a few details about your home and get a rough price range for a new roof, major repair, or minor fix. Numbers are based on current Seattle-area material and labor costs. This is a ballpark, not a quote.
          </p>
        </div>

        {/* Calculator */}
        <RoofCostCalculator />

        {/* How this works */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl">
          <div>
            <h2 className="font-bold text-[#1E3D30] text-xl mb-3">How this works</h2>
            <p className="text-[#374151] text-sm leading-relaxed mb-3">
              The calculator estimates your roof surface area from the home&apos;s footprint and pitch, then multiplies by a per-square-foot rate for your chosen material. Job type adjusts total labor and tear-off costs.
            </p>
            <p className="text-[#374151] text-sm leading-relaxed">
              Low and high figures cover the usual variance you&apos;d see between shops in the Seattle metro. A real estimate depends on deck condition, complexity, access, permits, and what we find once we&apos;re up there.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[#1E3D30] text-xl mb-3">What the calculator can&apos;t see</h2>
            <ul className="text-[#374151] text-sm leading-relaxed flex flex-col gap-2">
              <li>Rotten decking or sheathing underneath the old roof</li>
              <li>Skylights, chimneys, and other penetrations that add labor</li>
              <li>Multi-layer tear-offs from older homes</li>
              <li>Permit fees, which vary by city in the Puget Sound area</li>
              <li>Gutter replacement, flashing, or ventilation upgrades</li>
            </ul>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-14 bg-[#2D5A47] rounded-2xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-bold text-xl md:text-2xl mb-2">Want a real number?</h3>
              <p className="text-white/75 text-sm md:text-base leading-relaxed">
                We&apos;ll come out, look at your roof, and give you a firm written quote. No pressure, no upsell, no charge for the visit.
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
