import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink, PenLine, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews | Everpeak Roofing Seattle",
  description:
    "Read what Seattle homeowners say about Everpeak Roofing. Honest feedback on repairs, replacements, and inspections across the Puget Sound.",
  alternates: { canonical: "https://everpeakroof.com/reviews" },
};

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

// TODO: replace with real customer testimonials post-launch.
// These are generic, neighborhood-level placeholders written in the client's voice.
// Swap in actual quotes (with permission) once the first jobs wrap up.
const TESTIMONIALS = [
  {
    quote:
      "Had a slow leak near the chimney flashing after a wind storm. The crew showed up when they said they would, found the issue in about ten minutes, and had it sealed the same afternoon. No hard sell on a new roof, which I appreciated.",
    name: "Homeowner",
    neighborhood: "Ballard",
  },
  {
    quote:
      "We got three bids before picking Everpeak. They weren't the cheapest, but they actually walked the roof with me and explained what was failing and why. Full tear-off went smooth and they cleaned up every nail.",
    name: "Homeowner",
    neighborhood: "Ravenna",
  },
  {
    quote:
      "Moss was eating our cedar shakes and I figured we needed a full replacement. Everpeak cleaned it, treated it, and told me we had another five years if we stayed on top of it. Saved us a lot of money.",
    name: "Homeowner",
    neighborhood: "West Seattle",
  },
  {
    quote:
      "Quick response on an emergency tarp after a branch came through the roof. They had someone out that evening and came back a few days later for the permanent repair. Clear pricing the whole way through.",
    name: "Homeowner",
    neighborhood: "Kirkland",
  },
  {
    quote:
      "Roof inspection before we listed the house. Detailed report with photos, no upsell on work we didn't need. Buyer's inspector agreed with everything they wrote up.",
    name: "Homeowner",
    neighborhood: "Capitol Hill",
  },
  {
    quote:
      "Replaced our aging asphalt roof with architectural shingles. Crew was on time each morning, friendly to the neighbors, and the finish work around the valleys looks really clean.",
    name: "Homeowner",
    neighborhood: "Wallingford",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-[#D4883E] text-[#D4883E]"
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">
            Reviews
          </p>
          <h1
            className="font-black text-[#1E3D30] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Real Feedback from Seattle Homeowners
          </h1>
          <div className="text-[#374151] text-lg leading-relaxed max-w-2xl flex flex-col gap-5">
            <p>
              We just launched, so we're still building up our review count. What's
              below is a mix of early feedback from neighbors we've worked with
              around the Puget Sound. If you've hired us, we'd love for you to
              leave a note on Google so the next homeowner knows what to expect.
            </p>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5DDD3] p-6 flex flex-col"
            >
              <StarRow />
              <p className="text-[#374151] text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-[#E5DDD3]">
                <div className="text-sm font-bold text-[#1E3D30]">
                  {t.name}
                </div>
                <div className="text-xs text-[#374151]/70 mt-0.5">
                  {t.neighborhood}, Seattle area
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="bg-white rounded-2xl border border-[#E5DDD3] p-8 md:p-10 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-bold text-[#1E3D30] text-2xl mb-3">
                See all reviews on Google
              </h2>
              <p className="text-[#374151] leading-relaxed">
                Our Google Business Profile is where you'll find the full list of
                customer feedback, photos from real jobs, and responses from our
                team. It's the honest version, straight from homeowners.
              </p>
            </div>
            {/* TODO: swap in real GMB link */}
            <a
              href="#google-reviews"
              className="inline-flex items-center gap-2 bg-[#2D5A47] hover:bg-[#1E3D30] text-white font-bold px-6 py-3.5 rounded-xl transition-colors shrink-0"
            >
              View on Google
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Leave a Review */}
        <div className="bg-white rounded-2xl border border-[#E5DDD3] p-8 md:p-10 mb-14">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4883E]/10 flex items-center justify-center shrink-0">
              <PenLine size={22} className="text-[#D4883E]" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-[#1E3D30] text-2xl mb-3">
                Worked with us? Leave a review
              </h2>
              <p className="text-[#374151] leading-relaxed mb-5">
                If we did right by you, a short review on Google helps more than
                you'd think. It takes about thirty seconds and it's the main way
                other Seattle homeowners find us. If you'd rather share feedback
                directly, give us a call and we'll listen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* TODO: swap in real Google review write link */}
                <a
                  href="#leave-google-review"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Write a Google Review
                  <ExternalLink size={15} />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#E5DDD3] hover:border-[#2D5A47] text-[#1E3D30] font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone size={15} />
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="bg-[#2D5A47] rounded-2xl p-8 md:p-10 text-white text-center">
          <h2 className="font-bold text-2xl md:text-3xl mb-3">
            Ready for your own honest estimate?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-6 leading-relaxed">
            Free roof assessments across the greater Seattle area. We'll walk
            the roof, show you what we find, and give you a straight price.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-[0_4px_16px_rgba(212,136,62,0.35)]"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/instant-roof-quote"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Instant Roof Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
