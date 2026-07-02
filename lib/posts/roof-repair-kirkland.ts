import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-repair-kirkland",
  title: "Roof Repair in Kirkland: Common Problems, Real Costs, and What to Actually Do First",
  excerpt:
    "Most Kirkland roof problems don't need a full replacement. Here's what we actually see up here, what it costs to fix, and the first move if you spot trouble.",
  category: "Local Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-10",
  readingTimeMin: 7,
  heroImage: "/images/worker-on-roof.jpg",
  heroImageAlt: "Everpeak roofer inspecting a shingle roof in Kirkland, WA",
  tags: ["kirkland", "roof repair", "local", "eastside"],
  blocks: [
    {
      type: "paragraph",
      text: "Kirkland's a funny market for roofing. You've got waterfront places in Houghton that catch wind straight off Lake Washington, hillside cedar-heavy lots in Finn Hill where the sun barely touches the north slope, and newer builds in Totem Lake and Rose Hill that are just starting to hit the age where little things go wrong. We work across all of it, and most of the calls we take end up being repairs, not replacements.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "$250 to $500", label: "Cost per pipe boot replacement, one of the most common calls we get from Rose Hill and Totem Lake" },
        { value: "~15 yrs", label: "How long moss takes to do serious damage to a shaded Finn Hill roof without any treatment" },
        { value: "$500 to $3,500", label: "Repair cost range for the four most common Kirkland issues, varies by scope and access" },
      ],
    },
    {
      type: "heading",
      text: "The four problems we see most",
    },
    {
      type: "paragraph",
      text: "**Lifted shingles and missing ridge caps**, the number one call in Juanita Bay and along the Houghton waterfront. The wind fetch off Lake Washington is long, and when a November storm comes through, the gusts hit the southwest slopes hard. Ridge caps take the worst of it because they're the most exposed part of the roof. Usually a few hundred bucks to rebed and replace a section. Ignore it for a year and water starts getting under the top course. **Moss and what moss leaves behind**, Finn Hill, parts of Juanita, anywhere under cedar and fir canopy. Moss holds water against the shingles, granules wash off, and by year fifteen you're looking at a roof that should've made it to twenty-five. **Pipe boot and flashing failures**, every roof has rubber boots around the plumbing vents. A cracked boot sends water straight down inside the wall, and the stain doesn't always show up where the leak actually is. **Skylight leaks**, a lot of 1980s and 1990s Kirkland homes got skylights put in during the remodel era. The factory seals don't last forever, and the flashing around them gets brittle.",
    },
    {
      type: "heading",
      text: "What repairs actually cost",
    },
    {
      type: "table",
      headers: ["Repair Type", "Cost Range", "Notes"],
      rows: [
        { cells: [{ text: "Missing or lifted shingles (handful)" }, { text: "$350 to $800" }, { text: "Quick, assuming no deck damage" }] },
        { cells: [{ text: "Ridge cap repair, 10 to 20 ft" }, { text: "$500 to $1,200" }, { text: "Common after Lake Washington wind events" }] },
        { cells: [{ text: "New pipe boot" }, { text: "$250 to $500 per boot" }, { text: "Fast fix, delays become expensive" }] },
        { cells: [{ text: "Step flashing replacement at wall" }, { text: "$600 to $1,500" }, { text: "More involved, shingles must be woven back in" }] },
        { cells: [{ text: "Skylight reflash" }, { text: "$800 to $1,800" }, { text: "Usually the flashing, not the glass" }] },
        { cells: [{ text: "Section of rotted decking + reshingle" }, { text: "$1,500 to $3,500" }, { text: "Often found after chasing a persistent leak" }] },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Phone quotes aren't real quotes",
      body: "If someone tells you over the phone a repair is going to be $6,000 without climbing up to look, get another opinion. Same goes the other direction, anyone quoting you $150 to 'fix that leak' probably isn't going up there either.",
    },
    {
      type: "heading",
      text: "How we actually approach a Kirkland repair call",
    },
    {
      type: "paragraph",
      text: "When we get a call about a leak, we don't just climb up and start tearing things apart. First we figure out where the water is actually coming from, which is almost never right above where you see the stain. Water runs along rafters, along the underside of the deck, and drips wherever gravity takes it. We'll check the attic first if we can get in there, look for dark spots on the sheathing, trace it back to the entry point. Then we go topside. If we can fix it clean and confidently, we'll give you a price and do it that day or schedule it. If it's a sign of something bigger, we'll tell you honestly.",
    },
    {
      type: "callout",
      variant: "info",
      title: "A real Rose Hill call from last month",
      body: "Got called to a house in Rose Hill, homeowner swore the leak was coming from a specific rafter bay because she could see the stain. We went up, and the actual water entry was about eleven feet uphill from where she was seeing it. Old chimney flashing, cracked mortar, water running down the underside of the deck the whole way. Fixed in about four hours. The stain would've kept coming back forever if we'd patched where she pointed.",
    },
    {
      type: "paragraph",
      text: "If water is actively coming inside, call us. We handle [emergency roof repairs](/services/emergency-roof-repair) across Kirkland, including after-hours tarping. If it's not an emergency, don't climb up there yourself, wet cedar shake and mossy shingles are genuinely dangerous to walk on. For repairs specifically, our [roof repair page](/services/roof-repair) has more detail on what we fix and how we price it. We cover all of [Kirkland and the surrounding Eastside](/kirkland). If you're south of here, we've got a [roof repair guide for Bellevue](/blog/roof-repair-bellevue) too.",
    },
  ],
};

export default post;
