import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] py-20 px-5 relative overflow-hidden">
      {/* Decorative shape */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
        style={{
          background: "white",
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-3">
          Free Estimates — No Obligation
        </p>
        <h2
          className="font-black text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Roof problem? Let&apos;s take a look.
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
          Most estimates are scheduled within a day or two. We answer the phone 7 days a week.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold text-base px-9 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(212,136,62,0.4)] hover:shadow-[0_6px_28px_rgba(212,136,62,0.55)] hover:-translate-y-0.5"
          >
            Get a Free Estimate
            <ChevronRight size={18} />
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-[#E8A85E] transition-colors"
          >
            <Phone size={18} className="text-[#D4883E]" />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
