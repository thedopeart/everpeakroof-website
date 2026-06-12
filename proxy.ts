import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { botBlocked } from "@/lib/bot-gate";

// Next 16 renamed Middleware to Proxy (proxy.ts / export function proxy).
// Layer A — edge bot block: reject obvious automation/scraping clients before
// they reach a route. Search engines, AI crawlers, and SEO tools pass through.
export function proxy(request: NextRequest) {
  if (botBlocked(request)) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  return NextResponse.next();
}

export const config = {
  // Run on everything except static assets and common files.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)$).*)",
  ],
};
