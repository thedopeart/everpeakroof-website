import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Roofing Advice from the Puget Sound | Everpeak Blog",
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

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <div className="mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">
            The Everpeak Blog
          </p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Roofing Advice from the Puget Sound
          </h1>
          <p className="text-[#374151] text-lg max-w-2xl">
            Real answers on moss, storms, repairs, and replacements. Written by the crew that actually works on Seattle roofs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-[#E5DDD3] overflow-hidden hover:shadow-[0_8px_28px_rgba(45,90,71,0.12)] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.heroImageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold bg-[#1E3D30]/90 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-bold text-[#1E3D30] text-lg leading-snug mb-3 group-hover:text-[#2D5A47] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#374151] leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-[#374151]/70 pt-4 border-t border-[#E5DDD3]">
                  <span className="font-medium">{formatDate(post.publishedAt)}</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readingTimeMin} min read
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-1 text-sm font-bold text-[#D4883E] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read post <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {allPosts.length === 0 && (
          <div className="bg-white rounded-2xl border border-[#E5DDD3] p-10 text-center">
            <p className="text-[#374151]">New posts are on the way. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
