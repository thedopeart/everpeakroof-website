import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, Award, Clock } from "lucide-react";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";
const EMAIL = "info@everpeakroof.com";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1E3D30] text-white">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2.5 text-sm text-white/70">
              <Shield size={16} className="text-[#D4883E] shrink-0" />
              Licensed &amp; Insured in Washington State
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/70">
              <Award size={16} className="text-[#D4883E] shrink-0" />
              Free Estimates, No Obligation
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/70">
              <Clock size={16} className="text-[#D4883E] shrink-0" />
              7 Days a Week
            </div>
          </div>
          <a
            href={PHONE_HREF}
            className="text-lg font-bold text-[#D4883E] hover:text-[#E8A85E] transition-colors"
          >
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <Image
              src="/images/logo/everpeak-roofing-white.png"
              alt="Everpeak Roof"
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-5">
            Seattle metro roofing. Repairs, replacements, inspections, and emergency work across 21 cities in the Puget Sound.
          </p>
          <div className="flex flex-col gap-2.5">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
              <Phone size={14} className="text-[#D4883E]" />
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
              <Mail size={14} className="text-[#D4883E]" />
              {EMAIL}
            </a>
            <div className="flex items-start gap-2 text-sm font-semibold text-white/80">
              <MapPin size={14} className="text-[#D4883E] mt-0.5 shrink-0" />
              Greater Seattle, WA
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Services</h3>
          <ul className="flex flex-col gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
            <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
          </h3>
          <div className="mb-2">
            <Link
              href="/service-areas"
              className="text-sm font-semibold text-[#E8A85E] hover:text-white transition-colors"
            >
              View area map
            </Link>
          </div>
          {/* All 21 city pages get a crawlable footer link; two columns keeps it compact */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/about",                 label: "About Us" },
              { href: "/reviews",               label: "Reviews" },
              { href: "/contact",               label: "Contact" },
              { href: "/tools/roof-cost-estimator", label: "Cost Estimator" },
              { href: "/tools/roof-pitch-calculator", label: "Pitch Calculator" },
              { href: "/blog",                  label: "Roofing Blog" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-wrap gap-3 items-center justify-between text-xs font-medium text-white/65">
          <span>© {year} Everpeak LLC. All rights reserved. Washington State Contractor License #EVERPRL743KE.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
