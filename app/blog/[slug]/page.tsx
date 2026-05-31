import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, Calendar, User, ArrowRight, Phone, Lightbulb, AlertTriangle, Info } from "lucide-react";
import { getAllPosts, getPost } from "@/lib/posts";
import type { Block } from "@/lib/posts";
import type { ReactNode } from "react";
import JsonLd from "@/components/shared/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const LINK_CLASS =
  "text-[#2D5A47] font-semibold underline decoration-[#D4883E]/40 decoration-2 underline-offset-4 hover:decoration-[#D4883E] transition-colors";

// Parses **bold** and [text](url) inline markdown
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let rest = text;
  let key = 0;

  while (rest.length > 0) {
    const boldM = /\*\*([^*]+)\*\*/.exec(rest);
    const linkM = /\[([^\]]+)\]\(([^)]+)\)/.exec(rest);

    const boldIdx = boldM ? boldM.index : Infinity;
    const linkIdx = linkM ? linkM.index : Infinity;

    if (boldIdx === Infinity && linkIdx === Infinity) {
      parts.push(rest);
      break;
    }

    if (boldIdx < linkIdx) {
      if (boldM!.index > 0) parts.push(rest.slice(0, boldM!.index));
      parts.push(
        <strong key={`b-${key++}`} className="font-semibold text-[#1E3D30]">
          {boldM![1]}
        </strong>
      );
      rest = rest.slice(boldM!.index + boldM![0].length);
    } else {
      if (linkM!.index > 0) parts.push(rest.slice(0, linkM!.index));
      const [, label, href] = linkM!;
      if (href.startsWith("/")) {
        parts.push(
          <Link key={`l-${key++}`} href={href} className={LINK_CLASS}>
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a key={`l-${key++}`} href={href} rel="noopener noreferrer" className={LINK_CLASS}>
            {label}
          </a>
        );
      }
      rest = rest.slice(linkM!.index + linkM![0].length);
    }
  }

  return parts.length > 0 ? parts : [text];
}

const calloutConfig = {
  tip: {
    bg: "bg-[#EEF6F1]",
    border: "border-[#2D5A47]",
    icon: Lightbulb,
    iconColor: "text-[#2D5A47]",
    titleColor: "text-[#1E3D30]",
  },
  warning: {
    bg: "bg-[#FEF3E8]",
    border: "border-[#D4883E]",
    icon: AlertTriangle,
    iconColor: "text-[#D4883E]",
    titleColor: "text-[#7A4010]",
  },
  info: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#3B82F6]",
    icon: Info,
    iconColor: "text-[#2563EB]",
    titleColor: "text-[#1D4ED8]",
  },
};

const badgeStyles: Record<string, string> = {
  green: "bg-[#2D5A47]/10 text-[#1E3D30] border border-[#2D5A47]/25",
  amber: "bg-[#D4883E]/10 text-[#7A4010] border border-[#D4883E]/25",
  red:   "bg-red-50 text-red-700 border border-red-200",
  gray:  "bg-[#374151]/10 text-[#1F2937] border border-[#374151]/20",
};

function renderBlocks(blocks: Block[]): ReactNode {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={i} className="text-[#1F2937] text-lg leading-relaxed mb-6">
            {renderInline(block.text)}
          </p>
        );

      case "heading": {
        if (block.level === 3) {
          return (
            <h3 key={i} className="font-bold text-[#1E3D30] text-xl mt-10 mb-4">
              {block.text}
            </h3>
          );
        }
        return (
          <h2
            key={i}
            className="text-[#1E3D30] text-2xl font-bold border-b border-[#E5DDD3] pb-3 mt-12 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {block.text}
          </h2>
        );
      }

      case "stat-row":
        return (
          <div key={i} className="grid grid-cols-3 gap-3 my-8">
            {block.stats.map((stat, j) => (
              <div
                key={j}
                className="bg-[#FAF3EB] border border-[#E5DDD3] rounded-xl p-4 text-center"
              >
                <div
                  className="font-black text-[#2D5A47] mb-1.5 leading-none"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#4B5563] leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        );

      case "callout": {
        const cfg = calloutConfig[block.variant];
        const Icon = cfg.icon;
        return (
          <div
            key={i}
            className={`${cfg.bg} border-l-4 ${cfg.border} rounded-r-xl px-5 py-5 my-8`}
          >
            <div className="flex items-start gap-3">
              <Icon size={18} className={`${cfg.iconColor} shrink-0 mt-0.5`} />
              <div>
                {block.title && (
                  <p className={`font-bold text-sm ${cfg.titleColor} mb-1.5`}>{block.title}</p>
                )}
                <p className="text-[#1F2937] text-sm leading-relaxed">
                  {renderInline(block.body)}
                </p>
              </div>
            </div>
          </div>
        );
      }

      case "table":
        return (
          <div key={i} className="overflow-x-auto my-8 rounded-xl border border-[#E5DDD3] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1E3D30]">
                  {block.headers.map((h, j) => (
                    <th
                      key={j}
                      className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/80"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-[#FAF3EB]/60"}>
                    {row.cells.map((cell, k) => (
                      <td key={k} className="px-4 py-3 text-[#1F2937]">
                        {cell.badge ? (
                          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${badgeStyles[cell.badge]}`}>
                            {cell.text}
                          </span>
                        ) : k === 0 ? (
                          <span className="font-semibold text-[#1E3D30]">{cell.text}</span>
                        ) : cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "divider":
        return <hr key={i} className="border-[#E5DDD3] my-10" />;

      default:
        return null;
    }
  });
}

// Fallback renderer for plain-text body posts — parses ## headings and **bold**
function renderBody(body: string): ReactNode[] {
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((para, i) => {
      if (para.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-[#1E3D30] text-2xl font-bold border-b border-[#E5DDD3] pb-3 mt-12 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {para.slice(3)}
          </h2>
        );
      }
      if (para.startsWith("### ")) {
        return (
          <h3 key={i} className="font-bold text-[#1E3D30] text-xl mt-10 mb-4">
            {para.slice(4)}
          </h3>
        );
      }
      return (
        <p key={i} className="text-[#1F2937] text-lg leading-relaxed mb-6 last:mb-0">
          {renderInline(para)}
        </p>
      );
    });
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

  const related = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema({
        title: post.title,
        description: post.excerpt,
        slug: post.slug,
        publishedAt: post.publishedAt,
        modifiedAt: post.updatedAt ?? undefined,
        imageUrl: post.heroImage,
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://everpeakroof.com" },
        { name: "Blog", url: "https://everpeakroof.com/blog" },
        { name: post.title, url: `https://everpeakroof.com/blog/${post.slug}` },
      ])} />
    <div className="min-h-screen bg-white pt-28 pb-20">

      {/* Narrow header section */}
      <div className="max-w-4xl mx-auto px-5 md:px-8">

        <nav className="flex items-center gap-1.5 text-sm text-[#4B5563] mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#2D5A47] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-[#9CA3AF]" />
          <Link href="/blog" className="hover:text-[#2D5A47] transition-colors">Blog</Link>
          <ChevronRight size={13} className="text-[#9CA3AF]" />
          <span className="text-[#1F2937] font-semibold line-clamp-1">{post.title}</span>
        </nav>

        <div className="mb-4">
          <span className="inline-block text-xs font-bold bg-[#2D5A47]/10 text-[#2D5A47] px-3 py-1.5 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        <h1
          className="text-[#1E3D30] leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6B7280] pb-8 border-b border-[#E5DDD3]">
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
      </div>

      {/* Wider hero image */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 my-10">
        <div className="relative h-72 md:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(30,61,48,0.18)]">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-4xl mx-auto px-5 md:px-8">

        {/* Excerpt intro callout */}
        <div className="bg-[#FAF3EB] border-l-4 border-[#D4883E] rounded-r-2xl px-6 py-5 mb-10">
          <p className="text-[#1C1C1C] text-base leading-relaxed font-medium">{post.excerpt}</p>
        </div>

        {/* Body */}
        <article className="mb-10">
          {post.blocks
            ? renderBlocks(post.blocks)
            : post.body
              ? renderBody(post.body)
              : null}
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-14 pt-6 border-t border-[#E5DDD3]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-[#FAF3EB] border border-[#E5DDD3] text-[#4B5563] px-3 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA card */}
        <div className="bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] rounded-2xl p-8 mb-14">
          <h3
            className="text-white text-xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Got a roof question of your own?
          </h3>
          <p className="text-white/75 text-sm mb-6 max-w-lg leading-relaxed">
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
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <Phone size={14} />
              {PHONE}
            </a>
          </div>
        </div>

        {/* Related posts — text-only */}
        {related.length > 0 && (
          <div>
            <h2 className="font-bold text-[#1E3D30] text-xl mb-1">Keep Reading</h2>
            <p className="text-sm text-[#6B7280] mb-5">More from the Everpeak blog</p>
            <div className="flex flex-col divide-y divide-[#E5DDD3]">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group py-5 flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#D4883E] uppercase tracking-wider mb-1.5">
                      {rp.category}
                    </p>
                    <h3 className="font-bold text-[#1E3D30] leading-snug group-hover:text-[#2D5A47] transition-colors mb-1.5">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] flex items-center gap-1">
                      <Clock size={11} />
                      {rp.readingTimeMin} min read
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#D4883E] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
