import type { Metadata } from "next";
import Hero            from "@/components/home/hero";
import StatsBar        from "@/components/home/stats-bar";
import TrustBadges     from "@/components/home/trust-badges";
import ServicesPreview from "@/components/home/services-preview";
import WhyUs           from "@/components/home/why-us";
import HowItWorks      from "@/components/home/how-it-works";
import ServiceAreas    from "@/components/home/service-areas";
import CtaBanner       from "@/components/home/cta-banner";
import JsonLd          from "@/components/shared/json-ld";
import { howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Everpeak Roof | Seattle Roofing Repair & Replacement",
  description:
    "Licensed roofing contractor serving Seattle, Bellevue, Tacoma, and 17+ Puget Sound cities. Roof repair, replacement, emergency service. Free estimates.",
  alternates: { canonical: "https://everpeakroof.com" },
};

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
      <Hero />
      <StatsBar />
      <TrustBadges />
      <ServicesPreview />
      <WhyUs />
      <HowItWorks />
      <ServiceAreas />
      <CtaBanner />
    </>
  );
}
