import type { Metadata } from "next";
import Hero            from "@/components/home/hero";
import StatsBar        from "@/components/home/stats-bar";
import TrustBadges     from "@/components/home/trust-badges";
import ServicesPreview from "@/components/home/services-preview";
import WhyUs           from "@/components/home/why-us";
import RecentWork      from "@/components/home/recent-work";
import HowItWorks      from "@/components/home/how-it-works";
import FaqSection      from "@/components/home/faq-section";
import ServiceAreas    from "@/components/home/service-areas";
import CtaBanner       from "@/components/home/cta-banner";
import MobileCtaBar    from "@/components/home/mobile-cta-bar";
import JsonLd          from "@/components/shared/json-ld";
import { howToSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Everpeak Roof | Seattle Roofing Repair & Replacement",
  description:
    "Licensed roofing contractor serving Seattle, Bellevue, Tacoma, and 17+ Puget Sound cities. Roof repair, replacement, emergency service. Free estimates.",
  alternates: { canonical: "https://everpeakroof.com" },
};

const FAQ_SCHEMA = faqPageSchema([
  {
    question: "How much does a roof replacement cost in Seattle?",
    answer:
      "Most Seattle roof replacements run between $12,000 and $30,000 depending on roof size, pitch, material, and condition of the decking underneath. We give you a detailed written estimate before any work starts so there are no surprises.",
  },
  {
    question: "Do you help with insurance claims?",
    answer:
      "Yes. We handle storm documentation, work directly with your adjuster, and can file claims on your behalf. We have experience with most major carriers and know what documentation they need.",
  },
  {
    question: "How fast can you respond to an emergency?",
    answer:
      "For active leaks or storm damage, we're available 7 days a week and can usually have someone on-site the same day or next morning. Emergency tarping is available for urgent situations.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "We warranty our workmanship on every job. Materials come with manufacturer warranties that vary by product, typically 25 to 50 years for architectural shingles. We hand over all warranty docs when the job is done.",
  },
  {
    question: "Do you pull permits?",
    answer:
      "Yes, when permits are required by Washington state or local code we handle them as part of the job. We'll let you know upfront if your project requires one.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "We're working on financing options. Call us to discuss payment arrangements for larger projects.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We cover 20 cities across the greater Puget Sound, from Seattle and the Eastside to South Sound. If your city isn't listed, call us. We likely serve your area.",
  },
  {
    question: "Asphalt shingles or metal roof, which is better for Seattle?",
    answer:
      "For most Seattle homes, architectural asphalt shingles are the right choice: lower upfront cost, proven track record in PNW weather, and 30-plus year lifespan. Metal makes sense for specific situations like steep commercial pitches or high-end custom builds where the long-term math works out.",
  },
]);

const HOW_IT_WORKS_SCHEMA = howToSchema(
  "How Everpeak Roof Works",
  "Four steps from first call to finished job. Free inspection, written quote, professional installation, and a final walkthrough with warranty docs.",
  [
    {
      name: "Book a Free Inspection",
      text: "Call or fill out the form. We'll get you on the schedule fast, usually within a day. No commitment, no charge.",
    },
    {
      name: "Get a Written Quote",
      text: "We look at the roof, document what we find, and hand you a detailed written quote. No surprises on the bill.",
    },
    {
      name: "We Do the Work",
      text: "Same crew that quoted it does the job. We clean up each day and keep you in the loop throughout.",
    },
    {
      name: "Walk It With You",
      text: "We walk the finished job together, answer your questions, and hand over your warranty docs before we leave.",
    },
  ]
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={HOW_IT_WORKS_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      <Hero />
      <StatsBar />
      <TrustBadges />
      <ServicesPreview />
      <WhyUs />
      <RecentWork />
      <HowItWorks />
      <FaqSection />
      <ServiceAreas />
      <CtaBanner />
      <MobileCtaBar />
    </>
  );
}
