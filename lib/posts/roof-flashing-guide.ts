import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-flashing-guide",
  title: "Roof Flashing: What It Is, Why It Fails, and How to Fix It",
  excerpt:
    "Flashing is where most roof leaks actually start. Those thin metal pieces at every transition point take a beating, and when they fail, water gets inside fast. Here's what to watch for.",
  category: "How-To",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-28",
  readingTimeMin: 5,
  heroImage: "/images/roof-repair-progress.jpg",
  heroImageAlt: "Roof repair in progress showing exposed flashing and shingle work",
  tags: ["flashing", "repair", "leak", "how-to"],
  blocks: [
    {
      type: "paragraph",
      text: "Most people think roof leaks start with shingles. They don't. The majority of leaks we trace in Seattle come back to flashing. Flashing is the thin metal (aluminum, galvanized steel, or copper) that seals every transition point on your roof. Anywhere water would pour straight into a gap between surfaces, flashing keeps it out.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "#1", label: "Pipe boot flashings, the most common repair we do by a wide margin, fixed multiple times per week" },
        { value: "8 to 12 yrs", label: "How long sealant at flashing joints lasts before cracking under PNW moisture cycling" },
        { value: "$150 to $1,500", label: "Repair cost range depending on type, pipe boot at the low end, full chimney reflash at the high end" },
      ],
    },
    {
      type: "heading",
      text: "Types of flashing and where they live",
    },
    {
      type: "table",
      headers: ["Flashing Type", "Location", "Failure Signs", "Repair Cost"],
      rows: [
        { cells: [{ text: "Step flashing" }, { text: "Roof slope meets a vertical wall" }, { text: "Water stain on interior wall near junction" }, { text: "$400 to $900" }] },
        { cells: [{ text: "Counter flashing" }, { text: "Tucked into chimney mortar or wall reglet" }, { text: "Gap between metal and masonry" }, { text: "$600 to $1,500" }] },
        { cells: [{ text: "Valley flashing" }, { text: "Where two roof slopes meet" }, { text: "Rust, debris dams, staining along valley" }, { text: "$500 to $1,200" }] },
        { cells: [{ text: "Drip edge" }, { text: "Along eaves and rakes" }, { text: "Rust, bent sections, fascia rot below" }, { text: "$200 to $500" }] },
        { cells: [{ text: "Kick-out flashing" }, { text: "Bottom of roof-to-wall transition" }, { text: "Bubbling siding paint, wall rot" }, { text: "$150 to $400" }] },
        { cells: [{ text: "Pipe boot flashings" }, { text: "Around plumbing vent pipes" }, { text: "Cracked rubber, gap between collar and pipe" }, { text: "$150 to $300" }] },
      ],
    },
    {
      type: "heading",
      text: "Why flashing fails",
    },
    {
      type: "paragraph",
      text: "Flashing doesn't fail all at once. It's a slow process. **Sealant breaks down first**, thermal cycling expands and contracts the metal, caulk cracks, and in the PNW constant moisture cycling breaks sealant down over 8 to 12 years. **Nails back out**, a nail that lifts even a sixteenth of an inch creates a channel for water. **Galvanized steel rusts through** after 15 to 20 years in our wet climate. **Improper installation** is more common than you'd think, flashing pieces need to overlap in the right direction so water sheds downhill. If a step flashing piece is lapped the wrong way, water runs behind it instead of over it.",
    },
    {
      type: "heading",
      text: "The number one flashing failure in Seattle",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Pipe boot flashings, we fix more of these than everything else combined",
      body: "The rubber gasket around the vent pipe dries out and cracks from UV exposure in about 8 to 12 years. Once it cracks, rainwater runs straight down the pipe and into the house. The leak often shows up on a ceiling nowhere near the pipe because water travels along framing before it drips. Good news: a single failed pipe boot is a $150 to $300 fix. Bad news: a lot of homeowners don't know to look for it, so the water runs for months before anyone notices, and by then you might be dealing with rotted sheathing or mold in the attic.",
    },
    {
      type: "heading",
      text: "Kick-out flashing deserves its own mention",
    },
    {
      type: "paragraph",
      text: "At the bottom of every roof-to-wall transition, water running down the step flashing needs somewhere to go. Without a kick-out diverter, it pours behind the siding. The damage happens inside the wall where you can't see it: rotted sheathing, mold, ruined insulation. Most Seattle homes built before 2000 don't have one, it wasn't required by code, and builders skipped it. If your house has a roof that terminates into a sidewall above a lower section (common on split-levels and bump-outs), check for it. Adding one is cheap insurance.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "When to call a pro vs. DIY",
      body: "Small sealant touch-ups are reasonable DIY territory if you're comfortable on a roof. Anything beyond that, especially step flashing, counter flashing, or valley work, is best left to a [roof repair](/services/roof-repair) crew. Flashing done wrong leaks worse than flashing left alone, and the consequences show up months later when the damage is already done. Use our [roof inspection checklist](/blog/roof-inspection-checklist) to assess what you're dealing with, and if flashing is the problem, [reach out](/contact). We'll get it sorted.",
    },
  ],
};

export default post;
