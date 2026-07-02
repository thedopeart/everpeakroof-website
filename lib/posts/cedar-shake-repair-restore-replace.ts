import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "cedar-shake-repair-restore-replace",
  title: "Cedar Shake Roofs: Repair, Restore, or Replace? The 10-Year Math",
  excerpt:
    "Every shake roof owner faces the same three options eventually. Here's how to tell which stage your roof is at, and what each path really costs over a decade.",
  category: "Decision Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-07-01",
  readingTimeMin: 7,
  heroImage: "/images/craftsman-roof-build.jpg",
  heroImageAlt: "Weathered cedar shake roof on a Puget Sound home",
  tags: ["cedar shake", "repair", "restoration", "replacement"],
  blocks: [
    {
      type: "paragraph",
      text: "Cedar shake was the roof of choice across the Puget Sound for decades, and the older neighborhoods in Shoreline, Woodinville, Edmonds, and north Seattle are still full of it. It's a beautiful material and a demanding one. Under fir canopy in a climate that's wet eight months a year, shake needs active care, and every owner eventually lands at the same fork: keep repairing it, invest in a restoration, or replace it. The right answer depends on what stage the roof is actually at, so let's define the stages honestly.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "20 to 25 yrs", label: "Realistic shake lifespan here with maintenance; less without it, more for premium-grade shakes kept clean" },
        { value: "$400 to $2,500", label: "Typical range for shake repair work, from a few split shakes to a full valley rebuild" },
        { value: "+$2k to $4k", label: "What shake tear-off adds over a composition tear-off when you do eventually replace" },
      ],
    },
    {
      type: "heading",
      text: "Stage one: sound but neglected. Restore it.",
    },
    {
      type: "paragraph",
      text: "If the shakes are mostly intact, still thick, not cupping or splitting in patterns, but the roof is dark with moss and debris, you're a restoration candidate. That means a careful low-pressure cleaning (never a pressure washer on shake), clearing the keyways so water can drain, replacing the scattered failed shakes, and treating the wood. Done right, this buys real years. The catch: restoration on a roof that's already structurally tired is money down the drain, which is why we walk the roof before quoting it.",
    },
    {
      type: "heading",
      text: "Stage two: failing in spots. Repair, with a plan.",
    },
    {
      type: "paragraph",
      text: "Split, cupped, or missing shakes in specific areas, valleys wearing through, flashing failures at chimneys: this stage is repairable, and repairs are honest money if the rest of the field is sound. What matters is the trend line. One repair every few years is maintenance. Repairs every season means the roof is telling you it's entering stage three, and it's time to stop putting new money into old wood. We track what we've fixed so the decision gets made on facts, not feel.",
    },
    {
      type: "heading",
      text: "Stage three: widespread failure. Replace.",
    },
    {
      type: "paragraph",
      text: "Thin, brittle shakes across the whole field, daylight visible in the attic, decking soft underfoot, moss lifting whole courses: at this point every dollar spent on repair is deferred replacement cost plus interest. Most owners at this stage convert to architectural shingle rather than re-shake, for cost and maintenance reasons. We covered that decision in detail in our [shake-to-shingle conversion guide](/blog/cedar-shake-to-shingle-conversion), and there's a Seattle-specific look at [cedar shake replacement](/blog/cedar-shake-replacement-seattle) too.",
    },
    {
      type: "table",
      headers: ["Path", "Upfront Cost", "What It Buys", "Right When"],
      rows: [
        { cells: [{ text: "Restoration" }, { text: "$1,500 to $4,000" }, { text: "3 to 8 more years" }, { text: "Shakes sound, roof dirty", badge: "green" }] },
        { cells: [{ text: "Ongoing repair" }, { text: "$400 to $2,500 per visit" }, { text: "1 to 3 years per repair" }, { text: "Isolated failures, sound field", badge: "amber" }] },
        { cells: [{ text: "Replacement" }, { text: "$20,000 to $40,000" }, { text: "25 to 30 years (shingle)" }, { text: "Widespread failure", badge: "gray" }] },
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "The 10-year math",
      body: "Take the repair quotes you'd realistically pay over ten years and compare the total against replacement. A stage-two roof might cost $3,000 to $6,000 in repairs over a decade, cheaper than replacing early. A stage-three roof can eat that much in two winters and still leak. The stage, not the age, decides.",
    },
    {
      type: "paragraph",
      text: "We do shake work across the north end and the Eastside, with a lot of it in [Shoreline](/shoreline), [Woodinville](/woodinville), and [Edmonds](/edmonds). If you're not sure which stage your roof is at, that's exactly what the free inspection answers. We'll get up there, photograph what we find, and tell you which column you're in, even when the answer is to spend nothing yet. [Get in touch](/contact) to set it up.",
    },
  ],
};

export default post;
