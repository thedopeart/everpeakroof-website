"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i !== null ? (i - 1 + PROJECTS.length) % PROJECTS.length : null)), []);
  const next = useCallback(() => setActiveIndex((i) => (i !== null ? (i + 1) % PROJECTS.length : null)), []);

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

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, i) => (
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
              <span className="bg-white/90 text-[#1E3D30] text-sm font-semibold px-4 py-2 rounded-lg">
                View
              </span>
            </div>
          </button>
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

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PROJECTS[activeIndex].src}
              alt={PROJECTS[activeIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {activeIndex + 1} / {PROJECTS.length}
          </div>
        </div>
      )}
    </>
  );
}
