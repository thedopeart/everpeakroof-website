"use client";

import { useMemo, useState } from "react";

type Mode = "riseRun" | "angle";

type Classification = {
  label: string;
  badgeClass: string;
  blurb: string;
};

function classify(angleDeg: number): Classification {
  // Low slope: < 4:12 -> atan(4/12) ~= 18.43 degrees
  // Steep: > 8:12 -> atan(8/12) ~= 33.69 degrees
  if (angleDeg < 18.4349) {
    return {
      label: "Low slope",
      badgeClass: "bg-[#D4883E]/15 text-[#B86E2A] border-[#D4883E]/30",
      blurb:
        "Low slope roofs can't shed water fast, so they need membrane systems like TPO, PVC, or modified bitumen. Standard asphalt shingles aren't rated for pitches this shallow.",
    };
  }
  if (angleDeg > 33.6901) {
    return {
      label: "Steep",
      badgeClass: "bg-[#2D5A47]/15 text-[#1E3D30] border-[#2D5A47]/30",
      blurb:
        "Steep roofs shed water and moss quickly, which is a real advantage in the PNW. They work well with architectural shingles, metal, and cedar shake. Labor costs go up because of access and safety gear.",
    };
  }
  return {
    label: "Conventional",
    badgeClass: "bg-[#2D5A47]/10 text-[#2D5A47] border-[#2D5A47]/25",
    blurb:
      "This is the sweet spot for Seattle homes. Asphalt shingles, architectural shingles, and metal all work here. Water sheds cleanly, and most contractors are comfortable walking this pitch.",
  };
}

export default function RoofPitchCalculator() {
  const [mode, setMode] = useState<Mode>("riseRun");

  // Rise/Run inputs
  const [rise, setRise] = useState<number>(6);
  const [run, setRun] = useState<number>(12);

  // Angle input
  const [angleInput, setAngleInput] = useState<number>(26.57);

  const computed = useMemo(() => {
    if (mode === "riseRun") {
      const safeRun = run > 0 ? run : 12;
      const safeRise = rise >= 0 ? rise : 0;
      const ratioRise = (safeRise / safeRun) * 12;
      const angle = Math.atan(safeRise / safeRun) * (180 / Math.PI);
      const grade = (safeRise / safeRun) * 100;
      return {
        ratioRise,
        ratioRun: 12,
        angle,
        grade,
      };
    }
    // angle -> rise over 12
    const safeAngle = Math.min(Math.max(angleInput, 0), 89.9);
    const rad = (safeAngle * Math.PI) / 180;
    const ratioRise = Math.tan(rad) * 12;
    const grade = Math.tan(rad) * 100;
    return {
      ratioRise,
      ratioRun: 12,
      angle: safeAngle,
      grade,
    };
  }, [mode, rise, run, angleInput]);

  const classification = classify(computed.angle);

  const ratioDisplay = `${computed.ratioRise.toFixed(computed.ratioRise % 1 === 0 ? 0 : 2)} / 12`;

  return (
    <div className="bg-white rounded-2xl border border-[#E5DDD3] shadow-[0_1px_4px_rgba(45,90,71,0.06)] overflow-hidden">
      <div className="grid md:grid-cols-2">

        {/* Inputs */}
        <div className="p-7 md:p-8 md:border-r border-[#E5DDD3] border-b md:border-b-0">
          <h2 className="font-bold text-[#1E3D30] text-lg mb-5">Measurements</h2>

          {/* Mode toggle */}
          <div className="inline-flex p-1 bg-[#FAF3EB] border border-[#E5DDD3] rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setMode("riseRun")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                mode === "riseRun" ? "bg-[#2D5A47] text-white" : "text-[#1E3D30]"
              }`}
            >
              Rise / Run to Angle
            </button>
            <button
              type="button"
              onClick={() => setMode("angle")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                mode === "angle" ? "bg-[#2D5A47] text-white" : "text-[#1E3D30]"
              }`}
            >
              Angle to Rise / Run
            </button>
          </div>

          {mode === "riseRun" ? (
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                  Rise (inches)
                </label>
                <input
                  type="number"
                  min={0}
                  step="0.25"
                  value={Number.isNaN(rise) ? "" : rise}
                  onChange={(e) => setRise(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                  placeholder="6"
                />
                <p className="text-xs text-[#374151]/80 mt-1.5">
                  How many inches the roof rises vertically.
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                  Run (inches)
                </label>
                <input
                  type="number"
                  min={1}
                  step="0.25"
                  value={Number.isNaN(run) ? "" : run}
                  onChange={(e) => setRun(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                  placeholder="12"
                />
                <p className="text-xs text-[#374151]/80 mt-1.5">
                  Horizontal distance. Defaults to 12 inches for a standard pitch ratio.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-semibold text-[#1E3D30] mb-1.5">
                Angle (degrees)
              </label>
              <input
                type="number"
                min={0}
                max={89.9}
                step="0.01"
                value={Number.isNaN(angleInput) ? "" : angleInput}
                onChange={(e) => setAngleInput(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                placeholder="26.57"
              />
              <p className="text-xs text-[#374151]/80 mt-1.5">
                Between 0 and 89.9 degrees.
              </p>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="p-7 md:p-8 bg-[#FAF3EB]/40">
          <h2 className="font-bold text-[#1E3D30] text-lg mb-6">Results</h2>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white rounded-xl border border-[#E5DDD3] p-4">
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#D4883E] mb-1">
                Pitch
              </div>
              <div className="font-black text-[#1E3D30] text-xl leading-tight">
                {ratioDisplay}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-[#E5DDD3] p-4">
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#D4883E] mb-1">
                Angle
              </div>
              <div className="font-black text-[#1E3D30] text-xl leading-tight">
                {computed.angle.toFixed(2)}°
              </div>
            </div>
            <div className="bg-white rounded-xl border border-[#E5DDD3] p-4">
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#D4883E] mb-1">
                Grade
              </div>
              <div className="font-black text-[#1E3D30] text-xl leading-tight">
                {computed.grade.toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="mb-4">
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold border ${classification.badgeClass}`}
            >
              {classification.label}
            </span>
          </div>

          <p className="text-sm text-[#374151] leading-relaxed">
            {classification.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}
