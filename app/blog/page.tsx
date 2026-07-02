import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Phone, Plus } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import JsonLd from "@/components/shared/json-ld";
import { itemListSchema, faqPageSchema } from "@/lib/schema";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const BLOG_FAQS = [
  {
    q: "How often should I have my roof inspected?",
    a: "In the Pacific Northwest, once a year is a good baseline, plus a quick check after any major windstorm. Moss and trapped moisture cause most of the damage that builds up between inspections.",
  },
  {
    q: "Is moss really a problem on a roof?",
    a: "Yes. Moss holds water against the shingles and lifts their edges, which leads to leaks and shortens the roof's life. Low-pressure soft washing clears it without damaging the surface.",
  },
  {
    q: "Should I repair or replace my roof?",
    a: "If the roof is relatively young and the damage is localized, a repair usually makes sense. Widespread granule loss, repeat leaks, or a roof past 20 years lean toward replacement. A free inspection gives you a straight answer either way.",
  },
  {
    q: "Are your roof inspections and estimates free?",
    a: "Yes. Inspections and written estimates are free with no obligation, and we can usually get you on the schedule within a day or two, 7 days a week.",
  },
];

export const metadata: Metadata = {
  title: "Roofing Advice from the Puget Sound",
  description:
    "Straight answers on Seattle roofing. Moss, storm damage, repair vs. replacement, and what we see on roofs across the Puget Sound.",
  alternates: { canonical: "https://everpeakroof.com/blog" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const popular = allPosts.slice(0, 5);

  const blogListSchema = itemListSchema(
    "Roofing Blog",
    "https://everpeakroof.com/blog",
    allPosts.map((p, i) => ({
      name: p.title,
      url: `https://everpeakroof.com/blog/${p.slug}`,
      position: i + 1,
    }))
  );
  const faqLd = faqPageSchema(BLOG_FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <JsonLd data={blogListSchema} />
      <JsonLd data={faqLd} />
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">The Everpeak Blog</p>
          <h1
            className="text-[#1E3D30] leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.1rem)", fontFamily: "var(--font-display)" }}
          >
            Roofing Advice from the Puget Sound
          </h1>
          <p className="text-[#374151] text-lg">
            Real answers on moss, storms, repairs, and replacements. Written by the crew that actually works on Seattle roofs.
          </p>
        </div>

        {/* Main + sidebar */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-12 items-start">

          {/* Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#E5DDD3] overflow-hidden shadow-[0_2px_8px_rgba(45,90,71,0.05)] hover:shadow-[0_16px_36px_rgba(45,90,71,0.13)] hover:-translate-y-1.5 hover:border-[#2D5A47]/25 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13271d]/55 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-bold bg-[#1E3D30]/90 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
                    <span className="font-medium">{formatDate(post.publishedAt)}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTimeMin} min read
                    </span>
                  </div>
                  <h2 className="font-black text-[#1E3D30] text-lg leading-snug mb-2 group-hover:text-[#2D5A47] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#374151] leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D4883E]">
                    Read post
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}

            {allPosts.length === 0 && (
              <div className="sm:col-span-2 bg-white rounded-2xl border border-[#E5DDD3] p-10 text-center">
                <p className="text-[#374151]">New posts are on the way. Check back soon.</p>
              </div>
            )}
          </div>

          {/* Sidebar (full-width screens; stacks below on mobile) */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 self-start">
            {/* Estimate CTA */}
            <div className="bg-[#1E3D30] rounded-2xl p-6 text-white relative overflow-hidden">
              <div
                className="absolute -top-14 -right-14 w-44 h-44 opacity-[0.07] pointer-events-none"
                style={{ background: "white", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", borderRadius: "0 0 0 40%" }}
              />
              <p className="font-black text-lg mb-1.5 relative">Roof on your mind?</p>
              <p className="text-white/65 text-sm mb-5 relative">Free inspection and a written estimate, no pressure. 7 days a week.</p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold py-3 rounded-xl text-sm transition-colors mb-2.5 relative"
              >
                <Phone size={15} /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors relative"
              >
                Get a free estimate <ArrowRight size={14} />
              </Link>
            </div>

            {/* Popular reads */}
            {popular.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#E5DDD3] p-6">
                <p className="text-[#D4883E] font-bold text-xs uppercase tracking-wider mb-4">Popular reads</p>
                <div className="flex flex-col">
                  {popular.map((p, idx) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex items-start gap-3 py-3 border-b border-[#F0E6D8] last:border-0 last:pb-0 first:pt-0"
                    >
                      <span className="text-[#D4883E] font-black text-sm shrink-0 w-4 leading-snug">{idx + 1}</span>
                      <span className="text-sm font-semibold text-[#1E3D30] leading-snug group-hover:text-[#2D5A47] transition-colors">
                        {p.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* FAQ */}
        <div className="mt-16 lg:mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Before You Go</p>
            <h2
              className="text-[#1E3D30] leading-tight"
              style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontFamily: "var(--font-display)" }}
            >
              Roofing questions, answered
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {BLOG_FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-[#E5DDD3] p-5 open:shadow-[0_4px_16px_rgba(45,90,71,0.08)] open:border-[#2D5A47]/30 transition-shadow"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-bold text-[#1E3D30] text-[15px] md:text-base leading-snug pt-0.5">
                    {faq.q}
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-[#D4883E]/10 flex items-center justify-center shrink-0 transition-transform group-open:rotate-45">
                    <Plus size={15} className="text-[#D4883E]" />
                  </span>
                </summary>
                <p className="text-sm text-[#374151] leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
