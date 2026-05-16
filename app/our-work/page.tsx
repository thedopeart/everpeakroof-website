import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Work | Everpeak Roofing Projects in Seattle",
  description:
    "See recent roofing projects completed by Everpeak Roofing across the Seattle metro area. Roof repairs, replacements, and installations.",
  alternates: { canonical: "https://everpeakroof.com/our-work" },
};

const PROJECTS = [
  { src: "/images/New Images/project-01.jpg", alt: "Completed roofing project in Seattle" },
  { src: "/images/New Images/project-02.jpg", alt: "Roof replacement project" },
  { src: "/images/New Images/project-03.jpg", alt: "Shingle installation work" },
  { src: "/images/New Images/project-04.jpg", alt: "Residential roof repair" },
  { src: "/images/New Images/project-05.jpg", alt: "Roof inspection and maintenance" },
  { src: "/images/New Images/project-06.jpg", alt: "New roof installation" },
  { src: "/images/New Images/project-07.jpg", alt: "Roofing crew at work" },
  { src: "/images/New Images/project-08.jpg", alt: "Finished roofing project" },
  { src: "/images/New Images/project-09.jpg", alt: "Everpeak roofing project detail" },
  { src: "/images/New Images/project-10.jpg", alt: "Completed roof in the PNW" },
];

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
          <p className="text-[#374151] text-lg max-w-2xl">
            A look at recent roofing projects across the Seattle metro. Every job gets the same attention to detail, whether it&apos;s a small repair or a full replacement.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <div
              key={project.src}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E5DDD3] group"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i < 6}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#374151] mb-5">
            Ready to start your project?
          </p>
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
