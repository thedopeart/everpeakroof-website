"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

type TocItem = { id: string; text: string };

// Sticky "On this page" card with active-section highlighting (IntersectionObserver)
// and smooth scroll. Client-only; receives the heading list from the server page.
export default function BlogToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (onScreen[0]) setActive(onScreen[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  function handleClick(e: React.MouseEvent, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  if (items.length < 3) return null;

  return (
    <div className="bg-white rounded-2xl border border-[#E5DDD3] p-5 shadow-[0_1px_4px_rgba(45,90,71,0.05)]">
      <p className="flex items-center gap-2 text-[#D4883E] font-bold text-[11px] uppercase tracking-wider mb-3">
        <List size={14} /> On this page
      </p>
      <nav className="flex flex-col">
        {items.map((it) => {
          const on = active === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => handleClick(e, it.id)}
              className={
                "text-[13px] leading-snug py-1.5 pl-3 border-l-2 transition-all " +
                (on
                  ? "border-[#D4883E] text-[#1E3D30] font-semibold"
                  : "border-[#E5DDD3] text-[#6B7280] hover:text-[#2D5A47] hover:border-[#2D5A47]/40")
              }
            >
              {it.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
