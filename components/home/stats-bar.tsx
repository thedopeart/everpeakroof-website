import { Star } from "lucide-react";

const STATS = [
  { value: "20+",  label: "Cities Served" },
  { value: "5.0★", label: "Avg Rating" },
  { value: "10yr", label: "Workmanship Warranty" },
  { value: "7",    label: "Days a Week" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#2D5A47]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl md:text-4xl font-black text-[#D4883E] leading-none">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
