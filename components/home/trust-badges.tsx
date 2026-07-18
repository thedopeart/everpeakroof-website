import { ShieldCheck, FileText, Clock } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    name: "Licensed & Insured",
    detail: "WA Contractor Lic. #EVERPRL743KE",
  },
  {
    icon: FileText,
    name: "Free Written Estimates",
    detail: "Detailed quote before any work begins",
  },
  {
    icon: Clock,
    name: "7-Day Service",
    detail: "Emergency calls answered any day",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#FAF3EB] border-b border-[#E5DDD3]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-9">
        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.name}
                className="group relative flex items-center gap-4 bg-white rounded-2xl border border-[#E5DDD3] px-6 py-5 overflow-hidden shadow-[0_2px_8px_rgba(45,90,71,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(45,90,71,0.13)] hover:border-[#2D5A47]/25 transition-all duration-300"
              >
                {/* copper top accent (clipped to the rounded card) */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4883E] to-[#E8A85E]" />
                {/* faint peak motif corner */}
                <span
                  className="absolute -bottom-10 -right-10 w-28 h-28 opacity-[0.04] pointer-events-none"
                  style={{ background: "#1E3D30", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", borderRadius: "0 0 0 40%" }}
                />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D5A47] to-[#1E3D30] flex items-center justify-center shrink-0 shadow-[0_6px_16px_rgba(30,61,48,0.25)]">
                  <Icon size={22} className="text-white" />
                </div>
                <div className="relative">
                  <div className="font-black text-[#1E3D30] text-[15px] leading-tight">{badge.name}</div>
                  <div className="text-[13px] text-[#6B7280] mt-1 leading-snug">{badge.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
