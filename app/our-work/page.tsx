import type { Metadata } from "next";
import JsonLd from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import Gallery from "./gallery";

export const metadata: Metadata = {
  title: "Our Work | Seattle Roofing Projects",
  description:
    "See recent roofing projects completed by Everpeak Roofing across the Seattle metro area. Roof repairs, replacements, and installations.",
  alternates: { canonical: "https://everpeakroof.com/our-work" },
};

export default function OurWorkPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://everpeakroof.com" },
    { name: "Our Work", url: "https://everpeakroof.com/our-work" },
  ]);

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <JsonLd data={breadcrumbs} />
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Our Work
          </h1>
        </div>

        <Gallery />
      </div>
    </div>
  );
}
