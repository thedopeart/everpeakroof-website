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
  mapQuery: string;
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
    mapQuery: "Seattle+WA",
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
      "Aging composition shingles on 1970s-1990s homes reaching end of life — many Bellevue roofs installed in the 80s and 90s are now 25-35 years old",
      "Moss and algae on north-facing slopes under heavy tree cover, especially in Bridle Trails and Woodridge",
      "Storm damage from Eastside wind corridors between Lake Washington and the Cascades, lifting shingles and damaging ridge caps",
      "Skylight leaks on older 1980s-era installations — a common and often overlooked source of water intrusion",
      "Failed pipe boots and cracked flashing collars around vents and chimneys on aging roofs throughout East Bellevue",
    ],
    roofTypes: ["Composition shingle", "Architectural shingle", "Cedar shake", "Tile"],
    buildingAge: "Primarily 1970s-2000s construction, with newer luxury builds in West Bellevue and Somerset",
    mapQuery: "Bellevue+WA",
    faq: [
      {
        q: "How much does roof repair cost in Bellevue, WA?",
        a: "Most residential roof repairs in Bellevue run between $300 and $1,500 depending on the issue. A simple flashing repair or boot replacement is typically on the lower end. Larger repairs involving decking, valley replacements, or multiple leak sources will be higher. We provide written estimates before any work starts — no surprises.",
      },
      {
        q: "What are the most common roofing problems in Bellevue?",
        a: "The most common issues we see in Bellevue are aging composition shingles on 1970s-1990s homes, moss and algae growth on north-facing slopes under tree cover, skylight leaks on older 1980s-era installations, and storm damage from Eastside wind corridors. Many Bellevue homes are also hitting the 25-30 year mark where a full replacement makes more economic sense than continued repairs.",
      },
      {
        q: "Do you serve all neighborhoods in Bellevue?",
        a: "Yes. We work across all of Bellevue including West Bellevue, Crossroads, Factoria, Eastgate, Newport Hills, Somerset, Woodridge, Bridle Trails, Lake Hills, Wilburton, and Downtown Bellevue. If your neighborhood isn't listed here, call us — we almost certainly cover it.",
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
      "Tacoma's mix of historic homes and newer neighborhoods means roofing jobs here cover a wide range. Older homes near Stadium District and North End often have cedar shake or aging composition roofs that need attention. Closer to the waterfront, salt air and wind add extra wear.",
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
    mapQuery: "Tacoma+WA",
  },
  {
    name: "Kent",
    slug: "kent",
    tier: 1,
    tagline: "High-volume market, low competition",
    description:
      "Kent sits in the heart of the Green River Valley, and the area sees consistent roofing demand from both residential neighborhoods and commercial properties. Homes here tend to be more affordable, which means homeowners want honest pricing and no-nonsense service. That's exactly what we do.",
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
    mapQuery: "Kent+WA",
  },

  // ── Tier 2 ──────────────────────────────────────────────
  {
    name: "Kirkland",
    slug: "kirkland",
    tier: 2,
    tagline: "Lakeside homes, premium roofing",
    description:
      "Kirkland homeowners invest in their properties, and roof work here reflects that. Waterfront homes along Lake Washington take extra wind and moisture, while hillside neighborhoods like Finn Hill and Juanita deal with drainage and moss. We know Kirkland's building styles and what holds up here.",
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
    mapQuery: "Kirkland+WA",
  },
  {
    name: "Everett",
    slug: "everett",
    tier: 2,
    tagline: "North Sound's roofing crew",
    description:
      "Everett is the biggest city in Snohomish County, and roofing here ranges from older bungalows in the Riverside neighborhood to newer suburban builds in Silver Lake. The proximity to the waterfront means more wind exposure, and the dense tree canopy across the city keeps moss crews busy year-round.",
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
    mapQuery: "Everett+WA",
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
    mapQuery: "Renton+WA",
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
      "Redmond has grown fast, and a lot of the housing stock here was built in the 1990s and 2000s. Those roofs are now hitting the 25-30 year mark where problems start showing up. We work across Redmond from Education Hill down to Overlake, handling the repairs and replacements that come with aging Eastside construction.",
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
    mapQuery: "Redmond+WA",
  },

  // ── Tier 3 ──────────────────────────────────────────────
  {
    name: "Lynnwood",
    slug: "lynnwood",
    tier: 3,
    tagline: "South Snohomish roofing",
    description:
      "Lynnwood is a growing city right on the King-Snohomish county line. Lots of 1960s-1980s homes here with original or second-generation roofs that are due for replacement. The new light rail is driving renovation activity, and roof work is part of that.",
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
    mapQuery: "Lynnwood+WA",
  },
  {
    name: "Bothell",
    slug: "bothell",
    tier: 3,
    tagline: "Straddling two counties, one roofing crew",
    description:
      "Bothell sits across both King and Snohomish counties, with neighborhoods ranging from older homes near downtown to newer master-planned communities in the Canyon Park area. Tree-heavy lots and PNW rain keep roofing work steady here.",
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
    mapQuery: "Bothell+WA",
  },
  {
    name: "Sammamish",
    slug: "sammamish",
    tier: 3,
    tagline: "Plateau living, proper roofing",
    description:
      "Sammamish sits on a plateau surrounded by trees, and the roofing here reflects that. Larger homes on wooded lots mean bigger roofs, more surface area for moss, and more exposure to wind. Most homes were built between 1990 and 2015, so many are entering the window where roof issues start.",
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
    mapQuery: "Sammamish+WA",
  },
  {
    name: "Issaquah",
    slug: "issaquah",
    tier: 3,
    tagline: "Foothills roofing specialists",
    description:
      "Issaquah sits at the base of the Cascades foothills, and that geography matters for roofing. Higher elevation means more weather exposure, heavier snowfall in some years, and dense forest cover that drives moss growth. We work across Issaquah from the Highlands down to Gilman Village.",
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
    mapQuery: "Issaquah+WA",
  },
  {
    name: "Federal Way",
    slug: "federal-way",
    tier: 3,
    tagline: "South King County covered",
    description:
      "Federal Way is one of the larger cities in south King County, with a wide mix of housing types. From older neighborhoods near Steel Lake to newer construction along the I-5 corridor, roofing work here tends toward practical repairs and budget-conscious replacements.",
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
    mapQuery: "Federal+Way+WA",
  },
  {
    name: "Auburn",
    slug: "auburn",
    tier: 3,
    tagline: "Valley floor to hillside",
    description:
      "Auburn spreads from the Green River valley floor up into the surrounding hills. Valley homes deal with moisture and drainage issues, while hillside properties get more wind exposure. Affordable housing stock means a lot of aging roofs that need attention.",
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
    mapQuery: "Auburn+WA",
  },
  {
    name: "Shoreline",
    slug: "shoreline",
    tier: 3,
    tagline: "North Seattle border, same weather",
    description:
      "Shoreline sits right on Seattle's northern border and gets the same weather, the same moss, and the same roofing challenges. Mostly mid-century homes here with a growing number of townhome and multifamily projects. If your Shoreline roof is over 20 years old, it's worth getting it looked at.",
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
    mapQuery: "Shoreline+WA",
  },
  {
    name: "Edmonds",
    slug: "edmonds",
    tier: 3,
    tagline: "Waterfront charm, weather-tested roofs",
    description:
      "Edmonds is a classic Puget Sound waterfront town, and homes here deal with salt air, coastal wind, and the usual PNW moisture. Older homes in the Bowl and near the ferry terminal are charming but often have aging roofs. We work carefully on these properties to preserve character while solving real problems.",
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
    mapQuery: "Edmonds+WA",
  },
  {
    name: "Woodinville",
    slug: "woodinville",
    tier: 3,
    tagline: "Wine country, solid roofs",
    description:
      "Woodinville is known for its wineries, but the housing here is mostly suburban residential spread across wooded lots. Big trees mean shade, shade means moss, and moss means roof maintenance. We serve Woodinville's established neighborhoods and newer builds alike.",
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
    mapQuery: "Woodinville+WA",
  },
  {
    name: "Puyallup",
    slug: "puyallup",
    tier: 3,
    tagline: "Pierce County roofing",
    description:
      "Puyallup is one of the fastest-growing cities in Pierce County, with a mix of historic downtown homes and sprawling newer suburbs. The Puyallup Valley gets its share of rain and wind, and older homes throughout the city are hitting the age where roof work becomes necessary.",
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
    mapQuery: "Puyallup+WA",
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
    mapQuery: "Newcastle+WA",
    faq: [
      {
        q: "Do you do roof repairs in Newcastle, WA?",
        a: "Yes. We handle roof repairs throughout Newcastle, including Newcastle Hills, Olympus, Lake Boren, Coal Creek, and the Newcastle Golf Club area. Whether it's a leak, lifted shingles, moss damage, or failed flashing, we'll come out and give you an honest assessment.",
      },
      {
        q: "Can you work on steep-pitch roofs in Newcastle?",
        a: "Absolutely. Newcastle homes often have steeper pitches due to the hillside terrain, and we're set up to work on them safely. Steeper roofs require more time and care, which is factored into our estimates upfront — no surprises on the final invoice.",
      },
      {
        q: "What roofing materials work best for Newcastle homes?",
        a: "Architectural shingles are the most common choice for Newcastle's 1990s-2010s construction and hold up well against wind and moisture. Some homeowners opt for Class 4 impact-resistant shingles, which can also reduce insurance premiums. We'll walk you through the options that make sense for your specific roof.",
      },
      {
        q: "How do I know if my Newcastle roof needs repair or full replacement?",
        a: "If your roof is under 15 years old and the damage is isolated to one area, a repair usually makes sense. If it's 20+ years old, has widespread granule loss, or is showing soft spots or decking damage, replacement is typically the better investment. We'll give you a straight answer during the free estimate — we won't push you toward the more expensive option if you don't need it.",
      },
    ],
  },
  {
    name: "Renton Highlands",
    slug: "renton-highlands",
    tier: 3,
    tagline: "Highlands living, ground-level service",
    description:
      "Renton Highlands is an unincorporated community east of Renton with a suburban, residential feel. Homes here are mostly 1980s-2000s construction on moderate-sized lots. Many roofs in the area are now 25-35 years old and starting to show wear from decades of PNW weather.",
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
    mapQuery: "East+Renton+Highlands+WA",
  },
];

export const tier1Cities = cities.filter((c) => c.tier === 1);
export const tier2Cities = cities.filter((c) => c.tier === 2);
export const tier3Cities = cities.filter((c) => c.tier === 3);
