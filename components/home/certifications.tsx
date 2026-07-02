import Image from "next/image";

const BADGES = [
  { src: "/images/brands/certified-pro-contractor-badge-malarkey.png", alt: "Malarkey Certified Pro Contractor" },
  { src: "/images/brands/scotchgard-protector-shingle-sales-specialist-badge-malarkey.png", alt: "3M Scotchgard Protector shingle sales specialist" },
  { src: "/images/brands/3m-smog-reducing-roof-specialist-badge-malarkey.png", alt: "3M smog-reducing roof specialist" },
];

export default function Certifications() {
  return (
    <section className="bg-[#FAF3EB] border-t border-[#E5DDD3] py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-3">Materials &amp; certifications</p>
        <h2
          className="text-[#1E3D30] mb-8"
          style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)", fontFamily: "var(--font-display)" }}
        >
          Proudly installing Malarkey roofing systems
        </h2>

        <div className="relative w-[240px] h-[72px] mx-auto mb-9">
          <Image
            src="/images/brands/contractor-malarkey-logo-we-proudly-install-RGB.png"
            alt="We proudly install Malarkey Roofing Products"
            fill
            className="object-contain"
            sizes="240px"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {BADGES.map((b) => (
            <div key={b.src} className="relative w-[76px] h-[76px] md:w-24 md:h-24 shrink-0">
              <Image src={b.src} alt={b.alt} fill className="object-contain" sizes="96px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
