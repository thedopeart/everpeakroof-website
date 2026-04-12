import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Everpeak Roofing",
  description:
    "Terms of service covering use of the Everpeak Roofing website, estimate disclaimers, warranty information, and governing law for our Seattle roofing services.",
  alternates: { canonical: "https://everpeakroof.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">Legal</p>
          <h1
            className="font-black text-[#2D5A47] leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-[#374151]/70">Effective April 2026</p>
        </div>

        {/* Intro */}
        <div className="text-[#374151] leading-relaxed flex flex-col gap-5 mb-10">
          <p>
            These terms cover how you use the Everpeak Roofing website at everpeakroof.com and what you can expect when you request an estimate or hire us for work. Everpeak Roofing is a DBA of Everpeak LLC, a Washington state roofing contractor serving the greater Seattle area.
          </p>
          <p>
            By using this site, you&apos;re agreeing to the terms below. If you don&apos;t agree with them, please stop using the site.
          </p>
        </div>

        {/* Sections */}
        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Use of the Site</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              You can browse our pages, read our content, and submit a contact form for any lawful purpose. Don&apos;t use the site to spam us, scrape content in bulk, probe for security holes, or impersonate someone else. We reserve the right to block anyone who does.
            </p>
            <p>
              The site is provided as-is. We try to keep it accurate and available, but we can&apos;t guarantee there won&apos;t be occasional downtime, errors, or outdated information.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Estimates and Quotes</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              Any price, estimate, or ballpark figure we give you over the phone, by email, or in a written proposal is non-binding until both sides sign a formal contract. Roof conditions can surprise us once we pull up shingles or open a soffit, and material pricing moves with the market.
            </p>
            <p>
              Our written proposal lays out scope, materials, and pricing clearly. The signed contract is the document that governs the work, not the website, not a text message, and not a conversation in your driveway.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Emergency Services</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              If you have an active leak or storm damage, call us. We try to respond quickly, but we can&apos;t promise a specific arrival window through the site. Submitting a form is not a substitute for calling in an emergency.
            </p>
            <p>
              If your roof is actively failing and water is entering the house, also take reasonable steps to protect your property (buckets, moving furniture, shutting off affected circuits). Emergency response availability depends on weather, crew capacity, and how far you are from our service radius.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Intellectual Property</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              Everything on this site (logo, text, photos, graphics, page layouts) is owned by Everpeak LLC or used with permission. You can&apos;t copy, republish, or resell our content without written permission. Personal use, like saving a page for your own reference or sharing a link with a neighbor, is fine.
            </p>
            <p>
              If you see something on our site you think belongs to you, email us and we&apos;ll review it.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Third-Party Links</h2>
          <p className="text-[#374151] leading-relaxed">
            Occasionally we link to outside resources like manufacturer warranty pages, Washington state licensing lookups, or local weather services. We don&apos;t control those sites and we&apos;re not responsible for their content, accuracy, or privacy practices. Visit them at your own discretion.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Warranty Disclaimer</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              Our workmanship warranty is spelled out in your signed contract and applies only to the scope of work we completed. It&apos;s separate from any manufacturer warranty that comes with your shingles, underlayment, or accessories. Manufacturer warranties are issued by the manufacturer and governed by their terms, not ours.
            </p>
            <p>
              Nothing on this website creates a warranty by itself. Product photos, marketing copy, and general descriptions are for reference. The actual warranty coverage for your job is whatever we put in writing at the time of contract.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Limitation of Liability</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              To the fullest extent allowed by Washington law, Everpeak LLC is not liable for indirect, incidental, or consequential damages tied to your use of this website. That includes things like lost profits, lost data, or lost business opportunities.
            </p>
            <p>
              For work we perform under a signed contract, our liability is governed by the terms of that contract and by our general liability and workers&apos; compensation coverage, which we carry on every job.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Governing Law</h2>
          <p className="text-[#374151] leading-relaxed">
            These terms are governed by the laws of the State of Washington. Any dispute arising out of your use of this website or our services will be handled in the state or federal courts located in King County, Washington, unless we both agree in writing to another venue.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Changes to These Terms</h2>
          <p className="text-[#374151] leading-relaxed">
            We may update these terms from time to time. When we do, the new effective date will appear at the top of this page. If you keep using the site after an update, that counts as accepting the new version.
          </p>
        </section>

        {/* Contact block */}
        <section className="bg-[#2D5A47] rounded-2xl p-8 text-white mb-10">
          <h2 className="font-bold text-xl mb-3">Contact Us</h2>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Questions about these terms or about a project we&apos;re working on together? Get in touch.
          </p>
          <div className="flex flex-col gap-2 text-white/70 text-sm">
            <div><span className="text-white font-semibold">Business:</span> Everpeak LLC (DBA Everpeak Roofing)</div>
            <div><span className="text-white font-semibold">Phone:</span> (425) 505-7142</div>
            <div><span className="text-white font-semibold">Email:</span> info@everpeakroof.com</div>
            <div><span className="text-white font-semibold">Service Area:</span> Greater Seattle, WA</div>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-[#374151]/60 leading-relaxed border-t border-[#E5DDD3] pt-6">
          These terms are a general-purpose operational agreement and aren&apos;t a substitute for legal advice. The terms of any specific roofing project are governed by your signed contract with Everpeak LLC. If you have questions, please contact us directly using the details above.
        </p>
      </div>
    </div>
  );
}
