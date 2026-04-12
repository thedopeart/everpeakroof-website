import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ChevronRight, Phone, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";
import { services } from "@/lib/services";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

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
  return {
    title: `${svc.name} in Seattle & the Puget Sound`,
    description: `${svc.longDesc.slice(0, 155)}...`,
    alternates: { canonical: `https://everpeakroof.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 5);

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-[#374151] mb-8">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link href="/services" className="hover:text-[#2D5A47] transition-colors">Services</Link>
          <ChevronRight size={13} />
          <span className="text-[#2C2C2C] font-semibold">{svc.name}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2">
            {svc.image && (
              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={svc.image}
                  alt={`${svc.name} in Seattle`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
            <h1 className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {svc.name}{" "}in Seattle &amp; the Puget Sound
            </h1>

            {/* Long description */}
            <p className="text-[#374151] text-lg leading-relaxed mb-10">
              {svc.longDesc}
            </p>

            {/* Process */}
            <div className="mb-10">
              <h2 className="font-black text-[#1E3D30] text-xl mb-5">How It Works</h2>
              <div className="flex flex-col gap-3">
                {svc.process.map((step, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-xl border border-[#E5DDD3] p-5">
                    <div className="w-8 h-8 rounded-lg bg-[#D4883E] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-sm text-[#374151] leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="bg-white rounded-2xl border border-[#E5DDD3] p-7 mb-10">
              <h2 className="font-black text-[#1E3D30] text-xl mb-5">What&apos;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {svc.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle2 size={16} className="text-[#2D5A47] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Common problems (if exists) */}
            {svc.commonProblems && svc.commonProblems.length > 0 && (
              <div className="mb-10">
                <h2 className="font-black text-[#1E3D30] text-xl mb-5">Common Problems We See</h2>
                <div className="flex flex-col gap-3">
                  {svc.commonProblems.map((problem, i) => (
                    <div key={i} className="flex gap-4 bg-white rounded-xl border border-[#E5DDD3] p-5">
                      <div className="w-8 h-8 rounded-lg bg-[#D4883E]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle size={14} className="text-[#D4883E]" />
                      </div>
                      <p className="text-sm text-[#374151] leading-relaxed pt-1">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA banner */}
            <div className="bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] rounded-2xl p-8 mb-10">
              <h3 className="font-bold text-white text-lg mb-2">Need {svc.name.toLowerCase()} work?</h3>
              <p className="text-white/60 text-sm mb-5">Free estimates, no obligation. We'll take a look and give you a straight answer.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Get a Free Estimate
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Other services */}
            <div>
              <h3 className="font-bold text-[#1E3D30] mb-4">Other Services</h3>
              <div className="flex flex-wrap gap-2">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="px-4 py-2 bg-white border border-[#E5DDD3] rounded-full text-sm font-semibold text-[#374151] hover:text-[#2D5A47] hover:border-[#2D5A47]/40 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#2D5A47] rounded-2xl p-7 text-white sticky top-32">
              <h3 className="font-bold text-lg mb-2">Get a Free Estimate</h3>
              <p className="text-white/65 text-sm mb-5">
                We respond fast. No commitment required.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold py-3.5 rounded-xl transition-colors text-sm mb-3"
              >
                Request Estimate
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors"
              >
                <Phone size={14} />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
