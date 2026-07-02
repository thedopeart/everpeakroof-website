import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-pitch-guide",
  title: "Roof Pitch Explained: What Your Slope Means for Cost and Materials",
  excerpt:
    "Pitch ratios, degrees, and why an 8:12 roof costs more to work on than a 4:12. A plain-English guide to the number that shapes every roofing quote.",
  category: "Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-07-01",
  readingTimeMin: 6,
  heroImage: "/images/craftsman-roof-build.jpg",
  heroImageAlt: "Steep-pitch roof framing on a Puget Sound home",
  tags: ["roof pitch", "slope", "cost", "materials"],
  blocks: [
    {
      type: "paragraph",
      text: "Roof pitch is the number that quietly shapes everything about your roof: what materials can go on it, how long they last, how safe it is to work on, and what every repair and replacement will cost. Roofers talk about it as a ratio, home listings sometimes use degrees, and most homeowners aren't sure what their own roof measures. Here's the whole thing in plain English.",
    },
    {
      type: "heading",
      text: "Reading the numbers",
    },
    {
      type: "paragraph",
      text: "Pitch is rise over run: a 6:12 roof rises 6 inches for every 12 inches it travels horizontally. That's roughly 26.6 degrees. A 4:12 is about 18.4 degrees, an 8:12 is 33.7, and a 12:12 is a 45-degree slope. If you want to convert your own, our [roof pitch calculator](/tools/roof-pitch-calculator) does ratios to degrees and back, and shows how pitch changes the actual surface area of the roof, which is part of why steep roofs cost more: there's literally more roof up there than the footprint suggests.",
    },
    {
      type: "table",
      headers: ["Pitch", "Degrees", "Category", "Typical Materials"],
      rows: [
        { cells: [{ text: "Under 2:12" }, { text: "under 9.5" }, { text: "Flat / low slope", badge: "gray" }, { text: "TPO, torch-down, membrane" }] },
        { cells: [{ text: "2:12 to 4:12" }, { text: "9.5 to 18.4" }, { text: "Low slope", badge: "amber" }, { text: "Shingles (with extra underlayment), metal" }] },
        { cells: [{ text: "4:12 to 8:12" }, { text: "18.4 to 33.7" }, { text: "Conventional", badge: "green" }, { text: "All shingles, shake, metal, tile" }] },
        { cells: [{ text: "Over 8:12" }, { text: "33.7+" }, { text: "Steep slope", badge: "amber" }, { text: "Anything, at a labor premium" }] },
      ],
    },
    {
      type: "heading",
      text: "Why pitch changes the price",
    },
    {
      type: "paragraph",
      text: "Two reasons. Surface area first: a 2,000 square foot footprint under a 4:12 roof carries about 2,110 square feet of roofing, but the same footprint under a 12:12 carries around 2,830. You're buying and installing a third more material. Labor second: anything over 8:12 slows the crew down and usually requires roof jacks or harnesses, which adds 15 to 25% to labor. That's why a tall Capitol Hill foursquare and a Renton rambler with identical footprints get very different [replacement quotes](/blog/seattle-roof-replacement-cost-2026).",
    },
    {
      type: "heading",
      text: "What pitch means in a PNW winter",
    },
    {
      type: "paragraph",
      text: "Steeper is generally better in this climate. Water and debris shed fast, moss gets less purchase, and snow (the wet, heavy kind we get) doesn't sit. The trouble spots are at the other end: low-slope sections over garages and additions, common on the region's split-levels and ramblers, shed water slowly and fail years before the main roof. If your home mixes pitches, the low section is where to watch, and we covered that whole decision in [flat vs pitched roofing](/blog/flat-roof-vs-pitched). Shingles on anything under 4:12 also need upgraded underlayment to meet manufacturer specs, a detail cheap installs skip.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Find your pitch without climbing",
      body: "From the gable end of the house, a level and a tape measure get you close: hold the level horizontal against the roof line, measure 12 inches out, then measure straight down to the roof. That vertical number is your rise. Or skip the ladder entirely and use the [pitch calculator](/tools/roof-pitch-calculator) with a photo-based estimate.",
    },
    {
      type: "paragraph",
      text: "Pitch is also the first thing we account for when quoting, so if you're pricing work, knowing yours helps you sanity-check every bid. Run your numbers through the [cost estimator](/tools/roof-cost-estimator), or [have us out](/contact) and we'll measure it properly as part of the free estimate.",
    },
  ],
};

export default post;
