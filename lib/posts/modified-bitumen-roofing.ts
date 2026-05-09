import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "modified-bitumen-roofing",
  title: "Modified Bitumen Roofing: Is It Right for Your Flat Roof?",
  excerpt:
    "Modified bitumen has been a go-to flat roof material in Seattle for decades. It's tough, affordable, and handles foot traffic well. But it's not always the best pick. Here's how to decide.",
  category: "Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-04-01",
  readingTimeMin: 5,
  heroImage: "/images/roofer-installing.jpg",
  heroImageAlt: "Roofer installing roofing material on a flat roof section",
  tags: ["modified bitumen", "flat roof", "commercial", "materials"],
  blocks: [
    {
      type: "paragraph",
      text: "If you own a building in Seattle with a flat or low-slope roof, there's a decent chance it's covered in modified bitumen. Mod bit (that's what everyone in the trade calls it) has been a workhorse material for decades. Apartment buildings, commercial spaces, residential additions with that flat section over the garage. It's everywhere. But it's not the only option anymore, and it's worth understanding what you're dealing with before you repair or reroof.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "$6–$10", label: "Per sq ft installed for a mod bit roof system in the Seattle area — includes tear-off, base sheets, and flashings" },
        { value: "15–20 yrs", label: "Realistic lifespan in the PNW climate — some manufacturers claim 25, but our field experience says otherwise" },
        { value: "2x/yr", label: "Minimum maintenance visits needed to keep a mod bit roof healthy — clear drains every fall and spring" },
      ],
    },
    {
      type: "heading",
      text: "How mod bit compares to TPO and PVC",
    },
    {
      type: "table",
      headers: ["Factor", "Modified Bitumen", "TPO", "PVC"],
      rows: [
        { cells: [{ text: "Cost installed" }, { text: "$6–$10 / sq ft", badge: "green" }, { text: "$8–$12 / sq ft" }, { text: "$10–$16 / sq ft", badge: "amber" }] },
        { cells: [{ text: "Seam type" }, { text: "Torch-welded or adhered" }, { text: "Heat-welded", badge: "green" }, { text: "Heat-welded", badge: "green" }] },
        { cells: [{ text: "Foot traffic tolerance" }, { text: "Best — thick and durable", badge: "green" }, { text: "Moderate" }, { text: "Moderate" }] },
        { cells: [{ text: "Energy efficiency" }, { text: "Dark surface absorbs heat" }, { text: "Reflective white surface", badge: "green" }, { text: "Reflective, chemical-resistant" }] },
        { cells: [{ text: "PNW lifespan" }, { text: "15–20 yrs", badge: "amber" }, { text: "20–30 yrs", badge: "green" }, { text: "25–35 yrs", badge: "green" }] },
        { cells: [{ text: "Patching ease" }, { text: "Easy — torch and matching material", badge: "green" }, { text: "Moderate — requires hot-air welder" }, { text: "Moderate" }] },
      ],
    },
    {
      type: "heading",
      text: "Where you see it in Seattle",
    },
    {
      type: "paragraph",
      text: "Mod bit is all over the Puget Sound. Older apartment buildings and condos from the 1980s through the 2000s almost always have it. Commercial buildings, strip malls, warehouses. On residential homes, it shows up on flat sections: garage roofs, additions, covered decks, that low-slope area where the kitchen bump-out meets the main house. If your home has a [flat roof section](/blog/flat-roof-vs-pitched) and it was built or reroofed between 1985 and 2010, mod bit is a strong bet.",
    },
    {
      type: "heading",
      text: "Maintenance that actually matters",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Three things that keep a mod bit roof healthy",
      body: "**Clear drains and scuppers at least twice a year** (fall and spring). Clogged drains cause ponding, and ponding accelerates every kind of failure. **Check for cracks at the seams.** Mod bit seams dry out and separate over 10 to 15 years. Catching a cracked seam early is a 30-minute patch. Ignoring it means water between the layers. **Patch blisters before they split open** — blisters give water an entry point once they rupture.",
    },
    {
      type: "heading",
      text: "When mod bit makes sense vs. when TPO wins",
    },
    {
      type: "paragraph",
      text: "**Go with mod bit** if you're on a budget and need a reliable flat roof replacement, if you already have mod bit and are reroofing the same area (matching materials keeps things simple), or if you need a roof that handles foot traffic (rooftop HVAC, maintenance access). **TPO is the better choice** if you're building new and energy efficiency is a priority, if you want a longer warranty (TPO manufacturers offer 20 to 30 year warranties on commercial installs), or if you want the cleanest possible seams with the fewest potential failure points. For a full side-by-side, our [TPO roofing guide](/blog/tpo-roofing-guide) covers the details.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Torch-down safety — don't skip this",
      body: "Torch-applied mod bit means an open propane flame on your roof. Fires happen — not often, but enough that insurance companies have taken notice, and some municipalities have tightened restrictions. Self-adhered and cold-applied mod bit systems eliminate the fire risk entirely, and they've gotten good enough that we default to them for most jobs. The performance difference is minimal, and nobody has to worry about setting a building on fire during installation.",
    },
    {
      type: "paragraph",
      text: "If you're weighing your options on a flat roof project, [get in touch](/contact) and we'll walk through what makes sense for your building, your budget, and your timeline.",
    },
  ],
};

export default post;
