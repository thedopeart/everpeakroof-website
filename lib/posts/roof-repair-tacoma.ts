import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-repair-tacoma",
  title: "Roof Repair in Tacoma: What South Sound Weather Does to a Roof",
  excerpt:
    "Salt air, sideways rain, and some of the oldest housing stock in the region. Here's what actually fails on Tacoma roofs and what fixing it costs.",
  category: "Local Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-07-01",
  readingTimeMin: 6,
  heroImage: "/images/worker-on-roof.jpg",
  heroImageAlt: "Roofer repairing shingles on an older Tacoma home",
  tags: ["tacoma", "roof repair", "local", "cedar shake"],
  blocks: [
    {
      type: "paragraph",
      text: "Tacoma is hard on roofs in ways Seattle isn't. The housing stock runs older, with whole neighborhoods of 1920s to 1950s homes around Stadium District and the North End, and the waterfront adds salt air that eats flashing and fasteners years ahead of schedule. Add the wind that comes up Commencement Bay in fall and you get a repair market with its own patterns. We work across the city, and the same handful of problems shows up over and over.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "1920s to 50s", label: "Age of much of the housing in Stadium District, North End, and Hilltop, often on their third or fourth roof" },
        { value: "$300 to $1,500", label: "Typical residential repair range in Tacoma, from a pipe boot to multi-point flashing work" },
        { value: "2x faster", label: "Roughly how much quicker flashing and fasteners corrode within a half mile of salt water" },
      ],
    },
    {
      type: "heading",
      text: "What fails, by part of town",
    },
    {
      type: "paragraph",
      text: "**Stadium District and the North End** are cedar shake and old composition territory. Shake roofs on these historic homes rot from underneath, usually where debris has been sitting in the valleys, and a lot of the composition roofs were layered over older material decades ago, which shortens their life and complicates any repair. **Near the water, Ruston and Old Town**, the shingles are often fine while the metal fails around them. Salt-corroded flashing at chimneys and walls is the leak source we find most on these calls. **Hilltop and the Lincoln District** have older homes where deferred maintenance is the story: small leaks that ran for years, soft decking, and moss that's been working on the north slope for a decade. **South Tacoma and the newer suburbs** look more like the rest of the metro, with 1990s composition roofs hitting end of life and pipe boots failing before the shingles do.",
    },
    {
      type: "heading",
      text: "Repair or replace on an older Tacoma roof",
    },
    {
      type: "paragraph",
      text: "The math changes with the age of the house. On a 1930s North End home, we always check for layered roofing before quoting anything, because a repair on top of two old layers rarely holds and a tear-off quote needs to account for what's underneath. If the roof is a single layer with isolated damage, a repair is honest money. If we find layers, brittle shakes, or decking that flexes underfoot, we'll show you photos and talk about [replacement](/services/roof-replacement) instead of selling you a patch that fails next winter.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Buying or selling an older Tacoma home?",
      body: "Get the roof inspected before the deal, not after. Layered roofing, salt-corroded flashing, and old knob-and-tube era decking are exactly the things that blow up an inspection period. Our [roof inspection](/services/roof-inspection) gives you a written condition report with photos you can negotiate with.",
    },
    {
      type: "heading",
      text: "Wind and emergency calls",
    },
    {
      type: "paragraph",
      text: "South Sound windstorms take shingles off exposed roofs every fall, and the Tacoma calls cluster on the slopes facing the bay. If you've got an active leak or visible missing shingles after a storm, [emergency roof repair](/services/emergency-roof-repair) is the right call: we tarp first to stop the water, then do the permanent fix once things dry out. If the damage looks storm-related, we photograph everything so you have real documentation for an [insurance claim](/blog/file-roof-insurance-claim-wa).",
    },
    {
      type: "paragraph",
      text: "We cover the whole city, from the historic districts down through South Tacoma and out to University Place. Our [Tacoma service page](/tacoma) has the full neighborhood list, or [get in touch](/contact) and we'll come take a look. Inspections and estimates are free, and if the roof turns out to be fine, we'll say so.",
    },
  ],
};

export default post;
