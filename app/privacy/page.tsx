import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Everpeak Roofing",
  description:
    "How Everpeak Roofing collects, uses, and protects the information homeowners share through our website, phone calls, and contact forms.",
  alternates: { canonical: "https://everpeakroof.com/privacy" },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#374151]/70">Effective April 2026</p>
        </div>

        {/* Intro */}
        <div className="text-[#374151] leading-relaxed flex flex-col gap-5 mb-10">
          <p>
            This is a plain-English summary of how Everpeak Roofing (a DBA of Everpeak LLC) handles information you share with us. We wrote it so homeowners can actually read it. If anything here is unclear, call us and we&apos;ll walk you through it.
          </p>
          <p>
            We&apos;re a local roofing contractor. The information we collect is the stuff we need to give you an estimate and do the job, nothing more.
          </p>
        </div>

        {/* Sections */}
        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Information We Collect</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              When you fill out a contact form on everpeakroof.com, we collect your name, phone number, email address, property address, and whatever details you add about the project. If you call us, we keep basic call records (your number, date, time, and notes from the conversation).
            </p>
            <p>
              Our site also uses standard analytics to understand how visitors find us. That includes things like pages viewed, browser type, general location at the city level, and referring source. We don&apos;t tie that analytics data back to your name or contact info.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">How We Use It</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              We use the info you give us to respond to your inquiry, schedule an inspection, prepare an estimate, and stay in touch about your project. If you become a customer, we use it to send invoices, warranty paperwork, and follow-ups after the work is done.
            </p>
            <p>
              Analytics help us figure out which pages are useful, which ones aren&apos;t, and how to make the site better for the next homeowner who lands on it.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Who We Share It With</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              We don&apos;t sell your information. We never have, and we&apos;re not going to start.
            </p>
            <p>
              A short list of who we do share it with, and only when it&apos;s necessary:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <span className="font-semibold">Service providers.</span> Email and SMS tools we use to reply to you, scheduling software, and payment processors if you become a customer.
              </li>
              <li>
                <span className="font-semibold">Subcontractors.</span> On rare jobs that need a specialty trade (like chimney masonry or skylight install), we pass along the address and contact info so they can coordinate with you directly.
              </li>
              <li>
                <span className="font-semibold">Legal compliance.</span> If a court order, subpoena, or Washington state regulator requires us to hand something over, we will.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Cookies and Analytics</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              Our site uses a small number of cookies for basic functionality and Google Analytics 4 for visitor stats. GA4 tracks things like page views, session length, and general location without identifying you personally.
            </p>
            <p>
              If you don&apos;t want to be tracked, you can block cookies in your browser settings, install the official Google Analytics opt-out browser add-on, or use a private browsing window. Blocking cookies won&apos;t break the site.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">How Long We Keep It</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              Contact form submissions and call notes stay in our system as long as we&apos;re talking about a potential or active project. If you become a customer, we keep records of the job for at least seven years to cover warranty claims, tax filings, and insurance paperwork.
            </p>
            <p>
              If you asked for a quote and decided not to move forward, we generally clear your info out after about two years unless you tell us sooner.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Your Rights</h2>
          <div className="text-[#374151] leading-relaxed flex flex-col gap-4">
            <p>
              You can ask us what we have on file for you, correct anything that&apos;s wrong, or ask us to delete it. Email <a href="mailto:info@everpeakroof.com" className="text-[#2D5A47] font-semibold underline">info@everpeakroof.com</a> with the request and we&apos;ll handle it within a reasonable window (usually a few business days).
            </p>
            <p>
              If you&apos;re an active customer, we might need to keep some records for warranty or legal reasons even after a deletion request. If that&apos;s the case, we&apos;ll tell you exactly what we&apos;re holding onto and why.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Children&apos;s Privacy</h2>
          <p className="text-[#374151] leading-relaxed">
            Our site isn&apos;t directed at children under 13, and we don&apos;t knowingly collect information from them. If you think a child has submitted info through our site, contact us and we&apos;ll remove it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-bold text-xl text-[#1E3D30] mb-3">Changes to This Policy</h2>
          <p className="text-[#374151] leading-relaxed">
            We may update this page as our business or the law changes. When we do, we&apos;ll update the effective date at the top. If the changes are significant, we&apos;ll post a clear notice on the site for a while.
          </p>
        </section>

        {/* Contact block */}
        <section className="bg-[#2D5A47] rounded-2xl p-8 text-white mb-10">
          <h2 className="font-bold text-xl mb-3">Contact Us</h2>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Questions about this policy, or about what we have on file for you? Reach out.
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
          This policy is a general-purpose summary of our privacy practices and isn&apos;t a substitute for legal advice. If you have specific concerns about how your information is handled, please contact Everpeak directly using the details above.
        </p>
      </div>
    </div>
  );
}
