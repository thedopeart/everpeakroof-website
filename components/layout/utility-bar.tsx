import { MapPin, Zap } from "lucide-react";
import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="bg-[#1E3D30] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-9 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-white/50">
          <MapPin size={11} className="text-[#D4883E]/70" />
          Serving 21 cities in the Puget Sound &nbsp;·&nbsp; WA Lic. #EVERPRL743KE
        </div>
        <Link
          href="/services/emergency-roof-repair"
          className="flex items-center gap-1.5 text-[11px] font-semibold text-[#E8A85E] hover:text-white transition-colors"
        >
          <Zap size={11} className="text-[#D4883E]/70" />
          Emergency Repairs Available 7 Days a Week
        </Link>
      </div>
    </div>
  );
}
