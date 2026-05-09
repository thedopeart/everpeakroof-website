import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Users, MapPin } from "lucide-react";
import JsonLd from "@/components/shared/json-ld";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Everpeak Roofing | Seattle Roofing Company",
  description:
    "Everpeak Roofing is a Seattle based roofing company delivering reliable roof inspections, repairs, and replacements built for the Pacific Northwest.",
  alternates: { canonical: "https://everpeakroof.com/about" },
};

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
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">About Us</p>
          <h1 className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Seattle Roofing, Built for the PNW
          </h1>
          <div className="text-[#374151] text-lg leading-relaxed max-w-2xl flex flex-col gap-5">
            <p>
              Everpeak is a Washington state roofing company working across 20 cities in the Seattle metro and Puget Sound. We do inspections, repairs, and full replacements. No subcontractors. The crew that quotes your job is the same crew that shows up.
            </p>
            <p>
              PNW roofs take a beating: moss buildup, six months of rain, wind storms off the Sound, older housing stock with deferred maintenance baked in. We've worked on composition shingles, metal, cedar shake, flat membrane, TPO, and everything in between. Capitol Hill Craftsmans, new construction in Sammamish, commercial buildings in SoDo. The material and the pitch change, the process doesn't.
            </p>
            <p>
              Our job is to tell you what's actually wrong, fix it correctly, and give you a straight price. That's it.
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

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {[
            {
              icon: ShieldCheck,
              title: "Licensed & Fully Insured",
              desc: "Washington State Contractor License active. Full liability and workers' comp on every job. If anything goes wrong, you're covered.",
            },
            {
              icon: Award,
              title: "No Pressure, No Upsells",
              desc: "We show you what's there, tell you what it'll take to fix it, and give you a straight price. A repair is a repair. We won't push you into a replacement you don't need.",
            },
            {
              icon: Users,
              title: "Your Crew, Your Job",
              desc: "We don't subcontract. The team that quotes your job is the team that does it. Consistent quality, clear accountability.",
            },
            {
              icon: MapPin,
              title: "Built for the PNW",
              desc: "Seattle weather is specific: moss, constant rain, wind storms, older housing stock. We've seen every variation of it and know what holds up here.",
            },
          ].map((item) => {
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

        {/* License info */}
        <div className="bg-[#2D5A47] rounded-2xl p-8 text-white mb-10">
          <h2 className="font-bold text-xl mb-2">Credentials</h2>
          <div className="flex flex-col gap-2 text-white/70 text-sm">
            <div><span className="text-white font-semibold">Business:</span> Everpeak LLC</div>
            <div><span className="text-white font-semibold">License:</span> Washington State Contractor #EVERPRL743KE</div>
            <div><span className="text-white font-semibold">Coverage:</span> General Liability + Workers&apos; Compensation</div>
            <div><span className="text-white font-semibold">Service Area:</span> 20 cities, greater Seattle metro</div>
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
