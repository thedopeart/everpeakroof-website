import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "queen-anne-roofing-seattle",
  title: "Queen Anne Roofing: Steep Pitches, Old Homes, and What Actually Works",
  excerpt:
    "Queen Anne Hill is one of the toughest neighborhoods in Seattle to roof. Between the pitch, the wind, and homes that are over a hundred years old, here's what we see and how we handle it.",
  category: "Neighborhood Guide",
  author: "Everpeak Roofing",
  publishedAt: "2026-04-09",
  readingTimeMin: 5,
  heroImage: "/images/worker-on-roof.jpg",
  heroImageAlt: "Roofer working on a steep-pitched Queen Anne Seattle home",
  tags: ["queen anne", "seattle", "neighborhood", "local"],
  blocks: [
    {
      type: "paragraph",
      text: "Queen Anne is really two neighborhoods stacked on top of each other, and the roofing work in each one looks completely different. Upper Queen Anne is steep single-family homes with views. Lower Queen Anne is denser apartments and condos. We work both, and here's what we run into across the hill.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "10:12–12:12", label: "Typical pitch on Upper Queen Anne Tudor Revivals — at 45 degrees, every crew member needs a harness" },
        { value: "450 ft", label: "Elevation of Queen Anne Hill above Elliott Bay — exposed to direct storm fetch from the south and southwest" },
        { value: "+30–50%", label: "Typical labor premium on steep Queen Anne roofs vs. a standard ranch — physics, not padding" },
      ],
    },
    {
      type: "heading",
      text: "Upper Queen Anne: the steep stuff",
    },
    {
      type: "paragraph",
      text: "The single-family homes up top were mostly built between 1900 and 1940. Classic Craftsman bungalows, some Tudor Revivals with steeply pitched cross-gable rooflines, and a handful of Colonials along the ridge. What they all have in common is pitch. A lot of these roofs run 10:12 or 12:12 — at 12:12, you're working at a 45-degree angle. Every crew member needs a harness, and we're setting roof jacks on every course. It's slow, careful work. Plan on 30 to 50 percent more labor compared to a standard 6:12 ranch roof just because of access and safety equipment. Any contractor who quotes you the same rate per square for a 12:12 pitch as a 5:12 is either cutting corners on safety or hasn't been up there yet.",
    },
    {
      type: "heading",
      text: "Wind — real wind",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Queen Anne gets more storm damage than almost anywhere else in Seattle",
      body: "Queen Anne Hill sits about 450 feet above Elliott Bay with very little between the hilltop and the open water. When storms blow in from the south or southwest, the homes along the west ridge and south face take a direct hit. We see more windstorm damage on Queen Anne than almost anywhere else in [Seattle](/seattle). Ridge caps get peeled back, shingle tabs break their seal strips and fold over, and flashing around chimneys and dormers takes a beating from lateral pressure. Fastener pattern matters more here — we always use a high-wind nailing pattern with six nails per shingle instead of four, and we hand-seal tabs on the ridge and the first few courses along eaves and rakes.",
    },
    {
      type: "heading",
      text: "Old chimneys and older flashing",
    },
    {
      type: "paragraph",
      text: "Homes that are 100-plus years old have chimneys that have moved. Brick settles, mortar joints crack, and the chimney slowly pulls away from the roof deck. The flashing installed during the last re-roof might have been fine at the time, but if the chimney has shifted even a quarter inch since then, water is getting in. This is the most common source of mystery leaks on Upper Queen Anne. Homeowner sees a water stain near the fireplace, assumes the worst, and it turns out the step flashing just needs to be re-done. That's a [roof repair](/services/roof-repair), not a catastrophe. Cedar shake is still out there on a lot of these homes too — 1980s and 1990s re-roofs that are now 30 to 40 years old, well past their useful life in Seattle's climate. Our [cedar shake replacement guide](/blog/cedar-shake-replacement-seattle) covers what to expect.",
    },
    {
      type: "heading",
      text: "Lower Queen Anne: flat roofs and different problems",
    },
    {
      type: "paragraph",
      text: "Down the hill, the roofing work shifts to commercial and multifamily. Older apartment buildings from the 1950s and 1960s with flat or low-slope roofs running TPO, EPDM, or torch-down modified bitumen. The issues here are drainage and parapet walls. Flat roofs on buildings from that era were designed with minimal slope, and over decades the structure settles and drainage gets worse. Ponding water is the number one killer of flat roof membranes. Parapet wall flashing fails at the seams where the membrane meets the wall cap, and water gets into the wall cavity before anyone sees it on the inside.",
    },
    {
      type: "heading",
      text: "Hillside access is its own challenge",
    },
    {
      type: "callout",
      variant: "info",
      title: "What Queen Anne access logistics actually look like",
      body: "Queen Anne's streets are famously steep. Some lots on the south and west slopes are so tilted that the front of the house is two stories and the back is four. Getting materials to the roof, staging equipment, even parking the truck close enough to be useful — all of it takes planning. On a few jobs near Kerry Park, we've had to hand-carry bundles up staircases because there was no way to get a conveyor close enough. That's not a complaint. It's the reality of working on a hill this steep, and it factors into scheduling and cost.",
    },
    {
      type: "paragraph",
      text: "Steep pitch means higher cost, but it also means your roof sheds water well when the materials are in good shape. Wind exposure means you need better fastening and tougher materials than a sheltered valley lot. And the age of the housing stock means a lot of these roofs are on their second or third life and getting close to the next one. A [roof inspection](/services/roof-inspection) is the cheapest way to find out where you actually stand. If you want a ballpark number before talking to anyone, our [roof cost estimator](/tools/roof-cost-estimator) gives you a range in a couple of minutes.",
    },
  ],
};

export default post;
