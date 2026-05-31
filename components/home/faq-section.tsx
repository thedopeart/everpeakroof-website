"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    a: "We cover 20 cities across the greater Puget Sound, from Seattle and the Eastside to South Sound. If your city isn't listed, call us. We likely serve your area.",
  },
  {
    q: "Asphalt shingles or metal roof, which is better for Seattle?",
    a: "For most Seattle homes, architectural asphalt shingles are the right choice: lower upfront cost, proven track record in PNW weather, and 30-plus year lifespan. Metal makes sense for specific situations like steep commercial pitches or high-end custom builds where the long-term math works out.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E5DDD3] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[#1E3D30] font-semibold text-base leading-snug">{q}</span>
        <ChevronDown
          size={20}
          className="text-[#2D5A47] shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "500px" : "0px" }}
      >
        <p className="text-[#374151] text-sm leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="section-pad bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="max-w-xl mb-10">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">
            Common Questions
          </p>
          <h2
            className="text-[#1E3D30] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
          >
            What Homeowners Ask Before They Call
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E5DDD3] px-6 md:px-8">
          {FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        {/* Footer CTA */}
        <p className="max-w-3xl mx-auto mt-6 text-sm text-[#374151] text-center">
          Still have questions?{" "}
          <a
            href="tel:+14255057142"
            className="text-[#2D5A47] font-semibold hover:underline"
          >
            Call us at (425) 505-7142
          </a>
        </p>

      </div>
    </section>
  );
}
