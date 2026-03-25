export interface City {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
}

export const cities: City[] = [
  // Tier 1 — highest volume
  { name: "Seattle",      slug: "seattle",       tier: 1 },
  { name: "Bellevue",     slug: "bellevue",      tier: 1 },
  { name: "Tacoma",       slug: "tacoma",        tier: 1 },
  { name: "Kent",         slug: "kent",          tier: 1 },
  // Tier 2
  { name: "Kirkland",     slug: "kirkland",      tier: 2 },
  { name: "Everett",      slug: "everett",       tier: 2 },
  { name: "Renton",       slug: "renton",        tier: 2 },
  { name: "Redmond",      slug: "redmond",       tier: 2 },
  // Tier 3
  { name: "Lynnwood",     slug: "lynnwood",      tier: 3 },
  { name: "Bothell",      slug: "bothell",       tier: 3 },
  { name: "Sammamish",    slug: "sammamish",     tier: 3 },
  { name: "Issaquah",     slug: "issaquah",      tier: 3 },
  { name: "Federal Way",  slug: "federal-way",   tier: 3 },
  { name: "Auburn",       slug: "auburn",        tier: 3 },
  { name: "Shoreline",    slug: "shoreline",     tier: 3 },
  { name: "Edmonds",      slug: "edmonds",       tier: 3 },
  { name: "Woodinville",  slug: "woodinville",   tier: 3 },
  { name: "Puyallup",     slug: "puyallup",      tier: 3 },
];

export const tier1Cities = cities.filter((c) => c.tier === 1);
export const tier2Cities = cities.filter((c) => c.tier === 2);
export const tier3Cities = cities.filter((c) => c.tier === 3);
