import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-repair-kent",
  title: "Roof Repair in Kent: Flat Roofs, Valley Rain, and What Fails First",
  excerpt:
    "Kent's valley floor holds moisture longer than the hills, and its ramblers are full of low-slope sections. Here's how that shapes what breaks and how we fix it.",
  category: "Local Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-07-01",
  readingTimeMin: 6,
  heroImage: "/images/flat-roof-work-1.jpg",
  heroImageAlt: "Crew working on a low-slope roof section in Kent, WA",
  tags: ["kent", "roof repair", "flat roof", "local"],
  blocks: [
    {
      type: "paragraph",
      text: "Kent sits on the floor of the Green River Valley, and that geography shows up on roofs. Fog and damp air linger down here after the rain stops, so roofing materials stay wet longer than they do up on the hills. Combine that with a housing stock full of 1970s ramblers and split-levels, many with flat or low-slope sections, and you get a repair profile that's different from the rest of south King County.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "Low slope", label: "The defining feature of Kent's rambler-era housing, sections that shed water slowly and fail differently than pitched roofs" },
        { value: "$300 to $1,500", label: "Typical residential repair range; flat-section membrane repairs are quoted after we measure the damage" },
        { value: "Hours matter", label: "How fast standing water finds a seam once a low-slope section starts to go" },
      ],
    },
    {
      type: "heading",
      text: "Why flat sections fail first",
    },
    {
      type: "paragraph",
      text: "A pitched shingle roof sheds water in seconds. A low-slope section over a garage or family-room addition might hold it for hours, and in a Kent winter that's most of the season. Water that sits finds every seam, every nail head, every spot where the old torch-down or rolled roofing has bubbled. The leak usually shows up at the transition, where the flat section ties into the pitched roof, or at the edge metal. If your rambler has a ceiling stain near where the addition meets the house, this is almost always the story.",
    },
    {
      type: "paragraph",
      text: "The fix depends on what's up there. Small membrane damage can be patched honestly. Bubbled, alligatored rolled roofing that's past its life needs the section redone, and we'll say so rather than sell you a patch on a dead membrane. For a look at how the two roof types compare long-term, we wrote up [flat vs pitched roofing](/blog/flat-roof-vs-pitched) separately.",
    },
    {
      type: "heading",
      text: "The rest of the Kent repair picture",
    },
    {
      type: "paragraph",
      text: "**East Hill and Meridian** have more standard pitched-roof problems: 80s and 90s composition shingles losing granules, moss on the shaded lots, and wind-driven rain getting under ridge caps during storms. **The valley floor** adds moisture problems, with moss growing faster and attics that need real ventilation to keep condensation from rotting the deck from underneath. **Commercial buildings** around the warehouse district run membrane systems, TPO and torch-down mostly, and we handle [commercial roofing](/services/commercial-roofing) repair on those alongside the residential work.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "After a windstorm in Kent",
      body: "Wind funnels through the valley and pushes rain sideways under flashing and ridge caps. If water showed up during a storm but stopped after, don't assume it's fine. Wind-driven leaks are intermittent by nature and the decking damage adds up quietly. A quick [inspection](/services/roof-inspection) after a big blow is cheap insurance.",
    },
    {
      type: "paragraph",
      text: "We cover all of Kent: East Hill, West Hill, Meridian, Panther Lake, Star Lake, Scenic Hill, and the valley floor around Kent Station. If something's leaking right now, our [emergency crew](/services/emergency-roof-repair) can usually tarp it fast. Otherwise, the [Kent service page](/kent) has the full rundown, or [reach out](/contact) for a free estimate.",
    },
  ],
};

export default post;
