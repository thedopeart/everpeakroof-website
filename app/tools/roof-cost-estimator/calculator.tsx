"use client";

import { useMemo, useState } from "react";
import { Info } from "lucide-react";

type Pitch = "low" | "medium" | "steep";
type Material = "asphalt3" | "architectural" | "cedar" | "metal" | "tpo";
type JobType = "replacement" | "major" | "minor";

const PITCH_MULTIPLIER: Record<Pitch, number> = {
  low: 1.15,
  medium: 1.25,
  steep: 1.4,
};

const MATERIAL_RATE: Record<Material, number> = {
  asphalt3: 5.5,
  architectural: 7.5,
  cedar: 14.0,
  metal: 13.0,
  tpo: 10.0,
};

const MATERIAL_LABEL: Record<Material, string> = {
  asphalt3: "Asphalt 3-tab shingle",
  architectural: "Architectural shingle",
  cedar: "Cedar shake",
  metal: "Metal (standing seam)",
  tpo: "TPO / flat roof",
};

const JOB_FACTOR: Record<JobType, number> = {
  replacement: 1.0,
  major: 0.35,
  minor: 0.12,
};

const JOB_LABEL: Record<JobType, string> = {
  replacement: "Full replacement",
  major: "Major repair",
  minor: "Minor repair",
};

function formatUSD(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function RoofCostCalculator() {
  const [homeSqft, setHomeSqft] = useState<number>(2000);
  const [stories, setStories] = useState<1 | 2 | 3>(1);
  const [pitch, setPitch] = useState<Pitch>("medium");
  const [material, setMaterial] = useState<Material>("architectural");
  const [jobType, setJobType] = useState<JobType>("replacement");

  const result = useMemo(() => {
    const safeSqft = Number.isFinite(homeSqft) && homeSqft > 0 ? homeSqft : 0;

    // Footprint shrinks as stories go up (same total sqft stacked).
    const footprint = safeSqft / stories;
    const roofArea = footprint * PITCH_MULTIPLIER[pitch];

    const materialRate = MATERIAL_RATE[material];
    const jobFactor = JOB_FACTOR[jobType];

    const midpoint = roofArea * materialRate * jobFactor;
    const low = midpoint * 0.85;
    const high = midpoint * 1.2;

    return {
      roofArea,
      materialRate,
      jobFactor,
      low,
      high,
      midpoint,
    };
  }, [homeSqft, stories, pitch, material, jobType]);

  const hasInput = homeSqft > 0;

  return (
    <div className="bg-white rounded-2xl border border-[#E5DDD3] shadow-[0_1px_4px_rgba(45,90,71,0.06)] overflow-hidden">
      <div className="grid md:grid-cols-2">

        {/* Inputs */}
        <div className="p-7 md:p-8 md:border-r border-[#E5DDD3] border-b md:border-b-0">
          <h2 className="font-bold text-[#1E3D30] text-lg mb-6">Your Home</h2>

          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                Home square footage
              </label>
              <input
                type="number"
                min={0}
                value={Number.isNaN(homeSqft) ? "" : homeSqft}
                onChange={(e) => setHomeSqft(parseInt(e.target.value, 10) || 0)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                placeholder="2000"
              />
              <p className="text-xs text-[#374151]/80 mt-1.5">
                Square footage of the home itself, not the roof.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                Number of stories
              </label>
              <div className="grid grid-cols-3 gap-2">
                {([1, 2, 3] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setStories(n)}
                    className={`py-3 rounded-xl text-sm font-bold transition-colors border ${
                      stories === n
                        ? "bg-[#2D5A47] text-white border-[#2D5A47]"
                        : "bg-[#FAF3EB] text-[#1E3D30] border-[#E5DDD3] hover:border-[#2D5A47]/40"
                    }`}
                  >
                    {n} story
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                Roof pitch
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { key: "low", label: "Low", sub: "< 4:12" },
                    { key: "medium", label: "Medium", sub: "4:12 - 8:12" },
                    { key: "steep", label: "Steep", sub: "> 8:12" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setPitch(opt.key)}
                    className={`py-2.5 rounded-xl text-sm font-bold transition-colors border flex flex-col items-center gap-0.5 ${
                      pitch === opt.key
                        ? "bg-[#2D5A47] text-white border-[#2D5A47]"
                        : "bg-[#FAF3EB] text-[#1E3D30] border-[#E5DDD3] hover:border-[#2D5A47]/40"
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className={`text-[10px] font-medium ${pitch === opt.key ? "text-white/70" : "text-[#374151]/70"}`}>
                      {opt.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                Roof material
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value as Material)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors text-[#374151]"
              >
                {(Object.keys(MATERIAL_LABEL) as Material[]).map((k) => (
                  <option key={k} value={k}>
                    {MATERIAL_LABEL[k]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                Job type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { key: "replacement", label: "Replace" },
                    { key: "major", label: "Major repair" },
                    { key: "minor", label: "Minor repair" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setJobType(opt.key)}
                    className={`py-3 rounded-xl text-xs font-bold transition-colors border ${
                      jobType === opt.key
                        ? "bg-[#2D5A47] text-white border-[#2D5A47]"
                        : "bg-[#FAF3EB] text-[#1E3D30] border-[#E5DDD3] hover:border-[#2D5A47]/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-7 md:p-8 bg-[#FAF3EB]/40">
          <h2 className="font-bold text-[#1E3D30] text-lg mb-6">Estimated Range</h2>

          {hasInput ? (
            <>
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider font-bold text-[#D4883E] mb-1">
                  Ballpark price
                </div>
                <div className="font-black text-[#1E3D30] leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  {formatUSD(result.low)} <span className="text-[#374151]/50 font-bold">-</span> {formatUSD(result.high)}
                </div>
                <div className="text-sm text-[#374151] mt-2">
                  Midpoint around {formatUSD(result.midpoint)}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#E5DDD3] p-5 mb-5">
                <div className="text-xs uppercase tracking-wider font-bold text-[#2D5A47] mb-3">
                  Breakdown
                </div>
                <dl className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#374151]">Est. roof area</dt>
                    <dd className="font-bold text-[#1E3D30]">
                      {Math.round(result.roofArea).toLocaleString()} sq ft
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#374151]">Material</dt>
                    <dd className="font-bold text-[#1E3D30] text-right">
                      {MATERIAL_LABEL[material]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#374151]">Rate per sq ft</dt>
                    <dd className="font-bold text-[#1E3D30]">
                      ${result.materialRate.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#374151]">Job type</dt>
                    <dd className="font-bold text-[#1E3D30]">
                      {JOB_LABEL[jobType]} ({Math.round(result.jobFactor * 100)}%)
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex gap-3 bg-[#D4883E]/10 border border-[#D4883E]/30 rounded-xl p-4">
                <Info size={16} className="text-[#D4883E] shrink-0 mt-0.5" />
                <p className="text-xs text-[#374151] leading-relaxed">
                  This is a rough ballpark for a Seattle-area home. Real quotes depend on deck condition, pitch complexity, access, permits, and tear-off. Call us for a free on-site estimate.
                </p>
              </div>
            </>
          ) : (
            <div className="text-sm text-[#374151]">
              Enter your home square footage to see an estimate.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
