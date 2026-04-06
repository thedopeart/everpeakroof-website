import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Free Roofing Estimate",
  description:
    "Get a free roofing estimate from Everpeak Roof. Serving Seattle, Bellevue, Tacoma, and 15+ Puget Sound cities. Call or fill out the form — we respond fast.",
  alternates: { canonical: "https://everpeakroof.com/contact" },
};

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";
const EMAIL = "info@everpeakroof.com";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Free Estimates</p>
          <h1 className="font-black text-[#1E3D30] leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Get in Touch
          </h1>
          <p className="text-[#374151] text-lg max-w-lg">
            Most estimates are scheduled within a day or two. We answer the phone 7 days a week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#E5DDD3] p-8 shadow-[0_1px_4px_rgba(45,90,71,0.06)]">
            <h2 className="font-bold text-[#1E3D30] text-xl mb-6">Request a Free Estimate</h2>
            <form className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Name</label>
                  <input
                    type="text" name="name" required
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Phone</label>
                  <input
                    type="tel" name="phone" required
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                    placeholder="(206) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Email</label>
                <input
                  type="email" name="email" required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Service Needed</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors text-[#374151]"
                >
                  <option value="">Select a service…</option>
                  <option>Roof Repair</option>
                  <option>Roof Replacement</option>
                  <option>Emergency Repair</option>
                  <option>Metal Roofing</option>
                  <option>Flat Roofing</option>
                  <option>Roof Inspection</option>
                  <option>Gutters</option>
                  <option>Siding</option>
                  <option>Insurance Claim Help</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Zip Code</label>
                <input
                  type="text" name="zip"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors"
                  placeholder="98101"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Describe the Issue</label>
                <textarea
                  name="message" rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors resize-none"
                  placeholder="Tell us what's going on with your roof…"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)] mt-1"
              >
                Get My Free Estimate
              </button>
              <p className="text-xs text-[#374151] text-center">
                No spam. We&apos;ll only use this to schedule your estimate.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[#E5DDD3] p-7">
              <h2 className="font-bold text-[#1E3D30] text-lg mb-5">Prefer to call?</h2>
              <div className="flex flex-col gap-4">
                <a href={PHONE_HREF} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#2D5A47]/10 flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-[#2D5A47]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#374151] font-semibold uppercase tracking-wide">Phone</div>
                    <div className="font-bold text-[#1E3D30] group-hover:text-[#2D5A47] transition-colors">{PHONE}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#2D5A47]/10 flex items-center justify-center shrink-0">
                    <Mail size={17} className="text-[#2D5A47]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#374151] font-semibold uppercase tracking-wide">Email</div>
                    <div className="font-bold text-[#1E3D30] group-hover:text-[#2D5A47] transition-colors">{EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2D5A47]/10 flex items-center justify-center shrink-0">
                    <MapPin size={17} className="text-[#2D5A47]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#374151] font-semibold uppercase tracking-wide">Service Area</div>
                    <div className="font-bold text-[#1E3D30]">Greater Seattle, WA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4883E]/15 flex items-center justify-center shrink-0">
                    <Clock size={17} className="text-[#D4883E]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#374151] font-semibold uppercase tracking-wide">Emergency Line</div>
                    <div className="font-bold text-[#1E3D30]">7 days a week</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2D5A47] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-2">Need emergency help?</h3>
              <p className="text-white/70 text-sm mb-4">
                Active leak, storm damage, or a tree through your roof? Call us. We answer emergency calls 7 days a week.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                <Phone size={14} />
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
