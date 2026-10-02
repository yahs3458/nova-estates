"use client";

import Image from "next/image";
import { useRef } from "react";

const PLACES = [
  { name: "Miami Beach", line: "Oceanfront towers and Art Deco calm", photo: "photo-1589083130544-0d6a2926e519" },
  { name: "Key Biscayne", line: "Island quiet, ten minutes from downtown", photo: "photo-1530071291164-537d481750f4" },
  { name: "Brickell", line: "Skyline penthouses above the bay", photo: "photo-1558951387-a66e89fbf8df" },
  { name: "Coconut Grove", line: "Banyan-shaded streets and marinas", photo: "photo-1718754589823-0253af99408f" },
  { name: "Coral Gables", line: "Mediterranean estates on wide lots", photo: "photo-1580587771525-78b9dba3b914" },
];

export default function Neighbourhoods() {
  const rail = useRef<HTMLUListElement>(null);
  const move = (dir: number) => rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <div>
      <div className="mb-8 flex justify-end gap-3">
        {[
          [-1, "Previous neighbourhoods", "←"],
          [1, "Next neighbourhoods", "→"],
        ].map(([dir, aria, glyph]) => (
          <button
            key={aria}
            onClick={() => move(dir as number)}
            aria-label={aria as string}
            className="grid size-12 place-items-center rounded-full border border-rule text-lg transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
          >
            {glyph}
          </button>
        ))}
      </div>
      <ul ref={rail} className="rail flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2">
        {PLACES.map((p) => (
          <li key={p.name} className="group relative w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={`https://images.unsplash.com/${p.photo}?auto=format&fit=crop&w=900&q=80`}
                alt={`${p.name}, Miami`}
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
                className="object-cover transition-transform duration-[1200ms] ease-(--ease-out) group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-scrim/80 via-scrim/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-on-photo">
                <h3 className="font-display text-3xl">{p.name}</h3>
                <p className="mt-1 text-sm text-on-photo/85">{p.line}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
