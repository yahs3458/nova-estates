"use client";

import Image from "next/image";
import { useState } from "react";

export const LISTINGS = [
  { name: "Casa Serena", area: "Coral Gables", type: "Villa", price: "$8,950,000", beds: 6, baths: 7, sqft: "7,840", photo: "photo-1613977257592-4871e5fcd7c4" },
  { name: "The Palm Residence", area: "Key Biscayne", type: "Waterfront", price: "$12,400,000", beds: 5, baths: 6, sqft: "6,200", photo: "photo-1777914467433-684a0f2c724b" },
  { name: "Skyline Penthouse 41", area: "Brickell", type: "Penthouse", price: "$6,750,000", beds: 4, baths: 5, sqft: "4,100", photo: "photo-1707484687082-9493754d389f" },
  { name: "Villa Blanca", area: "Pinecrest", type: "Villa", price: "$5,200,000", beds: 5, baths: 5, sqft: "5,600", photo: "photo-1600596542815-ffad4c1539a9" },
  { name: "Harbor House", area: "Coconut Grove", type: "Waterfront", price: "$9,800,000", beds: 6, baths: 6, sqft: "6,900", photo: "photo-1759020623226-73ec7a068b11" },
  { name: "Oceanfront Sky Loft", area: "Miami Beach", type: "Penthouse", price: "$7,300,000", beds: 3, baths: 4, sqft: "3,800", photo: "photo-1776362355123-ca966d36e29c" },
];

const FILTERS = ["All", "Villa", "Waterfront", "Penthouse"];

export default function Listings() {
  const [filter, setFilter] = useState("All");
  const shown = LISTINGS.filter((l) => filter === "All" || l.type === filter);

  return (
    <>
      <div role="group" aria-label="Filter residences" className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-200 ${
              filter === f
                ? "border-ink bg-ink text-paper"
                : "border-rule text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul key={filter} className="grid gap-x-6 gap-y-14 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
        {shown.map((l, i) => (
          <li key={l.name} className="fade group" style={{ animationDelay: `${i * 80}ms` }}>
            <a href="#viewing" className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
                <Image
                  src={`https://images.unsplash.com/${l.photo}?auto=format&fit=crop&w=1000&q=80`}
                  alt={`${l.name}, ${l.area}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-(--ease-out) group-hover:scale-[1.06]"
                />
                <span className="absolute top-4 left-4 bg-paper/90 px-3 py-1 text-xs tracking-[0.14em] uppercase backdrop-blur">
                  {l.type}
                </span>
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 py-3 text-center text-sm text-paper transition-transform duration-500 ease-(--ease-out) group-focus-within:translate-y-0 group-hover:translate-y-0">
                  Book a private viewing
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">{l.name}</h3>
              <div className="mt-1 flex items-baseline justify-between gap-4 border-b border-rule pb-4">
                <p className="text-sm text-muted">
                  {l.area} · {l.beds} bd · {l.baths} ba · {l.sqft} sq ft
                </p>
                <p className="font-display text-xl whitespace-nowrap tabular-nums">{l.price}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
