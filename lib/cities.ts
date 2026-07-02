export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  tagline: string;
  description: string;
  neighborhoods: string[];
  commonIssues: string[];
  roofTypes: string[];
  buildingAge: string;
  faq?: CityFaq[];
}

export const cities: City[] = [
  // ── Tier 1 ──────────────────────────────────────────────
  {
    name: "Seattle",
    slug: "seattle",
    tier: 1,
    tagline: "Rain, moss, and a century of rooftops",
    description:
      "Seattle roofs take a beating. Between 150-plus days of rain a year, aggressive moss, and windstorms rolling off the Puget Sound, a roof here ages faster than almost anywhere else. We handle roof repair and roof replacement across every Seattle neighborhood, from century-old Craftsman homes in Capitol Hill and Ballard to newer builds in South Lake Union.\n\nMost of the calls we get fall into a few buckets. Older homes with original or second-generation composition roofs that are finally giving out and need a full reroof. Leaks around aging flashing, valleys, and chimney collars on pre-1960s houses. And moss, lots of it, especially on north-facing slopes shaded by big trees. We'll tell you honestly whether a targeted repair buys you a few more years or whether replacement is the smarter money.\n\nAs a local Seattle roofing company, we keep it simple. We come out, look at what's actually on your roof, and hand you a written estimate with clear pricing. No pressure, no scare tactics. We work on both residential and commercial roofs, and estimates are always free.",
    neighborhoods: [
      "Capitol Hill", "Ballard", "Fremont", "Wallingford", "Queen Anne",
      "West Seattle", "Beacon Hill", "Columbia City", "Greenwood", "Ravenna",
      "University District", "South Lake Union", "Georgetown", "Rainier Valley",
    ],
    commonIssues: [
      "Heavy moss buildup from constant moisture and tree canopy coverage",
      "Leaks around aging flashing on pre-1960s homes",
      "Wind damage from Puget Sound storms, especially on exposed hilltop homes",
      "Gutter overflow and water intrusion from extended rain events",
    ],
    roofTypes: ["Composition shingle", "Cedar shake", "Architectural shingle", "Flat membrane (commercial)"],
    buildingAge: "Mix of 1900s Craftsman bungalows, mid-century ramblers, and modern infill construction",
    faq: [
      {
        q: "How much does roof repair cost in Seattle?",
        a: "Most residential roof repairs in Seattle run between $300 and $1,500, depending on what's wrong. A simple flashing or pipe-boot fix sits on the low end. Bigger jobs with valley work, decking repair, or several leak points cost more. You get a written estimate before we start, so there are no surprises.",
      },
      {
        q: "Do you offer emergency roof repair in Seattle?",
        a: "Yes. If you've got an active leak, storm damage, or a tree limb through the roof, call us. We can usually get out quickly to tarp the area and stop the water, then schedule the permanent repair once things are dry.",
      },
      {
        q: "Should I repair my Seattle roof or replace it?",
        a: "If the roof is under about 15 years old and the damage is in one spot, a repair is usually the right call. If it's 20-plus years old, losing granules across the whole surface, or leaking in several places, a full replacement tends to be the better investment. We'll give you a straight answer at the free estimate and won't push you toward a new roof you don't need.",
      },
      {
        q: "Which Seattle neighborhoods do you serve?",
        a: "All of them. We work across Capitol Hill, Ballard, Fremont, Wallingford, Queen Anne, West Seattle, Beacon Hill, Columbia City, Greenwood, the U District, and the rest of the city. If your neighborhood isn't listed, call us, we almost certainly cover it.",
      },
    ],
  },
  {
    name: "Bellevue",
    slug: "bellevue",
    tier: 1,
    tagline: "Eastside homes deserve Eastside quality",
    description:
      "Bellevue has some of the highest-value homes on the Eastside, and roofing work here needs to match. From established neighborhoods in West Bellevue to newer developments near Crossroads and Factoria, we handle repairs and replacements on everything from 1970s split-levels to custom builds worth over a million dollars.\n\nRoofing in Bellevue comes with Eastside-specific challenges. Homes in Somerset and Woodridge sit at elevation with exposure to wind corridors between Lake Washington and the Cascades. Properties near Bridle Trails and Lake Hills deal with constant shade from mature tree canopy, driving aggressive moss growth. And a large portion of Bellevue's 1970s-1990s housing stock is now hitting the age where original composition roofs start to fail.\n\nAs a Bellevue roofing company, we give homeowners straight answers and honest pricing. Whether you need a quick repair on a leaking flashing, a full roof replacement on a 30-year-old home, or an inspection before putting your house on the market, we'll come out, assess what's actually there, and give you a clear written quote with no pressure.",
    neighborhoods: [
      "West Bellevue", "Crossroads", "Factoria", "Eastgate", "Newport Hills",
      "Somerset", "Woodridge", "Bridle Trails", "Lake Hills", "Wilburton",
      "Downtown Bellevue", "Tam O'Shanter", "Lakemont", "Phantom Lake",
    ],
    commonIssues: [
      "Aging composition shingles on 1970s-1990s homes reaching end of life, many Bellevue roofs installed in the 80s and 90s are now 25-35 years old",
      "Moss and algae on north-facing slopes under heavy tree cover, especially in Bridle Trails and Woodridge",
      "Storm damage from Eastside wind corridors between Lake Washington and the Cascades, lifting shingles and damaging ridge caps",
      "Skylight leaks on older 1980s-era installations, a common and often overlooked source of water intrusion",
      "Failed pipe boots and cracked flashing collars around vents and chimneys on aging roofs throughout East Bellevue",
    ],
    roofTypes: ["Composition shingle", "Architectural shingle", "Cedar shake", "Tile"],
    buildingAge: "Primarily 1970s-2000s construction, with newer luxury builds in West Bellevue and Somerset",
    faq: [
      {
        q: "How much does roof repair cost in Bellevue, WA?",
        a: "Most residential roof repairs in Bellevue run between $300 and $1,500 depending on the issue. A simple flashing repair or boot replacement is typically on the lower end. Larger repairs involving decking, valley replacements, or multiple leak sources will be higher. We provide written estimates before any work starts, no surprises.",
      },
      {
        q: "What are the most common roofing problems in Bellevue?",
        a: "The most common issues we see in Bellevue are aging composition shingles on 1970s-1990s homes, moss and algae growth on north-facing slopes under tree cover, skylight leaks on older 1980s-era installations, and storm damage from Eastside wind corridors. Many Bellevue homes are also hitting the 25-30 year mark where a full replacement makes more economic sense than continued repairs.",
      },
      {
        q: "Do you serve all neighborhoods in Bellevue?",
        a: "Yes. We work across all of Bellevue including West Bellevue, Crossroads, Factoria, Eastgate, Newport Hills, Somerset, Woodridge, Bridle Trails, Lake Hills, Wilburton, and Downtown Bellevue. If your neighborhood isn't listed here, call us, we almost certainly cover it.",
      },
      {
        q: "How long does a roof replacement take in Bellevue?",
        a: "Most residential roof replacements in Bellevue take 1 to 3 days depending on roof size, pitch, and complexity. We handle permitting when required, tear-off, decking repair where needed, and full installation. You'll get a realistic timeline in your written estimate.",
      },
    ],
  },
  {
    name: "Tacoma",
    slug: "tacoma",
    tier: 1,
    tagline: "South Sound roofing, done right",
    description:
      "Tacoma's mix of historic homes and newer neighborhoods means roofing jobs here cover a wide range. Older homes near Stadium District and North End often have cedar shake or aging composition roofs that need attention. Closer to the waterfront, salt air and wind add extra wear.\n\nA lot of the calls we get in Tacoma fall into three buckets. Aging cedar shake on the older houses in the historic districts. Granule loss and leaks on 1990s composition roofs in the southern neighborhoods. And flat or low-slope sections on commercial buildings and apartment complexes that need membrane work instead of shingles. We handle all of it, including emergency tarping when a South Sound windstorm opens something up.\n\nWe're a licensed roofing contractor working across Tacoma, from Proctor and Old Town down through South Tacoma and out to University Place. Every job starts the same way. We get on the roof, figure out what's actually wrong, and hand you a written estimate with honest pricing. No pressure, no scare tactics, and estimates are always free.",
    neighborhoods: [
      "Stadium District", "North End", "Proctor", "Old Town", "Hilltop",
      "South Tacoma", "University Place", "Ruston", "Lincoln District", "McKinley Hill",
    ],
    commonIssues: [
      "Salt air and coastal wind exposure accelerating shingle deterioration near the waterfront",
      "Cedar shake roofs on historic homes rotting out and needing full replacement",
      "Poor attic ventilation in older construction leading to moisture damage from below",
      "Ice dam potential during cold snaps on homes with inadequate insulation",
    ],
    roofTypes: ["Composition shingle", "Cedar shake", "3-tab shingle", "Architectural shingle"],
    buildingAge: "Heavy mix of 1920s-1950s homes in historic districts, with 1990s-2010s suburbs further south",
    faq: [
      {
        q: "How much does roof repair cost in Tacoma?",
        a: "Most residential roof repairs in Tacoma run between $300 and $1,500 depending on the problem. Flashing and pipe-boot fixes sit at the low end. Valley work, decking repair, or multiple leak points cost more. You get the price in writing before we start.",
      },
      {
        q: "Do you replace cedar shake roofs in Tacoma?",
        a: "Yes. The historic districts around Stadium and the North End still have a lot of original shake, and much of it is past saving. We handle full shake tear-offs and replacement with composite or architectural shingle, and we'll tell you honestly if yours still has life left in it.",
      },
      {
        q: "Do you work on commercial or apartment roofs in Tacoma?",
        a: "We do. Flat and low-slope roofing on commercial buildings and apartment complexes is a regular part of our Tacoma work, including membrane repair and full replacement. Same process as residential: an inspection first, then a line-item estimate.",
      },
      {
        q: "Which Tacoma neighborhoods do you serve?",
        a: "All of them. Stadium District, North End, Proctor, Old Town, Hilltop, South Tacoma, Lincoln District, McKinley Hill, Ruston, and out to University Place. If you're nearby and not sure we reach you, just call.",
      },
    ],
  },
  {
    name: "Kent",
    slug: "kent",
    tier: 1,
    tagline: "High-volume market, low competition",
    description:
      "Kent sits in the heart of the Green River Valley, and the area sees consistent roofing demand from both residential neighborhoods and commercial properties. Homes here tend to be more affordable, which means homeowners want honest pricing and no-nonsense service. That's exactly what we do.\n\nFlat and low-slope roofing is a bigger deal in Kent than most people realize. The valley has plenty of ramblers and split-levels with low-pitch sections that collect standing water, plus warehouses and commercial buildings that need membrane work rather than shingles. We handle flat roof repair in Kent alongside standard composition work, and we take emergency calls when wind-driven rain gets under ridge caps, which happens a few times every winter here.\n\nWe work across Kent, from East Hill and Meridian out to West Hill and the valley floor. Residential or commercial, a one-day repair or a full replacement, the process is the same. We inspect the roof, show you what we found, and put a clear number on paper. Estimates are free and there's no pressure attached.",
    neighborhoods: [
      "East Hill", "West Hill", "Panther Lake", "Meridian", "Star Lake",
      "Kent Station", "Scenic Hill", "Des Moines Creek", "Lake Meridian",
    ],
    commonIssues: [
      "Valley moisture trapping and extended damp conditions accelerating shingle wear",
      "Flat-slope roofs on 1970s ramblers collecting standing water",
      "Wind-driven rain pushing water under ridge caps and flashing",
      "Moss growth on shaded lots with heavy evergreen coverage",
    ],
    roofTypes: ["3-tab shingle", "Composition shingle", "Architectural shingle"],
    buildingAge: "Mostly 1970s-1990s ranch-style and rambler homes, some newer subdivisions near Meridian",
    faq: [
      {
        q: "How much does roof repair cost in Kent, WA?",
        a: "Most residential repairs in Kent land between $300 and $1,500. Simple flashing or boot fixes are on the low end, and repairs involving decking or several leak sources run higher. Flat-roof membrane repairs are quoted after we see the roof, since patch size drives the price. Everything comes as a written estimate first.",
      },
      {
        q: "Do you repair flat roofs in Kent?",
        a: "Yes. Low-slope and flat sections are common on Kent ramblers and split-levels, and standing water is the usual culprit when they leak. We repair and replace membrane roofing on homes and commercial buildings, and we'll tell you whether a patch will hold or the section needs redoing.",
      },
      {
        q: "Do you offer emergency roof repair in Kent?",
        a: "We do. If water is coming in, call us. We can usually get out quickly to tarp the damage and stop it from spreading, then come back for the permanent fix once the roof is dry.",
      },
      {
        q: "Which parts of Kent do you cover?",
        a: "All of it. East Hill, West Hill, Meridian, Panther Lake, Star Lake, Scenic Hill, Lake Meridian, and the valley floor around Kent Station. Residential and commercial both.",
      },
    ],
  },

  // ── Tier 2 ──────────────────────────────────────────────
  {
    name: "Kirkland",
    slug: "kirkland",
    tier: 2,
    tagline: "Lakeside homes, premium roofing",
    description:
      "Kirkland homeowners invest in their properties, and roof work here reflects that. Waterfront homes along Lake Washington take extra wind and moisture, while hillside neighborhoods like Finn Hill and Juanita deal with drainage and moss. We know Kirkland's building styles and what holds up here.\n\nMost of the roofs we touch in Kirkland are asphalt shingle, and a lot of them are original installs from the 1980s and 1990s that are simply out of runway. Waterfront homes near Moss Bay and Houghton take wind off Lake Washington that lifts shingles and works flashing loose. Up on Finn Hill and in Juanita it's the trees: constant shade, constant moss, and gutters full of needles every fall.\n\nAs an asphalt shingle roofing contractor working all over Kirkland, we keep the process simple. We walk the roof, tell you whether a repair buys you real time or you're better off replacing, and put the price in writing. Steep hillside lots and lakefront access quirks are normal for us, and they're priced into the estimate upfront.",
    neighborhoods: [
      "Juanita", "Finn Hill", "Totem Lake", "Houghton", "Moss Bay",
      "Norkirk", "Rose Hill", "Kingsgate", "South Juanita",
    ],
    commonIssues: [
      "Lakefront wind exposure causing lifted shingles and damaged ridge caps",
      "Steep-slope roofs on hillside homes making repairs more complex",
      "Moss buildup on shaded, tree-heavy lots in Finn Hill and Juanita",
      "Aging cedar shakes on 1970s-1980s homes nearing end of life",
    ],
    roofTypes: ["Composition shingle", "Cedar shake", "Architectural shingle"],
    buildingAge: "1960s-1990s established homes near the lake, newer construction in Totem Lake and Rose Hill",
    faq: [
      {
        q: "How much does an asphalt shingle roof cost in Kirkland, WA?",
        a: "Full asphalt shingle replacements on Kirkland homes typically land between $12,000 and $30,000 depending on size, pitch, and access. Architectural shingles run $6.50 to $9.50 per square foot installed. Repairs are much smaller, usually $300 to $1,500. Either way you get a line-item estimate before any work starts.",
      },
      {
        q: "Do you handle moss problems on Kirkland roofs?",
        a: "Constantly. Finn Hill and Juanita lots sit under heavy tree cover, and moss shortens a roof's life by holding water against the shingles. We soft wash instead of pressure washing, which kills the moss without stripping granules, and we can add zinc strips to slow regrowth.",
      },
      {
        q: "Can you work on steep or hard-to-access Kirkland roofs?",
        a: "Yes. Hillside homes above the lake often have steep pitches and tight access, and we're set up for both. That work takes more time and it's factored into the written estimate, so the final invoice doesn't surprise you.",
      },
      {
        q: "Which Kirkland neighborhoods do you serve?",
        a: "All of them. Juanita, Finn Hill, Totem Lake, Houghton, Moss Bay, Norkirk, Rose Hill, Kingsgate, and South Juanita. If your street isn't listed, call us anyway, we almost certainly cover it.",
      },
    ],
  },
  {
    name: "Everett",
    slug: "everett",
    tier: 2,
    tagline: "North Sound's roofing crew",
    description:
      "Everett is the biggest city in Snohomish County, and roofing here ranges from older bungalows in the Riverside neighborhood to newer suburban builds in Silver Lake. The proximity to the waterfront means more wind exposure, and the dense tree canopy across the city keeps moss crews busy year-round.\n\nEverett has more flat and low-slope roofing than most Puget Sound cities. Mid-century homes in Riverside and Lowell often have low-pitch sections, and the commercial buildings along Broadway and near the waterfront run to membrane systems that need different skills than shingle work. We handle both, plus standard composition repair and replacement, plus emergency calls after the wind comes off Port Gardner Bay.\n\nIf you're comparing Everett roofers, here's how we work. Free inspection, straight answer on repair versus replacement, written line-item estimate, no pressure. We cover the whole city, from Bayside and Port Gardner out to Silver Lake and Pinehurst, residential and commercial both.",
    neighborhoods: [
      "Riverside", "Bayside", "Silver Lake", "Pinehurst", "Glacier View",
      "Boulevard Bluffs", "Lowell", "Port Gardner", "Delta", "Westmont",
    ],
    commonIssues: [
      "Waterfront wind exposure on homes near Port Gardner Bay",
      "Persistent moss problems from Everett's dense evergreen canopy",
      "Older roofing on 1940s-1960s homes in Riverside and Lowell neighborhoods",
      "Poor drainage on flat-slope ranch roofs common in Silver Lake area",
    ],
    roofTypes: ["Composition shingle", "3-tab shingle", "Architectural shingle"],
    buildingAge: "1940s-1960s homes near downtown, 1980s-2000s construction in Silver Lake and Pinehurst",
    faq: [
      {
        q: "How much does roof repair cost in Everett?",
        a: "Most residential roof repairs in Everett run $300 to $1,500 depending on what's wrong. Flashing fixes and single-point leaks sit at the low end. Decking repair or several leak sources push it higher. The price goes in writing before we touch anything.",
      },
      {
        q: "Do you work on flat and low-slope roofs in Everett?",
        a: "Yes. Low-slope sections are common on Everett's mid-century homes, and the city has plenty of commercial membrane roofing too. We repair and replace both, and we'll tell you plainly whether a patch will hold or the membrane is done.",
      },
      {
        q: "Do you offer emergency roof repair in Everett?",
        a: "We do. Wind off Port Gardner Bay takes shingles off exposed roofs every winter. If water's coming in, we can usually get out fast to tarp it, then schedule the permanent repair once things dry out.",
      },
      {
        q: "Which Everett neighborhoods do you cover?",
        a: "All of them. Riverside, Bayside, Lowell, Port Gardner, Delta, Glacier View, Boulevard Bluffs, Pinehurst, Silver Lake, and Westmont. Residential and commercial both.",
      },
    ],
  },
  {
    name: "Renton",
    slug: "renton",
    tier: 2,
    tagline: "South King County, covered",
    description:
      "Renton sits where the Eastside meets south King County, and the roofing work here covers the whole range. We handle roof repair and roof replacement from the older homes up in the Renton Highlands to the newer developments around The Landing and Fairwood. Plenty of the 1970s and 1980s 3-tab roofs in this area are well past their prime.\n\nThe Cedar River valley funnels wind through Renton, so storm damage is common: lifted shingles, cracked ridge caps, and the slow leaks that follow. Homes backing up to greenbelt deal with constant moss and debris too. If you've got an active leak, we do emergency roof repair in Renton and can usually get out fast to tarp it and stop the water before it spreads.\n\nWe're a local roofing company, not a national chain, so you get a straight answer and honest pricing. Residential or commercial, a small repair or a full replacement, we'll come out, assess the roof, and put together a written estimate at no cost.",
    neighborhoods: [
      "Renton Highlands", "Kennydale", "Cascade", "Benson Hill", "Fairwood",
      "Talbot Hill", "Skyway", "The Landing", "Earlington",
    ],
    commonIssues: [
      "Wind corridor damage from the Cedar River valley funneling storms",
      "Aging 3-tab shingle roofs on 1970s-1980s homes across Renton Highlands",
      "Moisture intrusion on homes with original single-layer roofing",
      "Moss and debris buildup on lots backing up to greenbelt areas",
    ],
    roofTypes: ["3-tab shingle", "Composition shingle", "Architectural shingle"],
    buildingAge: "1960s-1980s ramblers in Renton Highlands, newer 2000s+ construction near The Landing and Fairwood",
    faq: [
      {
        q: "How much does roof repair cost in Renton, WA?",
        a: "Most residential roof repairs in Renton land between $300 and $1,500, depending on the problem. Replacing a section of flashing or a pipe boot is on the lower end. Valley repairs, decking work, or several leak sources run higher. We put the price in writing before any work starts.",
      },
      {
        q: "Do you offer emergency roof repair in Renton?",
        a: "Yes. Wind off the Cedar River valley lifts shingles and starts leaks, and we handle those calls. If water's coming in, we can usually get out fast to tarp the roof and stop the damage, then come back for the full repair once it's dry.",
      },
      {
        q: "Should I repair or replace my Renton roof?",
        a: "A lot of Renton Highlands homes still have their original 1970s or 1980s 3-tab roofs, which are well past their lifespan. If yours is 20-plus years old with widespread wear, replacement usually makes more sense than chasing repairs. Newer roofs with isolated damage are worth repairing. We'll tell you honestly which camp you're in.",
      },
      {
        q: "Do you serve all of Renton?",
        a: "Yes. We cover Renton Highlands, Kennydale, Cascade, Benson Hill, Fairwood, Talbot Hill, Skyway, The Landing, and Earlington. Residential and commercial both. If you're nearby and not sure we reach you, just call.",
      },
    ],
  },
  {
    name: "Redmond",
    slug: "redmond",
    tier: 2,
    tagline: "Tech corridor, solid roofs",
    description:
      "Redmond has grown fast, and a lot of the housing stock here was built in the 1990s and 2000s. Those roofs are now hitting the 25-30 year mark where problems start showing up. We work across Redmond from Education Hill down to Overlake, handling the repairs and replacements that come with aging Eastside construction.\n\nMost of what we do in Redmond is re-roofing: tearing off a 25-to-30-year-old shingle roof from the 1990s building boom and installing a new one. Education Hill, Grass Lawn, and Idylwood are full of homes hitting that window at the same time. If you're pricing a new roof in Redmond, make sure the tear-off, decking repair, underlayment, and permit are spelled out in writing, because that's where low bids hide their gaps.\n\nWe're a local Eastside roofing company and Redmond sits in the middle of our service area, so scheduling is quick. Free inspection first, then a straight answer: some 1990s roofs still have five good years in them, and we'll say so rather than sell you a tear-off you don't need yet.",
    neighborhoods: [
      "Education Hill", "Overlake", "Idylwood", "Grass Lawn", "Bear Creek",
      "Willows", "North Redmond", "Sammamish Valley", "Redmond Ridge",
    ],
    commonIssues: [
      "25-30 year old roofs from the 1990s building boom hitting end of life",
      "Moss growth on north-facing slopes in heavily wooded neighborhoods",
      "Failed pipe boot flashings and cracked vent collars on aging roofs",
      "Wind damage from open-terrain exposure in the Sammamish Valley corridor",
    ],
    roofTypes: ["Architectural shingle", "Composition shingle", "Cedar shake"],
    buildingAge: "Primarily 1990s-2010s suburban construction, some older 1970s-1980s homes on Education Hill",
    faq: [
      {
        q: "How much does a new roof cost in Redmond, WA?",
        a: "Most full replacements on Redmond homes land between $12,000 and $30,000. A typical 2,000 square foot home with architectural shingles sits around $25,000 installed. Steep pitches, dormers, and rotted decking push it up. You get a line-item estimate before anything is scheduled.",
      },
      {
        q: "How long does a roof replacement take in Redmond?",
        a: "Most residential re-roofs take 1 to 3 days: tear-off, any decking repair, underlayment, and the new shingles. Complex rooflines or weather can stretch it. We give you a realistic timeline with the written estimate.",
      },
      {
        q: "My Redmond roof is from the 1990s. Repair or replace?",
        a: "Depends what's failing. Isolated damage on a roof with intact granules is worth repairing. Widespread granule loss, curling edges, or leaks in more than one spot mean the asphalt is done and replacement is the better investment. We'll tell you which side of the line you're on at the free inspection.",
      },
      {
        q: "Which Redmond neighborhoods do you serve?",
        a: "All of them. Education Hill, Overlake, Idylwood, Grass Lawn, Bear Creek, Willows, North Redmond, the Sammamish Valley, and Redmond Ridge.",
      },
    ],
  },

  // ── Tier 3 ──────────────────────────────────────────────
  {
    name: "Lynnwood",
    slug: "lynnwood",
    tier: 3,
    tagline: "South Snohomish roofing",
    description:
      "Lynnwood is a growing city right on the King-Snohomish county line. Lots of 1960s-1980s homes here with original or second-generation roofs that are due for replacement. The new light rail is driving renovation activity, and roof work is part of that.\n\nRoof repair calls in Lynnwood usually trace back to age. The ramblers and split-levels around Alderwood and Martha Lake still carry a lot of 1980s roofing, and once shingles start shedding granules, small leaks show up fast. We do targeted repairs when the roof has life left, emergency work when a storm opens something up, and full replacements when patching stops making sense.\n\nWe're local to the area and Lynnwood sits square in our north-end coverage, so response times are short. Free inspection, written estimate, honest recommendation. If a $600 repair gets you three more winters, that's what we'll tell you to do.",
    neighborhoods: [
      "Alderwood", "Martha Lake", "Meadowdale", "North Lynnwood",
      "Larch Way", "Lynnwood Bowl",
    ],
    commonIssues: [
      "Aging roofs on 1960s-1980s ranch homes past their expected lifespan",
      "Moss and algae from dense tree coverage throughout residential areas",
      "Poor attic ventilation leading to condensation and deck rot",
    ],
    roofTypes: ["3-tab shingle", "Composition shingle", "Architectural shingle"],
    buildingAge: "Primarily 1960s-1980s ramblers and split-levels, some newer townhome and condo construction",
    faq: [
      {
        q: "How much does roof repair cost in Lynnwood?",
        a: "Most residential repairs in Lynnwood run $300 to $1,500. Pipe boots and flashing sit at the low end, decking work and multi-point leaks at the top. We put the number in writing before starting.",
      },
      {
        q: "Do you offer emergency roofing in Lynnwood?",
        a: "Yes. If a windstorm tears shingles off or a leak shows up mid-storm, call us. We can usually tarp the damage quickly and come back for the permanent repair once the roof is dry.",
      },
      {
        q: "Should I repair or replace my 1980s Lynnwood roof?",
        a: "If it's the original roof, it's 40-plus years old and replacement is almost always the answer. Second-generation roofs from the 90s or 2000s depend on condition: isolated damage is repairable, widespread wear is not. The free inspection settles it either way.",
      },
      {
        q: "Which parts of Lynnwood do you cover?",
        a: "All of them. Alderwood, Martha Lake, Meadowdale, North Lynnwood, Larch Way, and the Lynnwood Bowl. We work both sides of the county line.",
      },
    ],
  },
  {
    name: "Bothell",
    slug: "bothell",
    tier: 3,
    tagline: "Straddling two counties, one roofing crew",
    description:
      "Bothell sits across both King and Snohomish counties, with neighborhoods ranging from older homes near downtown to newer master-planned communities in the Canyon Park area. Tree-heavy lots and PNW rain keep roofing work steady here.\n\nRoof repair in Bothell splits between two kinds of homes. The established 1970s-90s neighborhoods near downtown and Maywood have roofs at or past end of life, where we're often the ones saying it's time to stop patching. The Canyon Park and North Creek areas are newer, and there we mostly chase builder-grade shortcuts: cheap pipe boots, thin flashing, and ventilation that was never right.\n\nWe also handle commercial roofing in Bothell, including TPO and other flat systems on the offices and retail around Canyon Park. Residential or commercial, the process doesn't change. Inspection first, written line-item estimate, no pressure, and a straight answer on repair versus replacement.",
    neighborhoods: [
      "Canyon Park", "North Creek", "Bothell Landing", "Country Village",
      "Maywood", "Queensborough", "Brickyard",
    ],
    commonIssues: [
      "Heavy tree canopy creating constant shade and moss accumulation",
      "Storm debris from surrounding forested areas damaging shingles",
      "Aging roofs in established neighborhoods near downtown Bothell",
    ],
    roofTypes: ["Composition shingle", "Architectural shingle", "Cedar shake"],
    buildingAge: "Mix of 1970s-1990s established homes and 2000s-2020s new construction near Canyon Park",
    faq: [
      {
        q: "How much does roof repair cost in Bothell?",
        a: "Most residential repairs in Bothell run $300 to $1,500 depending on the issue. Single-point leaks and flashing fixes are on the low end. Larger repairs with decking involved run higher. Written estimate first, always.",
      },
      {
        q: "Do you serve both the King and Snohomish County sides of Bothell?",
        a: "Yes, all of Bothell. Canyon Park, North Creek, Bothell Landing, Country Village, Maywood, Queensborough, and Brickyard. The county line doesn't change anything on our end.",
      },
      {
        q: "Do you do commercial or TPO roofing in Bothell?",
        a: "We do. Flat and low-slope commercial systems, including TPO repair and replacement, are regular work for us around Canyon Park and North Creek. Same process as residential: inspect, document, quote in writing.",
      },
      {
        q: "How do I deal with moss on my Bothell roof?",
        a: "Bothell's tree canopy makes moss a fact of life. Soft washing kills it at the root without stripping shingle granules the way pressure washing does, and zinc strips at the ridge slow it from coming back. If moss has already lifted shingle edges, we'll tell you what damage is underneath.",
      },
    ],
  },
  {
    name: "Sammamish",
    slug: "sammamish",
    tier: 3,
    tagline: "Plateau living, proper roofing",
    description:
      "Sammamish sits on a plateau surrounded by trees, and the roofing here reflects that. Larger homes on wooded lots mean bigger roofs, more surface area for moss, and more exposure to wind. Most homes were built between 1990 and 2015, so many are entering the window where roof issues start.\n\nResidential roof replacement in Sammamish runs bigger than average. Plateau homes are large, pitches are generous, and most were shingled between 1995 and 2010, so whole neighborhoods like Klahanie and Pine Lake are coming due within a few years of each other. We install architectural asphalt shingle roofing rated for the wind up here, and we're careful about ventilation on these bigger roof decks because it's the difference between a 20-year roof and a 30-year one.\n\nNot every green roof needs replacing, though. We also do soft-wash roof cleaning in Sammamish for homes where moss has taken hold but the shingles underneath still have life. We'll get on the roof, look at what's actually there, and give you a written estimate for the path that makes sense.",
    neighborhoods: [
      "Pine Lake", "Klahanie", "Beaver Lake", "Inglewood Hill",
      "Sahalee", "East Lake Sammamish", "Timberline",
    ],
    commonIssues: [
      "Large roof surface areas on executive homes requiring more material and labor",
      "Persistent moss on heavily wooded lots with limited sun exposure",
      "Wind exposure on the Sammamish Plateau during fall and winter storms",
    ],
    roofTypes: ["Architectural shingle", "Composition shingle", "Cedar shake"],
    buildingAge: "Mostly 1990s-2015 construction, larger custom and tract homes on wooded lots",
    faq: [
      {
        q: "How much does a roof replacement cost in Sammamish?",
        a: "Sammamish homes run larger than the regional average, so replacements often land in the $18,000 to $35,000 range with architectural shingles, and past that for big or complex roofs. Per square foot you're looking at $6.50 to $9.50 installed for architectural. Everything is itemized in the written estimate.",
      },
      {
        q: "Is roof cleaning worth it, or should I just replace?",
        a: "If the shingles still have their granules and the moss hasn't lifted edges everywhere, a soft-wash cleaning at a few hundred dollars can buy you years. If the roof is 25-plus and worn, cleaning is money down the drain. We'll tell you which one you're looking at after we walk it.",
      },
      {
        q: "Do you install wind-rated shingles on the plateau?",
        a: "Yes. The Sammamish Plateau catches real wind in fall and winter, so we install architectural shingles with high wind ratings and pay attention to edge detail and starter courses, which is where wind failures usually begin.",
      },
      {
        q: "Which Sammamish neighborhoods do you serve?",
        a: "All of them. Pine Lake, Klahanie, Beaver Lake, Inglewood Hill, Sahalee, East Lake Sammamish, and Timberline.",
      },
    ],
  },
  {
    name: "Issaquah",
    slug: "issaquah",
    tier: 3,
    tagline: "Foothills roofing specialists",
    description:
      "Issaquah sits at the base of the Cascades foothills, and that geography matters for roofing. Higher elevation means more weather exposure, heavier snowfall in some years, and dense forest cover that drives moss growth. We work across Issaquah from the Highlands down to Gilman Village.\n\nThe work in Issaquah is more varied than most cities we cover. The Highlands has dense rows of 2000s construction where builder-grade shingles are wearing out ahead of schedule. Olde Town has older homes with flat and low-slope sections that need membrane work instead of shingles. And we get steady calls for metal roof repair, since standing seam is popular on newer builds near the foothills and its problems (loose fasteners, panel movement, flashing gaps) need someone who knows the system.\n\nResidential roofing in Issaquah is most of what we do here, but we take on light commercial too. Free inspection, honest read on repair versus replacement, and a written line-item estimate every time.",
    neighborhoods: [
      "Issaquah Highlands", "Gilman Village", "Olde Town", "Talus",
      "Providence Point", "Squak Mountain", "Lake Sammamish State Park area",
    ],
    commonIssues: [
      "Foothills elevation bringing heavier rain, occasional snow loads, and more wind",
      "Dense tree canopy around Squak Mountain causing persistent moss and debris",
      "Newer construction in the Highlands with builder-grade roofing that wears faster than expected",
    ],
    roofTypes: ["Architectural shingle", "Composition shingle"],
    buildingAge: "1990s-2020s suburban and master-planned communities, some older Olde Town properties",
    faq: [
      {
        q: "How much does roof repair cost in Issaquah?",
        a: "Most residential repairs in Issaquah run $300 to $1,500. Metal roof repairs vary more, since panel and flashing work is quoted after we see the roof. Either way the price goes in writing before work starts.",
      },
      {
        q: "Do you repair metal roofs in Issaquah?",
        a: "Yes. Standing seam is common on newer foothills builds, and we handle the usual failure points: backed-out fasteners, panel movement, and flashing gaps at chimneys and walls. A metal roof that's leaking usually needs a targeted fix, not a new roof, and we'll tell you which.",
      },
      {
        q: "Why is my Issaquah Highlands roof wearing out so fast?",
        a: "A lot of Highlands homes got builder-grade shingles during construction, and those age faster than architectural lines, especially with foothills weather exposure. If your roof is 15 to 20 years old and shedding granules, that's why. Replacement with a better shingle usually outlasts the original by a decade or more.",
      },
      {
        q: "Do you handle flat roof sections in Issaquah?",
        a: "Yes. Olde Town and some older properties have flat or low-slope sections that need membrane roofing rather than shingles. We repair and replace both.",
      },
    ],
  },
  {
    name: "Federal Way",
    slug: "federal-way",
    tier: 3,
    tagline: "South King County covered",
    description:
      "Federal Way is one of the larger cities in south King County, with a wide mix of housing types. From older neighborhoods near Steel Lake to newer construction along the I-5 corridor, roofing work here tends toward practical repairs and budget-conscious replacements.\n\nAsphalt shingle roofing is what Federal Way runs on. Most homes here got 3-tab shingles when they were built in the 80s and 90s, and those roofs give out at 20 to 25 years, which is why so many streets are re-roofing right now. We handle asphalt roof repair and full replacement across Federal Way, and upgrading from 3-tab to architectural shingles at replacement time adds years of life for a modest bump in cost.\n\nAffordable matters here and we get that, but cheap bids that skip underlayment or dump fees cost more in the end. Our estimates are line-item and complete, so you can compare them against anything else you've been quoted and see exactly what's included. Inspections and estimates are free.",
    neighborhoods: [
      "Steel Lake", "Twin Lakes", "Lakota", "Redondo", "Star Lake",
      "Adelaide", "Mirror Lake", "Camelot",
    ],
    commonIssues: [
      "Budget shingle roofs from 1980s-1990s construction failing at 20-25 years",
      "Flat and low-slope sections on split-level homes trapping water",
      "Wind damage from open terrain exposure along the I-5 corridor",
    ],
    roofTypes: ["3-tab shingle", "Composition shingle", "Architectural shingle"],
    buildingAge: "Mostly 1970s-2000s suburban construction, mix of ramblers, split-levels, and two-story homes",
    faq: [
      {
        q: "How much does asphalt roof replacement cost in Federal Way?",
        a: "Most Federal Way replacements land between $12,000 and $25,000, a bit under the Seattle average since homes here are often single-story with simpler rooflines. Architectural shingles run $6.50 to $9.50 per square foot installed. You get a full line-item estimate before anything is scheduled.",
      },
      {
        q: "Should I repair or replace my 3-tab shingle roof?",
        a: "If the 3-tab roof is original from the 80s or 90s, it's at or past its lifespan and replacement is the honest answer. Chasing leaks on a worn-out 3-tab roof is money spent twice. If it's a newer roof with isolated damage, we'll repair it and say so.",
      },
      {
        q: "Do you fix wind damage in Federal Way?",
        a: "Yes. The open terrain along the I-5 corridor takes real gusts, and lifted or missing shingles after a storm are one of our most common Federal Way calls. If the damage is storm-related, we'll document it with photos you can use for an insurance claim.",
      },
      {
        q: "Which Federal Way neighborhoods do you serve?",
        a: "All of them. Steel Lake, Twin Lakes, Lakota, Redondo, Star Lake, Adelaide, Mirror Lake, and Camelot.",
      },
    ],
  },
  {
    name: "Auburn",
    slug: "auburn",
    tier: 3,
    tagline: "Valley floor to hillside",
    description:
      "Auburn spreads from the Green River valley floor up into the surrounding hills. Valley homes deal with moisture and drainage issues, while hillside properties get more wind exposure. Affordable housing stock means a lot of aging roofs that need attention.\n\nRoof replacement is the big one in Auburn. Valley floor homes from the 60s through the 80s are on their second or even third roof, and Lakeland Hills construction from the 2000s is now old enough to need real attention too. We tear off, fix any soft decking, and install architectural shingles with the ventilation done right, which matters in the valley where damp air sits.\n\nWe also get a lot of roof cleaning calls in Auburn, since valley fog and shade keep moss growing most of the year. Soft washing handles it without stripping granules the way pressure washing does. If you're not sure whether your roof needs cleaning, repair, or replacement, the free inspection answers that.",
    neighborhoods: [
      "Lea Hill", "West Hill", "Lakeland Hills", "Downtown Auburn",
      "Stuck Junction", "Auburn North", "Terminal Park",
    ],
    commonIssues: [
      "Valley moisture and fog creating extended damp conditions on roofing materials",
      "Aging 3-tab roofs on 1970s-1980s homes throughout the valley floor",
      "Drainage issues on flat-slope sections common in rambler-style homes",
    ],
    roofTypes: ["3-tab shingle", "Composition shingle", "Architectural shingle"],
    buildingAge: "1960s-1990s valley floor homes, newer 2000s+ construction in Lakeland Hills and Lea Hill",
    faq: [
      {
        q: "How much does roof replacement cost in Auburn?",
        a: "Most Auburn replacements land between $12,000 and $25,000. Single-story ramblers on the valley floor sit at the lower end, larger Lakeland Hills two-stories higher. Architectural shingles run $6.50 to $9.50 per square foot installed, and the estimate is itemized in writing.",
      },
      {
        q: "Do you do roof cleaning in Auburn?",
        a: "Yes. Valley moisture keeps moss active most of the year here, and we soft wash rather than pressure wash, which kills moss at the root without shortening the roof's life. A cleaning runs a few hundred dollars and can add years if the shingles underneath are still sound.",
      },
      {
        q: "Does valley moisture really wear out roofs faster?",
        a: "It does. Fog and damp air linger on the valley floor, so roofs stay wet longer after rain and moss gets a head start. Good attic ventilation and periodic cleaning are the two things that counter it.",
      },
      {
        q: "Which parts of Auburn do you cover?",
        a: "All of them. Lea Hill, West Hill, Lakeland Hills, downtown, Auburn North, Terminal Park, and the valley floor. Hillside or flat, same crew.",
      },
    ],
  },
  {
    name: "Shoreline",
    slug: "shoreline",
    tier: 3,
    tagline: "North Seattle border, same weather",
    description:
      "Shoreline sits right on Seattle's northern border and gets the same weather, the same moss, and the same roofing challenges. Mostly mid-century homes here with a growing number of townhome and multifamily projects. If your Shoreline roof is over 20 years old, it's worth getting it looked at.\n\nCedar shake is a Shoreline specialty for us. Richmond Beach and the older view neighborhoods still carry a lot of original shake, and owners face the same decision again and again: keep repairing it, restore it with cleaning and treatment, or replace it with composite or architectural shingle. We do cedar shake roof repair, restoration, and full replacement in Shoreline, and we'll walk you through what each path actually costs over ten years, not just today.\n\nThe rest of our Shoreline work looks like north Seattle: mid-century composition roofs at end of life, moss on every shaded slope, and tight lots that take some planning to stage. Free inspection, written estimate, honest recommendation.",
    neighborhoods: [
      "Richmond Beach", "Ridgecrest", "Echo Lake", "Parkwood",
      "Hillwood", "North City", "Briarcrest",
    ],
    commonIssues: [
      "Mid-century homes with original or second-generation roofs past their lifespan",
      "Moss buildup identical to north Seattle neighborhoods",
      "Small lot sizes making access and staging more challenging on some jobs",
    ],
    roofTypes: ["Composition shingle", "3-tab shingle", "Architectural shingle"],
    buildingAge: "Primarily 1950s-1970s mid-century homes, increasing new townhome and multifamily infill",
    faq: [
      {
        q: "Should I repair, restore, or replace my cedar shake roof in Shoreline?",
        a: "Depends on the shake's condition. If it's sound but dirty and mossy, cleaning and treatment can buy real years. If shakes are splitting, cupping, or rotting in patches, repairs make sense up to a point. Once failure is widespread, replacement with composite or architectural shingle is the better money. We'll tell you which stage yours is at.",
      },
      {
        q: "Can you replace cedar shake with regular shingles?",
        a: "Yes, and it's the most common conversion we do in Shoreline. Shake-to-shingle replacement involves tearing off the shake, usually adding new sheathing over the skip decking, then installing underlayment and architectural shingles. The result needs far less maintenance than shake.",
      },
      {
        q: "How much does roof repair cost in Shoreline?",
        a: "Composition roof repairs run $300 to $1,500 like the rest of the metro. Cedar shake repairs are usually quoted after we see the roof, since matching and sourcing shakes affects the price. Written estimate first, always.",
      },
      {
        q: "Which Shoreline neighborhoods do you serve?",
        a: "All of them. Richmond Beach, Ridgecrest, Echo Lake, Parkwood, Hillwood, North City, and Briarcrest.",
      },
    ],
  },
  {
    name: "Edmonds",
    slug: "edmonds",
    tier: 3,
    tagline: "Waterfront charm, weather-tested roofs",
    description:
      "Edmonds is a classic Puget Sound waterfront town, and homes here deal with salt air, coastal wind, and the usual PNW moisture. Older homes in the Bowl and near the ferry terminal are charming but often have aging roofs. We work carefully on these properties to preserve character while solving real problems.\n\nRoof leak repair is the most common call we get in Edmonds. Salt air off the Sound corrodes flashing faster than it does inland, and wind-driven rain finds every weak point on waterfront-facing slopes. We chase leaks to their actual source rather than patching the stain, replace corroded flashing and failed skylights, and handle full residential re-roofs from the Bowl up through Perrinville and Westgate.\n\nWe take on commercial roofing in Edmonds too, including low-slope systems and skylight replacement on the buildings around downtown. Old house or new storefront, the approach is the same: get on the roof, document what's failing, and put an honest number on paper.",
    neighborhoods: [
      "The Bowl", "Perrinville", "Esperance", "Firdale Village",
      "Westgate", "Seaview", "Edmonds Highlands",
    ],
    commonIssues: [
      "Salt air and coastal wind accelerating shingle and flashing wear",
      "Historic homes in the Bowl with complex roof lines and aging materials",
      "Wind-driven rain penetration on waterfront-facing elevations",
    ],
    roofTypes: ["Composition shingle", "Cedar shake", "Architectural shingle"],
    buildingAge: "Mix of 1940s-1960s waterfront homes and 1970s-1990s hillside construction",
    faq: [
      {
        q: "How much does roof leak repair cost in Edmonds?",
        a: "Most leak repairs in Edmonds run $300 to $1,500. Corroded flashing and failed skylight seals, the two most common culprits here, usually sit in the middle of that range. If the leak has been running long enough to rot decking, the price goes up, which is a good reason not to wait.",
      },
      {
        q: "Does salt air really shorten a roof's life?",
        a: "It shortens the life of the metal parts. Flashing, fasteners, and vents corrode noticeably faster within a half mile or so of the water, even when the shingles themselves are fine. On waterfront homes we spec corrosion-resistant flashing so the details last as long as the roof.",
      },
      {
        q: "Do you replace skylights in Edmonds?",
        a: "Yes, residential and commercial both. Older skylights are one of the most common leak sources we find in Edmonds, and replacing one properly during other roof work is far cheaper than a separate job later.",
      },
      {
        q: "Can you work on the older homes in the Bowl?",
        a: "That's some of our favorite work. Bowl homes often have complex rooflines and older construction details, and we repair them in keeping with the house rather than the fastest way possible. You get photos and a clear scope before we start.",
      },
    ],
  },
  {
    name: "Woodinville",
    slug: "woodinville",
    tier: 3,
    tagline: "Wine country, solid roofs",
    description:
      "Woodinville is known for its wineries, but the housing here is mostly suburban residential spread across wooded lots. Big trees mean shade, shade means moss, and moss means roof maintenance. We serve Woodinville's established neighborhoods and newer builds alike.\n\nCedar shake work keeps us busy in Woodinville, especially out toward Cottage Lake and Hollywood Hill where the big wooded lots are. Shake under fir canopy holds moisture and grows moss faster than anywhere else we work, so we do a lot of shake repair, restoration, and shake-to-shingle conversions here. If your shake roof is on the fence, we'll give you a straight read on whether treatment buys you years or you're funding a losing battle.\n\nBeyond shake, it's asphalt shingle repair and replacement across the established neighborhoods, plus commercial roofing for the wineries and business parks in the valley, most of it low-slope membrane work. Free inspections, written estimates, no pressure.",
    neighborhoods: [
      "Woodinville Wine Country", "Cottage Lake", "Wellington",
      "Leota", "Bear Creek", "Hollywood Hill",
    ],
    commonIssues: [
      "Dense tree canopy creating year-round shade and aggressive moss growth",
      "Large lots with mature trees dropping needles and debris on roof surfaces",
      "Rural-feel properties with longer roof lines and more square footage to maintain",
    ],
    roofTypes: ["Composition shingle", "Architectural shingle", "Cedar shake"],
    buildingAge: "1980s-2000s suburban homes on larger lots, some newer construction in planned developments",
    faq: [
      {
        q: "Do you repair cedar shake roofs in Woodinville and Cottage Lake?",
        a: "Yes, that area is the heart of our shake work. We repair split and cupped shakes, clean and treat roofs that still have life, and do full shake-to-shingle conversions when the roof is past saving. After a look at the roof we'll tell you honestly which category yours is in.",
      },
      {
        q: "How much does a cedar shake roof replacement cost in Woodinville?",
        a: "Shake tear-offs cost more than composition tear-offs, usually an extra $2,000 to $4,000 for removal, and converting to architectural shingle typically means new sheathing over the old skip decking. Most Woodinville shake conversions land in the $20,000 to $40,000 range depending on size. It's all itemized in the written estimate.",
      },
      {
        q: "How do I keep moss off my roof on a wooded lot?",
        a: "You won't stop it completely under fir canopy, but you can manage it. Soft-wash cleaning kills what's there, zinc or copper strips at the ridge slow regrowth, and trimming branches back a few feet lets the roof dry out. Skip the pressure washer, it takes years off the roof.",
      },
      {
        q: "Do you handle commercial roofing in Woodinville?",
        a: "Yes. The wineries and business parks in the valley run mostly low-slope membrane systems, and we repair and replace those alongside our residential work.",
      },
    ],
  },
  {
    name: "Puyallup",
    slug: "puyallup",
    tier: 3,
    tagline: "Pierce County roofing",
    description:
      "Puyallup is one of the fastest-growing cities in Pierce County, with a mix of historic downtown homes and sprawling newer suburbs. The Puyallup Valley gets its share of rain and wind, and older homes throughout the city are hitting the age where roof work becomes necessary.\n\nSouth Hill is where most of our Puyallup work happens. The tract homes built there from the 70s through the 90s are hitting end of life at the same time, and valley wind drives rain under ridge caps and flashing on the exposed streets. Downtown's older homes bring different problems: layered roofs, tired decking, and details that need real carpentry rather than just new shingles.\n\nWe cover Puyallup as part of our South Sound service area alongside Tacoma. Free inspection, written line-item estimate, and an honest answer on whether your roof needs a repair, a replacement, or nothing yet.",
    neighborhoods: [
      "South Hill", "Downtown Puyallup", "Shaw Road", "Sunrise",
      "Wildwood", "Firgrove", "Manorwood",
    ],
    commonIssues: [
      "Valley wind patterns driving rain under ridge caps and flashings",
      "Aging roofs on 1970s-1990s South Hill tract homes",
      "Builder-grade materials on newer construction wearing faster than expected",
    ],
    roofTypes: ["3-tab shingle", "Composition shingle", "Architectural shingle"],
    buildingAge: "Historic downtown homes, 1970s-1990s South Hill suburbs, and 2010s+ new development",
    faq: [
      {
        q: "How much does roof repair cost in Puyallup?",
        a: "Most residential repairs in Puyallup run $300 to $1,500 depending on the problem. Ridge cap and flashing repairs after windstorms, our most common Puyallup call, usually land mid-range. The price goes in writing before we start.",
      },
      {
        q: "How much is a roof replacement on South Hill?",
        a: "Most South Hill replacements land between $12,000 and $25,000. These are mostly straightforward rooflines, which keeps costs down compared to Seattle. Architectural shingles run $6.50 to $9.50 per square foot installed.",
      },
      {
        q: "Can you work on the older homes near downtown Puyallup?",
        a: "Yes. Older downtown homes often have more than one layer of old roofing and decking that needs repair once it's exposed. We quote the tear-off honestly, flag likely decking work upfront, and show you photos of anything we find.",
      },
      {
        q: "Which parts of Puyallup do you serve?",
        a: "All of them. South Hill, downtown, Shaw Road, Sunrise, Wildwood, Firgrove, and Manorwood, plus the surrounding valley.",
      },
    ],
  },
  {
    name: "Newcastle",
    slug: "newcastle",
    tier: 3,
    tagline: "Hillside homes, hilltop views",
    description:
      "Newcastle sits on a ridge between Bellevue and Renton with hillside views of Lake Washington, the Cascades, and Seattle. The elevated terrain means steeper roof pitches, more wind exposure, and a different set of roofing challenges compared to valley cities nearby. Homes here tend to be well-maintained executive-style properties, and owners expect quality workmanship to match.\n\nRoof repairs in Newcastle require more care than a typical job. Steep-pitch roofs on hillside lots add labor complexity, and the ridge position makes these homes more vulnerable during fall and winter windstorms off the Cascades. The wooded areas around Coal Creek on the east side keep moss active year-round. Most Newcastle homes were built between 1990 and 2015, so many are entering or past the window where the original roof starts showing its age.\n\nWe handle roofing repairs and replacements throughout Newcastle, WA. If you're seeing lifted shingles, granule loss, dark streaking from algae, or water staining on interior ceilings, those are signs worth addressing before a small issue becomes a bigger one.",
    neighborhoods: [
      "Newcastle Hills", "Olympus", "Lake Boren", "Coal Creek",
      "Newcastle Golf Club area", "China Creek", "May Valley", "Lakemont",
    ],
    commonIssues: [
      "Steep-pitch roofs on hillside homes adding labor complexity to repairs and replacements",
      "Wind exposure from the elevated ridge position, especially during fall and winter Cascade storms",
      "Moss and organic debris buildup in shaded areas around Coal Creek and the forested east side",
      "Aging architectural shingle roofs on 1990s-2010s homes approaching or past the 25-30 year mark",
    ],
    roofTypes: ["Architectural shingle", "Composition shingle", "Cedar shake"],
    buildingAge: "Primarily 1990s-2010s construction, executive-style homes on hillside lots ranging from 2,500 to 5,000+ sq ft",
    faq: [
      {
        q: "Do you do roof repairs in Newcastle, WA?",
        a: "Yes. We handle roof repairs throughout Newcastle, including Newcastle Hills, Olympus, Lake Boren, Coal Creek, and the Newcastle Golf Club area. Whether it's a leak, lifted shingles, moss damage, or failed flashing, we'll come out and give you an honest assessment.",
      },
      {
        q: "Can you work on steep-pitch roofs in Newcastle?",
        a: "Absolutely. Newcastle homes often have steeper pitches due to the hillside terrain, and we're set up to work on them safely. Steeper roofs require more time and care, which is factored into our estimates upfront, no surprises on the final invoice.",
      },
      {
        q: "What roofing materials work best for Newcastle homes?",
        a: "Architectural shingles are the most common choice for Newcastle's 1990s-2010s construction and hold up well against wind and moisture. Some homeowners opt for Class 4 impact-resistant shingles, which can also reduce insurance premiums. We'll walk you through the options that make sense for your specific roof.",
      },
      {
        q: "How do I know if my Newcastle roof needs repair or full replacement?",
        a: "If your roof is under 15 years old and the damage is isolated to one area, a repair usually makes sense. If it's 20+ years old, has widespread granule loss, or is showing soft spots or decking damage, replacement is typically the better investment. We'll give you a straight answer during the free estimate, we won't push you toward the more expensive option if you don't need it.",
      },
    ],
  },
  {
    name: "Renton Highlands",
    slug: "renton-highlands",
    tier: 3,
    tagline: "Highlands living, ground-level service",
    description:
      "Renton Highlands is an unincorporated community east of Renton with a suburban, residential feel. Homes here are mostly 1980s-2000s construction on moderate-sized lots. Many roofs in the area are now 25-35 years old and starting to show wear from decades of PNW weather.\n\nWhole streets in the Highlands re-roof within a few years of each other, since most of the housing went up in the same window. We see the same pattern over and over: shingles at 25-plus years shedding granules, moss along the greenbelt edges in Maplewood Heights and Honey Creek, and attic ventilation that was never quite right, cooking the shingles from underneath. Fixing the ventilation during a re-roof costs little and adds years to the new roof.\n\nWe're the same crew that covers Renton proper, so if you're in Cascade, Sierra Heights, or out toward May Valley, scheduling is easy. Free inspection, written estimate, and a straight answer on how much life your current roof has left.",
    neighborhoods: [
      "Cascade", "Maplewood Heights", "Sierra Heights",
      "Honey Creek", "May Valley", "Coalfield",
    ],
    commonIssues: [
      "25-35 year old roofs reaching end of life across entire neighborhoods",
      "Moss and organic debris from surrounding wooded and greenbelt areas",
      "Inadequate ventilation in older builds causing condensation under the deck",
    ],
    roofTypes: ["Composition shingle", "3-tab shingle", "Architectural shingle"],
    buildingAge: "Mostly 1980s-2000s suburban homes, single-family residential on moderate lots",
    faq: [
      {
        q: "How much does roof repair cost in the Renton Highlands?",
        a: "Same as the rest of the metro: most repairs run $300 to $1,500 depending on scope. Single-point leaks and flashing fixes at the low end, decking repair higher. Written estimate before any work.",
      },
      {
        q: "My neighbors are all re-roofing. Should I?",
        a: "Maybe. Highlands homes were built in waves, so roofs age in waves too, and contractors working your street can mean better scheduling. But your roof is on its own clock. If it's holding well, we'll say so at the free inspection rather than talk you into a tear-off early.",
      },
      {
        q: "Why does attic ventilation matter for my roof?",
        a: "Poor ventilation traps heat and moisture under the deck, which ages shingles from below and can rot sheathing. It's a common issue in 80s and 90s Highlands construction. Correcting it during a re-roof is cheap insurance for the new roof's lifespan.",
      },
      {
        q: "Which Highlands areas do you cover?",
        a: "All of them. Cascade, Maplewood Heights, Sierra Heights, Honey Creek, May Valley, and Coalfield, plus Renton proper and Newcastle next door.",
      },
    ],
  },
  {
    name: "Medina",
    slug: "medina",
    tier: 3,
    tagline: "Lakefront estates, premium roofing",
    description:
      "Medina sits on the shore of Lake Washington just west of Bellevue, and it's one of the highest-value addresses in the state. The roofing here reflects that. Waterfront estates and custom homes run to cedar shake, tile, slate, and standing-seam metal, and owners expect the work to match the house. We handle repairs and replacements across Medina, from Evergreen Point down to the Overlake golf area.\n\nThe lakefront setting brings its own problems. Wind coming off the water lifts shingles and works flashing loose, and the heavy mature tree canopy that gives Medina its privacy also keeps north-facing slopes damp and mossy year round. A lot of the homes have steep, complex rooflines with multiple valleys, dormers, and chimneys, so leaks tend to start at the details rather than the field. Premium materials also need someone who's actually worked on them, since a botched cedar or tile repair costs far more to put right.\n\nWe're a local roofing company, not a national chain, so you get a straight answer and honest pricing whatever the roof is worth. We'll come out, look at what's actually up there, and give you a clear written estimate at no cost.",
    neighborhoods: [
      "Evergreen Point", "Groat Point", "Medina Heights", "Overlake",
      "Ridge Road", "Hunts Point area", "Clyde Hill area",
    ],
    commonIssues: [
      "Lakefront wind off Lake Washington lifting shingles and loosening flashing on exposed waterfront elevations",
      "Heavy mature tree canopy keeping north-facing slopes damp and mossy through the wet season",
      "Steep, complex rooflines with multiple valleys, dormers, and chimneys where leaks start at the details",
      "Premium materials (cedar shake, tile, slate, standing-seam metal) needing specialized repair to avoid costly damage",
    ],
    roofTypes: ["Cedar shake", "Tile", "Composition shingle", "Architectural shingle", "Standing-seam metal"],
    buildingAge: "Mix of mid-century lakefront estates and modern custom luxury rebuilds, many on large wooded lots",
    faq: [
      {
        q: "Do you work on high-end roofs in Medina, WA?",
        a: "Yes. A lot of Medina homes have cedar shake, tile, slate, or standing-seam metal, and we're set up to repair and replace all of them. These materials are less forgiving than standard composition, so the work has to be done by someone who's handled them before. We'll give you an honest read on whether a repair holds or whether replacement is the smarter call.",
      },
      {
        q: "What causes most roof leaks on Medina's waterfront homes?",
        a: "Two things. Wind off Lake Washington lifts shingles and works flashing loose on exposed elevations, and the steep, detailed rooflines common here mean leaks usually start at valleys, dormers, chimneys, and skylights rather than out in the open field. We track the water back to the actual source instead of just patching the stain.",
      },
      {
        q: "Do you serve Medina, Hunts Point, and Clyde Hill?",
        a: "Yes. We cover Medina including Evergreen Point, Groat Point, Medina Heights, and the Overlake area, plus neighboring Hunts Point and Clyde Hill. Residential and the occasional commercial roof both. If you're nearby and not sure we reach you, just call.",
      },
    ],
  },
];

export const tier1Cities = cities.filter((c) => c.tier === 1);
export const tier2Cities = cities.filter((c) => c.tier === 2);
export const tier3Cities = cities.filter((c) => c.tier === 3);

// ── Regional grouping (single source of truth, used by the service-area
// locator and by each city page's "nearby cities" interlinking) ──────────
export interface Region {
  id: string;
  label: string;
  slugs: string[];
}

export const regions: Region[] = [
  {
    id: "seattle-north",
    label: "Seattle & North",
    slugs: ["seattle", "shoreline", "edmonds", "lynnwood", "everett", "bothell"],
  },
  {
    id: "eastside",
    label: "Eastside",
    slugs: ["bellevue", "kirkland", "redmond", "sammamish", "issaquah", "newcastle", "woodinville", "medina"],
  },
  {
    id: "south-king",
    label: "South King County",
    slugs: ["renton", "renton-highlands", "kent", "auburn", "federal-way"],
  },
  {
    id: "south-sound",
    label: "South Sound",
    slugs: ["tacoma", "puyallup"],
  },
];

export function regionOf(slug: string): string {
  return regions.find((r) => r.slugs.includes(slug))?.id ?? "eastside";
}

// Cities to link from a given city's page: same-region neighbors first, then
// fill from the rest so every city (including small ones) gets inbound links.
export function nearbyCities(slug: string, count = 8): City[] {
  const region = regionOf(slug);
  const sameRegion = cities.filter((c) => c.slug !== slug && regionOf(c.slug) === region);
  const others = cities.filter((c) => c.slug !== slug && regionOf(c.slug) !== region);
  return [...sameRegion, ...others].slice(0, count);
}
