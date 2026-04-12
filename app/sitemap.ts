import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://everpeakroof.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE,                                priority: 1.0, changeFrequency: "weekly"  as const },
    { url: `${BASE}/about`,                     priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`,                   priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/services`,                  priority: 0.9, changeFrequency: "weekly"  as const },
    { url: `${BASE}/instant-roof-quote`,        priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${BASE}/reviews`,                   priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`,                      priority: 0.7, changeFrequency: "weekly"  as const },
    { url: `${BASE}/tools/roof-cost-estimator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/tools/roof-pitch-calculator`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE}/privacy`,                   priority: 0.2, changeFrequency: "yearly"  as const },
    { url: `${BASE}/terms`,                     priority: 0.2, changeFrequency: "yearly"  as const },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const cityPages = cities.map((c) => ({
    url: `${BASE}/${c.slug}`,
    priority: c.tier === 1 ? 0.9 : c.tier === 2 ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages].map((p) => ({
    ...p,
    lastModified: now,
  }));
}
