import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  Phone,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Plus,
  ShieldCheck,
  Star,
  Clock,
  MapPin,
  ClipboardCheck,
} from "lucide-react";
import { services } from "@/lib/services";
import { metaDescription } from "@/lib/meta";
import JsonLd from "@/components/shared/json-ld";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import TrustBadges from "@/components/home/trust-badges";
import StatsBar from "@/components/home/stats-bar";
import LeadFormSection from "@/components/shared/lead-form-section";
import MobileCtaBar from "@/components/home/mobile-cta-bar";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const HERO_TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "5.0 on Google" },
  { icon: MapPin, label: "21 cities" },
  { icon: Clock, label: "7 days a week" },
];

const NEXT_STEPS = [
  "Call or request online",
  "Free on-site assessment",
  "Written estimate, no pressure",
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};
  const desc = metaDescription(svc.longDesc);
  return {
    title: `${svc.name} in Seattle & the Puget Sound`,
    description: desc,
    alternates: { canonical: `https://everpeakroof.com/services/${slug}` },
    openGraph: {
      url: `https://everpeakroof.com/services/${slug}`,
      title: `${svc.name} in Seattle & the Puget Sound`,
      description: desc,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 5);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://everpeakroof.com" },
    { name: "Services", url: "https://everpeakroof.com/services" },
    { name: svc.name, url: `https://everpeakroof.com/services/${svc.slug}` },
  ]);
  const serviceLd = serviceSchema({ name: svc.name, description: svc.longDesc, slug: svc.slug });
  const faqLd = faqPageSchema(svc.faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <div className="bg-[#FAF3EB]">
      <JsonLd data={breadcrumbs} />
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />

      {/* ───────── HERO ───────── */}
      <section className="relative isolate overflow-hidden bg-[#1E3D30]">
        {svc.image && (
          <Image
            src={svc.image}
            alt={`${svc.name} in Seattle and the Puget Sound`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-[#13271d]/92 via-[#1E3D30]/85 to-[#13271d]/92" />
        {/* peak motif + warm glow */}
        <div
          className="absolute -top-28 -right-24 w-[520px] h-[520px] opacity-[0.07] pointer-events-none"
          style={{ background: "white", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", borderRadius: "0 0 0 40%" }}
        />
        <div className="absolute top-1/3 right-1/5 w-96 h-96 rounded-full bg-[#D4883E]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-20 md:pb-24">
          {/* breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/55 mb-7">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={13} />
            <span className="text-white/90 font-semibold">{svc.name}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 bg-[#D4883E]/20 border border-[#D4883E]/30 text-[#E8A85E] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4883E]" />
              Roofing Services
            </span>

            <h1
              className="text-white leading-[1.08] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", fontFamily: "var(--font-display)" }}
            >
              {svc.name} in Seattle <span className="text-[#E8A85E]">&amp;</span> the Puget Sound
            </h1>

            <p className="text-white/85 font-medium text-lg md:text-xl leading-relaxed mb-9 max-w-2xl">
              {svc.shortDesc} Free estimates, honest pricing, no pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(212,136,62,0.4)] hover:shadow-[0_6px_28px_rgba(212,136,62,0.55)] hover:-translate-y-0.5"
              >
                Get a Free Estimate
                <ChevronRight size={18} />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/10"
              >
                <Phone size={16} />
                {PHONE}
              </a>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-5 gap-y-2">
              {HERO_TRUST.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[13px] text-white font-semibold whitespace-nowrap">
                  <Icon size={14} className="text-[#D4883E] shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wave divider into cream */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-[#FAF3EB]">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ───────── TRUST STRIP ───────── */}
      <TrustBadges />

      {/* ───────── MAIN ───────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {/* main column */}
          <div className="lg:col-span-2">
            {/* lead paragraph */}
            <p className="text-[#374151] text-lg leading-relaxed mb-12">{svc.longDesc}</p>

            {/* Before & after */}
            {svc.beforeAfter && (
              <div className="mb-14">
                <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-2">See the difference</p>
                <h2 className="font-black text-[#1E3D30] text-2xl mb-6">Before &amp; after</h2>
                <figure className="max-w-sm mx-auto">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-[0_8px_30px_rgba(30,61,48,0.12)]">
                    <Image
                      src={svc.beforeAfter.image}
                      alt={svc.beforeAfter.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <figcaption className="text-center text-sm text-[#6B7280] mt-3">{svc.beforeAfter.caption}</figcaption>
                </figure>
              </div>
            )}

            {/* What's included */}
            <div className="mb-14">
              <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-2">Every job includes</p>
              <h2 className="font-black text-[#1E3D30] text-2xl mb-6">What&apos;s included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {svc.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white rounded-xl border border-[#E5DDD3] p-4 text-sm text-[#374151] leading-snug"
                  >
                    <CheckCircle2 size={18} className="text-[#2D5A47] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* How it works, timeline */}
            <div className="mb-14">
              <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-2">Step by step</p>
              <h2 className="font-black text-[#1E3D30] text-2xl mb-6">How it works</h2>
              <ol className="relative border-l-2 border-[#E5DDD3] ml-4 flex flex-col gap-7">
                {svc.process.map((step, i) => (
                  <li key={i} className="relative pl-8">
                    <span className="absolute -left-[1.15rem] top-0 w-9 h-9 rounded-xl bg-[#2D5A47] text-white text-xs font-black flex items-center justify-center shadow-[0_2px_8px_rgba(45,90,71,0.25)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#374151] leading-relaxed pt-1.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Common problems */}
            {svc.commonProblems && svc.commonProblems.length > 0 && (
              <div className="mb-14">
                <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-2">What we look for</p>
                <h2 className="font-black text-[#1E3D30] text-2xl mb-6">Common problems we see</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {svc.commonProblems.map((problem, i) => (
                    <div key={i} className="flex gap-3 bg-[#FBF0E4] rounded-xl border border-[#F0D9BF] p-4">
                      <AlertTriangle size={17} className="text-[#B86E2A] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#5a4632] leading-snug">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* The Everpeak difference, real, specific points */}
            <div className="mb-14 rounded-2xl bg-[#1E3D30] text-white p-8 relative overflow-hidden">
              <div
                className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.06] pointer-events-none"
                style={{ background: "white", clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
              />
              <h2 className="font-black text-xl mb-5 relative">Why homeowners pick Everpeak</h2>
              <div className="grid sm:grid-cols-3 gap-5 relative">
                {[
                  { icon: ShieldCheck, t: "Licensed & insured", d: "WA Contractor Lic. #EVERPRL743KE. Real coverage on every job." },
                  { icon: ClipboardCheck, t: "Written estimates", d: "A detailed quote with material options before any work starts." },
                  { icon: Clock, t: "We pick up", d: "Phones answered 7 days a week. Most estimates within a day or two." },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t}>
                    <div className="w-10 h-10 rounded-lg bg-[#D4883E]/20 flex items-center justify-center mb-3">
                      <Icon size={19} className="text-[#E8A85E]" />
                    </div>
                    <div className="font-bold text-[15px] mb-1">{t}</div>
                    <p className="text-white/65 text-sm leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 flex flex-col gap-5">
              <div className="bg-[#2D5A47] rounded-2xl p-7 text-white shadow-[0_8px_30px_rgba(30,61,48,0.18)]">
                <h3 className="font-black text-xl mb-1.5">Get a free estimate</h3>
                <p className="text-white/65 text-sm mb-6 leading-relaxed">
                  Tell us about your roof. We respond fast, no commitment.
                </p>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold py-3.5 rounded-xl transition-colors text-sm mb-3"
                >
                  Request estimate
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold py-3 rounded-xl text-sm transition-colors mb-6"
                >
                  <Phone size={14} className="text-[#E8A85E]" />
                  {PHONE}
                </a>

                <div className="border-t border-white/15 pt-5">
                  <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-3">What happens next</p>
                  <ol className="flex flex-col gap-2.5">
                    {NEXT_STEPS.map((s, i) => (
                      <li key={s} className="flex items-center gap-3 text-sm text-white/85">
                        <span className="w-5 h-5 rounded-full bg-[#D4883E]/25 text-[#E8A85E] text-[11px] font-black flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* other services */}
              <div className="bg-white rounded-2xl border border-[#E5DDD3] p-6">
                <h3 className="font-bold text-[#1E3D30] text-sm mb-3">Other services</h3>
                <div className="flex flex-col">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between gap-2 py-2.5 border-b border-[#F0E6D8] last:border-0 text-sm font-semibold text-[#374151] hover:text-[#2D5A47] transition-colors group"
                    >
                      {s.name}
                      <ChevronRight size={14} className="text-[#D4883E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── STATS + LEAD FORM ───────── */}
      <StatsBar />
      <LeadFormSection
        variant="band"
        heading={`Get your free ${svc.name.toLowerCase()} estimate`}
        service={svc.name}
        source="service"
      />

      {/* ───────── FAQ ───────── */}
      {svc.faqs && svc.faqs.length > 0 && (
        <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-2">Good to know</p>
            <h2 className="font-black text-[#1E3D30] text-2xl md:text-3xl">Frequently asked questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {svc.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-[#E5DDD3] p-5 open:shadow-[0_4px_16px_rgba(45,90,71,0.08)] open:border-[#2D5A47]/30 transition-shadow"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-bold text-[#1E3D30] text-[15px] md:text-base leading-snug pt-0.5">
                    {faq.question}
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-[#D4883E]/10 flex items-center justify-center shrink-0 transition-transform group-open:rotate-45">
                    <Plus size={15} className="text-[#D4883E]" />
                  </span>
                </summary>
                <p className="text-sm text-[#374151] leading-relaxed mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <MobileCtaBar />
    </div>
  );
}
