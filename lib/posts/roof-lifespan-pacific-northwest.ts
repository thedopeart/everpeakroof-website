import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-lifespan-pacific-northwest",
  title: "How Long Does a Roof Last in the Pacific Northwest?",
  excerpt:
    "Every material ages faster here than the brochure says. Real PNW lifespans for asphalt, architectural, metal, cedar, and flat roofing, and what shortens them.",
  category: "Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-07-01",
  readingTimeMin: 7,
  heroImage: "/images/shingle-closeup.jpg",
  heroImageAlt: "Close-up of asphalt shingles aging on a Pacific Northwest roof",
  tags: ["lifespan", "materials", "pnw", "maintenance"],
  blocks: [
    {
      type: "paragraph",
      text: "Roofing manufacturers publish lifespan numbers tested in ideal conditions, and the Pacific Northwest is not ideal conditions. Eight months of moisture, moss that colonizes anything that holds still, fir needles in every valley, and roofs that stay cool and damp long after the rain stops. The result: most materials give up their last five to ten brochure years here unless they're actively maintained. Here's what we actually see on Puget Sound roofs.",
    },
    {
      type: "table",
      headers: ["Material", "Brochure Says", "PNW Reality", "With Good Care"],
      rows: [
        { cells: [{ text: "3-tab asphalt" }, { text: "25 yrs" }, { text: "15 to 20 yrs", badge: "amber" }, { text: "20 yrs" }] },
        { cells: [{ text: "Architectural shingle" }, { text: "30 to 50 yrs" }, { text: "25 to 30 yrs", badge: "green" }, { text: "30 yrs" }] },
        { cells: [{ text: "Cedar shake" }, { text: "30 yrs" }, { text: "20 to 25 yrs", badge: "amber" }, { text: "25+ yrs" }] },
        { cells: [{ text: "Standing seam metal" }, { text: "50+ yrs" }, { text: "50+ yrs", badge: "green" }, { text: "60 yrs" }] },
        { cells: [{ text: "Flat membrane (TPO)" }, { text: "20 to 30 yrs" }, { text: "15 to 25 yrs", badge: "gray" }, { text: "25 yrs" }] },
      ],
    },
    {
      type: "heading",
      text: "Why the same shingle dies younger here",
    },
    {
      type: "paragraph",
      text: "It's not the rain itself, it's the time spent wet. In the South or Southwest, a roof dries within hours of a storm. Here, a shaded north slope can stay damp from October to May. Sustained moisture feeds moss, and moss is the real killer: it grows under shingle edges, lifts them, and holds water against the asphalt until the granules wash away and the mat dries out and cracks. That's why two identical roofs installed the same year can be a decade apart in condition, one on an open sunny lot, the other under fir canopy. Tree cover is the single biggest variable in PNW roof lifespan.",
    },
    {
      type: "heading",
      text: "What actually extends a roof's life",
    },
    {
      type: "paragraph",
      text: "Four things, in order of impact. **Keep the moss off.** A [soft-wash cleaning](/services/soft-washing) when green first appears, and zinc strips at the ridge to slow regrowth. **Keep the debris off.** Needles and leaves in valleys hold moisture exactly where the roof is most vulnerable. **Ventilate the attic.** Heat and moisture trapped under the deck age shingles from below, and a lot of older PNW homes are badly vented. **Fix small failures fast.** A $400 pipe boot replacement now versus rotted decking later. An [annual inspection](/blog/roof-inspection-checklist) catches all four before they compound.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "The quick self-check",
      body: "From the ground with binoculars: shingle edges curling or lifting, black granules collecting in gutters, green anywhere on the field, dark streaks running down slopes. Any two of those on a roof past 15 years is worth a professional look. None of them on a 20-year roof means you likely have time left.",
    },
    {
      type: "heading",
      text: "Planning the replacement window",
    },
    {
      type: "paragraph",
      text: "The goal isn't squeezing out every last year. A roof that fails in service costs more, because water damage rides along. The smart window opens when repairs start clustering and closes before the first real leak. If you're comparing what to install next, our [materials rundown for the PNW](/blog/best-roofing-materials-pnw) ranks the options for this climate, and the [cost guide](/blog/seattle-roof-replacement-cost-2026) covers what replacement runs. Not sure where your roof stands? A [free inspection](/services/roof-inspection) puts a real number on the years it has left.",
    },
  ],
};

export default post;
