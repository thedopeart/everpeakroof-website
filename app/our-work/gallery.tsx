"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = { src: string; alt: string; category: string };

const PROJECTS: Project[] = [
  // Shingle installation (recent jobs)
  { src: "/images/shingles/IMG_0172.jpeg", alt: "New architectural shingle roof installation in the Seattle area", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0217.jpeg", alt: "Shingle roof installation in progress", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0319.jpeg", alt: "Architectural shingles on a Puget Sound home", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0320.jpeg", alt: "Completed shingle roof installation", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0321.jpeg", alt: "New shingle roof, ridge and field", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0226.jpeg", alt: "Freshly installed asphalt shingle roof", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0227.jpeg", alt: "Shingle re-roof on a Seattle home", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0315.jpeg", alt: "Tear-off and new shingle installation", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0526.jpeg", alt: "Shingle installation crew at work", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0528.jpeg", alt: "New shingle roof on a residential home", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0532.jpeg", alt: "Finished asphalt shingle roof", category: "Shingle Installation" },
  { src: "/images/shingles/IMG_0533.jpeg", alt: "Everpeak shingle roof installation", category: "Shingle Installation" },
  { src: "/images/shingles/roof-detail.jpg", alt: "Close-up detail of a new shingle roof", category: "Shingle Installation" },

  // Soft washing (before and after)
  { src: "/images/soft-wash-before-after.jpg", alt: "Roof soft washing before and after, moss and algae removed", category: "Soft Washing" },

  // General roofing projects
  { src: "/images/New Images/project-01.jpg", alt: "Completed roofing project in Seattle", category: "Roofing Projects" },
  { src: "/images/New Images/project-02.jpg", alt: "Roof replacement project", category: "Roofing Projects" },
  { src: "/images/New Images/project-03.jpg", alt: "Shingle installation work", category: "Roofing Projects" },
  { src: "/images/New Images/project-04.jpg", alt: "Residential roof repair", category: "Roofing Projects" },
  { src: "/images/New Images/project-05.jpg", alt: "Roof inspection and maintenance", category: "Roofing Projects" },
  { src: "/images/New Images/project-06.jpg", alt: "New roof installation", category: "Roofing Projects" },
  { src: "/images/New Images/project-07.jpg", alt: "Roofing crew at work", category: "Roofing Projects" },
  { src: "/images/New Images/project-08.jpg", alt: "Finished roofing project", category: "Roofing Projects" },
  { src: "/images/New Images/project-09.jpg", alt: "Everpeak roofing project detail", category: "Roofing Projects" },
  { src: "/images/New Images/project-10.jpg", alt: "Completed roof in the PNW", category: "Roofing Projects" },
  { src: "/images/New Images/project-11.jpg", alt: "Roofing project in progress", category: "Roofing Projects" },
  { src: "/images/New Images/project-12.jpg", alt: "Roof work detail", category: "Roofing Projects" },
  { src: "/images/New Images/project-13.jpg", alt: "Residential roofing project", category: "Roofing Projects" },
  { src: "/images/New Images/project-14.jpg", alt: "Roofing installation Seattle", category: "Roofing Projects" },
  { src: "/images/New Images/project-15.jpg", alt: "Everpeak crew on the job", category: "Roofing Projects" },
  { src: "/images/New Images/project-16.jpg", alt: "Roof replacement in progress", category: "Roofing Projects" },
  { src: "/images/New Images/project-17.jpg", alt: "Shingle roof installation", category: "Roofing Projects" },
  { src: "/images/New Images/project-18.jpg", alt: "Completed roofing project", category: "Roofing Projects" },
  { src: "/images/New Images/project-19.jpg", alt: "Roof repair Seattle", category: "Roofing Projects" },
  { src: "/images/New Images/project-20.jpg", alt: "New roof installation PNW", category: "Roofing Projects" },
  { src: "/images/New Images/project-21.jpg", alt: "Roofing work in progress", category: "Roofing Projects" },
  { src: "/images/New Images/project-22.jpg", alt: "Everpeak roofing completed job", category: "Roofing Projects" },

  // Flat & commercial
  { src: "/images/flat-roof-work-1.jpg", alt: "Flat roof installation", category: "Flat & Commercial" },
  { src: "/images/flat-roof-work-2.jpg", alt: "Flat roof membrane work", category: "Flat & Commercial" },
  { src: "/images/flat-roof-work-3.jpg", alt: "Commercial flat roof project", category: "Flat & Commercial" },
  { src: "/images/flat-roof-work-4.jpg", alt: "Flat roof repair in progress", category: "Flat & Commercial" },
  { src: "/images/flat-roof-work-5.jpg", alt: "Flat roof sealing work", category: "Flat & Commercial" },
  { src: "/images/flat-roof-work-6.jpg", alt: "Completed flat roof project", category: "Flat & Commercial" },
];

const CATEGORIES = ["All", "Shingle Installation", "Soft Washing", "Roofing Projects", "Flat & Commercial"];

export default function Gallery() {
  const [cat, setCat] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length]);
  const next = useCallback(() => setActiveIndex((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, prev, next]);

  function selectCategory(c: string) {
    setCat(c);
    setActiveIndex(null);
  }

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((c) => {
          const count = c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
          if (count === 0) return null;
          const on = cat === c;
          return (
            <button
              key={c}
              onClick={() => selectCategory(c)}
              className={
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all " +
                (on
                  ? "bg-[#2D5A47] text-white shadow-[0_4px_12px_rgba(45,90,71,0.25)]"
                  : "bg-white text-[#1E3D30] border border-[#E5DDD3] hover:border-[#2D5A47]/40")
              }
            >
              {c}
              <span className={"text-xs font-semibold " + (on ? "text-white/70" : "text-[#6B7280]")}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <button
            key={project.src}
            onClick={() => setActiveIndex(i)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E5DDD3] group cursor-pointer"
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
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-[#1E3D30] text-sm font-semibold px-4 py-2 rounded-lg">View</span>
            </div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <p className="text-[#374151] mb-5">Ready to start your project?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)]"
        >
          Get a Free Estimate
        </Link>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && filtered[activeIndex] && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={close}>
          <button onClick={close} className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors z-10" aria-label="Close">
            <X size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10" aria-label="Previous image">
            <ChevronLeft size={36} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10" aria-label="Next image">
            <ChevronRight size={36} />
          </button>
          <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={filtered[activeIndex].src} alt={filtered[activeIndex].alt} fill className="object-contain" sizes="90vw" priority />
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {activeIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
