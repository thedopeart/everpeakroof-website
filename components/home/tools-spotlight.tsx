import Link from "next/link";
import { Calculator, TriangleRight, ArrowRight } from "lucide-react";

const TOOLS = [
  {
    href: "/tools/roof-cost-estimator",
    icon: Calculator,
    name: "Roof Cost Estimator",
    desc: "Answer a few questions about your roof and get a realistic Seattle-area price range before you talk to anyone.",
    cta: "Estimate my roof cost",
  },
  {
    href: "/tools/roof-pitch-calculator",
    icon: TriangleRight,
    name: "Roof Pitch Calculator",
    desc: "Turn rise and run into pitch, angle, and grade. Handy for planning materials, ventilation, and walkability.",
    cta: "Calculate my pitch",
  },
];

export default function ToolsSpotlight() {
  return (
    <section className="section-pad bg-[#FAF3EB] border-t border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Free Tools</p>
          <h2
            className="text-[#1E3D30] leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
          >
            Do the Math Before You Call
          </h2>
          <p className="text-[#374151] text-base max-w-2xl mx-auto">
            No signup, no sales follow-up. Two quick tools we built so homeowners can sanity-check a roofing project on their own terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {TOOLS.map(({ href, icon: Icon, name, desc, cta }) => (
            <Link
              key={href}
              href={href}
              className="group bg-white rounded-2xl border border-[#E5DDD3] p-7 flex flex-col gap-4 hover:border-[#2D5A47] hover:shadow-lg transition-all duration-200"
            >
              <span className="w-12 h-12 rounded-xl bg-[#D4883E]/15 text-[#B06F2E] flex items-center justify-center group-hover:bg-[#2D5A47] group-hover:text-white transition-colors">
                <Icon size={22} />
              </span>
              <span className="text-lg font-bold text-[#1E3D30]">{name}</span>
              <span className="text-sm text-[#4A5568] leading-relaxed">{desc}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#B06F2E] group-hover:text-[#2D5A47] transition-colors">
                {cta}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
