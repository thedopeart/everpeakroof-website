import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "cedar-shake-replacement-seattle",
  title: "Cedar Shake Replacement in Seattle: Why Every Roofer Is Doing These Right Now",
  excerpt:
    "Thousands of cedar shake roofs across Seattle are hitting end of life at the same time. Here's what's failing, what people are switching to, and what the tear-off actually involves.",
  category: "Local Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-04-06",
  readingTimeMin: 6,
  heroImage: "/images/craftsman-tile.jpg",
  heroImageAlt: "Cedar shake roof on a Seattle-area craftsman home showing age and moss growth",
  tags: ["cedar shake", "replacement", "seattle", "local"],
  blocks: [
    {
      type: "paragraph",
      text: "Cedar shake is the classic PNW roofing material. Drive through Queen Anne, Magnolia, or Laurelhurst and you'll see it on every other block. Most of those cedar roofs were installed in the 1970s through the early 1990s, and they're all hitting 30 to 40 years old right now. That's end of life for cedar shake, even in the best conditions. We're tearing off more cedar this year than any other material. It's not close.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "30–40 yrs", label: "Age of most Seattle cedar shake roofs right now — all hitting end of life in the same window" },
        { value: "~$14k", label: "Cost difference between new cedar and architectural shingles on a typical 2,000 sq ft Seattle roof" },
        { value: "90%", label: "Share of our cedar tear-offs that get replaced with architectural shingles, not new cedar" },
      ],
    },
    {
      type: "heading",
      text: "What failing cedar shake actually looks like",
    },
    {
      type: "paragraph",
      text: "You don't need to climb the roof to spot it. From the ground, look for shakes that are curling at the edges, splitting lengthwise, or missing entirely. Moss is a huge factor. Cedar is porous, and when moss holds moisture against the wood for months at a time (which it does in Seattle from October through May), the shake goes soft. We call it 'punky.' You can push your thumb through it. Other signs: dark staining that runs down the roof in streaks, shakes that have shifted out of alignment, and daylight visible in the attic where shakes have cracked all the way through. A [roof inspection](/services/roof-inspection) confirms it, but most homeowners already know by the time they call us.",
    },
    {
      type: "heading",
      text: "Why most people aren't going back to cedar",
    },
    {
      type: "table",
      headers: ["Factor", "New Cedar Shake", "Architectural Shingles"],
      rows: [
        { cells: [{ text: "Installed cost" }, { text: "$14–$20 / sq ft", badge: "red" }, { text: "$7–$9 / sq ft", badge: "green" }] },
        { cells: [{ text: "PNW lifespan" }, { text: "20–25 yrs (if maintained)" }, { text: "25–30 yrs" }] },
        { cells: [{ text: "Fire rating" }, { text: "Class C (untreated)", badge: "amber" }, { text: "Class A", badge: "green" }] },
        { cells: [{ text: "Moss resistance" }, { text: "Poor — grain grips spores", badge: "red" }, { text: "Moderate" }] },
        { cells: [{ text: "Maintenance needed" }, { text: "High — clean, treat, recoat every few years", badge: "amber" }, { text: "Low" }] },
        { cells: [{ text: "Skip sheathing issue" }, { text: "None — already there" }, { text: "Full re-deck required", badge: "amber" }] },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Fire code is tightening in WUI zones",
      body: "Parts of Issaquah, Sammamish, and Redmond have restrictions on cedar shake because of wildland-urban interface fire rules. Untreated cedar is Class C at best, and treated shake still doesn't match a Class A shingle or metal roof. Cities are tightening these codes, not loosening them. Check your local restrictions before committing to new cedar.",
    },
    {
      type: "heading",
      text: "What people are switching to",
    },
    {
      type: "paragraph",
      text: "About 90% of our cedar tear-offs go to architectural shingles. GAF Timberline, Owens Corning Duration, CertainTeed Landmark. These are the [shingle products](/services/shingle-installation) that dominate the Seattle market right now. They hold up well in rain, resist wind better than cedar, and come with 30 to 50 year warranties. Synthetic shake is the option for homeowners who want the cedar look without the cedar problems. Products like DaVinci and Brava mimic the texture of real cedar but are made from engineered polymers — Class A fire ratings, $12 to $16 per square foot. Metal roofing is the third option, still rare on residential cedar tear-offs, but growing. Standing seam metal lasts 50+ years and handles PNW weather like nothing else. If you want a deeper comparison on materials, our [best roofing materials for the PNW](/blog/best-roofing-materials-pnw) guide breaks it all down.",
    },
    {
      type: "heading",
      text: "The tear-off is harder than you'd think",
    },
    {
      type: "callout",
      variant: "info",
      title: "Skip sheathing adds $2,000–$4,000 to the job",
      body: "Cedar shakes were installed on skip sheathing — spaced 1x4 boards instead of solid plywood. When you tear the shakes off, you're left with a roof deck that has open spaces every few inches. You can't nail new shingles to that. The entire deck needs to be re-sheathed with solid plywood or OSB before anything new goes on top. Any honest estimate for a cedar shake replacement should include this line item. If it doesn't, ask why.",
    },
    {
      type: "heading",
      text: "Where we're seeing the most cedar tear-offs",
    },
    {
      type: "paragraph",
      text: "The neighborhoods track exactly with where Seattle's building booms happened in the 70s and 80s. Queen Anne, Magnolia, Laurelhurst, and Ravenna are the hotspots. On the Eastside, [Kirkland](/kirkland) and parts of [Bellevue](/bellevue) have whole streets of cedar shake homes all reaching end of life in the same window. Curious what a [replacement costs in 2026](/blog/seattle-roof-replacement-cost-2026)? We published updated numbers that include cedar tear-off pricing specifically.",
    },
  ],
};

export default post;
