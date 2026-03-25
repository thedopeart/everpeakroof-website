export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string; // lucide icon name
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortDesc: "Leak fixes, storm damage, flashing, shingle replacement. Fast turnaround.",
    icon: "Wrench",
    featured: true,
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortDesc: "Full tear-off and replacement for shingle, metal, flat, and cedar shake roofs.",
    icon: "Home",
    featured: true,
  },
  {
    slug: "emergency-roof-repair",
    name: "Emergency Repair",
    shortDesc: "24-hour response for active leaks, storm damage, and fallen trees.",
    icon: "Zap",
    featured: true,
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    shortDesc: "Standing seam metal, corrugated panels, and metal shingles. 40–70 year lifespan.",
    icon: "Shield",
    featured: true,
  },
  {
    slug: "flat-roofing",
    name: "Flat Roofing",
    shortDesc: "TPO, EPDM, and modified bitumen systems for residential and commercial buildings.",
    icon: "Layers",
    featured: true,
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    shortDesc: "Full condition reports for homeowners, buyers, and insurance documentation.",
    icon: "Search",
    featured: true,
  },
  {
    slug: "gutter-installation",
    name: "Gutters",
    shortDesc: "Seamless aluminum gutters, gutter guards, downspouts, and repairs.",
    icon: "Droplets",
    featured: false,
  },
  {
    slug: "siding",
    name: "Siding",
    shortDesc: "Vinyl, fiber cement, and full-house re-siding installation and repair.",
    icon: "Square",
    featured: false,
  },
  {
    slug: "shingle-installation",
    name: "Shingle Installation",
    shortDesc: "Architectural, 3-tab, designer, and impact-resistant shingles.",
    icon: "Grid3x3",
    featured: false,
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    shortDesc: "TPO, PVC, metal panel systems, and commercial maintenance contracts.",
    icon: "Building2",
    featured: false,
  },
  {
    slug: "insurance-restoration",
    name: "Insurance Restoration",
    shortDesc: "Full claims assistance from storm inspection through payout.",
    icon: "FileCheck",
    featured: false,
  },
  {
    slug: "maintenance-program",
    name: "Maintenance Program",
    shortDesc: "Annual maintenance plans to extend your roof's life and prevent costly repairs.",
    icon: "CalendarCheck",
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);
