import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, Calendar, User, ArrowRight, Phone } from "lucide-react";
import { getAllPosts, getPost } from "@/lib/posts";
import type { ReactNode } from "react";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

// Parses `[text](url)` markdown-style inline links inside a paragraph.
// Internal URLs (starting with `/`) render as Next <Link> for SEO equity.
// Everything else renders as plain <a rel="noopener">.
function renderParagraph(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    if (href.startsWith("/")) {
      parts.push(
        <Link
          key={`l-${key++}`}
          href={href}
          className="text-[#2D5A47] font-semibold underline decoration-[#D4883E]/40 decoration-2 underline-offset-4 hover:decoration-[#D4883E] transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`l-${key++}`}
          href={href}
          rel="noopener noreferrer"
          className="text-[#2D5A47] font-semibold underline decoration-[#D4883E]/40 decoration-2 underline-offset-4 hover:decoration-[#D4883E] transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Everpeak Roofing`,
    description: post.excerpt,
    alternates: { canonical: `https://everpeakroof.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [post.heroImage],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const paragraphs = post.body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const related = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-[#374151] mb-8 flex-wrap">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link href="/blog" className="hover:text-[#2D5A47] transition-colors">Blog</Link>
          <ChevronRight size={13} />
          <span className="text-[#2C2C2C] font-semibold line-clamp-1">{post.title}</span>
        </nav>

        {/* Category */}
        <div className="mb-5">
          <span className="inline-block text-xs font-bold bg-[#2D5A47]/10 text-[#2D5A47] px-3 py-1.5 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-black text-[#1E3D30] leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
        >
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#374151]/80 mb-8">
          <span className="flex items-center gap-1.5">
            <User size={13} />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readingTimeMin} min read
          </span>
        </div>

        {/* Hero image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Body */}
        <article className="mb-12">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-[#374151] text-lg leading-relaxed mb-5 last:mb-0"
            >
              {renderParagraph(para)}
            </p>
          ))}
        </article>

        {/* CTA card */}
        <div className="bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] rounded-2xl p-8 mb-14">
          <h3 className="font-bold text-white text-xl mb-2">
            Got a roof question of your own?
          </h3>
          <p className="text-white/65 text-sm mb-6 max-w-lg">
            We offer free inspections across Seattle and the Puget Sound. We'll take a look, show you photos, and give you a straight answer. No pressure.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Get a Free Estimate
              <ArrowRight size={14} />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <Phone size={14} />
              {PHONE}
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div>
            <h2 className="font-black text-[#1E3D30] text-xl mb-5">Keep Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-[#E5DDD3] overflow-hidden hover:shadow-[0_8px_28px_rgba(45,90,71,0.12)] hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={rp.heroImage}
                      alt={rp.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-[#D4883E] uppercase tracking-wider mb-2">
                      {rp.category}
                    </p>
                    <h3 className="font-bold text-[#1E3D30] text-base leading-snug mb-2 group-hover:text-[#2D5A47] transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-[#374151]/70">
                      {rp.readingTimeMin} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
