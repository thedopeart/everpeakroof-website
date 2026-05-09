import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "flat-roof-vs-pitched",
  title: "Flat Roof vs Pitched Roof: Pros, Cons, and Real Costs for Seattle Homes",
  excerpt:
    "Flat and pitched roofs solve different problems. Here's an honest comparison for Seattle and the Puget Sound, including materials, drainage, costs, and when each one actually makes sense.",
  category: "Comparison",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-30",
  readingTimeMin: 5,
  heroImage: "/images/craftsman-roof-build.jpg",
  heroImageAlt: "Craftsman-style pitched roof being built in the Seattle area",
  tags: ["flat roof", "pitched roof", "comparison", "commercial"],
  blocks: [
    {
      type: "paragraph",
      text: "Most homes in Seattle have pitched roofs, and there's a good reason for that. But flat roofs show up more than people think, especially on [commercial buildings](/services/commercial-roofing), ADUs, garage tops, and modern new construction popping up around Capitol Hill and Ballard. Picking between the two comes down to your building type, your budget, and how much rain you're willing to think about.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "¼ in/ft", label: "Minimum required slope on a 'flat' roof — it's never truly flat, just low enough to drain slowly" },
        { value: "25–30 yrs", label: "Lifespan of a well-installed architectural shingle pitched roof in the PNW" },
        { value: "20–25 yrs", label: "Realistic lifespan of a quality TPO flat roof membrane with good maintenance in Seattle" },
      ],
    },
    {
      type: "heading",
      text: "Side-by-side comparison",
    },
    {
      type: "table",
      headers: ["Factor", "Flat Roof (TPO/EPDM)", "Pitched Roof (Arch. Shingles)"],
      rows: [
        { cells: [{ text: "Installed cost" }, { text: "$6–$12 / sq ft" }, { text: "$7–$9 / sq ft" }] },
        { cells: [{ text: "PNW lifespan" }, { text: "20–25 yrs with maintenance" }, { text: "25–30 yrs" }] },
        { cells: [{ text: "Water shedding" }, { text: "Relies on drainage slope and clear drains", badge: "amber" }, { text: "Gravity does the work", badge: "green" }] },
        { cells: [{ text: "Moss risk" }, { text: "Higher — slow-moving water, debris sticks" }, { text: "Lower — water moves faster" }] },
        { cells: [{ text: "Maintenance need" }, { text: "High — drains must stay clear year-round", badge: "amber" }, { text: "Moderate" }] },
        { cells: [{ text: "Rooftop use" }, { text: "HVAC access, rooftop decks possible", badge: "green" }, { text: "Not suitable" }] },
        { cells: [{ text: "Material options" }, { text: "TPO, EPDM, mod bitumen" }, { text: "Shingles, metal, cedar, synthetic" }] },
      ],
    },
    {
      type: "heading",
      text: "Flat roofs: where they work and where they don't",
    },
    {
      type: "paragraph",
      text: "A flat roof isn't truly flat. It has a slight slope (usually a quarter inch per foot) so water moves toward the drains. In practice, with 150 or more rain days a year in Seattle, drainage is the single biggest concern. The main materials for flat roofs are TPO, EPDM (rubber membrane), and modified bitumen. TPO is the most popular choice for [commercial roofing](/services/commercial-roofing) right now because it's durable, reflects heat, and welds at the seams for a watertight bond. EPDM is cheaper but the seams are glued, which can fail over time in our wet climate.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Ponding water is the #1 flat roof killer in Seattle",
      body: "Water pooling is a real risk. If drains clog with fir needles or the membrane develops a low spot, water sits there. Standing water breaks down roofing materials faster than anything else. Moss and algae love low-slope surfaces because moisture doesn't run off as quickly. You'll need maintenance at least twice a year. A [maintenance program](/services/maintenance-program) pays for itself on a flat roof faster than on any other type.",
    },
    {
      type: "heading",
      text: "Pitched roofs: the Seattle default",
    },
    {
      type: "paragraph",
      text: "Walk through any neighborhood in Wallingford, Ravenna, or West Seattle and you'll see pitched roofs everywhere. A pitched roof sheds water naturally — gravity does the heavy lifting. Rain rolls off, debris slides down, and the surface dries faster between storms. That natural drainage advantage is huge in a city where it rains eight months of the year. Material options are wider too. Architectural asphalt shingles are the go-to for most [roof replacements](/services/roof-replacement) in the area, running $6.50 to $9.50 per square foot installed. Pitched roofs also give you attic space, which matters for ventilation.",
    },
    {
      type: "heading",
      text: "When flat makes sense",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Situations where flat is the right call",
      body: "Commercial and industrial buildings almost always go flat — more economical at scale and easier to service HVAC equipment on top. ADUs and garage conversions in Seattle often use flat or very low-slope designs because of height restrictions in the building code. Rooftop decks are another one — you can't put a patio on a 6:12 pitch. Modern residential architecture leans flat for the aesthetic, which is fine as long as the membrane and drainage are done right.",
    },
    {
      type: "heading",
      text: "The bottom line",
    },
    {
      type: "paragraph",
      text: "Flat roofs work well for commercial buildings, ADUs, and modern designs where the owner is willing to stay on top of maintenance. Pitched roofs are the safer bet for most residential homes in the Seattle area because they handle our rain with less effort and fewer surprises. If you're weighing the two for a specific project, [get a quote from us](/contact) and we'll walk you through the tradeoffs for your building. Our [roof inspection checklist](/blog/roof-inspection-checklist) covers what to look for on both types.",
    },
  ],
};

export default post;
