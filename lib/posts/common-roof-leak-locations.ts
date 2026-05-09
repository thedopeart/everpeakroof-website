import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "common-roof-leak-locations",
  title: "Common Roof Leak Locations (and How to Spot Them Before They Spread)",
  excerpt:
    "Most roof leaks come from the same handful of spots. We ranked the seven most common by how often we actually see them on Seattle homes, plus what to look for inside and out.",
  category: "How-To",
  author: "Everpeak Roofing",
  publishedAt: "2026-04-08",
  readingTimeMin: 5,
  heroImage: "/images/roof-repair-progress.jpg",
  heroImageAlt: "Roof repair in progress showing exposed shingles and flashing work",
  tags: ["leak", "repair", "inspection", "how-to"],
  blocks: [
    {
      type: "paragraph",
      text: "After thousands of [roof repair](/services/roof-repair) calls across Seattle, we've got a clear picture of where leaks actually start. Same handful of spots, over and over. If you know where to look, you can catch most of these before they turn into drywall damage and mold.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "3–4/wk", label: "Pipe boot flashings our crews replace every week across all active jobs — the single most common repair" },
        { value: "$150–$300", label: "Typical cost to replace a failed pipe boot — cheap if caught early, expensive once deck damage sets in" },
        { value: "8–12 yrs", label: "How long rubber pipe boot seals last before cracking — well before the surrounding shingles wear out" },
      ],
    },
    {
      type: "heading",
      text: "Where leaks actually start: ranked by frequency",
    },
    {
      type: "table",
      headers: ["Leak Source", "Interior Sign", "Exterior Sign", "Repair Cost"],
      rows: [
        { cells: [{ text: "1. Pipe boot flashings" }, { text: "Stain near bathroom or kitchen" }, { text: "Cracked rubber collar visible" }, { text: "$250–$450" }] },
        { cells: [{ text: "2. Chimney flashing" }, { text: "Wall or ceiling stain near chimney" }, { text: "Metal separated from mortar" }, { text: "$600–$1,500" }] },
        { cells: [{ text: "3. Roof valleys" }, { text: "Stain along interior corner below valley" }, { text: "Dark metal, debris dams" }, { text: "$500–$1,200" }] },
        { cells: [{ text: "4. Skylight curbs" }, { text: "Staining around frame — source and stain match" }, { text: "Cracked sealant, lifted corners" }, { text: "$400–$3,000" }] },
        { cells: [{ text: "5. Wall-to-roof transitions" }, { text: "Interior wall staining below roof line" }, { text: "Bubbling paint, soft siding" }, { text: "$400–$800+" }] },
        { cells: [{ text: "6. Ridge caps" }, { text: "Staining along ceiling peak" }, { text: "Lifted or missing caps, backed-out nails" }, { text: "$200–$500" }] },
        { cells: [{ text: "7. Nail pops" }, { text: "Small scattered ceiling stains" }, { text: "Bumps or exposed nail heads" }, { text: "$150–$300" }] },
      ],
    },
    {
      type: "heading",
      text: "Why each one fails",
    },
    {
      type: "paragraph",
      text: "**Pipe boots** are the most common by a wide margin. The rubber dries out and cracks after 8 to 12 years, way before the shingles around them wear out. **Chimney flashing** fails because Seattle homes on clay soil settle constantly, and counter flashing pulls away from brick. **Valleys** corrode over time and collect debris that dams water back under shingles. **Skylights** have curb seals that deteriorate from seasonal temperature swings. **Wall-to-roof transitions** lack kick-out flashing on most pre-2000 homes, letting water pour behind siding and rot the wall from inside. **Ridge caps** get peeled in storms because they're the highest, most exposed part of the roof. **Nail pops** from poor installation create tiny holes water follows straight down.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Seattle's climate makes small failures urgent",
      body: "A cracked pipe boot in Phoenix might go two years before causing interior damage. That same crack here will have water coming through within weeks. We get eight or nine months of constant moisture — our climate doesn't give small failures time to stay small. If you've spotted something, don't wait.",
    },
    {
      type: "paragraph",
      text: "If you've got a leak that's already active, don't wait on it. We offer [emergency roof repair](/services/emergency-roof-repair) for situations that can't sit. For everything else, catching these problems early during a routine [inspection](/blog/roof-inspection-checklist) is the cheapest insurance you'll find. Curious about a specific leak? Check out our full guide on [how to find and fix a roof leak](/blog/find-fix-roof-leak), or [get in touch](/contact) and we'll get someone out.",
    },
  ],
};

export default post;
