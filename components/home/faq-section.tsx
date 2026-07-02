"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const FAQS = [
  {
    q: "How much does a roof replacement cost in Seattle?",
    a: "Most Seattle roof replacements run between $12,000 and $30,000 depending on roof size, pitch, material, and condition of the decking underneath. We give you a detailed written estimate before any work starts so there are no surprises.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "Yes. We handle storm documentation, work directly with your adjuster, and can file claims on your behalf. We have experience with most major carriers and know what documentation they need.",
  },
  {
    q: "How fast can you respond to an emergency?",
    a: "For active leaks or storm damage, we're available 7 days a week and can usually have someone on-site the same day or next morning. Emergency tarping is available for urgent situations.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential replacements take two to four days depending on the size of the roof, the pitch, and the weather. We give you a realistic timeline with your written estimate and keep you posted if anything changes.",
  },
  {
    q: "What warranty do you provide?",
    a: "We warranty our workmanship on every job. Materials come with manufacturer warranties that vary by product, typically 25 to 50 years for architectural shingles. We hand over all warranty docs when the job is done.",
  },
  {
    q: "Do you pull permits?",
    a: "Yes, when permits are required by Washington state or local code we handle them as part of the job. We'll let you know upfront if your project requires one.",
  },
  {
    q: "Do you offer financing?",
    a: "We're working on financing options. Call us to discuss payment arrangements for larger projects.",
  },
  {
    q: "What areas do you serve?",
    a: "We cover 21 cities across the greater Puget Sound, from Seattle and the Eastside to South Sound. If your city isn't listed, call us. We likely serve your area.",
  },
  {
    q: "Asphalt shingles or metal roof, which is better for Seattle?",
    a: "For most Seattle homes, architectural asphalt shingles are the right choice: lower upfront cost, proven track record in PNW weather, and 30-plus year lifespan. Metal makes sense for specific cases like steep commercial pitches or high-end custom builds where the long-term math works out.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E5DDD3] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-[#1E3D30] font-bold text-base md:text-[17px] leading-snug group-hover:text-[#2D5A47] transition-colors">
          {q}
        </span>
        <span
          className={
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors " +
            (open ? "bg-[#2D5A47]" : "bg-[#2D5A47]/10")
          }
        >
          <ChevronDown
            size={18}
            className={"transition-transform duration-300 " + (open ? "rotate-180 text-white" : "text-[#2D5A47]")}
          />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px" }}
      >
        <p className="text-[#374151] text-[15px] leading-relaxed pb-5 pr-2 md:pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="section-pad bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">

          {/* Left: heading + help card */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Common Questions</p>
            <h2
              className="text-[#1E3D30] leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
            >
              What Homeowners Ask Before They Call
            </h2>
            <p className="text-[#374151] leading-relaxed mb-7">
              Straight answers on cost, timing, insurance, and what to expect. Don&apos;t see your question? We&apos;re happy to talk it through.
            </p>

            <div className="bg-[#1E3D30] rounded-2xl p-6 text-white relative overflow-hidden">
              <div
                className="absolute -top-14 -right-14 w-44 h-44 opacity-[0.07] pointer-events-none"
                style={{ background: "white", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", borderRadius: "0 0 0 40%" }}
              />
              <p className="font-bold text-lg mb-1.5 relative">Still have questions?</p>
              <p className="text-white/65 text-sm mb-5 relative">Talk to a real person, 7 days a week. No call center.</p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold py-3 rounded-xl text-sm transition-colors mb-2.5 relative"
              >
                <Phone size={15} /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors relative"
              >
                Get a free estimate <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="bg-white rounded-2xl border border-[#E5DDD3] px-6 md:px-8 shadow-[0_1px_4px_rgba(45,90,71,0.06)]">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
