import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Phone, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";

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
    description: `${svc.shortDesc} Serving Seattle, Bellevue, Tacoma, Kirkland, Renton, and 13 more Puget Sound cities. Free estimates.`,
    alternates: { canonical: `https://everpeakroof.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 5);

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-[#9CA3AF] mb-8">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link href="/services" className="hover:text-[#2D5A47] transition-colors">Services</Link>
          <ChevronRight size={13} />
          <span className="text-[#2C2C2C] font-semibold">{svc.name}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2">
            <h1 className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {svc.name} in Seattle &amp; the Puget Sound
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              {svc.shortDesc} Everpeak LLC handles {svc.name.toLowerCase()} jobs across Seattle, Bellevue, Tacoma, Kirkland, Renton, and 13 more Puget Sound cities.
            </p>

            {/* Placeholder content area - fill in per service */}
            <div className="bg-white rounded-2xl border border-[#E5DDD3] p-7 mb-8">
              <h2 className="font-bold text-[#1E3D30] text-xl mb-4">What to Expect</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Free on-site estimate — no commitment required",
                  "Written quote before any work starts",
                  "Licensed, insured crew on every job",
                  "Cleanup included — we leave the site clean",
                  "Workmanship warranty on all installations",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-[#4A5568]">
                    <CheckCircle2 size={16} className="text-[#2D5A47] mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Other services */}
            <div>
              <h3 className="font-bold text-[#1E3D30] mb-4">Other Services</h3>
              <div className="flex flex-wrap gap-2">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="px-4 py-2 bg-white border border-[#E5DDD3] rounded-full text-sm font-semibold text-[#4A5568] hover:text-[#2D5A47] hover:border-[#2D5A47]/40 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#2D5A47] rounded-2xl p-7 text-white sticky top-28">
              <h3 className="font-bold text-lg mb-2">Get a Free Estimate</h3>
              <p className="text-white/65 text-sm mb-5">
                Most estimates are scheduled within 24 hours. No commitment required.
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
