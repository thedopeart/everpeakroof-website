import type { BlogPost } from "../posts";

const post: BlogPost = {
  slug: "seattle-fall-rain-roof-prep",
  title: "Getting Your Seattle Roof Ready for the Fall Rain Season",
  excerpt:
    "November to February is when PNW roofs actually fail. Here's what to check, clean, and fix before the atmospheric rivers start rolling in off the Pacific.",
  category: "Maintenance",
  author: "Everpeak Roofing",
  publishedAt: "2026-03-28",
  readingTimeMin: 6,
  heroImage: "/images/craftsman-tile.jpg",
  heroImageAlt: "Older Seattle craftsman roof with fall debris and fir needles",
  tags: ["maintenance", "seasonal", "fall", "seattle"],
  blocks: [
    {
      type: "paragraph",
      text: "Most of the leak calls we get don't come in September. They come in **late November through February**, right when the atmospheric rivers start stacking up off the Pacific and dumping **five inches of rain in 36 hours**.",
    },
    {
      type: "paragraph",
      text: "By then it's too late to prep. The small stuff you could have caught in October has turned into water in the attic and a brown stain on the living room ceiling.",
    },
    {
      type: "stat-row",
      stats: [
        { value: "Oct, Nov", label: "The window to prep before Seattle's real rain season hits, miss it and you're reacting instead of preventing" },
        { value: "2× clean", label: "How often to clean gutters if you live under firs or cedars, mid-October and again in late November" },
        { value: "Spring only", label: "Right time for moss treatment, fall applications don't get the dry weather they need to bond and work" },
      ],
    },
    {
      type: "heading",
      text: "What to do now, and what can wait",
    },
    {
      type: "table",
      headers: ["Task", "Timing", "Priority"],
      rows: [
        { cells: [{ text: "Clear gutters and downspout elbows" }, { text: "Mid-October, then again late November" }, { text: "Do now", badge: "red" }] },
        { cells: [{ text: "Walk perimeter, scan ridge and valleys for lifted flashing" }, { text: "October" }, { text: "Do now", badge: "red" }] },
        { cells: [{ text: "Check attic for staining or soft spots" }, { text: "Any dry afternoon before December" }, { text: "Do now", badge: "red" }] },
        { cells: [{ text: "Inspect valleys for debris dams" }, { text: "October" }, { text: "Do now", badge: "red" }] },
        { cells: [{ text: "Moss treatment" }, { text: "Spring, needs dry weather to work" }, { text: "Wait", badge: "gray" }] },
        { cells: [{ text: "Cosmetic streaks and gutter appearance" }, { text: "Any time" }, { text: "Wait", badge: "gray" }] },
      ],
    },
    {
      type: "heading",
      text: "Start with the gutters",
    },
    {
      type: "paragraph",
      text: "If you live under firs or cedars, once in early October isn't enough. Those needles keep dropping through November, and a clean gutter on Halloween can be half-packed by Thanksgiving. We tell homeowners with heavy tree cover to **clear them twice**, once in mid-October and again in late November.",
    },
    {
      type: "paragraph",
      text: "Pay attention to the downspouts too. A gutter that looks clean from the ladder can still be **backed up at the elbow**, and you won't know until water is sheeting over the edge during the first real storm.",
    },
    {
      type: "heading",
      text: "Walk the perimeter and look up",
    },
    {
      type: "paragraph",
      text: "You don't have to get on the roof. From the ground, scan the ridge line, the valleys where two slopes meet, and anywhere a pipe or vent pokes through. You're looking for **anything that isn't lying flat**. Lifted tabs, a ridge cap that's shifted, a bent piece of flashing at the chimney base.",
    },
    {
      type: "paragraph",
      text: "Those are the spots water is going to find first when the wind drives rain sideways. If something looks off, get a pro up there before the weather turns. Our [roof inspection](/services/roof-inspection) service is cheap insurance when you're not sure what you're looking at.",
    },
    {
      type: "heading",
      text: "Check the valleys and flashing",
    },
    {
      type: "paragraph",
      text: "Valleys take more water than any other part of the roof because both slopes funnel into them. Fir needles packed into a valley dam up and push water sideways under the shingles. Clean them out.",
    },
    {
      type: "paragraph",
      text: "While you're at it, look at the flashing around the chimney and skylights. **Cracked caulk or a separation at the counter-flashing** is one of the most common leak sources on older Seattle homes. It's a **cheap fix in October, an expensive one in January**.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "What can't wait until spring",
      body: "**Anything with active water movement**: a crack you can see daylight through, a flashing that's visibly separated, a soft spot in the deck, a gutter that overflows onto the fascia. Those get fixed now or they cost a lot more later. What can wait: **moss treatment** (needs dry weather, plan for spring), cosmetic stuff like streaking on the shingles or gutters that look ugly but still drain.",
    },
    {
      type: "heading",
      text: "Inspect from the inside too",
    },
    {
      type: "paragraph",
      text: "Grab a flashlight and go into the attic on a dry day. You're looking for three things: **dark staining** on the underside of the sheathing (old moisture), **soft spots or sagging** (active damage), and any pinpricks of daylight you can see near penetrations. If you find any of those, you've already got a problem that's only going to get worse once the rain comes.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Rather not deal with it yourself?",
      body: "Our [maintenance program](/services/maintenance-program) folds the annual walk into a scheduled visit so you don't have to think about it. We also bundle a [soft washing](/services/soft-washing) treatment with most plans come spring. One last thing, if a serious windstorm rolls through before you get to any of this, we wrote a companion piece on exactly that: [what to check after a Puget Sound windstorm](/blog/windstorm-roof-damage-pnw).",
    },
    {
      type: "paragraph",
      text: "Questions or want us to take a look before the weather turns? [Get in touch](/contact) and we'll get on the schedule.",
    },
  ],
};

export default post;
