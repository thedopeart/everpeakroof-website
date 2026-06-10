import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Hammer, Users, CheckSquare } from "lucide-react";
import JsonLd from "@/components/shared/json-ld";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Our Seattle Roofing Company",
  description:
    "Everpeak Roofing is a Seattle based roofing company delivering reliable roof inspections, repairs, and replacements built for the Pacific Northwest.",
  alternates: { canonical: "https://everpeakroof.com/about" },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    desc: "Homeowners deserve honest recommendations, transparent pricing, and clear communication from the first inspection through project completion.",
  },
  {
    icon: Hammer,
    title: "Quality Workmanship",
    desc: "Every roofing project is completed with attention to detail and industry best practices. We take pride in doing the job right and never cutting corners.",
  },
  {
    icon: Users,
    title: "Customer-Focused Service",
    desc: "A roofing project can feel overwhelming. We strive to make the process simple by providing timely communication, professional guidance, and a smooth experience from start to finish.",
  },
  {
    icon: CheckSquare,
    title: "Reliability and Accountability",
    desc: "When we make a commitment, we stand behind it. We treat every home with care and respect as if it were our own.",
  },
];

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://everpeakroof.com" },
    { name: "About", url: "https://everpeakroof.com/about" },
  ]);

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbs} />
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">About Everpeak</p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Protecting Pacific Northwest Homes with Quality, Integrity, and Reliability
          </h1>
          <div className="text-[#374151] text-lg leading-relaxed max-w-2xl flex flex-col gap-5">
            <p>
              At Everpeak Roofing, we believe a roof is more than just shingles and flashing. It's what protects your family, your investment, and your peace of mind. That's why we're committed to delivering roofing solutions backed by honest communication, dependable service, and quality craftsmanship.
            </p>
            <p>
              As a locally owned roofing company serving homeowners throughout the Seattle area, we understand the unique challenges that Pacific Northwest weather brings. From heavy rainfall and moss growth to wind-driven storms and aging roofing systems, our team provides solutions designed to withstand the region's demanding climate.
            </p>
          </div>
        </div>

        {/* Team photo */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-14">
          <Image
            src="/images/worker-on-roof.jpg"
            alt="Everpeak crew working on a roof"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D30]/40 to-transparent" />
        </div>

        {/* Values */}
        <div className="mb-14">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Our Values</p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-[#E5DDD3] p-7">
                  <div className="w-10 h-10 rounded-xl bg-[#2D5A47]/10 flex items-center justify-center mb-4">
                    <Icon size={19} className="text-[#2D5A47]" />
                  </div>
                  <h3 className="font-bold text-[#1E3D30] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#374151] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Built on Experience */}
        <div className="mb-14">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Built on Experience</p>
          <div className="text-[#374151] text-lg leading-relaxed max-w-2xl flex flex-col gap-5 mt-4">
            <p>
              Everpeak Roofing was founded by a roofing professional who gained experience both in the field and helping homeowners navigate the roof replacement process. That hands-on background, combined with a strong business and financial foundation, helped shape a company dedicated to professionalism, transparency, and long-term customer relationships.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-[#2D5A47] rounded-2xl p-8 text-white mb-10">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Our Mission</p>
          <p className="text-white/90 leading-relaxed mt-3">
            Our mission is simple: provide high-quality roofing solutions that protect Pacific Northwest homes while delivering a customer experience built on trust, communication, and solid service.
          </p>
          <p className="text-white/70 leading-relaxed mt-4 text-sm">
            Whether you need a roof replacement, repairs, or an inspection, our goal is to help you make informed decisions and feel confident throughout every step of the process.
          </p>
        </div>

        {/* Credentials */}
        <div className="bg-white rounded-2xl border border-[#E5DDD3] p-8 mb-10">
          <h2 className="font-bold text-[#1E3D30] text-xl mb-4">Credentials</h2>
          <div className="flex flex-col gap-2 text-sm text-[#374151]">
            <div><span className="font-semibold text-[#1E3D30]">Business:</span> Everpeak LLC</div>
            <div><span className="font-semibold text-[#1E3D30]">License:</span> Washington State Contractor #EVERPRL743KE</div>
            <div><span className="font-semibold text-[#1E3D30]">Coverage:</span> Fully Insured</div>
            <div><span className="font-semibold text-[#1E3D30]">Service Area:</span> 20 cities, greater Seattle metro</div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)]"
          >
            Get a Free Estimate
          </Link>
        </div>

      </div>
    </div>
  );
}
