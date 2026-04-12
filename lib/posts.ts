export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMin: number;
  heroImage: string;
  heroImageAlt: string;
  tags: string[];
}

// Imported post modules (one BlogPost per file) ----------------------------
import kirklandRepair   from "./posts/roof-repair-kirkland";
import bellevueRepair   from "./posts/roof-repair-bellevue";
import rentonRepair     from "./posts/roof-repair-renton";
import everettRepair    from "./posts/roof-repair-everett";
import seattleCost2026  from "./posts/seattle-roof-replacement-cost-2026";
import seattleEmergency from "./posts/emergency-roof-repair-seattle";
import metalVsShingles  from "./posts/metal-roof-vs-shingles-seattle";
import archVs3Tab       from "./posts/architectural-shingles-vs-3-tab";
import fallRainPrep     from "./posts/seattle-fall-rain-roof-prep";
import pnwWindstorm     from "./posts/windstorm-roof-damage-pnw";
// Round 2
import roofInspection   from "./posts/roof-inspection-checklist";
import bestMaterials    from "./posts/best-roofing-materials-pnw";
import flatVsPitched    from "./posts/flat-roof-vs-pitched";
import roofCoating      from "./posts/roof-coating-guide";
import findFixLeak      from "./posts/find-fix-roof-leak";
import insuranceCover   from "./posts/insurance-cover-roof-replacement";
import fileInsuranceClaim from "./posts/file-roof-insurance-claim-wa";
import cedarShake       from "./posts/cedar-shake-replacement-seattle";
import capitolHill      from "./posts/capitol-hill-roofing-seattle";
import queenAnne        from "./posts/queen-anne-roofing-seattle";
// Round 3
import tpoGuide         from "./posts/tpo-roofing-guide";
import metalCostWA      from "./posts/metal-roof-cost-washington";
import atticVent        from "./posts/attic-ventilation-signs";
import diyVsPro         from "./posts/diy-vs-pro-roof-repair";
import flashingGuide    from "./posts/roof-flashing-guide";
import modBitumen       from "./posts/modified-bitumen-roofing";
import replaceDecking   from "./posts/replace-roof-decking";
import howToTarp        from "./posts/how-to-tarp-roof";
import ballardWallingford from "./posts/ballard-fremont-wallingford-roofing";
import westSeattle      from "./posts/west-seattle-roof-replacement";
// Round 4 (final Pillar 7 queue)
import solarPanels      from "./posts/new-roof-before-solar-panels";
import homeBuyer        from "./posts/home-buyer-roof-checklist-wa";
import leakLocations    from "./posts/common-roof-leak-locations";
import insurancePremiums from "./posts/roof-materials-insurance-premiums";

const importedPosts: BlogPost[] = [
  kirklandRepair,
  bellevueRepair,
  rentonRepair,
  everettRepair,
  seattleCost2026,
  seattleEmergency,
  metalVsShingles,
  archVs3Tab,
  fallRainPrep,
  pnwWindstorm,
  roofInspection,
  bestMaterials,
  flatVsPitched,
  roofCoating,
  findFixLeak,
  insuranceCover,
  fileInsuranceClaim,
  cedarShake,
  capitolHill,
  queenAnne,
  tpoGuide,
  metalCostWA,
  atticVent,
  diyVsPro,
  flashingGuide,
  modBitumen,
  replaceDecking,
  howToTarp,
  ballardWallingford,
  westSeattle,
  solarPanels,
  homeBuyer,
  leakLocations,
  insurancePremiums,
];

const inlinePosts: BlogPost[] = [
  {
    slug: "seattle-roof-moss-what-to-do",
    title: "Why Seattle Roofs Grow Moss (and What to Actually Do About It)",
    excerpt:
      "Moss isn't just an eyesore. In the Puget Sound, it's the single biggest reason roofs fail early. Here's what's actually happening up there and how we handle it.",
    category: "Maintenance",
    author: "Everpeak Roofing",
    publishedAt: "2026-03-20",
    readingTimeMin: 5,
    heroImage: "/images/craftsman-tile.jpg",
    heroImageAlt: "Moss growing on the north slope of a Seattle craftsman roof",
    tags: ["moss", "maintenance", "seattle"],
    body: `If you've lived in Seattle for more than a winter or two, you already know the look. Green fuzz creeping along the north slope, thick mats of the stuff tucked under the shingle edges, maybe a few patches that have turned into full-on lawns. Moss is basically a local mascot at this point. Problem is, it's also the fastest way to kill a roof in the PNW.

Here's the thing most homeowners don't realize. Moss isn't growing on top of your shingles, it's growing underneath them. The filaments work their way between courses, lift the edges, and trap water against the deck. Once water stays on a roof instead of running off it, everything downstream starts to go wrong. The granules wash off, the asphalt dries out, and the plywood underneath starts to soften. We've pulled shingles off Ballard houses that looked fine from the street and found the sheathing turned to pulp.

Why does it happen here so badly? Three reasons. One, we're wet pretty much eight months of the year. Two, a lot of homes sit under tall firs and cedars that keep the roof shaded and damp long after the rain stops. Three, the roof stays cool enough that the moisture doesn't evaporate quickly. That's a perfect growing environment for moss, lichen, and algae.

So what actually works? A few things, in order of how well they hold up.

First, get the roof cleaned. Not pressure washed. A pressure washer will strip the granules off your shingles faster than the moss ever would, and you'll shave years off the roof life in one afternoon. Soft washing is the right call. It's a low-pressure application that uses a cleaning solution to kill the moss at the root instead of blasting it off. Once it dies, it rinses away naturally over the next couple of weeks.

Second, install zinc or copper strips along the ridge. When it rains, trace amounts of metal wash down the roof and keep new moss from taking hold. It's not magic, and it doesn't kill what's already there, but it's a cheap preventative that buys you years.

Third, keep the roof clear of debris. Fir needles and leaves trap moisture and give moss something to anchor to. If you've got overhanging branches, get them trimmed back at least a few feet from the roof surface. You don't have to cut the tree down, just give the roof some breathing room.

A word on DIY. We get it, moss removal looks simple. Climb up, scrape it off, done. The issue is that scraping damages shingles, and walking around a wet mossy roof is one of the easier ways to end up in the ER. If you do want to handle it yourself, use a moss killer spray in the fall, let it do the work, and hose it off from the ground in spring. Don't get up there with a stiff brush.

Honestly, the best thing you can do is not wait. Moss is one of those problems where a $400 cleaning at year five saves you a $15,000 replacement at year twelve. We see it every season. If your roof has any green on it at all, it's worth getting someone up there to take a look.`,
  },
  {
    slug: "repair-or-replace-seattle-roof",
    title: "How to Tell If Your Roof Needs Repair or a Full Replacement",
    excerpt:
      "Not every leak means a new roof. Not every small problem is small. Here's how we decide between a repair and a replacement when we inspect a home in the Puget Sound.",
    category: "Homeowner Guide",
    author: "Everpeak Roofing",
    publishedAt: "2026-04-02",
    readingTimeMin: 6,
    heroImage: "/images/roof-repair-progress.jpg",
    heroImageAlt: "Roofer inspecting shingles during a Puget Sound repair job",
    tags: ["repair", "replacement", "inspection"],
    body: `This is probably the question we get asked more than any other. A homeowner spots a water stain on the ceiling, or a neighbor points out some missing shingles after a storm, and the first thing they want to know is whether they're looking at a quick fix or a new roof. The honest answer is, it depends on a handful of things, and most of them are easy to check once you know what to look for.

Start with age. Asphalt shingle roofs in the Seattle area usually last somewhere between 20 and 30 years, depending on the quality of the shingles and how well the roof was ventilated. Cedar shake goes a little shorter, maybe 20 to 25 if it was maintained, less if it wasn't. If your roof is under 15 years old and it's leaking, there's almost always a specific cause. A failed pipe boot, torn flashing, a branch strike, something local. Those are repair jobs. If your roof is over 20 and you're seeing problems in multiple spots, that's a different conversation.

Next, look at how widespread the damage is. One leak in one corner, probably a repair. Water stains showing up in two or three rooms that aren't near each other, usually means the roof has lost its waterproof layer in multiple places. That's rarely worth chasing with patches. You'll fix one, and another will show up in six months.

Check the shingles themselves. Curling edges, bald spots where the granules have worn off, cracks running across the surface, these are signs the asphalt has dried out and the roof is near the end. Once a shingle loses its granules, it cooks in the sun and cracks fast. You can sometimes get another year or two out of it, but you're living on borrowed time. On the flip side, shingles that look mostly intact but have a few missing or lifted ones? That's a repair all day.

Take a look at the decking too, if you can get into the attic. Stains on the underside of the plywood are a red flag. Soft spots or sagging between the rafters means the deck is failing and you're well past a simple patch. A good roofer can replace rotted sheathing, but if the rot is widespread, you're paying for the new roof anyway, so you might as well do it right.

Here's the rule of thumb we use at Everpeak. If the repair would cost more than about a third of a replacement, and the roof is more than halfway through its expected life, we tell homeowners to replace. You'll spend less overall, and you won't be chasing new problems every spring. If the roof is young and the damage is local, we'll fix it and send you on your way. We don't try to upsell replacements when a repair will actually hold.

One last thing worth mentioning. Insurance can change the math. If a windstorm took out a big section of shingles, your policy might cover a full replacement even if some of the roof is still fine. It's worth getting an inspection and a claim estimate before you make a decision. We help with that paperwork all the time, and it's free to find out where you stand.

If you're on the fence, get two honest opinions. Not three, not five. Two good roofers looking at the same roof will usually tell you roughly the same thing. If one says repair and one says replace, ask both of them to walk you through the reasoning. Whoever can show you photos and explain exactly why is the one you want to hire.`,
  },
];

export const posts: BlogPost[] = [...inlinePosts, ...importedPosts];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
