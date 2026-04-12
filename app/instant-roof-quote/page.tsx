import type { Metadata } from "next";
import QuoteForm from "./quote-form";

export const metadata: Metadata = {
  title: "Free Roof Estimate | Instant Quote Request",
  description:
    "Request a free roof estimate from Everpeak Roof. Answer a few quick questions and we'll call to schedule an on-site inspection. Serving Seattle, Bellevue, Tacoma, and 17 other Puget Sound cities.",
  alternates: { canonical: "https://everpeakroof.com/instant-roof-quote" },
};

export default function InstantRoofQuotePage() {
  return <QuoteForm />;
}
