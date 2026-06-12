import type { NextRequest } from "next/server";

/**
 * Edge bot gate — blocks obvious non-browser automation and scripting clients
 * before they reach a route handler. This is the "Layer A" of bot defense; the
 * client-side analytics gate in app/layout.tsx is "Layer B" (it catches headless
 * browsers that spoof a real Chrome UA, which is what inflates GA4).
 *
 * Deliberately does NOT block:
 *  - Search engines (Googlebot, Bingbot, DuckDuckBot, Applebot, YandexBot)
 *  - SEO crawlers we actively use (AhrefsBot, SemrushBot) for site audits
 *  - AI crawlers (GPTBot, ClaudeBot, CCBot, PerplexityBot) — we WANT AI citations
 *  - Social unfurlers (facebookexternalhit, Twitterbot, Slackbot, Discordbot)
 *
 * Only positively-matched automation/scripting UAs are blocked, so platform
 * internals (Vercel ISR/preview fetches, uptime checks with real UAs) pass.
 */
const BLOCKED_UA =
  /(headlesschrome|phantomjs|puppeteer|playwright|selenium|webdriver|electron\/|scrapy|python-requests|python-urllib|aiohttp|httpx\/|node-fetch|axios\/|go-http-client|libwww-perl|java\/[0-9]|jakarta|okhttp|curl\/|wget\/|httpunit|apachebench|\bzgrab\b|masscan|nuclei|nikto|sqlmap|semrushbot-ba|dotbot|mj12bot|blexbot|petalbot|dataforseo|megaindex|seekport|serpstatbot)/i;

export function botBlocked(req: NextRequest): boolean {
  const ua = req.headers.get("user-agent") || "";
  if (!ua) return false; // allow empty UA — avoids blocking platform internals
  return BLOCKED_UA.test(ua);
}
