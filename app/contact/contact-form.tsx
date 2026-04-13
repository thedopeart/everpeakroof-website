"use client";

import { useState } from "react";
import { submitLead } from "@/app/actions/submit-lead";
import { CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors";

export default function ContactForm() {
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

    const result = await submitLead("contact", data);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? "Something went wrong.");
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-10 px-4">
        <div className="w-14 h-14 rounded-full bg-[#2D5A47]/10 flex items-center justify-center mb-4">
          <CheckCircle2 size={28} className="text-[#2D5A47]" />
        </div>
        <h2 className="font-black text-[#1E3D30] text-xl mb-2">Got it.</h2>
        <p className="text-[#374151] text-sm max-w-sm">
          We&apos;ll be in touch within one business day. If it&apos;s urgent, give us a call at (425) 505-7142.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Name</label>
          <input
            type="text" name="name" required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Phone</label>
          <input
            type="tel" name="phone" required
            className={inputClass}
            placeholder="(425) 000-0000"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Email</label>
        <input
          type="email" name="email" required
          className={inputClass}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Service Needed</label>
        <select
          name="service"
          className={`${inputClass} text-[#374151]`}
        >
          <option value="">Select a service...</option>
          <option>Roof Repair</option>
          <option>Roof Replacement</option>
          <option>Emergency Repair</option>
          <option>Soft Washing</option>
          <option>Roof Inspection</option>
          <option>Commercial Roofing</option>
          <option>Insurance Claim Help</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Zip Code</label>
        <input
          type="text" name="zip"
          className={inputClass}
          placeholder="98101"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2C2C2C] mb-1.5">Describe the Issue</label>
        <textarea
          name="message" rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us what's going on with your roof..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-[#D4883E] hover:bg-[#B86E2A] disabled:bg-[#D4883E]/60 text-white font-bold rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)] mt-1"
      >
        {submitting ? "Sending..." : "Get My Free Estimate"}
      </button>
      <p className="text-xs text-[#374151] text-center">
        No spam. We&apos;ll only use this to schedule your estimate.
      </p>
    </form>
  );
}
