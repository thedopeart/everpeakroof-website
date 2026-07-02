"use client";

import { useState } from "react";
import { submitLead } from "@/app/actions/submit-lead";
import { trackEvent } from "@/lib/analytics";
import { CheckCircle2, ShieldCheck, Clock, Phone } from "lucide-react";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm text-[#2C2C2C] outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors";

const TRUST = [
  { icon: ShieldCheck, t: "Licensed & insured, WA Lic. #EVERPRL743KE" },
  { icon: Clock, t: "We answer the phone 7 days a week" },
  { icon: CheckCircle2, t: "Honest written pricing before any work starts" },
];

const SERVICE_OPTIONS = [
  "Roof Repair",
  "Roof Replacement",
  "Emergency Repair",
  "Soft Washing",
  "Roof Inspection",
  "Commercial Roofing",
  "Insurance Claim Help",
  "Other",
];

const DEFAULT_BLURB =
  "Tell us what's going on with your roof. We'll get you a written estimate, usually within a day or two. No pressure, no sales games.";

type Props = {
  heading: string;
  blurb?: string;
  /** Fixed service, rendered as a hidden field (service pages). */
  service?: string;
  /** City name, rendered as a hidden field (city pages). */
  city?: string;
  /** Show the "Service Needed" dropdown (city + homepage forms). */
  showServiceSelect?: boolean;
  source: "contact" | "service" | "city";
  /** "band" = full-bleed section, "card" = rounded block inside a container. */
  variant?: "band" | "card";
};

export default function LeadFormSection({
  heading,
  blurb = DEFAULT_BLURB,
  service,
  city,
  showServiceSelect = false,
  source,
  variant = "band",
}: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((val, key) => {
      if (typeof val === "string") data[key] = val;
    });

    const result = await submitLead(source, data);

    if (result.success) {
      trackEvent("generate_lead", {
        form: source,
        service: data.service || undefined,
        city: data.city || data.zip || undefined,
        value: 1,
        currency: "USD",
      });
      setSubmitted(true);
    } else {
      setError(result.error ?? "Something went wrong.");
    }
    setSubmitting(false);
  }

  const formCard = (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      {submitted ? (
        <div className="flex flex-col items-center text-center py-12 px-4">
          <div className="w-14 h-14 rounded-full bg-[#2D5A47]/10 flex items-center justify-center mb-4">
            <CheckCircle2 size={28} className="text-[#2D5A47]" />
          </div>
          <h3 className="font-black text-[#1E3D30] text-xl mb-2">Got it.</h3>
          <p className="text-[#374151] text-sm max-w-sm">
            We&apos;ll be in touch within one business day. If it&apos;s urgent, give us a call at {PHONE}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {service && <input type="hidden" name="service" value={service} />}
          {city && <input type="hidden" name="city" value={city} />}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Name</label>
              <input type="text" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Phone</label>
              <input type="tel" name="phone" required className={inputClass} placeholder="(425) 000-0000" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Email</label>
            <input type="email" name="email" required className={inputClass} placeholder="you@email.com" />
          </div>
          {showServiceSelect && (
            <div>
              <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Service Needed</label>
              <select name="service" className={`${inputClass} text-[#374151]`}>
                <option value="">Select a service...</option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Zip Code</label>
            <input type="text" name="zip" className={inputClass} placeholder="98101" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Describe the Issue</label>
            <textarea
              name="message"
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="Tell us what's going on with your roof..."
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-[#D4883E] hover:bg-[#B86E2A] disabled:bg-[#D4883E]/60 text-white font-bold rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)] mt-1"
          >
            {submitting ? "Sending..." : "Get My Free Estimate"}
          </button>
          <p className="text-xs text-[#6B7280] text-center">
            No spam. We&apos;ll only use this to schedule your estimate.
          </p>
        </form>
      )}
    </div>
  );

  const pitch = (
    <div>
      <p className="text-[#E8A85E] font-bold text-sm uppercase tracking-wider mb-3">
        Free estimates, no obligation
      </p>
      <h2 className="font-black text-white leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
        {heading}
      </h2>
      <p className="text-white/65 text-lg leading-relaxed mb-8">{blurb}</p>
      <ul className="flex flex-col gap-3 mb-8">
        {TRUST.map(({ icon: Icon, t }) => (
          <li key={t} className="flex items-center gap-3 text-white/85 text-sm font-medium">
            <span className="w-8 h-8 rounded-lg bg-[#D4883E]/20 flex items-center justify-center shrink-0">
              <Icon size={16} className="text-[#E8A85E]" />
            </span>
            {t}
          </li>
        ))}
      </ul>
      <a
        href={PHONE_HREF}
        className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-[#E8A85E] transition-colors"
      >
        <Phone size={18} className="text-[#D4883E]" />
        Prefer to call? {PHONE}
      </a>
    </div>
  );

  const grid = (
    <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {pitch}
      {formCard}
    </div>
  );

  const peakMotif = (
    <div
      className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
      style={{ background: "white", clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
    />
  );

  if (variant === "card") {
    return (
      <section
        id="estimate"
        className="relative overflow-hidden bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] rounded-2xl p-7 md:p-12 mb-16"
      >
        {peakMotif}
        {grid}
      </section>
    );
  }

  return (
    <section
      id="estimate"
      className="relative overflow-hidden bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] py-16 md:py-20 px-5"
    >
      {peakMotif}
      <div className="max-w-6xl mx-auto relative">{grid}</div>
    </section>
  );
}
