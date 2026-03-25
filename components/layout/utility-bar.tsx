import { Phone, MapPin } from "lucide-react";

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";

export default function UtilityBar() {
  return (
    <div className="bg-[#1E3D30] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-9 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-white/50">
          <MapPin size={11} className="text-[#D4883E]/70" />
          Serving 18 cities in the Puget Sound &nbsp;·&nbsp; WA Lic. #EVERPRL123XX
        </div>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60 hover:text-[#E8A85E] transition-colors"
        >
          <Phone size={11} className="text-[#D4883E]/70" />
          24/7 Emergency: {PHONE}
        </a>
      </div>
    </div>
  );
}
