import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    image: "/images/New Images/project-01.jpg",
    type: "Shingle Replacement",
    city: "Seattle, WA",
  },
  {
    image: "/images/New Images/project-02.jpg",
    type: "Flat Roof Repair",
    city: "Bellevue, WA",
  },
  {
    image: "/images/New Images/project-03.jpg",
    type: "Emergency Tarp & Repair",
    city: "Kirkland, WA",
  },
  {
    image: "/images/New Images/project-04.jpg",
    type: "Moss Removal & Soft Wash",
    city: "Renton, WA",
  },
  {
    image: "/images/New Images/project-05.jpg",
    type: "Full Tear-Off & Replacement",
    city: "Tacoma, WA",
  },
  {
    image: "/images/New Images/project-06.jpg",
    type: "Flashing Repair",
    city: "Redmond, WA",
  },
];

export default function RecentWork() {
  return (
    <section className="section-pad bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="reveal flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">
              Our Work
            </p>
            <h2
              className="text-[#1E3D30] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
            >
              Projects Across the Puget Sound
            </h2>
          </div>
          <Link
            href="/our-work"
            className="text-[#2D5A47] font-semibold text-sm whitespace-nowrap hover:underline pb-1"
          >
            View all projects &rarr;
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.image}
              className="reveal rounded-2xl overflow-hidden relative aspect-[4/3]"
            >
              <Image
                src={project.image}
                alt={`${project.type} in ${project.city}`}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Job type pill, top left */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#1E3D30]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {project.type}
                </span>
              </div>

              {/* City, bottom left */}
              <div className="absolute bottom-3 left-4">
                <p className="text-white text-sm font-medium drop-shadow">{project.city}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
