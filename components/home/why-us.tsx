import { CheckCircle2, Clock, DollarSign, ThumbsUp, Wrench, FileCheck } from "lucide-react";

const REASONS = [
  {
    icon: CheckCircle2,
    title: "Licensed & Insured",
    desc: "WA State Contractor License #EVERPRL743KE. Fully insured on every job.",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    desc: "We call back fast. Most estimates are scheduled within a day or two. Emergency calls answered 7 days a week.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    desc: "Detailed written estimates before any work starts. No hidden fees, no upsells, no surprises on the final bill.",
  },
  {
    icon: Wrench,
    title: "Built for PNW Weather",
    desc: "Seattle rain, moss, wind, and cold require materials and installation methods that differ from drier climates. We know the difference.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claims Handled",
    desc: "We work directly with adjusters, handle storm documentation, and can file claims on your behalf.",
  },
  {
    icon: ThumbsUp,
    title: "Workmanship Warranty",
    desc: "All installation work is warranted. Manufacturer warranties on materials. We stand behind every job we do.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-[#1E3D30]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="reveal max-w-3xl mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Why Everpeak</p>
          <h2
            className="text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
          >
            We&apos;re Not the Cheapest.<br />
            <span className="text-[#D4883E]">We&apos;re the Most Reliable.</span>
          </h2>
          <p className="mt-4 text-white/80 text-base leading-relaxed">
            There&apos;s no shortage of roofers in the Puget Sound. Here&apos;s what makes the difference between a job you feel good about and one you regret.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative flex gap-4 bg-white/[0.07] border border-white/10 rounded-2xl p-6 overflow-hidden hover:bg-white/[0.11] hover:border-[#D4883E]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E8A85E] to-[#D4883E] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_4px_12px_rgba(212,136,62,0.35)]">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-[15px] mb-1.5">{r.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{r.desc}</p>
                </div>
                <div className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full bg-[#D4883E] transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
