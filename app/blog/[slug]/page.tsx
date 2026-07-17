import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Phone,
  Lightbulb,
  AlertTriangle,
  Info,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { getAllPosts, getPost } from "@/lib/posts";
import type { Block } from "@/lib/posts";
import type { ReactNode } from "react";
import JsonLd from "@/components/shared/json-ld";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import ReadingProgress from "@/components/blog/reading-progress";
import BlogToc from "@/components/blog/blog-toc";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

const RELATED_SERVICES = [
  { slug: "roof-repair", name: "Roof Repair" },
  { slug: "roof-replacement", name: "Roof Replacement" },
  { slug: "roof-inspection", name: "Roof Inspection" },
  { slug: "emergency-roof-repair", name: "Emergency Repair" },
];

const LINK_CLASS =
  "text-[#2D5A47] font-semibold underline decoration-[#D4883E]/40 decoration-2 underline-offset-4 hover:decoration-[#D4883E] transition-colors";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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
        <strong key={`b-${key++}`} className="font-bold text-[#1E3D30]">
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
  tip: { bg: "bg-[#EEF6F1]", border: "border-[#2D5A47]", icon: Lightbulb, iconColor: "text-[#2D5A47]", titleColor: "text-[#1E3D30]" },
  warning: { bg: "bg-[#FEF3E8]", border: "border-[#D4883E]", icon: AlertTriangle, iconColor: "text-[#D4883E]", titleColor: "text-[#7A4010]" },
  info: { bg: "bg-[#EFF6FF]", border: "border-[#3B82F6]", icon: Info, iconColor: "text-[#2563EB]", titleColor: "text-[#1D4ED8]" },
};

const badgeStyles: Record<string, string> = {
  green: "bg-[#2D5A47]/10 text-[#1E3D30] border border-[#2D5A47]/25",
  amber: "bg-[#D4883E]/10 text-[#7A4010] border border-[#D4883E]/25",
  red: "bg-red-50 text-red-700 border border-red-200",
  gray: "bg-[#374151]/10 text-[#1F2937] border border-[#374151]/20",
};

function renderBlocks(blocks: Block[]): ReactNode {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={i} className="text-[#1F2937] text-[17px] md:text-lg leading-[1.75] mb-6">
            {renderInline(block.text)}
          </p>
        );

      case "heading": {
        if (block.level === 3) {
          return (
            <h3 key={i} id={slugify(block.text)} className="scroll-mt-28 font-bold text-[#1E3D30] text-xl mt-10 mb-4">
              {block.text}
            </h3>
          );
        }
        return (
          <h2
            key={i}
            id={slugify(block.text)}
            className="scroll-mt-28 text-[#1E3D30] text-2xl md:text-[1.7rem] font-bold mt-14 mb-5 pb-3 border-b-2 border-[#E5DDD3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[#D4883E] mr-2">#</span>{block.text}
          </h2>
        );
      }

      case "stat-row":
        return (
          <div key={i} className="grid grid-cols-3 gap-3 my-9">
            {block.stats.map((stat, j) => (
              <div key={j} className="bg-white border border-[#E5DDD3] rounded-xl p-4 text-center shadow-[0_1px_4px_rgba(45,90,71,0.05)]">
                <div className="font-black text-[#2D5A47] mb-1.5 leading-none" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontFamily: "var(--font-display)" }}>
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
          <div key={i} className={`${cfg.bg} border-l-4 ${cfg.border} rounded-r-xl px-5 py-5 my-8 shadow-[0_1px_4px_rgba(45,90,71,0.05)]`}>
            <div className="flex items-start gap-3">
              <Icon size={18} className={`${cfg.iconColor} shrink-0 mt-0.5`} />
              <div>
                {block.title && <p className={`font-bold text-sm ${cfg.titleColor} mb-1.5`}>{block.title}</p>}
                <p className="text-[#1F2937] text-sm leading-relaxed">{renderInline(block.body)}</p>
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
                    <th key={j} className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/80">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-[#FAF3EB]/60"}>
                    {row.cells.map((cell, k) => (
                      <td key={k} className="px-4 py-3 text-[#1F2937]">
                        {cell.badge ? (
                          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${badgeStyles[cell.badge]}`}>{cell.text}</span>
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

// Fallback for plain-text body posts, parses ## headings and **bold**
function renderBody(body: string): ReactNode[] {
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((para, i) => {
      if (para.startsWith("## ")) {
        const text = para.slice(3);
        return (
          <h2 key={i} id={slugify(text)} className="scroll-mt-28 text-[#1E3D30] text-2xl font-bold border-b-2 border-[#E5DDD3] pb-3 mt-14 mb-5" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[#D4883E] mr-2">#</span>{text}
          </h2>
        );
      }
      if (para.startsWith("### ")) {
        return <h3 key={i} id={slugify(para.slice(4))} className="scroll-mt-28 font-bold text-[#1E3D30] text-xl mt-10 mb-4">{para.slice(4)}</h3>;
      }
      return <p key={i} className="text-[#1F2937] text-[17px] md:text-lg leading-[1.75] mb-6 last:mb-0">{renderInline(para)}</p>;
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
  const desc = post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + "..." : post.excerpt;
  return {
    title: post.title,
    description: desc,
    alternates: { canonical: `https://everpeakroof.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: desc,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      // og:image comes from the branded opengraph-image.tsx route (unique
      // per post: category chip + title), not the on-page hero photo.
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  // Table of contents from H2 headings
  const toc: { text: string; id: string }[] = [];
  for (const b of post.blocks ?? []) {
    if (b.type === "heading" && b.level !== 3) toc.push({ text: b.text, id: slugify(b.text) });
  }
  const showUpdated = post.updatedAt && post.updatedAt !== post.publishedAt;

  return (
    <div className="bg-[#FAF3EB]">
      <ReadingProgress />
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
      {post.faq && post.faq.length > 0 && <JsonLd data={faqSchema(post.faq)} />}

      {/* ───────── HERO ───────── */}
      <section className="relative isolate overflow-hidden bg-[#1E3D30] min-h-[58vh] flex flex-col">
        <Image src={post.heroImage} alt={post.heroImageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13271d]/95 via-[#13271d]/72 to-[#1E3D30]/45" />
        <div className="absolute top-1/4 right-1/5 w-96 h-96 rounded-full bg-[#D4883E]/12 blur-3xl pointer-events-none" />

        <div className="relative flex-1 flex flex-col w-full max-w-5xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-12">
          <nav className="flex items-center gap-1.5 text-sm text-white/55 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={13} />
            <span className="text-white/85 font-semibold">{post.category}</span>
          </nav>

          <div className="mt-auto pt-16 max-w-3xl">
            <span className="inline-block text-xs font-bold bg-[#D4883E] text-white px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
              {post.category}
            </span>
            <h1
              className="text-white leading-[1.12] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.3rem)", fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="flex items-center gap-1.5"><User size={14} className="text-[#E8A85E]" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#E8A85E]" /> {formatDate(post.publishedAt)}</span>
              {showUpdated && (
                <span className="flex items-center gap-1.5"><RefreshCw size={13} className="text-[#E8A85E]" /> Updated {formatDate(post.updatedAt!)}</span>
              )}
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#E8A85E]" /> {post.readingTimeMin} min read</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-[#FAF3EB]">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ───────── BODY: article + sidebar ───────── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">

          {/* Article */}
          <article className="min-w-0">
            {/* Lead / excerpt */}
            <p className="text-[#1E3D30] text-xl leading-relaxed font-medium border-l-4 border-[#D4883E] pl-5 mb-10">
              {post.excerpt}
            </p>

            {post.blocks ? renderBlocks(post.blocks) : post.body ? renderBody(post.body) : null}

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && (
              <section className="mt-14">
                <h2
                  id="faq"
                  className="scroll-mt-28 text-[#1E3D30] text-2xl md:text-[1.7rem] font-bold mb-6 pb-3 border-b-2 border-[#E5DDD3]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="text-[#D4883E] mr-2">#</span>Frequently asked questions
                </h2>
                <div className="space-y-4">
                  {post.faq.map((f) => (
                    <div key={f.q} className="bg-white rounded-2xl border border-[#E5DDD3] p-6 shadow-[0_1px_4px_rgba(45,90,71,0.05)]">
                      <h3 className="font-bold text-[#1E3D30] mb-2">{f.q}</h3>
                      <p className="text-[#1F2937] leading-[1.75]">{renderInline(f.a)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-12 pt-6 border-t border-[#E5DDD3]">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-white border border-[#E5DDD3] text-[#4B5563] px-3 py-1.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author / E-E-A-T */}
            <div className="flex items-start gap-4 bg-white rounded-2xl border border-[#E5DDD3] p-6 mt-12 shadow-[0_1px_4px_rgba(45,90,71,0.05)]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2D5A47] to-[#1E3D30] flex items-center justify-center shrink-0 ring-2 ring-[#D4883E]/30 shadow-[0_6px_16px_rgba(30,61,48,0.22)]">
                <ShieldCheck size={24} className="text-[#E8A85E]" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4883E] mb-0.5">Written by</p>
                <p className="font-black text-[#1E3D30]">{post.author}</p>
                <p className="text-sm text-[#6B7280] mt-1 leading-relaxed">
                  Licensed Seattle roofers, WA Contractor Lic. #EVERPRL743KE. We write from what we actually see on roofs across the Puget Sound.
                </p>
              </div>
            </div>

            {/* Related services, internal links */}
            <div className="mt-12">
              <h2 className="font-black text-[#1E3D30] text-lg mb-4">Related roofing services</h2>
              <div className="grid grid-cols-2 gap-3">
                {RELATED_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between gap-2 bg-white border border-[#E5DDD3] rounded-xl px-4 py-3 text-sm font-semibold text-[#1E3D30] hover:border-[#2D5A47]/40 hover:bg-[#2D5A47] hover:text-white transition-all"
                  >
                    {s.name}
                    <ArrowRight size={14} className="text-[#D4883E] group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] rounded-2xl p-8 mt-12 relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.06] pointer-events-none" style={{ background: "white", clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }} />
              <h3 className="text-white text-xl font-black mb-2 relative" style={{ fontFamily: "var(--font-display)" }}>Got a roof question of your own?</h3>
              <p className="text-white/70 text-sm mb-6 max-w-2xl leading-relaxed relative">
                Free inspections across Seattle and the Puget Sound. We take a look, show you photos, and give you a straight answer. No pressure.
              </p>
              <div className="flex flex-wrap gap-3 relative">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Get a Free Estimate <ArrowRight size={14} />
                </Link>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  <Phone size={14} /> {PHONE}
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-6 lg:sticky lg:top-28 self-start">
            <BlogToc items={toc} />

            <div className="bg-[#1E3D30] rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute -top-14 -right-14 w-44 h-44 opacity-[0.07] pointer-events-none" style={{ background: "white", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", borderRadius: "0 0 0 40%" }} />
              <p className="font-black text-lg mb-1.5 relative">Free roof estimate</p>
              <p className="text-white/65 text-sm mb-5 relative">No obligation, no pressure. We answer 7 days a week.</p>
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold py-3 rounded-xl text-sm transition-colors mb-2.5 relative">
                <Phone size={15} /> {PHONE}
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors relative">
                Request estimate <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related posts, full width below */}
        {related.length > 0 && (
          <div className="mt-16 lg:mt-20 pt-12 border-t border-[#E5DDD3]">
            <h2 className="font-black text-[#1E3D30] text-2xl mb-1" style={{ fontFamily: "var(--font-display)" }}>Keep reading</h2>
            <p className="text-sm text-[#6B7280] mb-7">More straight talk from the Everpeak crew</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-[#E5DDD3] overflow-hidden shadow-[0_2px_8px_rgba(45,90,71,0.05)] hover:shadow-[0_14px_32px_rgba(45,90,71,0.13)] hover:-translate-y-1.5 hover:border-[#2D5A47]/25 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image src={rp.heroImage} alt={rp.heroImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13271d]/55 to-transparent" />
                    <span className="absolute top-3 left-3 text-[11px] font-bold bg-[#1E3D30]/90 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">{rp.category}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-[#1E3D30] leading-snug mb-2 group-hover:text-[#2D5A47] transition-colors">{rp.title}</h3>
                    <p className="text-xs text-[#6B7280] flex items-center gap-1 mt-auto"><Clock size={11} /> {rp.readingTimeMin} min read</p>
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
