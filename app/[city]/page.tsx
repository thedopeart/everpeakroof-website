import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ChevronRight, CheckCircle2 } from "lucide-react";
import { cities } from "@/lib/cities";
import { featuredServices } from "@/lib/services";

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = cities.find((c) => c.slug === citySlug);
  if (!cityData) return {};

  const { name } = cityData;
  return {
    title: `Roofing in ${name}, WA | Repair, Replacement & More`,
    description: `Licensed roofing contractor in ${name}, WA. Roof repair, replacement, metal roofing, emergency service, and free estimates. Serving all of ${name} and surrounding areas.`,
    alternates: { canonical: `https://everpeakroof.com/${citySlug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const cityData = cities.find((c) => c.slug === citySlug);
  if (!cityData) notFound();

  const { name } = cityData;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-[#9CA3AF] mb-8">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={13} />
          <span className="text-[#2C2C2C] font-semibold">Roofing in {name}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-sm text-[#D4883E] font-bold uppercase tracking-wider mb-3">
              <MapPin size={14} />
              {name}, WA
            </div>
            <h1 className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Roofing in {name}
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              Everpeak LLC provides roof repair, replacement, and emergency roofing services in {name}, WA. Licensed, insured, and familiar with local building codes and PNW weather conditions.
            </p>

            {/* Services in this city */}
            <div className="mb-10">
              <h2 className="font-bold text-[#1E3D30] text-xl mb-5">Roofing Services in {name}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {featuredServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="group flex items-start gap-3 bg-white rounded-xl border border-[#E5DDD3] p-5 hover:border-[#2D5A47]/30 hover:shadow-[0_4px_16px_rgba(45,90,71,0.08)] transition-all"
                  >
                    <CheckCircle2 size={16} className="text-[#2D5A47] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-[#1E3D30] text-sm group-hover:text-[#2D5A47] transition-colors">
                        {svc.name}
                      </div>
                      <div className="text-xs text-[#9CA3AF] mt-0.5">{svc.shortDesc.split(".")[0]}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Why this city section — placeholder for unique content */}
            <div className="bg-white rounded-2xl border border-[#E5DDD3] p-7 mb-8">
              <h2 className="font-bold text-[#1E3D30] text-xl mb-3">Roofing in {name}: What to Know</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {name} homeowners deal with the same roofing challenges as the rest of the Puget Sound — persistent rain, moss growth, wind storms, and aging housing stock. We work in {name} regularly and know the common roof types, local building codes, and permit requirements in the area.
              </p>
            </div>

            {/* Other cities */}
            <div>
              <h3 className="font-bold text-[#1E3D30] mb-4">Other Cities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {otherCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="px-3.5 py-2 bg-white border border-[#E5DDD3] rounded-full text-sm font-semibold text-[#4A5568] hover:text-[#2D5A47] hover:border-[#2D5A47]/40 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#2D5A47] rounded-2xl p-7 text-white sticky top-28">
              <h3 className="font-bold text-lg mb-2">Free Estimate in {name}</h3>
              <p className="text-white/65 text-sm mb-5">
                Licensed, insured roofing in {name}. Most estimates scheduled within 24 hours.
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
