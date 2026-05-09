import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-repair-everett",
  title: "Roof Repair in Everett: What Snohomish County Homeowners Should Know",
  excerpt:
    "Everett's mix of mid-century builds and wind off Port Gardner Bay keeps our repair crew busy year-round. Here's what we see most on Snohomish County roofs.",
  category: "Local Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-04-01",
  readingTimeMin: 6,
  heroImage: "/images/craftsman-roof-build.jpg",
  heroImageAlt: "Crew building out a new roof deck on an Everett home",
  tags: ["everett", "roof repair", "local", "snohomish county"],
  blocks: [
    {
      type: "paragraph",
      text: "We make the drive up I-5 to Everett more often than people assume. Snohomish County is home turf, and some of our most consistent repair work comes out of Everett neighborhoods. If you're out there wondering whether a Seattle-based roofer actually shows up when you call — yes, and we'd rather be in your driveway than stuck on a phone tree.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "1960s–80s", label: "When most Everett housing stock was built — old enough that second-generation roofs are now failing" },
        { value: "$400–$700", label: "Typical Everett repair for a pipe boot and flashing — similar to south Sound pricing" },
        { value: "5–10 yrs", label: "Life lost on underventilated Everett attics from that era — they cook the decking from the inside" },
      ],
    },
    {
      type: "heading",
      text: "What we see by neighborhood",
    },
    {
      type: "paragraph",
      text: "**Bayside and Harbour Pointe** get the worst of the wind off Port Gardner Bay. On an exposed hilltop lot, wind finds every weak point — ridge vents fail, gable end flashings separate, and wind-driven rain actually pushes water uphill under shingle courses when the bond strips are shot. Harbour Pointe also gets salt air from the Sound, which accelerates corrosion on metal flashings and fasteners. **Silver Lake** is different: mostly 80s and 90s tract homes on moderate lots, lots of trees. The biggest issue here isn't catastrophic wind damage — it's slow-motion moisture problems. Needles pile up in valleys, moss takes over north slopes, and eventually water works its way under shingles. By the time the homeowner notices a stain on the ceiling, the deck underneath has been soft for a year. **Riverside and View Ridge** are older, closer to downtown, and the problems there tend to be cumulative. We've pulled three layers of shingles off some of those 40s and 50s homes, and the decking underneath was original and half-rotted.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Underventilated attics are an Everett-specific problem",
      body: "Everett homes from the mid-century era are notorious for underventilated attics that cook the underside of the decking and shorten the roof life by five to ten years. We always check the attic if we can get into it — because a roof problem shows up inside before it shows up outside most of the time, and because poor ventilation is often the root cause of what looks like a surface failure.",
    },
    {
      type: "heading",
      text: "Ballpark pricing for Everett repair work",
    },
    {
      type: "table",
      headers: ["Repair Type", "Typical Range", "Notes"],
      rows: [
        { cells: [{ text: "Pipe boot and flashing repair" }, { text: "$400–$700" }, { text: "Most common call after any wind event" }] },
        { cells: [{ text: "Section of shingles plus decking repair" }, { text: "$1,500–$4,000" }, { text: "Varies by scope and access" }] },
        { cells: [{ text: "Full tear-off, 2,000 sq ft rambler" }, { text: "$12,000–$22,000" }, { text: "Depends on pitch, material, and access" }] },
        { cells: [{ text: "Ridge cap and wind damage repair" }, { text: "$500–$1,500" }, { text: "Common in Bayside after storm season" }] },
      ],
    },
    {
      type: "callout",
      variant: "info",
      title: "These are estimates, not quotes",
      body: "Every house is different, and the only way to get a real number is to have someone up on your roof with a tape and a camera. Ballpark pricing is useful for budgeting — not for signing a contract.",
    },
    {
      type: "paragraph",
      text: "If you want someone who actually knows Everett to come look at your roof, our [Everett service page](/everett) has the full rundown of what we cover and how to get ahold of us. You can also use our [roof cost estimator](/tools/roof-cost-estimator) online if you just want a number to work with before committing to anything. And if you want the basics on what our [general roof repair services](/services/roof-repair) include, that page lays out the whole process. We'd rather overshare than undersell.",
    },
  ],
};

export default post;
