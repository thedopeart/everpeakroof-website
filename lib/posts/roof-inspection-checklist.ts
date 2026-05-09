import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-inspection-checklist",
  title: "Roof Inspection Checklist: What Pros Actually Look For",
  excerpt:
    "Not the marketing version. This is what a roofer is actually checking when they walk your roof, what each finding means, and when you should schedule one.",
  category: "Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-04-08",
  readingTimeMin: 5,
  heroImage: "/images/craftsman-tile.jpg",
  heroImageAlt: "Roofer inspecting tile and flashing details on a Seattle craftsman home",
  tags: ["inspection", "checklist", "maintenance", "seattle"],
  blocks: [
    {
      type: "paragraph",
      text: "We do a lot of [roof inspections](/services/roof-inspection) on homes across the Puget Sound, and most homeowners are surprised by how much we're actually looking at. It's not a five-minute glance from a ladder. A real inspection takes 45 minutes to an hour, covers dozens of individual components, and tells you more about your roof's future than its past. Here's the actual checklist we work through, in roughly the same order we walk it.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "45–60 min", label: "How long a real roof inspection takes — not the 15-minute pass a home inspector does during escrow" },
        { value: "2–3 yrs", label: "Recommended inspection frequency for roofs over 15 years old — the sweet spot for catching problems cheap" },
        { value: "~$200", label: "Typical inspection cost — we waive it when you're weighing a repair decision or move forward with work" },
      ],
    },
    {
      type: "heading",
      text: "On the roof surface",
    },
    {
      type: "paragraph",
      text: "**Ridge caps** — the shingles running along the peak take more wind than anything else. We're checking for lifted edges, cracked caps, and exposed nail heads. **Shingle condition** — granule coverage first. Bald patches or heavy granule loss in the gutters means the shingles are aging out. Curling edges, cracking, and nail pops all tell us how much life is left. **Valleys** — where two slopes meet and funnel water downhill. They carry more volume than any other section, so they fail first. We check valley metal for rust, lifted edges, and debris dams. **Pipe boot flashings** — every plumbing vent that pokes through the roof has a rubber boot. These crack after 12 to 15 years and are one of the most common leak sources we find. **Kick-out flashing** — where a roof slope meets a sidewall, there should be a small metal kick-out diverting water into the gutter. Missing kick-outs cause wall rot. We see this constantly on older Ballard and Wallingford homes. **Drip edge** — metal strip along eaves and rakes that directs water into the gutter. If it's rusted or missing, water wraps around and rots the fascia.",
    },
    {
      type: "heading",
      text: "PNW-specific items",
    },
    {
      type: "callout",
      variant: "info",
      title: "What a Seattle inspection covers that a Phoenix inspection doesn't",
      body: "**Moss buildup patterns** — we check the north-facing slopes and any section shaded by trees. Light surface moss is cosmetic. Thick mats growing between courses mean it's time for a [soft wash treatment](/services/soft-washing) before it does real damage. **Cedar shake delamination** — common in Kirkland, Sammamish, and older Seattle neighborhoods. Cedar that's soft when you push on it is past its useful life. **North-slope algae** — dark streaks are Gloeocapsa magma, a type of algae that feeds on the limestone filler in asphalt shingles. Mostly cosmetic, but heavy growth holds moisture.",
    },
    {
      type: "heading",
      text: "Flashings and penetrations",
    },
    {
      type: "paragraph",
      text: "**Chimney flashing and cricket** — the base flashing, step flashing, and counter-flashing around a chimney are all separate pieces that can fail independently. We also check for a cricket (a small peaked diverter on the uphill side of the chimney). Without one, water and debris pile up behind the chimney and eventually find a way in. **Skylight curb flashing** — skylights are a common leak point because the curb seal degrades with UV exposure. We check the flashing lap, the sealant condition, and whether the weep system is clear. A skylight leak caught early is a tube of caulk. Caught late, it's rotted framing.",
    },
    {
      type: "heading",
      text: "From the attic side",
    },
    {
      type: "paragraph",
      text: "If we can access the attic, we check three things: staining on the underside of the sheathing (old or active moisture), daylight visible through the deck (a hole is a hole, no matter how small), and ventilation — are soffit vents open, is the ridge vent functional, and is there enough airflow to prevent condensation? Poor ventilation causes more hidden deck rot in the PNW than most homeowners realize.",
    },
    {
      type: "heading",
      text: "What the findings mean",
    },
    {
      type: "table",
      headers: ["Category", "What We Find", "What to Do"],
      rows: [
        { cells: [{ text: "Monitor it", badge: "gray" }, { text: "Light moss, minor cosmetic wear, a few granules in the gutter" }, { text: "Normal aging — check again in a year or two" }] },
        { cells: [{ text: "Schedule a repair", badge: "amber" }, { text: "Cracked pipe boots, a few lifted shingles, loose ridge caps, minor flashing separation" }, { text: "Fix on your timeline, but not more than a season" }] },
        { cells: [{ text: "Needs replacement", badge: "red" }, { text: "Widespread granule loss, multiple active leaks, soft decking, shingles past 25 years" }, { text: "Patching is just buying months" }] },
      ],
    },
    {
      type: "heading",
      text: "When to get one",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Four situations that call for a dedicated roof inspection",
      body: "**Buying a home** — always. A general home inspector checks the roof, but not like a roofer does. We catch things they miss every week. **After a major storm** — wind and hail damage isn't always visible from the ground. **Every 2 to 3 years on roofs over 15** — that's the sweet spot for catching problems before they get expensive. **Before an insurance renewal** — if your carrier is asking about roof age or condition, a current inspection report with photos gives you something concrete to send them.",
    },
    {
      type: "paragraph",
      text: "If you want a straight answer on where your roof stands, [get in touch](/contact) or give us a call. We'll tell you what we find, good or bad.",
    },
  ],
};

export default post;
