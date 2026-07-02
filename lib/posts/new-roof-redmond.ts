import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "new-roof-redmond",
  title: "Getting a New Roof in Redmond: What Re-Roofing Actually Involves",
  excerpt:
    "Redmond's 1990s building boom means whole neighborhoods are re-roofing at once. Here's the real process, the real costs, and where cheap bids cut corners.",
  category: "Local Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-07-01",
  readingTimeMin: 6,
  heroImage: "/images/roofer-installing.jpg",
  heroImageAlt: "Roofer installing new architectural shingles on a Redmond home",
  tags: ["redmond", "roof replacement", "re-roofing", "eastside"],
  blocks: [
    {
      type: "paragraph",
      text: "Redmond grew fast in the 1990s and early 2000s, and the roofs went on in the same wave. Thirty years later, Education Hill, Grass Lawn, and Idylwood are re-roofing street by street. If you're starting to get quotes, it helps to know exactly what a proper re-roof includes, because the difference between bids is almost never the shingles. It's what's underneath them.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "$12k to $30k", label: "Where most Redmond replacements land, with a 2,000 sq ft home around $25k with architectural shingles" },
        { value: "1 to 3 days", label: "Typical timeline for a residential re-roof, tear-off through cleanup" },
        { value: "25 to 30 yrs", label: "What a properly installed architectural shingle roof should give you on the Eastside" },
      ],
    },
    {
      type: "heading",
      text: "What a complete re-roof includes",
    },
    {
      type: "paragraph",
      text: "Tear-off of the old roof down to the deck, with disposal and dump fees included in the price. Inspection of the decking once it's exposed, and replacement of any soft sheathing, most 90s homes need at least a sheet or two. Ice and water shield in the valleys and at the eaves, which is code in our climate. Synthetic underlayment over the whole deck. New drip edge, step flashing, and counter flashing at every wall and chimney, never reused old metal. New pipe boots and ridge venting. Then the [shingles](/services/shingle-installation), starter course through ridge cap. And the permit. Every one of those line items should be visible in your quote.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Where low bids hide the gap",
      body: "A bid that comes in thousands under the others is usually missing something you can't see from the ground: layering over the old shingles instead of tearing off, skipping underlayment, reusing old flashing, or leaving decking repair as a surprise change order. Ask every contractor the same question: is this a full tear-off with new flashing, and is decking repair priced per sheet in writing?",
    },
    {
      type: "heading",
      text: "Redmond specifics worth knowing",
    },
    {
      type: "paragraph",
      text: "The 90s tract construction here mostly got builder-grade shingles, which is why so many of these roofs are done at 25 years instead of 30. The wooded lots around Education Hill and Bear Creek grow moss on the north slopes, so we set up new roofs to resist it: proper ventilation, and zinc strips where the tree cover is heavy. Wind exposure in the Sammamish Valley corridor argues for shingles with a high wind rating and careful edge detail, which is where wind failures start. None of this costs much at install time. All of it matters at year twenty.",
    },
    {
      type: "paragraph",
      text: "If you're not sure the roof is actually done, that's a fair question too. Some 90s roofs have five good years left, and a [free inspection](/services/roof-inspection) settles it without guesswork. We'd rather tell you to wait than tear off a roof that's still working. When you're ready for numbers, our [roof cost estimator](/tools/roof-cost-estimator) gives you a rough range, and the [Redmond service page](/redmond) covers the neighborhoods. Or just [contact us](/contact) and we'll come walk the roof.",
    },
  ],
};

export default post;
