import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "insurance-cover-roof-replacement",
  title: "Does Homeowner's Insurance Cover Roof Replacement? (What We've Seen in WA)",
  excerpt:
    "Sometimes yes, sometimes no, and the difference usually comes down to one word: sudden. Here's how roof insurance claims actually work in Washington state, from a crew that files them regularly.",
  category: "Insurance Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-22",
  readingTimeMin: 5,
  heroImage: "/images/shingle-replacement.jpg",
  heroImageAlt: "Shingle replacement in progress on a residential roof in Washington state",
  tags: ["insurance", "replacement", "claims", "washington"],
  blocks: [
    {
      type: "paragraph",
      text: "Homeowners ask us this question constantly, and the answer is always the same: it depends on why the roof needs replacing. Insurance covers sudden, accidental damage. It does not cover a roof that wore out. The line between those two things is where most of the confusion lives.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "Sudden", label: "The key word in almost every homeowner policy — storm damage is covered, wear and tear is not" },
        { value: "ACV vs RCV", label: "The policy type difference that can swing your payout by thousands of dollars — know which one you have" },
        { value: "~2 wks", label: "Typical adjuster wait time after filing — longer after major storms when every carrier is backed up" },
      ],
    },
    {
      type: "heading",
      text: "What's covered — and what isn't",
    },
    {
      type: "table",
      headers: ["Situation", "Covered?", "Why"],
      rows: [
        { cells: [{ text: "Windstorm blows off shingles" }, { text: "Yes", badge: "green" }, { text: "Sudden, accidental event" }] },
        { cells: [{ text: "Tree falls on the roof" }, { text: "Yes", badge: "green" }, { text: "Sudden, accidental event" }] },
        { cells: [{ text: "Hail cracks shingles across multiple slopes" }, { text: "Yes", badge: "green" }, { text: "Sudden, accidental event" }] },
        { cells: [{ text: "25-year-old roof that's worn out" }, { text: "No", badge: "red" }, { text: "Wear and tear — not covered under any WA policy" }] },
        { cells: [{ text: "Decade of moss damage" }, { text: "No", badge: "red" }, { text: "Deferred maintenance — treated as neglect" }] },
        { cells: [{ text: "Storm damage on an already-aging roof" }, { text: "Partial — disputed", badge: "amber" }, { text: "Gray area: carrier may approve one slope, deny another" }] },
      ],
    },
    {
      type: "heading",
      text: "How the payout process actually works in Washington",
    },
    {
      type: "paragraph",
      text: "You file a claim and get a claim number. The adjuster comes out (usually 1 to 2 weeks, longer after major storms) and writes a scope of work using software called Xactimate. That scope determines your payout. Here's the thing: the initial offer is a starting point, not a final answer. Adjusters write lean scopes — they'll include shingles but leave out the ice and water shield, or they'll price labor below what any legitimate contractor in Seattle charges. That's not necessarily bad faith. It's just how the system works. Your roofer needs to know how to read an Xactimate estimate and challenge it line by line.",
    },
    {
      type: "heading",
      text: "RCV vs ACV: this matters a lot",
    },
    {
      type: "paragraph",
      text: "**RCV (Replacement Cost Value):** Pays to replace the damaged roof at today's prices. Usually holds back the depreciation amount until work is completed. You get the first check up front, do the job, then submit for the 'recoverable depreciation' to get the rest. **ACV (Actual Cash Value):** Deducts depreciation based on roof age. If your roof is 18 years old, the carrier might only pay 40% of the replacement cost. Check your policy. This detail alone can swing the payout by thousands of dollars.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "The supplement process — and how we use it",
      body: "When the initial payout doesn't cover the actual cost of the work, your roofer files a supplement. That's a formal request with documentation showing why the scope needs to be bigger or why certain line items were missed. We file supplements regularly. A good supplement includes photos, measurements, and Xactimate line items that map directly to the work. Most carriers respond within a couple of weeks, and we've recovered thousands for homeowners who would have eaten the difference. Our [insurance restoration](/services/insurance-restoration) service handles this on your behalf.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "One more thing — and this matters",
      body: "Don't let a roofer 'find' damage that isn't there. We've heard the stories. A salesman knocks on your door after a storm, says he spotted damage from the street, gets on the roof, and creates damage that didn't exist. That's insurance fraud. If the carrier catches it (and they're getting better at it), you could lose your policy entirely. Your roofer should document what's already there, not create problems to bill for.",
    },
    {
      type: "paragraph",
      text: "If your roof took a hit during a recent storm, get it inspected before the next rain. Our [storm damage inspection](/services/roof-inspection) is free. If you already know you need a replacement and want context on what it should cost, our [Seattle roof replacement cost breakdown](/blog/seattle-roof-replacement-cost-2026) lays out real numbers. For active emergencies, here's our guide on [emergency roof repair in Seattle](/blog/emergency-roof-repair-seattle). [Contact us](/contact) if you want to talk through your specific situation.",
    },
  ],
};

export default post;
