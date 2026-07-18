"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, Search, Phone, ArrowRight, ChevronRight, X } from "lucide-react";
import { cities, regions as REGIONS, regionOf, type City } from "@/lib/cities";
import { trackEvent } from "@/lib/analytics";

const PHONE = "(425) 505-7142";
const PHONE_HREF = "tel:+14255057142";

/* Keyless Google Maps embed. No API key required. */
function mapSrc(query: string, zoom: number): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&hl=en&output=embed`;
}

const OVERVIEW_SRC = mapSrc("Seattle, WA", 8);

export default function ServiceAreaLocator() {
  const [query, setQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState<string>("all");
  const [selected, setSelected] = useState<City | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cities.filter((c) => {
      const inRegion = activeRegion === "all" || regionOf(c.slug) === activeRegion;
      if (!inRegion) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.neighborhoods.some((n) => n.toLowerCase().includes(q))
      );
    });
  }, [query, activeRegion]);

  // Group the filtered results by region, preserving region order
  const grouped = useMemo(() => {
    return REGIONS.map((r) => ({
      ...r,
      cities: filtered.filter((c) => regionOf(c.slug) === r.id),
    })).filter((r) => r.cities.length > 0);
  }, [filtered]);

  const src = selected ? mapSrc(`${selected.name}, WA`, 11) : OVERVIEW_SRC;

  function selectCity(city: City, source: "list" | "map") {
    setSelected(city);
    trackEvent("service_area_select", {
      city: city.name,
      city_slug: city.slug,
      region: regionOf(city.slug),
      tier: city.tier,
      source,
    });
  }

  function handleSearch(value: string) {
    // Fire once when a search session begins (empty -> typed), to avoid per-keystroke noise.
    if (!query && value.trim()) {
      trackEvent("service_area_search", { location: "service_area_locator" });
    }
    setQuery(value);
  }

  function handleRegion(id: string, label: string) {
    setActiveRegion(id);
    trackEvent("service_area_filter", { region: id, region_label: label });
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-8">

        {/* ── Left: search + list ─────────────────────────── */}
        <div className="flex flex-col min-w-0">
          {/* Search */}
          <div className="relative mb-4">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search a city or neighborhood..."
              className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-[#E5DDD3] bg-white text-sm font-medium text-[#2C2C2C] placeholder:text-[#6B7280] focus:outline-none focus:border-[#2D5A47] focus:ring-2 focus:ring-[#2D5A47]/15 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6B7280] hover:text-[#2D5A47] transition-colors"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Region filter chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {[{ id: "all", label: "All Areas" }, ...REGIONS].map((r) => (
              <button
                key={r.id}
                onClick={() => handleRegion(r.id, r.label)}
                className={
                  "px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors border " +
                  (activeRegion === r.id
                    ? "bg-[#2D5A47] border-[#2D5A47] text-white"
                    : "bg-white border-[#E5DDD3] text-[#374151] hover:border-[#2D5A47]/40 hover:text-[#2D5A47]")
                }
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* City list */}
          <div className="rounded-2xl border border-[#E5DDD3] bg-white overflow-hidden">
            <div className="px-5 py-3 border-b border-[#E5DDD3] bg-[#FAF3EB]/60 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A47]">
                {filtered.length} {filtered.length === 1 ? "City" : "Cities"}
              </span>
              <span className="text-xs text-[#6B7280] font-medium">Click to view on map</span>
            </div>

            <div className="max-h-[560px] overflow-y-auto">
              {grouped.length === 0 && (
                <div className="px-5 py-12 text-center">
                  <p className="text-sm text-[#374151] mb-1 font-semibold">No areas match &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-[#6B7280]">Call us at {PHONE}. We likely still cover you.</p>
                </div>
              )}

              {grouped.map((region) => (
                <div key={region.id}>
                  <div className="px-5 pt-4 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                    {region.label}
                  </div>
                  {region.cities.map((city) => {
                    const isActive = selected?.slug === city.slug;
                    return (
                      <button
                        key={city.slug}
                        onClick={() => selectCity(city, "list")}
                        className={
                          "group w-full flex items-center gap-3 px-5 py-3 text-left transition-colors border-l-2 " +
                          (isActive
                            ? "bg-[#2D5A47]/8 border-[#2D5A47]"
                            : "border-transparent hover:bg-[#FAF3EB]")
                        }
                      >
                        <span
                          className={
                            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors " +
                            (isActive ? "bg-[#2D5A47] text-white" : "bg-[#2D5A47]/8 text-[#2D5A47] group-hover:bg-[#2D5A47]/15")
                          }
                        >
                          <MapPin size={15} />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-bold text-sm text-[#1E3D30] truncate">{city.name}</span>
                          <span className="block text-xs text-[#6B7280] truncate">{city.neighborhoods.length} neighborhoods</span>
                        </span>
                        <ChevronRight size={15} className={"shrink-0 transition-colors " + (isActive ? "text-[#2D5A47]" : "text-[#C5B9AE] group-hover:text-[#2D5A47]")} />
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: map + detail card ─────────────────────── */}
        <div className="flex flex-col gap-5 min-w-0">
          <div className="relative rounded-2xl overflow-hidden border border-[#E5DDD3] bg-[#E8EDE9] shadow-[0_8px_32px_rgba(45,90,71,0.10)]">
            <iframe
              key={src}
              title={selected ? `Map of ${selected.name}, WA` : "Everpeak roofing service area map"}
              src={src}
              className="w-full h-[360px] md:h-[480px] lg:h-[600px] block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
            {selected && (
              <button
                onClick={() => {
                  trackEvent("service_area_reset", { from_city: selected.name });
                  setSelected(null);
                }}
                className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm hover:bg-white text-[#1E3D30] text-xs font-bold px-3.5 py-2 rounded-lg shadow-md transition-colors"
              >
                <X size={13} /> Full area
              </button>
            )}
          </div>

          {/* Detail card */}
          <>
            {selected ? (
              <div
                key={selected.slug}
                className="rounded-2xl border border-[#E5DDD3] bg-white p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#D4883E] font-bold uppercase tracking-wider mb-1.5">
                      <MapPin size={13} />
                      {selected.name}, WA
                    </div>
                    <h3 className="font-black text-[#1E3D30] text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      Roofing in {selected.name}
                    </h3>
                    <p className="text-sm text-[#6B7280] mt-1">{selected.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {selected.roofTypes.slice(0, 4).map((rt) => (
                    <span key={rt} className="px-2.5 py-1 bg-[#2D5A47]/8 border border-[#2D5A47]/15 text-[#2D5A47] text-[11px] font-bold rounded-full">
                      {rt}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2">
                  Neighborhoods we serve
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selected.neighborhoods.slice(0, 10).map((n) => (
                    <span key={n} className="px-2.5 py-1 bg-[#FAF3EB] border border-[#E5DDD3] rounded-md text-xs font-semibold text-[#374151]">
                      {n}
                    </span>
                  ))}
                  {selected.neighborhoods.length > 10 && (
                    <span className="px-2.5 py-1 text-xs font-semibold text-[#6B7280]">
                      +{selected.neighborhoods.length - 10} more
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/${selected.slug}`}
                    onClick={() =>
                      trackEvent("service_area_city_click", {
                        city: selected.name,
                        city_slug: selected.slug,
                        region: regionOf(selected.slug),
                        location: "service_area_locator",
                      })
                    }
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2D5A47] hover:bg-[#1E3D30] text-white font-bold text-sm py-3.5 rounded-xl transition-colors"
                  >
                    View {selected.name} roofing
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#2D5A47] text-[#2D5A47] hover:bg-[#2D5A47] hover:text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-colors"
                  >
                    <Phone size={15} />
                    Call
                  </a>
                </div>
              </div>
            ) : (
              <div
                key="overview"
                className="rounded-2xl border border-[#E5DDD3] bg-gradient-to-br from-[#1E3D30] via-[#2D5A47] to-[#1E3D30] p-6 md:p-7 text-white"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8A85E] mb-2">
                  <MapPin size={14} />
                  Greater Puget Sound
                </div>
                <h3 className="font-black text-xl md:text-2xl tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  21 cities, one local crew
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-lg">
                  Pick a city from the list to zoom the map and see the neighborhoods we cover. Within roughly 50 miles of downtown Seattle, we handle roof repair, replacement, and emergency work.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    onClick={() =>
                      trackEvent("cta_click", { cta: "estimate", location: "service_area_locator" })
                    }
                    className="inline-flex items-center justify-center gap-2 bg-[#D4883E] hover:bg-[#B86E2A] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
                  >
                    Get a free estimate
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm hover:text-[#E8A85E] transition-colors"
                  >
                    <Phone size={15} className="text-[#D4883E]" />
                    {PHONE}
                  </a>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
}
