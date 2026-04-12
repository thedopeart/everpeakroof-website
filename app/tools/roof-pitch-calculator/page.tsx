import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RoofPitchCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Roof Pitch Calculator | Rise, Run, Angle, Grade | Everpeak Roofing",
  description:
    "Free roof pitch calculator. Convert rise and run to angle and grade, or go the other way. Classifies pitch as low slope, conventional, or steep.",
  alternates: { canonical: "https://everpeakroof.com/tools/roof-pitch-calculator" },
};

export default function RoofPitchCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-[#374151] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#374151]/50" />
          <Link href="/tools" className="hover:text-[#2D5A47] transition-colors">Tools</Link>
          <ChevronRight size={14} className="text-[#374151]/50" />
          <span className="font-semibold text-[#1E3D30]">Roof Pitch Calculator</span>
        </nav>

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Free Tools</p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Roof Pitch Calculator
          </h1>
          <p className="text-[#374151] text-lg leading-relaxed">
            Figure out your roof pitch as a ratio, angle in degrees, and grade percent. Useful for ordering material, sizing ladders, or checking if a given roofing product will work on your slope.
          </p>
        </div>

        {/* Calculator */}
        <RoofPitchCalculator />

        {/* How this works */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl">
          <div>
            <h2 className="font-bold text-[#1E3D30] text-xl mb-3">How pitch is measured</h2>
            <p className="text-[#374151] text-sm leading-relaxed mb-3">
              Roof pitch is the rise in inches for every 12 inches of horizontal run. A 6:12 pitch means the roof rises 6 inches for every foot you travel horizontally. That works out to about 26.57 degrees and a 50% grade.
            </p>
            <p className="text-[#374151] text-sm leading-relaxed">
              If you already have an angle, you can flip the calculator to convert back to a rise over 12 inches of run.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[#1E3D30] text-xl mb-3">Why it matters in the PNW</h2>
            <p className="text-[#374151] text-sm leading-relaxed">
              Seattle rain is relentless, so pitch drives material choice more than it does in drier climates. Low slopes need membrane systems like TPO. Conventional pitches work with asphalt and metal. Steep roofs handle cedar shake well and shed water and moss faster, which matters a lot around here.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-14 bg-[#2D5A47] rounded-2xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-bold text-xl md:text-2xl mb-2">Not sure what your pitch is?</h3>
              <p className="text-white/75 text-sm md:text-base leading-relaxed">
                We&apos;ll measure it for you during a free roof inspection and tell you what materials make sense for your slope and the PNW weather.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-7 py-4 rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)] whitespace-nowrap"
            >
              Book a Free Inspection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
