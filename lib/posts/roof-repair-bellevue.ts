import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "roof-repair-bellevue",
  title: "Roof Repair in Bellevue: A Homeowner's Guide to Eastside Roofs",
  excerpt:
    "Bellevue's housing stock is hitting an age where a lot of roofs are due. Here's what we see, what it costs, and how to tell if a repair is still the right call.",
  category: "Local Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-18",
  readingTimeMin: 7,
  heroImage: "/images/shingle-install-hands.jpg",
  heroImageAlt: "Roofer installing new architectural shingles on a Bellevue home",
  tags: ["bellevue", "roof repair", "local", "eastside"],
  blocks: [
    {
      type: "paragraph",
      text: "Bellevue is hitting a weird age in its housing cycle. A lot of the neighborhoods we work in, West Bellevue, Somerset, Bridle Trails, Woodridge, were built heavy between 1975 and 1995. The original composition shingle roofs lasted their 25 to 30 years, got replaced once in the early 2000s, and now those second roofs are giving out too. We're seeing a lot of calls where the homeowner is honestly asking: is this repairable or am I finally looking at a new roof?",
    },
    {
      type: "stat-row",
      stats: [
        { value: "2000 to 05", label: "When most Bellevue second-generation roofs were installed, putting them right at end of life now" },
        { value: "$500 to $2,200", label: "Typical repair range for common Bellevue issues, chimney flashing, skylight reflash, ridge cap damage" },
        { value: "$25k, $50k+", label: "Full cedar tear-off and reroof on a midsize Bellevue home, depending on size and complexity" },
      ],
    },
    {
      type: "heading",
      text: "What's breaking on Bellevue roofs",
    },
    {
      type: "paragraph",
      text: "**Composition shingles at end of life**, if your house was built between 1975 and 1995 and the roof was replaced around 2000, you're pushing 25 years on that second roof. Granules clogging the downspouts, bald patches on the south slope, edges curling up. A repair will buy you a year or two. It won't solve anything. **Somerset wind exposure**, Somerset sits high enough that wind loads are noticeably worse than down on the valley floor. We pull lifted shingles and damaged ridge caps off Somerset homes after almost every winter storm. **Skylight leaks on Bridle Trails homes**, so many Bridle Trails houses got skylights during the original build or during 80s remodels. When the factory flashing kits fail, the leak is almost always at the uphill edge. Usually $1,000 to $2,000 to fix if the skylight itself is still good. **Cedar shake tear-offs**, a surprising number of West Bellevue and older Woodridge homes still have original cedar shake at 35 or 40 years old. **Chimney and wall flashing**, cracked caulk or rusted metal at chimneys and wall junctions is the most common 'mystery leak' source on older Bellevue homes.",
    },
    {
      type: "heading",
      text: "Real costs, ballparks, every job is different",
    },
    {
      type: "table",
      headers: ["Repair Type", "Typical Cost", "Notes"],
      rows: [
        { cells: [{ text: "Shingle replacement, small section" }, { text: "$400 to $900" }, { text: "A few courses, no decking involved" }] },
        { cells: [{ text: "Ridge cap repair after wind" }, { text: "$600 to $1,800" }, { text: "Somerset especially common after storms" }] },
        { cells: [{ text: "Skylight reflash, full reset" }, { text: "$1,000 to $2,000" }, { text: "Assumes skylight unit is still good" }] },
        { cells: [{ text: "Chimney flashing rebuild" }, { text: "$800 to $2,200" }, { text: "Both step and counter flashing replaced" }] },
        { cells: [{ text: "Cedar shake spot repair" }, { text: "$500 to $1,500" }, { text: "Buys time, doesn't change the end of life" }] },
        { cells: [{ text: "Full cedar tear-off, reroof" }, { text: "$25,000 to $50,000+" }, { text: "Includes re-deck with solid plywood" }] },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Take phone quotes with skepticism",
      body: "We won't give you a hard price until we've been up there and put eyes on it. Any contractor quoting you $150 to 'fix that leak' without climbing up there isn't actually diagnosing anything.",
    },
    {
      type: "heading",
      text: "How we approach a repair call in Bellevue",
    },
    {
      type: "paragraph",
      text: "The first thing we do is ask the age of the roof. That age is the most important variable in deciding whether a repair is going to hold. Then we look for patterns, one leak in one place is a clean story, easy repair. Water showing up in multiple rooms or different parts of the attic is a different conversation. We also check the decking. Bellevue's got enough tree cover in Woodridge and Bridle Trails that moss and moisture have been working on these decks for years, sometimes the shingles look okay but the plywood underneath is soft. A [full roof inspection](/services/roof-inspection) is about an hour, you get photos of everything, and there's no cost if you're weighing a repair decision.",
    },
    {
      type: "callout",
      variant: "info",
      title: "A real call from last month",
      body: "West Bellevue, 1982 build, original cedar shake. Homeowner called because of a stain in the ceiling of the master bedroom. We went up and it wasn't one leak, it was three different spots feeding into the same rafter bay. The shakes were past saving. We ended up doing a full [roof replacement](/services/roof-replacement) a month later. Not what she wanted to hear, but the alternative was chasing leaks every winter for the next five years.",
    },
    {
      type: "paragraph",
      text: "We handle repairs across all of [Bellevue and the surrounding Eastside](/bellevue). For non-urgent stuff, the [roof repair page](/services/roof-repair) has more on what we do and how we price it. If you're north of here in Kirkland, we wrote a [similar guide for that market](/blog/roof-repair-kirkland). Same general problems, slightly different building stock.",
    },
  ],
};

export default post;
