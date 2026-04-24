export interface ServiceFaq {
  question: string;
  answer: string;
}

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
  faqs: ServiceFaq[];
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
    faqs: [
      {
        question: "How much does a typical roof repair cost in Seattle?",
        answer:
          "Most small repairs in the Seattle area run somewhere between $400 and $1,200. A pipe boot swap or a handful of blown-off shingles is on the low end. A chimney flashing rebuild or a bigger leak tracked back to damaged decking can climb higher. We give you a written price before we start so there's no guessing.",
      },
      {
        question: "Can you repair my roof in the rain?",
        answer:
          "For an active emergency, yes. We'll tarp and temporarily seal things to stop the water. For a permanent shingle or flashing repair, we need a dry surface so the sealant and adhesive bond correctly. That usually means waiting for a break in the weather, which in Seattle can mean a day or two.",
      },
      {
        question: "Do you offer a warranty on roof repairs?",
        answer:
          "We back our repair labor for one year. If the same spot leaks again from work we did, we come back out and fix it at no charge. Materials carry whatever the manufacturer warranty covers, which is usually 10 to 30 years depending on what we installed.",
      },
      {
        question: "How do I know if I need a repair or a full replacement?",
        answer:
          "If the roof is under 15 years old and the damage is in one spot, a repair almost always makes sense. If you're seeing widespread shingle failure, multiple leaks, or the roof is past 20 years, replacement starts to pencil out better. We'll walk the roof with you and tell you honestly which direction we'd go.",
      },
      {
        question: "How fast can you get out here?",
        answer:
          "Most repair calls get an inspection scheduled within one or two business days. If there's an active leak, we try to get someone out same day or next morning. Call us and we'll tell you straight up what our availability looks like that week.",
      },
      {
        question: "Will my homeowner's insurance cover the repair?",
        answer:
          "It depends on the cause. Wind damage, fallen tree limbs, and sudden storm events are usually covered. General wear and tear isn't. If you think it might be a claim, we document everything with photos and can meet your adjuster on-site to walk the damage together.",
      },
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
    faqs: [
      {
        question: "How much does a roof replacement cost in the Seattle area?",
        answer:
          "Most single-family roof replacements in the Puget Sound run $12,000 to $28,000. A simple ranch with architectural shingles sits near the low end. A two-story with steep pitches, cedar shake tear-off, or designer shingles can push past $30,000. We'll measure your roof and give you a firm written number, not a range pulled from thin air.",
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most homes are done in 2 to 4 days. A smaller roof in good weather can wrap in a single day. Bigger homes, cedar shake tear-offs, or decking repair can stretch it to a week. We plan the job around the forecast so we're not tearing off shingles right before a Seattle downpour.",
      },
      {
        question: "Will you tear off the old roof or go over it?",
        answer:
          "We always tear off. Layering new shingles over old ones traps moisture, hides deck rot, and voids most manufacturer warranties. Tear-off costs a bit more up front but gets you a roof that actually lasts 30 years instead of 15.",
      },
      {
        question: "What shingle brands do you install?",
        answer:
          "We mainly install GAF, Owens Corning, and CertainTeed. All three hold up well in PNW weather and come with 30 to 50 year manufacturer warranties. We'll walk you through color and line options and recommend what fits your house style and budget.",
      },
      {
        question: "Do I need a permit to replace my roof?",
        answer:
          "Most cities in King and Pierce County require a permit for full replacements, especially if you're touching the deck. Seattle and Bellevue both do. We pull the permit as part of the job so you don't have to deal with the city yourself.",
      },
      {
        question: "What happens if you find rotted decking during tear-off?",
        answer:
          "It happens more often than people think, especially on older homes with missed leaks. We show you the rot before we cover it up, tell you how much decking needs replacing, and give you the price up front. Most jobs only need a sheet or two of plywood, and we quote that line item separately so there are no surprises.",
      },
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
    faqs: [
      {
        question: "Do you really answer the phone on weekends?",
        answer:
          "Yes. A real person picks up, not a call center. If you've got water coming through the ceiling on a Saturday night, you can reach us. We've tarped roofs at 11pm more than once.",
      },
      {
        question: "How fast can you get here for an emergency?",
        answer:
          "For active leaks in Seattle, Bellevue, or nearby cities, we're usually on-site within 2 to 4 hours. Farther out in Tacoma or Everett might take longer depending on traffic and whether it's rush hour. We'll give you a real ETA when you call, not a vague promise.",
      },
      {
        question: "What does an emergency tarp cost?",
        answer:
          "Emergency tarping typically runs $350 to $800 depending on roof size, pitch, and how complicated it is to secure. That's a temporary fix to stop the water, not the permanent repair. We'll credit that cost toward the full repair if you hire us to do the fix.",
      },
      {
        question: "Will insurance cover emergency tarping?",
        answer:
          "Most homeowner policies cover emergency mitigation as part of a storm claim. That means if you file a claim for the damage, the tarp work is usually reimbursed. Save the receipt and we'll document the photos so you've got a clean paper trail.",
      },
      {
        question: "A tree fell on my roof. What should I do first?",
        answer:
          "Stay out from under that section of the house if you can. Call us and call your insurance carrier. We'll come out, tarp what we can, and document the damage with photos before anyone moves the tree. That order matters for the insurance claim.",
      },
      {
        question: "Can you come out after the wind storm passes?",
        answer:
          "We take calls 24/7 but actual roof work has to wait until the wind dies down. Going up during 40+ mph gusts isn't safe for our crew or your roof. We'll stage the call and be on your house as soon as it's safe to climb.",
      },
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
    faqs: [
      {
        question: "How much does a roof inspection cost?",
        answer:
          "A standard inspection runs $150 to $300. If you're buying a house and need a written report fast, we can usually turn one around in 48 hours. For existing customers or insurance claim docs, we often fold the inspection into the repair quote at no extra charge.",
      },
      {
        question: "How long does a roof inspection take?",
        answer:
          "About 45 minutes to an hour on most single-family homes. Bigger houses, complex rooflines, or attic access can push it closer to 90 minutes. You don't need to be home, though we'll walk you through the findings in person if you are.",
      },
      {
        question: "Will you actually walk the roof or just look from the ground?",
        answer:
          "We walk it whenever it's safe to do so. Ground and ladder-only inspections miss a lot, especially on the back slopes. If the pitch is too steep to walk safely, we use a drone to get close-up photos of every section.",
      },
      {
        question: "Do I need an inspection if my roof looks fine?",
        answer:
          "If your roof is under 10 years old with no visible issues, probably not. Past 15 years, it's worth a look every couple of years. Hidden flashing failures and early decking rot don't show up from the ground until they're already expensive to fix.",
      },
      {
        question: "Will you try to sell me a new roof after the inspection?",
        answer:
          "No. If your roof has 10 good years left, we'll tell you that. We get more repeat business from being straight with people than from pushing work that isn't needed. The report is the report.",
      },
      {
        question: "Can I use your report for an insurance claim?",
        answer:
          "Yes. We document everything with date-stamped photos and write the report in a format adjusters recognize. If your carrier needs something specific added, let us know and we'll update it.",
      },
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
    faqs: [
      {
        question: "What's the difference between architectural and 3-tab shingles?",
        answer:
          "Architectural shingles are thicker, have a dimensional layered look, and carry 30 to 50 year warranties. 3-tab shingles are flat, thinner, and come with 20 to 25 year warranties. For the Seattle market, we almost always recommend architectural. The extra cost is small and they hold up way better against wind.",
      },
      {
        question: "How long do asphalt shingles actually last in Seattle?",
        answer:
          "A decent architectural shingle installed properly gives you 25 to 30 years here. The catch is moss. North-facing slopes and shaded sections grow moss fast, and moss cuts shingle life in half if you ignore it. Routine cleaning makes a real difference in the PNW.",
      },
      {
        question: "Do impact-resistant shingles make sense in the Puget Sound?",
        answer:
          "Usually not. Class 4 impact-rated shingles are built for hail country, and we don't get much hail here. The one exception is if your insurance offers a discount for Class 4, which some carriers do. Run the math before paying the upcharge.",
      },
      {
        question: "Can you match the existing shingles on my roof?",
        answer:
          "We try, but exact matches on older roofs are tough. Shingle colors shift with UV exposure, and older product lines get discontinued. We'll get as close as possible and tell you honestly if a patch repair will look off compared to a full slope replacement.",
      },
      {
        question: "What color shingle works best for a PNW house?",
        answer:
          "Darker greys, charcoals, and weathered wood tones are popular here and hide moss streaks better than light colors. They also pair well with the grey skies and greenery. Lighter shingles can wash out visually against the PNW backdrop, though they do run a little cooler in summer.",
      },
      {
        question: "Will my warranty transfer if I sell the house?",
        answer:
          "Most manufacturer warranties are transferable one time to the next owner, usually within 60 days of the sale. It's worth keeping the paperwork. A transferable warranty is a real selling point for buyers and can bump your resale value a bit.",
      },
    ],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    shortDesc: "Flat roof repair, maintenance, and membrane systems for commercial buildings up to 40' x 25'.",
    icon: "Building2",
    featured: true,
    image: "/images/flat-roof-work-1.jpg",
    longDesc:
      "At Everpeak Roofing, we have over 10 years of experience working with commercial flat roofing systems. Our team understands the unique demands of flat roofs, including drainage, waterproofing, and long-term durability in varying weather conditions. We specialize in providing reliable repair and maintenance solutions that help extend the life of commercial roofing systems.\n\nAt this time, we are focusing on smaller-scale projects, specifically roofs up to 40' x 25', allowing us to provide more detailed, high-quality workmanship and efficient service for each client.",
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
    faqs: [
      {
        question: "What roofing systems do you install on commercial buildings?",
        answer:
          "TPO and PVC single-ply membranes cover most of what we do. Both work well for flat and low-slope commercial roofs in the PNW. For retrofits on existing membranes, we also do roof coatings, which can add 10 to 15 years to a roof that's structurally sound but showing wear.",
      },
      {
        question: "How long does a commercial roof job take?",
        answer:
          "A small retail building with a 5,000 square foot roof is usually 3 to 5 days. Bigger warehouses and office buildings run a week to a month depending on size and phasing. We work around your business hours when we can, including night and weekend work for tenant-occupied buildings.",
      },
      {
        question: "Can you work without disrupting my tenants?",
        answer:
          "Yes. For occupied buildings, we stage materials to avoid blocking entrances, keep crews off the roof directly above noisy sections during meetings, and coordinate loud work for off-hours. We've done plenty of jobs on medical buildings and daycares where quiet hours were non-negotiable.",
      },
      {
        question: "Do you offer maintenance contracts for commercial roofs?",
        answer:
          "We do. Annual or bi-annual inspections, drain clearing, seam checks, and minor repairs are all part of a standard maintenance agreement. A maintained commercial roof routinely lasts 5 to 10 years longer than one that gets ignored. The math on that is easy.",
      },
      {
        question: "What's the lifespan of a TPO roof in Seattle?",
        answer:
          "A properly installed TPO membrane lasts 20 to 30 years in the PNW climate. The moisture and UV here are both moderate, which is actually easier on TPO than hotter sun-belt climates. Regular inspections catch seam issues before they turn into real leaks.",
      },
      {
        question: "Can you handle roofs with HVAC and skylight penetrations?",
        answer:
          "Yes. Most commercial roofs we work on have dozens of penetrations. Each one needs proper flashing, pitch pans, or a custom boot depending on the system. Penetration details are usually where commercial roofs fail, so we spend extra time there during install and inspection.",
      },
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
    faqs: [
      {
        question: "Do you charge for the initial storm damage inspection?",
        answer:
          "No. The inspection, photos, and initial scope of work are free. If we find real storm damage, we help you file the claim. If we don't, we tell you that and there's no charge for our time.",
      },
      {
        question: "How do I know if I have storm damage worth filing a claim for?",
        answer:
          "Wind damage shows up as lifted, creased, or missing shingles, usually on the slope facing the storm. A missing shingle here or there isn't always claim-worthy, but widespread lift or granule loss often is. We'll walk the roof and tell you honestly whether it's worth filing.",
      },
      {
        question: "Will filing a claim raise my insurance rates?",
        answer:
          "Not always. Storm damage is classified as a catastrophic loss in most policies, which usually doesn't ding your rate the way a liability claim would. That said, every carrier is different. Check with your agent before filing if you're worried about it.",
      },
      {
        question: "What if my claim gets denied?",
        answer:
          "A denial isn't always final. We can file a supplement with additional photos and engineering data if we think the adjuster missed something. Plenty of claims that get initially denied end up approved after a proper second look. If it's genuinely not covered, we'll tell you that too.",
      },
      {
        question: "How long does the insurance process take?",
        answer:
          "From first inspection to check in hand, usually 3 to 6 weeks. The adjuster visit is the bottleneck, and scheduling that depends on how busy your carrier is. After a major wind storm in the Seattle area, it can stretch longer because every carrier gets slammed at once.",
      },
      {
        question: "Do I have to use you for the actual repair work?",
        answer:
          "No. We document and file the claim whether or not you hire us for the repair. Most people end up using us anyway because we're already familiar with the damage, but you're never locked in.",
      },
    ],
  },
  {
    slug: "soft-washing",
    name: "Roof Soft Wash & Moss Removal",
    shortDesc: "Safe, low-pressure roof cleaning that removes moss, algae, and stains without causing damage.",
    icon: "Droplets",
    featured: true,
    image: "/images/roof-washing.jpg",
    longDesc:
      "Your roof is constantly exposed to moisture, debris, and organic growth like moss and algae. Over time, this buildup can damage your shingles and shorten the life of your roof. At Everpeak Roofing, we use a safe, low-pressure soft wash system to remove moss, algae, and stains without causing damage. Our process not only cleans your roof but also helps prevent future growth, protecting your home and your investment.",
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
    faqs: [
      {
        question: "What's the difference between soft washing and pressure washing?",
        answer:
          "Pressure washing blasts your shingles with high-pressure water, which strips protective granules and shortens the life of the roof. Soft washing uses low pressure plus a cleaning solution that actually kills the moss and algae at the root. It's the only method most shingle manufacturers will let you use without voiding the warranty.",
      },
      {
        question: "How much does roof soft washing cost in Seattle?",
        answer:
          "Most single-family roofs run $450 to $1,200. Price depends on square footage, pitch, and how bad the moss situation is. Heavy moss covering a shaded north slope takes more product and labor than a light surface clean.",
      },
      {
        question: "How often should I have my roof cleaned in the PNW?",
        answer:
          "Every 2 to 4 years for most homes. If you've got a lot of tree cover or a steep north-facing slope, closer to every 2 years. Homes in sunnier spots with less shade can sometimes stretch to 5. Our maintenance program folds this in on a regular schedule.",
      },
      {
        question: "Will moss really damage my roof?",
        answer:
          "Yes, and it's the biggest roof killer in the Seattle area. Moss holds moisture against your shingles, lifts them as it grows under the edges, and speeds up granule loss. A clean roof that gets treated every few years will often outlast one that doesn't, by 5 to 10 years.",
      },
      {
        question: "Is soft washing safe for plants and pets?",
        answer:
          "We protect your landscaping, rinse anywhere the solution runs off, and use products that break down fast. Pets and kids should stay inside during the treatment and for an hour after. Once the roof dries, there's no residual issue.",
      },
      {
        question: "Can you soft wash a cedar shake roof?",
        answer:
          "Yes. Cedar shakes actually benefit from soft washing more than shingles do because moss digs into the grain and holds water against the wood. We use a gentler solution on cedar and back off the pressure even further. It extends the life of the shake significantly.",
      },
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
    faqs: [
      {
        question: "What does the maintenance program actually cost?",
        answer:
          "Most single-family plans run $250 to $450 per year, depending on roof size and what's included. That covers the annual inspection, minor on-the-spot fixes like caulking and nail pops, and a written condition report. Bigger roofs or plans with moss treatment cost more.",
      },
      {
        question: "Is a maintenance program actually worth it?",
        answer:
          "For most PNW homes, yes. A roof that gets inspected every year typically lasts 5 to 10 years longer than one that doesn't, which more than pays for the plan. The real value is catching a $200 caulk failure before it turns into a $4,000 deck repair.",
      },
      {
        question: "What's included in a standard visit?",
        answer:
          "We inspect the full roof, check flashings and penetrations, clear debris off the surface, take photos, caulk or reseal any small failures we find, and clear the gutters on the roof line. You get a written report with our findings within a day or two.",
      },
      {
        question: "Do you handle moss treatment as part of the plan?",
        answer:
          "Basic debris clearing is included. Full soft wash treatments are an add-on because the time and product cost is a lot higher. Most homes in heavy moss zones add the soft wash on a 2 to 3 year rotation inside the plan.",
      },
      {
        question: "Can I cancel the plan anytime?",
        answer:
          "Yes. No long-term contract, no cancellation fee. If you decide you'd rather go a-la-carte after the first year, that's fine. We're not going to hold a maintenance plan over your head to keep you locked in.",
      },
      {
        question: "Will being on a plan get me priority if I need emergency work?",
        answer:
          "Yes. Plan customers get bumped to the front of the line when something urgent comes up. If a wind storm takes out your ridge cap, you're not waiting three days behind new calls. That alone is worth it for a lot of our plan members.",
      },
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
