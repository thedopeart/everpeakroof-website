"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  ChevronLeft,
  ShieldCheck,
  Users,
  Handshake,
  ClipboardList,
  CalendarClock,
  Home,
} from "lucide-react";
import { tier1Cities, tier2Cities } from "@/lib/cities";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const SERVICE_OPTIONS = [
  "Roof Repair",
  "Roof Replacement",
  "Inspection",
  "Soft Washing",
  "Emergency Repair",
  "Not Sure Yet",
];

const PROPERTY_TYPES = ["Residential", "Commercial"];

const ROOF_AGES = ["0-5 years", "5-10 years", "10-20 years", "20+ years", "Not sure"];

const ROOF_MATERIALS = [
  "Asphalt shingle",
  "Metal",
  "Cedar shake",
  "Flat / membrane",
  "Not sure",
];

const CONTACT_TIMES = ["Morning", "Afternoon", "Evening", "Any time"];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E5DDD3] bg-[#FAF3EB] text-sm outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/10 transition-colors";

const labelClass = "block text-sm font-semibold text-[#2C2C2C] mb-1.5";

type FormState = {
  service: string;
  propertyType: string;
  city: string;
  zip: string;
  roofAge: string;
  roofMaterial: string;
  name: string;
  phone: string;
  email: string;
  bestTime: string;
  notes: string;
};

const initialState: FormState = {
  service: "",
  propertyType: "",
  city: "",
  zip: "",
  roofAge: "",
  roofMaterial: "",
  name: "",
  phone: "",
  email: "",
  bestTime: "",
  notes: "",
};

export default function QuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const step1Valid = form.service !== "" && form.propertyType !== "";
  const step2Valid = form.city !== "" && form.zip.trim().length >= 3;
  const step3Valid =
    form.name.trim() !== "" && form.phone.trim() !== "" && form.email.trim() !== "";

  const cities = [...tier1Cities, ...tier2Cities];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!step3Valid) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">
            Free Estimate
          </p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Get Your Instant Roof Quote Request
          </h1>
          <p className="text-[#374151] text-lg max-w-2xl">
            Tell us a bit about your roof and we&apos;ll call to schedule a real on-site
            inspection. No pressure, no hidden fees, no pricing guesswork over the phone.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          {/* Form column */}
          <div className="bg-white rounded-2xl border border-[#E5DDD3] p-6 md:p-8 shadow-[0_1px_4px_rgba(45,90,71,0.06)]">
            {submitted ? (
              <SuccessState />
            ) : (
              <>
                <StepIndicator step={step} />

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {step === 1 && (
                    <StepOne
                      form={form}
                      update={update}
                      onNext={() => step1Valid && setStep(2)}
                      valid={step1Valid}
                    />
                  )}

                  {step === 2 && (
                    <StepTwo
                      form={form}
                      update={update}
                      cities={cities}
                      onBack={() => setStep(1)}
                      onNext={() => step2Valid && setStep(3)}
                      valid={step2Valid}
                    />
                  )}

                  {step === 3 && (
                    <StepThree
                      form={form}
                      update={update}
                      onBack={() => setStep(2)}
                      valid={step3Valid}
                    />
                  )}
                </form>
              </>
            )}
          </div>

          {/* Trust panel */}
          <aside className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl border border-[#E5DDD3] p-6">
              <h2 className="font-bold text-[#1E3D30] text-base mb-4">What Happens Next</h2>
              <ol className="flex flex-col gap-4">
                <TrustStep
                  icon={<ClipboardList size={16} className="text-[#2D5A47]" />}
                  title="We review your request"
                  body="Usually within a few hours during business days."
                />
                <TrustStep
                  icon={<CalendarClock size={16} className="text-[#2D5A47]" />}
                  title="We call to schedule"
                  body="Pick a time that works for you, typically within one or two days."
                />
                <TrustStep
                  icon={<Home size={16} className="text-[#2D5A47]" />}
                  title="We inspect and quote on site"
                  body="A written estimate with photos and a clear breakdown."
                />
              </ol>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5DDD3] p-6">
              <h3 className="font-bold text-[#1E3D30] text-base mb-4">Why Everpeak</h3>
              <ul className="flex flex-col gap-3 text-sm text-[#374151]">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-[#2D5A47] mt-0.5 shrink-0" />
                  <span>Licensed and insured in Washington state.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Handshake size={16} className="text-[#2D5A47] mt-0.5 shrink-0" />
                  <span>No pressure sales. We quote it, you decide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={16} className="text-[#2D5A47] mt-0.5 shrink-0" />
                  <span>Crew-run jobs, not subcontracted out.</span>
                </li>
              </ul>
            </div>

            <a
              href={PHONE_HREF}
              className="bg-[#2D5A47] hover:bg-[#1E3D30] rounded-2xl p-6 text-white transition-colors block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={17} />
                </div>
                <div>
                  <div className="text-xs text-white/70 font-semibold uppercase tracking-wide">
                    Rather call?
                  </div>
                  <div className="font-bold text-lg">{PHONE}</div>
                </div>
              </div>
              <p className="text-white/70 text-xs">We answer 7 days a week.</p>
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}

function StepIndicator({ step }: { step: 1 | 2 | 3 }) {
  const labels = ["What you need", "Where it is", "How to reach you"];
  return (
    <div className="flex items-center gap-2 mb-6">
      {labels.map((label, i) => {
        const n = (i + 1) as 1 | 2 | 3;
        const active = n === step;
        const done = n < step;
        return (
          <div key={label} className="flex items-center gap-2 flex-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                active
                  ? "bg-[#2D5A47] text-white"
                  : done
                    ? "bg-[#D4883E] text-white"
                    : "bg-[#E5DDD3] text-[#374151]"
              }`}
            >
              {done ? <CheckCircle2 size={14} /> : n}
            </div>
            <span
              className={`text-xs font-semibold hidden sm:inline ${
                active ? "text-[#1E3D30]" : "text-[#374151]/60"
              }`}
            >
              {label}
            </span>
            {i < labels.length - 1 && (
              <div className="flex-1 h-px bg-[#E5DDD3] ml-1 hidden sm:block" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function TrustStep({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-xl bg-[#2D5A47]/10 flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-[#1E3D30] text-sm">{title}</div>
        <div className="text-xs text-[#374151] mt-0.5">{body}</div>
      </div>
    </li>
  );
}

function StepOne({
  form,
  update,
  onNext,
  valid,
}: {
  form: FormState;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  onNext: () => void;
  valid: boolean;
}) {
  return (
    <>
      <div>
        <h2 className="font-bold text-[#1E3D30] text-xl mb-1">What do you need?</h2>
        <p className="text-sm text-[#374151]">Pick the closest fit. You can add details later.</p>
      </div>

      <div>
        <label className={labelClass}>Service type</label>
        <div className="grid sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((opt) => {
            const active = form.service === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => update("service", opt)}
                className={`px-4 py-3 rounded-xl border text-sm font-semibold text-left transition-colors ${
                  active
                    ? "border-[#2D5A47] bg-[#2D5A47]/5 text-[#1E3D30]"
                    : "border-[#E5DDD3] bg-[#FAF3EB] text-[#374151] hover:border-[#2D5A47]/40"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className={labelClass}>Property type</label>
        <div className="grid grid-cols-2 gap-3">
          {PROPERTY_TYPES.map((opt) => {
            const active = form.propertyType === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => update("propertyType", opt)}
                className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                  active
                    ? "border-[#2D5A47] bg-[#2D5A47]/5 text-[#1E3D30]"
                    : "border-[#E5DDD3] bg-[#FAF3EB] text-[#374151] hover:border-[#2D5A47]/40"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <button
          type="button"
          onClick={onNext}
          disabled={!valid}
          className="px-6 py-3 bg-[#D4883E] hover:bg-[#B86E2A] disabled:bg-[#E5DDD3] disabled:text-[#374151]/60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-sm"
        >
          Next: Location
        </button>
      </div>
    </>
  );
}

function StepTwo({
  form,
  update,
  cities,
  onBack,
  onNext,
  valid,
}: {
  form: FormState;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  cities: { name: string; slug: string }[];
  onBack: () => void;
  onNext: () => void;
  valid: boolean;
}) {
  return (
    <>
      <div>
        <h2 className="font-bold text-[#1E3D30] text-xl mb-1">Where is it?</h2>
        <p className="text-sm text-[#374151]">We serve 20 cities across the Puget Sound.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>City</label>
          <select
            className={`${inputClass} text-[#374151]`}
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          >
            <option value="">Select a city...</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Other / Not listed</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Zip code</label>
          <input
            type="text"
            inputMode="numeric"
            className={inputClass}
            placeholder="98101"
            value={form.zip}
            onChange={(e) => update("zip", e.target.value)}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Roof age</label>
          <select
            className={`${inputClass} text-[#374151]`}
            value={form.roofAge}
            onChange={(e) => update("roofAge", e.target.value)}
          >
            <option value="">Select...</option>
            {ROOF_AGES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Roof material</label>
          <select
            className={`${inputClass} text-[#374151]`}
            value={form.roofMaterial}
            onChange={(e) => update("roofMaterial", e.target.value)}
          >
            <option value="">Select...</option>
            {ROOF_MATERIALS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 px-4 py-3 text-sm font-semibold text-[#374151] hover:text-[#1E3D30] transition-colors"
        >
          <ChevronLeft size={16} />
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!valid}
          className="px-6 py-3 bg-[#D4883E] hover:bg-[#B86E2A] disabled:bg-[#E5DDD3] disabled:text-[#374151]/60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-sm"
        >
          Next: Contact
        </button>
      </div>
    </>
  );
}

function StepThree({
  form,
  update,
  onBack,
  valid,
}: {
  form: FormState;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  onBack: () => void;
  valid: boolean;
}) {
  return (
    <>
      <div>
        <h2 className="font-bold text-[#1E3D30] text-xl mb-1">Who do we contact?</h2>
        <p className="text-sm text-[#374151]">We&apos;ll only use this to schedule your estimate.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            required
            className={inputClass}
            placeholder="(425) 000-0000"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          required
          className={inputClass}
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass}>Best time to reach you</label>
        <select
          className={`${inputClass} text-[#374151]`}
          value={form.bestTime}
          onChange={(e) => update("bestTime", e.target.value)}
        >
          <option value="">Select...</option>
          {CONTACT_TIMES.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Anything specific we should know?</label>
        <textarea
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Active leak, tree damage, insurance claim, etc."
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 px-4 py-3 text-sm font-semibold text-[#374151] hover:text-[#1E3D30] transition-colors"
        >
          <ChevronLeft size={16} />
          Back
        </button>
        <button
          type="submit"
          disabled={!valid}
          className="px-6 py-4 bg-[#D4883E] hover:bg-[#B86E2A] disabled:bg-[#E5DDD3] disabled:text-[#374151]/60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)] text-sm"
        >
          Send My Quote Request
        </button>
      </div>
    </>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center text-center py-8 px-2">
      <div className="w-16 h-16 rounded-full bg-[#2D5A47]/10 flex items-center justify-center mb-5">
        <CheckCircle2 size={32} className="text-[#2D5A47]" />
      </div>
      <h2 className="font-black text-[#1E3D30] text-2xl mb-3">Got it.</h2>
      <p className="text-[#374151] text-base max-w-md mb-6">
        We&apos;ll be in touch within one business day to schedule your on-site inspection.
        If it&apos;s an active emergency, give us a call right now.
      </p>

      <a
        href={PHONE_HREF}
        className="w-full max-w-sm bg-[#2D5A47] hover:bg-[#1E3D30] rounded-2xl p-5 text-white transition-colors flex items-center gap-4 mb-4"
      >
        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
          <Phone size={18} />
        </div>
        <div className="text-left">
          <div className="text-xs text-white/70 font-semibold uppercase tracking-wide">
            Call us direct
          </div>
          <div className="font-bold text-lg">{PHONE}</div>
        </div>
      </a>

      <Link
        href="/services"
        className="text-sm font-semibold text-[#2D5A47] hover:text-[#1E3D30] transition-colors mt-2"
      >
        Browse our services &rarr;
      </Link>
    </div>
  );
}
