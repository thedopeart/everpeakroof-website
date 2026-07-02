import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "tpo-roofing-guide",
  title: "TPO Roofing: The Complete Guide for Seattle Commercial Buildings",
  excerpt:
    "TPO is the most popular membrane on commercial roofs in the Pacific Northwest right now. Here's what building owners need to know about installation, lifespan, cost, and maintenance in our climate.",
  category: "Commercial Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-12",
  readingTimeMin: 6,
  heroImage: "/images/craftsman-roof-build.jpg",
  heroImageAlt: "Commercial roof installation in progress on a Seattle building",
  tags: ["tpo", "commercial", "flat roof", "membrane"],
  blocks: [
    {
      type: "paragraph",
      text: "TPO has quietly taken over the [commercial roofing](/services/commercial-roofing) market in Seattle. Walk across any flat-roofed office park, warehouse, or retail strip in the Puget Sound and odds are good you're standing on **thermoplastic polyolefin**. There's a reason for that, and it's not just price.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "$8 to $12", label: "Per sq ft installed for TPO in Seattle (2026), between EPDM and PVC, with welded seams like PVC" },
        { value: "20 to 30 yrs", label: "Expected TPO lifespan with proper maintenance, install quality is the biggest variable" },
        { value: "48 hrs", label: "How long ponding water after a storm is acceptable, longer than that and you've got a drainage problem" },
      ],
    },
    {
      type: "heading",
      text: "TPO vs EPDM vs PVC: quick comparison",
    },
    {
      type: "table",
      headers: ["Material", "Cost Installed", "Seam Type", "PNW Suitability", "Best For"],
      rows: [
        { cells: [{ text: "TPO" }, { text: "$8 to $12 / sq ft" }, { text: "Heat-welded", badge: "green" }, { text: "Excellent", badge: "green" }, { text: "Most Seattle commercial buildings" }] },
        { cells: [{ text: "EPDM (rubber)" }, { text: "$6 to $9 / sq ft", badge: "green" }, { text: "Taped and glued", badge: "amber" }, { text: "Poor, glued seams fail in wet climates", badge: "red" }, { text: "Dry climates; not recommended here" }] },
        { cells: [{ text: "PVC" }, { text: "$10 to $16 / sq ft", badge: "amber" }, { text: "Heat-welded", badge: "green" }, { text: "Excellent", badge: "green" }, { text: "Restaurants, buildings with grease exhaust" }] },
      ],
    },
    {
      type: "heading",
      text: "Why TPO works well in the PNW",
    },
    {
      type: "paragraph",
      text: "Seattle's climate is actually pretty friendly to TPO, more so than hotter regions where UV degrades the membrane faster. The **white reflective surface** meets cool-roof code requirements without additional coatings. Ponding water is the biggest concern on any [flat roof](/blog/flat-roof-vs-pitched), and TPO handles it well. The material doesn't absorb water, and **heat-welded seams** stay tight even when water sits on them for extended periods.",
    },
    {
      type: "paragraph",
      text: "That matters here because a flat commercial roof in Seattle will have standing water after almost every storm from October through April. **EPDM's glued seams are the weak link** in wet climates, we've pulled a lot of failed EPDM seams off commercial roofs that were under 15 years old.",
    },
    {
      type: "heading",
      text: "Common TPO failures",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Three things account for most of the TPO repair calls we get",
      body: "**Seam separation from poor welding**, if the installer ran the welder too fast, used the wrong temperature, or tried to weld in wet conditions, the seam won't hold. You'll see it as a lifted edge along the overlap. Water gets underneath and the problem spreads. **Ponding at low spots**, over time insulation compresses and new low spots develop. If water sits in the same spot for more than 48 hours after rain, you've got a drainage issue. **Punctures from foot traffic**, HVAC techs, window washers, anyone walking the roof can punch through with a dropped tool or sharp boot tread. Buildings with rooftop equipment need walk pads installed along traffic paths.",
    },
    {
      type: "heading",
      text: "Maintenance: what to actually do",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Annual maintenance that keeps a TPO roof alive",
      body: "Get the roof [inspected](/services/roof-inspection) once a year, ideally in spring after the heavy rain season. Clear all drains, scuppers, and gutters, fir needles and leaves clog drainage constantly in the PNW. Check every seam, especially around penetrations (pipes, HVAC curbs, skylights). Look for punctures, blistering, or lifted edges. If the membrane is showing age but deck and insulation are still solid, a [roof coating](/blog/roof-coating-guide) can buy 5 to 10 more years before a full replacement. A [maintenance program](/services/maintenance-program) is the easiest way to stay on top of all this.",
    },
    {
      type: "heading",
      text: "Install quality matters more than brand",
    },
    {
      type: "paragraph",
      text: "A TPO roof put on by an experienced crew with correct seam welding temperatures and proper detail work at penetrations will push toward that **30-year mark**. A roof installed by the lowest bidder who rushed the seams might start leaking in **8 to 10 years**. The quality of the install crew matters more than the quality of the membrane itself.",
    },
    {
      type: "paragraph",
      text: "For most [commercial buildings](/services/commercial-roofing) in the Puget Sound, TPO is the sweet spot between cost and performance. If you're not sure whether your commercial roof needs a coating, a [repair](/services/roof-repair), or a full replacement, [get in touch](/contact). We'll look at what you've got and tell you which direction actually makes sense.",
    },
  ],
};

export default post;
