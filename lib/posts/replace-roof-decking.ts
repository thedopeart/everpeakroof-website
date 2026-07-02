import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "replace-roof-decking",
  title: "Do You Need to Replace Roof Decking? What Happens When Sheathing Goes Bad",
  excerpt:
    "Roof decking is the plywood or OSB under your shingles, and when it rots, everything above it fails. Here's how to spot it, what replacement costs, and why PNW homes see this more than most.",
  category: "How-To",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-14",
  readingTimeMin: 5,
  heroImage: "/images/shingle-replacement.jpg",
  heroImageAlt: "Roofer replacing damaged roof sheathing on a Seattle-area home",
  tags: ["decking", "sheathing", "replacement", "repair"],
  blocks: [
    {
      type: "paragraph",
      text: "Most homeowners never think about the layer of wood between their rafters and their shingles. That layer is called roof decking (also called sheathing), and it's the structural base that everything else sits on, usually 1/2-inch or 5/8-inch plywood or OSB nailed directly to the rafters. Your shingles, underlayment, and flashing are only as good as the wood underneath. When decking goes bad, you've got a real problem.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "1 in 3", label: "Seattle-area roof replacements where we find at least a few sheets of bad decking during tear-off" },
        { value: "$75 to $150", label: "Cost per sheet of plywood to replace during a reroof, includes demo, material, and installation" },
        { value: "$2k, $4k", label: "Typical added cost when we find 10 to 15 bad sheets on an otherwise normal replacement job" },
      ],
    },
    {
      type: "heading",
      text: "How roof decking fails",
    },
    {
      type: "paragraph",
      text: "The short version: water sits on it. Shingles crack, flashing pulls away, a boot seal dries out. Water gets through the surface layer and lands on the plywood. In the Pacific Northwest, that moisture has nowhere to go, we're wet eight or nine months out of the year, and attics stay cool and damp. Once water penetrates the shingle layer, it soaks into the wood and stays there. Over months and years, the plywood delaminates. The layers separate, the wood softens, and eventually it rots through. OSB is especially vulnerable, it absorbs water faster than plywood and swells at the edges. Once an OSB panel has gotten saturated, it doesn't bounce back.",
    },
    {
      type: "heading",
      text: "Signs your decking might be failing",
    },
    {
      type: "callout",
      variant: "warning",
      title: "What to look for, some from the ground, some from inside",
      body: "**Sag lines visible from the street**, if your roofline looks wavy between rafters instead of flat, the sheathing has lost its rigidity. **Soft or spongy spots** when someone walks on the roof, a roofer will feel the deck flex under their feet and know immediately. **From the attic:** dark water stains on the underside of the plywood, visible mold or mildew along seams, or a musty smell that won't go away. **Delamination:** the plywood layers separating, with a rough or flaky surface visible from the attic side.",
    },
    {
      type: "heading",
      text: "When roofers actually discover bad decking",
    },
    {
      type: "paragraph",
      text: "Most bad decking gets found during a [roof replacement](/services/roof-replacement) tear-off. You hire a crew to replace your shingles, they strip the old material, and suddenly they're looking at rotten plywood. It's the most common discovery we make during tear-offs in the Seattle area, roughly one in three jobs we find at least a few sheets that need to come out. This is why good roofers build a decking allowance into their estimates. If someone quotes you a roof replacement and doesn't mention the possibility of decking repair, ask them about it. You don't want a surprise mid-job.",
    },
    {
      type: "heading",
      text: "What replacement costs",
    },
    {
      type: "table",
      headers: ["Scenario", "Scope", "Added Cost"],
      rows: [
        { cells: [{ text: "Normal, a few bad sheets" }, { text: "10 to 15 sheets replaced during reroof" }, { text: "$2,000 to $4,000" }] },
        { cells: [{ text: "Worse, widespread damage" }, { text: "30 to 40% of the deck" }, { text: "$5,000 to $8,000" }] },
        { cells: [{ text: "Full re-deck" }, { text: "Entire deck replaced" }, { text: "$8,000 to $12,000+" }] },
        { cells: [{ text: "Cedar shake conversion" }, { text: "Skip sheathing → solid plywood" }, { text: "$3,000 to $6,000" }] },
      ],
    },
    {
      type: "heading",
      text: "The PNW factor and skip sheathing",
    },
    {
      type: "paragraph",
      text: "We see more decking problems here than roofers in drier parts of the country, it's not close. The combination of sustained rain, cool temperatures, tree cover, and older housing stock means moisture gets trapped against wood for longer. If you live in neighborhoods with heavy fir and cedar canopy, the roof may never fully dry out between rain events. Moss plays a role too: when moss lifts shingle edges, it creates channels for water to pool on the deck.",
    },
    {
      type: "callout",
      variant: "info",
      title: "Cedar shake homes need solid plywood before new shingles can go on",
      body: "If you live in an older Seattle home with original [cedar shake](/blog/cedar-shake-replacement-seattle), your roof probably doesn't have solid plywood at all. Cedar shakes were installed on skip sheathing, spaced 1x4 boards with gaps between them. Converting from cedar shake to asphalt shingles means re-decking the entire roof with solid plywood or OSB. That's a standard part of any shake-to-shingle conversion, and any honest estimate should include it as a line item.",
    },
    {
      type: "paragraph",
      text: "If you're seeing sag lines, feeling soft spots, or smelling mold in the attic, don't wait on it. Decking damage only gets worse with time, and in this climate 'worse' happens fast. Schedule a [roof inspection](/services/roof-inspection) and we'll tell you exactly where you stand. For a breakdown of total project costs including decking, check our [Seattle roof replacement cost guide for 2026](/blog/seattle-roof-replacement-cost-2026).",
    },
  ],
};

export default post;
