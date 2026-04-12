export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  featured: boolean;
  image?: string;
  longDesc: string;
  process: string[];
  includes: string[];
  commonProblems?: string[];
}

export const services: Service[] = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortDesc: "Leak fixes, storm damage, flashing, shingle replacement. Fast turnaround.",
    icon: "Wrench",
    featured: true,
    image: "/images/roof-repair-progress.jpg",
    longDesc:
      "Most roof problems don't need a full replacement. A cracked pipe boot, damaged flashing, or a handful of blown-off shingles can usually be fixed in a single visit. We figure out where the water is getting in, show you photos of the damage, and give you a straight price before we touch anything. If a repair makes sense, we'll do it right. If it doesn't, we'll tell you that too.",
    process: [
      "We come out and inspect the roof, usually within a day or two of your call",
      "We show you photos of what we found and explain what needs to happen",
      "You get a written quote with a clear breakdown, no vague line items",
      "We do the repair, clean up, and walk it with you when we're done",
    ],
    includes: [
      "Leak detection and source identification",
      "Flashing repair and replacement around vents, chimneys, and skylights",
      "Missing or damaged shingle replacement",
      "Ridge cap repair",
      "Pipe boot and vent collar replacement",
      "Storm damage patching and temporary sealing",
    ],
    commonProblems: [
      "Water stains on ceilings or walls (usually a flashing issue, not a full roof failure)",
      "Shingles missing after a windstorm",
      "Leaks around skylights or chimney bases",
      "Cracked or deteriorated pipe boot flashings",
    ],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortDesc: "Full tear-off and replacement for shingle and cedar shake roofs.",
    icon: "Home",
    featured: true,
    image: "/images/shingle-replacement.jpg",
    longDesc:
      "When repairs stop making financial sense, it's time for a new roof. We handle the full job: tear-off, deck inspection and repair, underlayment, new shingles, flashing, ventilation, and cleanup. Most residential replacements take 2 to 4 days depending on the size and complexity. We pull the permits, coordinate with your schedule, and don't leave until the site is clean.",
    process: [
      "Free inspection to assess the current roof condition and deck integrity",
      "Written estimate with material options, timeline, and cost breakdown",
      "We pull permits if required by your city",
      "Full tear-off down to the deck, inspect and replace any rotted sheathing",
      "Install ice and water shield, synthetic underlayment, drip edge, and new shingles",
      "Final walkthrough and warranty documentation",
    ],
    includes: [
      "Complete tear-off of existing roofing materials",
      "Deck inspection and sheathing repair where needed",
      "Ice and water shield in valleys and eaves",
      "Synthetic underlayment across the full deck",
      "New drip edge, flashing, and ridge vents",
      "Architectural or 3-tab shingle installation",
      "Dumpster, hauling, and full site cleanup",
    ],
  },
  {
    slug: "emergency-roof-repair",
    name: "Emergency Repair",
    shortDesc: "Fast response for active leaks, storm damage, and fallen trees.",
    icon: "Zap",
    featured: true,
    image: "/images/worker-on-roof.jpg",
    longDesc:
      "When a tree branch goes through your roof at 10pm or you wake up to water pouring through the ceiling, waiting until Monday isn't an option. We pick up the phone 7 days a week and can usually have someone out to tarp and secure the damage within a few hours. Once the immediate threat is handled, we come back to do the permanent repair and help with insurance documentation if needed.",
    process: [
      "Call us any day of the week, we answer the phone",
      "A crew comes out to assess and stop the active damage (tarping, board-up, temporary seal)",
      "We document everything with photos for your insurance claim",
      "We schedule the permanent repair once the emergency is stabilized",
    ],
    includes: [
      "Emergency tarping and temporary waterproofing",
      "Board-up for structural openings",
      "Active leak containment",
      "Storm damage assessment and photo documentation",
      "Debris removal from the immediate area",
      "Insurance claim documentation and adjuster coordination",
    ],
    commonProblems: [
      "Tree branches or limbs puncturing the roof during windstorms",
      "Active leaks during heavy rain from failed flashing or missing shingles",
      "Blow-off damage exposing underlayment or deck to water",
      "Ice dam backup forcing water under shingles (rare in Seattle, but it happens)",
    ],
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    shortDesc: "Full condition reports for homeowners, buyers, and insurance documentation.",
    icon: "Search",
    featured: true,
    image: "/images/craftsman-tile.jpg",
    longDesc:
      "Whether you're buying a house, filing an insurance claim, or just want to know how much life your roof has left, we'll give you an honest assessment. We go up on the roof, check every component (shingles, flashing, vents, gutters, deck condition), take photos, and give you a written report with our findings. If nothing needs fixing, we'll tell you. If something does, you'll know exactly what and roughly how much.",
    process: [
      "Schedule a time that works for you, usually within a day or two",
      "We inspect the roof from the ground, the ladder, and on top",
      "We check shingles, flashing, vents, chimneys, skylights, gutters, and visible deck condition",
      "You get a written report with photos and our honest assessment",
    ],
    includes: [
      "Full exterior roof inspection (shingles, flashing, vents, penetrations)",
      "Gutter and downspout condition check",
      "Chimney and skylight flashing assessment",
      "Attic ventilation evaluation (if accessible)",
      "Written condition report with photos",
      "Remaining lifespan estimate based on material and condition",
    ],
  },
  {
    slug: "shingle-installation",
    name: "Shingle Installation",
    shortDesc: "Architectural, 3-tab, designer, and impact-resistant shingles.",
    icon: "Grid3x3",
    featured: true,
    image: "/images/shingle-closeup.jpg",
    longDesc:
      "Shingles are the most common roofing material in the Puget Sound for a reason. They're cost-effective, they handle rain well, and there's a wide range of quality and style options. We install architectural shingles (the standard for most homes now), 3-tab for budget-conscious projects, and impact-resistant shingles for homeowners who want the best wind and hail protection. We'll walk you through the options and help you pick what makes sense for your house and budget.",
    process: [
      "We assess your existing roof and discuss material options",
      "You choose your shingle type, color, and warranty level",
      "We install per manufacturer specs to maintain warranty coverage",
      "Final inspection and cleanup",
    ],
    includes: [
      "Architectural (dimensional) shingles with 30-50 year warranties",
      "3-tab shingles for cost-effective coverage",
      "Impact-resistant shingles (Class 3 and Class 4 rated)",
      "Designer shingles for high-end aesthetics",
      "Proper starter strip, hip and ridge cap installation",
      "Manufacturer warranty registration",
    ],
    commonProblems: [
      "Builder-grade 3-tab shingles failing at 15-20 years instead of the rated 25",
      "Improper nail placement causing shingles to lift in wind",
      "Mismatched shingle repairs that look patchy and don't seal correctly",
    ],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    shortDesc: "TPO, PVC, and commercial maintenance contracts for offices and warehouses.",
    icon: "Building2",
    featured: true,
    image: "/images/craftsman-roof-build.jpg",
    longDesc:
      "Commercial roofs are a different animal. Larger square footage, different materials, stricter code requirements, and building owners who need the work done without disrupting tenants or operations. We handle TPO and PVC membrane systems, commercial maintenance contracts, and roof coatings. We work around your business schedule and provide detailed proposals with clear timelines.",
    process: [
      "Site visit to assess the roof system, drainage, and any existing issues",
      "Detailed proposal with material specs, timeline, and phasing plan",
      "Work is scheduled around your operations to minimize disruption",
      "Final inspection and documentation for your building records",
    ],
    includes: [
      "TPO and PVC single-ply membrane installation and repair",
      "Commercial roof coatings and restoration",
      "Drainage assessment and improvement",
      "Preventive maintenance contracts with scheduled inspections",
      "Code-compliant installations with proper documentation",
      "Multi-phase project management for larger buildings",
    ],
  },
  {
    slug: "insurance-restoration",
    name: "Insurance Restoration",
    shortDesc: "Full claims assistance from storm inspection through payout.",
    icon: "FileCheck",
    featured: false,
    image: "/images/roofer-installing.jpg",
    longDesc:
      "Filing a roof insurance claim is confusing, and insurance companies aren't always eager to pay out. We handle the whole process: inspect the damage, document it properly, prepare Xactimate estimates that match what adjusters expect to see, and meet with your adjuster on-site. If your claim gets denied or underpaid, we can help challenge it with proper documentation. You shouldn't have to fight your insurance company alone.",
    process: [
      "We inspect your roof and document all storm-related damage with photos",
      "We prepare a scope of work and Xactimate estimate",
      "We meet with your insurance adjuster on-site to walk the damage",
      "Once approved, we do the restoration work and handle the paperwork",
    ],
    includes: [
      "Free storm damage inspection",
      "Detailed photo documentation of all damage",
      "Xactimate estimates formatted for insurance review",
      "On-site adjuster meeting coordination",
      "Supplement filing for underpaid claims",
      "Full roof restoration once the claim is approved",
    ],
    commonProblems: [
      "Insurance companies denying valid wind and hail damage claims",
      "Adjusters undervaluing the scope of work needed",
      "Homeowners not knowing they have storm damage until a leak appears months later",
    ],
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    shortDesc: "Low-pressure roof cleaning that removes moss, algae, and stains without damaging shingles.",
    icon: "Droplets",
    featured: true,
    image: "/images/craftsman-tile.jpg",
    longDesc:
      "PNW roofs take a beating from constant moisture, shade, and organic growth. Moss and algae hold water against your shingles, which speeds up rot and shortens the life of the roof. Our soft wash system uses a low-pressure approach with cleaning solutions that lift moss, algae, and black streaks without tearing up the granules on your shingles. It cleans the roof you have and slows down how fast the growth comes back.",
    process: [
      "Free inspection so we can see how bad the moss and staining actually are",
      "We protect landscaping and gutters before we start",
      "Low-pressure soft wash application across the full roof surface",
      "Treatment that kills moss at the root to slow regrowth",
      "Final walkthrough and honest recommendations on next steps",
    ],
    includes: [
      "Full roof moss and algae removal",
      "Black streak and stain treatment",
      "Low-pressure soft wash, safe for shingles and cedar",
      "Root-level moss treatment to slow future growth",
      "Gutter and landscape protection during the clean",
      "Free roof inspection with the service",
    ],
    commonProblems: [
      "Green moss patches holding moisture against the shingles",
      "Black algae streaks making a roof look aged before its time",
      "Shaded or damp sections of the roof where growth keeps coming back",
      "Early shingle wear caused by organic buildup that was never addressed",
    ],
  },
  {
    slug: "maintenance-program",
    name: "Maintenance Program",
    shortDesc: "Annual maintenance plans to extend your roof's life and prevent costly repairs.",
    icon: "CalendarCheck",
    featured: false,
    image: "/images/shingle-install-hands.jpg",
    longDesc:
      "A roof that gets looked at once a year lasts longer than one that doesn't. Our maintenance program catches small problems (cracked caulk, lifted shingles, clogged drains) before they turn into expensive repairs. You get a scheduled inspection, a written condition report, and any minor maintenance handled on the spot. Think of it like an oil change for your roof.",
    process: [
      "Sign up for the plan that fits your needs",
      "We schedule your first inspection at a time that works for you",
      "Our crew inspects, documents, and handles minor maintenance on the spot",
      "You get a written report with photos and any recommendations",
    ],
    includes: [
      "Annual roof inspection with written condition report",
      "Minor maintenance performed during the visit (caulking, nail pops, small patches)",
      "Debris and moss removal from roof surface",
      "Gutter clearing during inspection visits",
      "Priority scheduling if you need a repair between visits",
      "Photo documentation of roof condition over time",
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
