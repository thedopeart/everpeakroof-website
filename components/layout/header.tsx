"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import UtilityBar from "./utility-bar";

const PHONE = "(206) 555-0180";
const PHONE_HREF = "tel:+12065550180";

const NAV = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Roof Repair",          href: "/services/roof-repair" },
      { label: "Roof Replacement",     href: "/services/roof-replacement" },
      { label: "Emergency Repair",     href: "/services/emergency-roof-repair" },
      { label: "Metal Roofing",        href: "/services/metal-roofing" },
      { label: "Flat Roofing",         href: "/services/flat-roofing" },
      { label: "Roof Inspection",      href: "/services/roof-inspection" },
      { label: "Gutters",              href: "/services/gutter-installation" },
      { label: "Siding",               href: "/services/siding" },
    ],
  },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "About",         href: "/about" },
  { label: "Contact",       href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Utility bar — hidden when scrolled */}
      <div className={cn("transition-all duration-300 overflow-hidden", scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100")}>
        <UtilityBar />
      </div>

      {/* Main nav bar */}
      <div
      className={cn(
        "transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(45,90,71,0.10)] border-b border-[#E5DDD3]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-18 flex items-center justify-between gap-6" style={{ height: "72px" }}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex flex-col leading-none select-none">
            <span
              className={cn(
                "font-black text-xl tracking-tight transition-colors",
                scrolled ? "text-[#1E3D30]" : "text-white"
              )}
            >
              EVERPEAK
            </span>
            <span className="font-semibold text-[0.65rem] tracking-[0.2em] text-[#D4883E] uppercase">
              ROOF
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors",
                    scrolled
                      ? "text-[#2C2C2C] hover:text-[#2D5A47] hover:bg-[#FAF3EB]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#E5DDD3] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 translate-y-1 group-hover:translate-y-0 z-50">
                  <div className="p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#2C2C2C] hover:text-[#2D5A47] hover:bg-[#FAF3EB] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors",
                  scrolled
                    ? "text-[#2C2C2C] hover:text-[#2D5A47] hover:bg-[#FAF3EB]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={PHONE_HREF}
            className={cn(
              "flex items-center gap-1.5 text-sm font-semibold transition-colors",
              scrolled ? "text-[#2D5A47]" : "text-white/90 hover:text-white"
            )}
          >
            <Phone size={14} />
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="bg-[#D4883E] hover:bg-[#B86E2A] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-[0_2px_8px_rgba(212,136,62,0.35)] hover:shadow-[0_4px_16px_rgba(212,136,62,0.45)]"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled ? "text-[#2C2C2C]" : "text-white"
          )}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5DDD3] shadow-lg">
          <div className="px-5 py-4 flex flex-col gap-1">
            {/* Services toggle */}
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-sm font-semibold text-[#2C2C2C] hover:bg-[#FAF3EB] transition-colors"
            >
              Services
              <ChevronDown size={14} className={cn("transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-0.5">
                {NAV[0].children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm text-[#4A5568] hover:text-[#2D5A47] hover:bg-[#FAF3EB] transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
            {NAV.slice(1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-semibold text-[#2C2C2C] hover:bg-[#FAF3EB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-[#E5DDD3] flex flex-col gap-2">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-[#2D5A47] text-[#2D5A47] font-bold text-sm"
              >
                <Phone size={15} />
                {PHONE}
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 rounded-lg bg-[#D4883E] text-white font-bold text-sm"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </header>
  );
}
