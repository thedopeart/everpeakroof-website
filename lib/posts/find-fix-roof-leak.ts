import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "find-fix-roof-leak",
  title: "How to Find and Fix a Roof Leak (Before It Gets Worse)",
  excerpt:
    "Most roof leaks aren't where you think they are. Water travels along rafters before it drips, so that ceiling stain could be feet away from the actual problem. Here's how to track it down.",
  category: "How-To",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-15",
  readingTimeMin: 5,
  heroImage: "/images/roof-repair-progress.jpg",
  heroImageAlt: "Active roof repair showing exposed sheathing and new flashing work",
  tags: ["leak", "repair", "how-to", "diy"],
  blocks: [
    {
      type: "paragraph",
      text: "That brown spot on your ceiling is trying to tell you something. It's not telling you where the leak is, though. Water hits your roof deck, runs downhill along a rafter or the underside of the plywood, and drips onto the drywall somewhere completely different. The stain on your bedroom ceiling might be three, four, even ten feet away from where the roof is actually failing. So before you start poking holes in the ceiling or climbing up with a tube of caulk, work the problem from the inside out.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "90%", label: "Share of Seattle leaks that come from the same handful of spots — knowing them saves a lot of guesswork" },
        { value: "~$150", label: "Cost of replacing a failed pipe boot — one of the most common leak sources and one of the cheapest fixes" },
        { value: "5× cost", label: "How much more expensive a November leak becomes if ignored until April — water damage compounds fast here" },
      ],
    },
    {
      type: "heading",
      text: "Start in the attic",
    },
    {
      type: "paragraph",
      text: "Grab a flashlight and get up there. You're looking for three things: daylight coming through the roof boards, dark staining on the underside of the sheathing, and soft spots in the wood. Follow any staining uphill toward the ridge — water always runs downhill, so the source is above whatever stain you're seeing. If you can trace the wet trail to a specific spot on the deck, mark it with tape or a nail pushed through so you can find it from the outside. If you don't have attic access, you're working from the roof surface and looking for the usual suspects.",
    },
    {
      type: "heading",
      text: "The usual suspects — 90% of leaks start here",
    },
    {
      type: "paragraph",
      text: "**Pipe boot flashings** are the single most common leak source in the Seattle area. The rubber dries out, cracks, and pulls away from the pipe in about 8 to 12 years. Look for cracked rubber, gaps between the collar and the pipe, or sealant that's turned white and chalky. **Chimney flashing:** The step flashing and counter flashing both fail over time. Sealant dries out, mortar cracks, and the metal lifts just enough to let water behind the brick. Chimney leaks are tricky because water often runs down inside the wall before it shows up on a ceiling. **Valleys:** The metal channel where two slopes meet corrodes and gets punctured by foot traffic. Valley leaks usually show up as staining along the inside corner of a room below the valley line. **Missing or cracked shingles:** After a [PNW windstorm](/blog/windstorm-roof-damage-pnw), shingles get torn off or creased. A cracked shingle by itself might not leak right away, but once the underlayment gets UV exposure, it degrades fast. **Skylights:** The curb flashing around skylights dries out and separates, especially on the uphill side. Nine times out of ten it's the flashing, not the glass.",
    },
    {
      type: "heading",
      text: "When to DIY and when to call someone",
    },
    {
      type: "callout",
      variant: "tip",
      title: "The honest DIY line",
      body: "If the leak traces back to a cracked pipe boot and you're comfortable working on a roof, that's a reasonable DIY fix. Buy the boot, pull the surrounding shingles, swap it out, lace the shingles back in. A tube of roofing sealant and an hour of your time. **If the leak involves step flashing, counter flashing, valley metal, or any sheathing damage — call a pro.** Flashing done wrong leaks worse than flashing left alone, and rotted sheathing means you're dealing with structural wood, not just a surface fix.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Emergency vs. non-emergency",
      body: "If water is actively dripping through your ceiling right now, contain it (bucket, towels, poke a small hole in the drywall bulge so it drains into the bucket instead of collapsing) and call for [emergency roof repair](/services/emergency-roof-repair). That's a same-day situation. If you've got a dry, historical stain that hasn't grown in a while, you've got time — schedule a [roof inspection](/services/roof-inspection) and let someone trace it properly. Don't forget about it either.",
    },
    {
      type: "paragraph",
      text: "Most leaks are findable and most are fixable without replacing the whole roof. The key is catching them early and tracing them correctly. If you want a full walkthrough of what to look for up there, our [roof inspection checklist](/blog/roof-inspection-checklist) covers every component. And if you already know you've got a problem and just want someone out there, [get in touch](/contact). We'll find it.",
    },
  ],
};

export default post;
