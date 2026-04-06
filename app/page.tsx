import type { Metadata } from "next";
import Hero            from "@/components/home/hero";
import StatsBar        from "@/components/home/stats-bar";
import TrustBadges     from "@/components/home/trust-badges";
import ServicesPreview from "@/components/home/services-preview";
import WhyUs           from "@/components/home/why-us";
import HowItWorks      from "@/components/home/how-it-works";
import ServiceAreas    from "@/components/home/service-areas";
import Testimonials    from "@/components/home/testimonials";
import CtaBanner       from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Everpeak Roof | Seattle Roofing Repair & Replacement",
  description:
    "Licensed roofing contractor serving Seattle, Bellevue, Tacoma, and 17+ Puget Sound cities. Roof repair, replacement, emergency service. Free estimates.",
  alternates: { canonical: "https://everpeakroof.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustBadges />
      <ServicesPreview />
      <WhyUs />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
