// Schema.org helpers for Everpeak Roof.
// Each function returns a plain object meant to be fed into a
// <script type="application/ld+json"> tag via the JsonLd component.

const SITE_URL = "https://everpeakroof.com";
const LEGAL_NAME = "Everpeak LLC";
const BRAND_NAME = "Everpeak Roofing";
const PHONE = "+1-425-505-7142";
const PRICE_RANGE = "$$";
const LOGO_URL = `${SITE_URL}/images/logo.png`;

export const SERVICE_CITIES: string[] = [
  "Seattle",
  "Bellevue",
  "Tacoma",
  "Kent",
  "Kirkland",
  "Everett",
  "Renton",
  "Redmond",
  "Lynnwood",
  "Bothell",
  "Sammamish",
  "Issaquah",
  "Federal Way",
  "Auburn",
  "Shoreline",
  "Edmonds",
  "Woodinville",
  "Puyallup",
  "Newcastle",
  "Renton Highlands",
  "Medina",
];

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "18:00",
  },
];

const areaServedList = (cities: string[]) =>
  cities.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "State",
      name: "Washington",
    },
  }));

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/#business`,
    name: BRAND_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    telephone: PHONE,
    priceRange: PRICE_RANGE,
    image: LOGO_URL,
    logo: LOGO_URL,
    description:
      "Licensed roofing contractor serving Seattle and the greater Puget Sound. Roof repair, replacement, inspection, and emergency service.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "WA",
      addressCountry: "US",
      addressLocality: "Seattle",
    },
    areaServed: areaServedList(SERVICE_CITIES),
    openingHoursSpecification: OPENING_HOURS,
    identifier: "Washington State Contractor License on file",
    sameAs: [] as string[],
  };
}

export function cityServiceSchema(cityName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/${cityName.toLowerCase().replace(/\s+/g, "-")}/#business`,
    name: `${BRAND_NAME} - ${cityName}`,
    legalName: LEGAL_NAME,
    url: `${SITE_URL}/${cityName.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: PHONE,
    priceRange: PRICE_RANGE,
    image: LOGO_URL,
    description: `Roof repair, replacement, and inspection in ${cityName}, WA. Licensed and insured.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "WA",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: cityName,
        containedInPlace: { "@type": "State", name: "Washington" },
      },
    ],
    openingHoursSpecification: OPENING_HOURS,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function serviceSchema(svc: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: svc.description,
    serviceType: svc.name,
    url: `${SITE_URL}/services/${svc.slug}`,
    provider: {
      "@type": "RoofingContractor",
      "@id": `${SITE_URL}/#business`,
      name: BRAND_NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: areaServedList(SERVICE_CITIES),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    telephone: PHONE,
    sameAs: [] as string[],
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    ...(post.modifiedAt ? { dateModified: post.modifiedAt } : {}),
    ...(post.imageUrl ? { image: post.imageUrl } : {}),
    author: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  };
}

export function aggregateRatingSchema(
  rating: number,
  reviewCount: number,
  reviews: { author: string; rating: number; body: string; date: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/#business`,
    name: BRAND_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.body,
      datePublished: r.date,
    })),
  };
}

export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function itemListSchema(
  name: string,
  url: string,
  items: { name: string; url: string; position: number }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: name,
    url: url,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };
}

export function softwareApplicationSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    url: url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
  };
}
