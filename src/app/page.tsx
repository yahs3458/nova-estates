import Image from "next/image";
import Listings from "./Listings";
import Neighbourhoods from "./Neighbourhoods";
import Viewing from "./Viewing";

const photo = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const FEATURES = [
  ["Bay frontage", "70 ft, with a private dock"],
  ["Interior", "6 bedrooms · 7.5 baths · 8,200 sq ft"],
  ["Outdoors", "Infinity pool, summer kitchen, rooftop terrace"],
  ["Built", "2023, by a Bay Harbor architecture studio"],
];

const h2 = "font-display text-[clamp(2.4rem,3.5vw+1rem,4rem)] leading-[1.02] font-medium tracking-[-0.01em]";
const kicker = "text-xs tracking-[0.2em] text-muted uppercase";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* N10 scroll-morph header: clear over the hero, solid once you scroll */}
      <header className="hdr fixed inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-10">
          <a href="#" className="flex items-center gap-2.5 whitespace-nowrap">
            <Mark className="size-5" />
            <span className="font-display text-2xl font-semibold tracking-[0.18em]">NOVA</span>
            <span className="hidden text-[0.65rem] tracking-[0.3em] uppercase opacity-80 sm:inline">Estates</span>
          </a>
          <div className="hidden items-center gap-8 text-sm lg:flex">
            <a href="#residences" className="opacity-80 transition-opacity hover:opacity-100">Residences</a>
            <a href="#featured" className="opacity-80 transition-opacity hover:opacity-100">Featured</a>
            <a href="#neighbourhoods" className="opacity-80 transition-opacity hover:opacity-100">Neighbourhoods</a>
            <a href="#advisor" className="opacity-80 transition-opacity hover:opacity-100">Advisor</a>
          </div>
          <a
            href="#viewing"
            className="border border-current px-4 py-2 text-xs tracking-[0.14em] whitespace-nowrap uppercase transition-opacity duration-200 hover:opacity-70 sm:px-5 sm:py-2.5"
          >
            Book a viewing
          </a>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-[94svh] items-end overflow-hidden text-on-photo">
          <Image
            src={photo("photo-1613977257363-707ba9348227", 2400)}
            alt="A white modern villa with a pool and outdoor lounge"
            fill
            priority
            sizes="100vw"
            className="kenburns object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-scrim/90 via-scrim/50 to-scrim/45" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pt-36 pb-16 sm:px-10 sm:pb-20">
            <p className="rise text-xs tracking-[0.24em] uppercase opacity-85">Waterfront &amp; luxury homes · Miami</p>
            <h1
              className="rise mt-5 max-w-4xl font-display text-[clamp(3.2rem,7vw+0.5rem,6rem)] leading-[0.95] font-medium tracking-[-0.015em] [overflow-wrap:anywhere]"
              style={{ animationDelay: "150ms" }}
            >
              Live where the light lands.
            </h1>
            <div className="rise mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between" style={{ animationDelay: "300ms" }}>
              <div>
                <p className="max-w-md text-lg leading-relaxed opacity-90">
                  A boutique brokerage for Miami&rsquo;s waterfront villas, penthouses and estates —
                  shown privately, one party at a time.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="#residences"
                    className="bg-on-photo px-8 py-4 text-sm tracking-[0.14em] whitespace-nowrap text-ink uppercase transition-colors duration-300 hover:bg-paper-2"
                  >
                    Browse residences
                  </a>
                  <a href="#viewing" className="whitespace-nowrap underline decoration-1 underline-offset-[6px] hover:decoration-2">
                    Book a private viewing
                  </a>
                </div>
              </div>
              <p className="text-sm opacity-80 md:text-right">
                Casa del Mar · Key Biscayne
                <br />
                <span className="font-display text-2xl opacity-100">$14,200,000</span>
              </p>
            </div>
          </div>
        </section>

        <section id="residences" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-10 md:py-32">
          <div className="reveal mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className={`max-w-xl ${h2}`}>Residences, curated.</h2>
            <p className="max-w-sm text-muted">
              Six homes we&rsquo;re showing this season. Every one walked, measured and photographed
              by our team.
            </p>
          </div>
          <Listings />
        </section>

        {/* Split Studio: sticky story on one side, unveiling photographs on the other */}
        <section id="featured" className="scroll-mt-24 bg-paper-2">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-10 md:py-32 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <p className={kicker}>Featured residence</p>
              <h2 className={`mt-4 ${h2}`}>Casa del Mar</h2>
              <p className="mt-2 text-muted">Key Biscayne · $14,200,000</p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
                Glass on three sides and the bay on the fourth. Mornings start on the dock, evenings
                end on the roof — and the city is a ten-minute drive across the causeway.
              </p>
              <dl className="mt-10 border-t border-rule">
                {FEATURES.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 border-b border-rule py-4 text-sm">
                    <dt className="text-muted">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#viewing"
                className="mt-10 inline-block bg-ink px-8 py-4 text-sm tracking-[0.14em] whitespace-nowrap text-paper uppercase transition-colors duration-300 hover:bg-accent"
              >
                Request a private tour
              </a>
            </div>
            <div className="grid gap-5">
              <figure className="unveil relative aspect-[4/3] overflow-hidden">
                <Image src={photo("photo-1582268611958-ebfd161ef9cf", 1600)} alt="Casa del Mar from the pool deck" fill sizes="(min-width: 1024px) 58vw, 100vw" className="drift object-cover" />
              </figure>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-5">
                <figure className="unveil relative aspect-[3/4] overflow-hidden">
                  <Image src={photo("photo-1598928506311-c55ded91a20c", 900)} alt="Living room with a marble fireplace" fill sizes="(min-width: 1024px) 29vw, 50vw" className="drift object-cover" />
                </figure>
                <figure className="unveil relative aspect-[3/4] overflow-hidden">
                  <Image src={photo("photo-1638886043487-72d203fa66b6", 900)} alt="Kitchen with a long island and bar stools" fill sizes="(min-width: 1024px) 29vw, 50vw" className="drift object-cover" />
                </figure>
              </div>
              <figure className="unveil relative aspect-[16/9] overflow-hidden">
                <Image src={photo("photo-1757924461488-ef9ad0670978", 1600)} alt="Lounge with floor-to-ceiling windows" fill sizes="(min-width: 1024px) 58vw, 100vw" className="drift object-cover" />
              </figure>
            </div>
          </div>
        </section>

        <section id="neighbourhoods" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-10 md:py-32">
          <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className={`max-w-xl ${h2}`}>Know the neighbourhood first.</h2>
            <p className="max-w-sm text-muted">Five corners of Miami we know street by street.</p>
          </div>
          <div className="mt-10">
            <Neighbourhoods />
          </div>
        </section>

        <section id="advisor" className="scroll-mt-24 border-t border-rule">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-20 md:py-32">
            <figure className="unveil relative aspect-[4/5] overflow-hidden">
              <Image src={photo("photo-1780733064206-4f200e41daa8", 1000)} alt="Elena Ruiz holding a set of house keys" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </figure>
            <div className="reveal">
              <p className={kicker}>Your advisor</p>
              <blockquote className="mt-6 font-display text-[clamp(2rem,2.5vw+1rem,3rem)] leading-[1.12]">
                &ldquo;I don&rsquo;t sell square footage. I find the house you&rsquo;ll want to wake up
                in for the next twenty years.&rdquo;
              </blockquote>
              <p className="mt-8 font-medium">Elena Ruiz</p>
              <p className="text-muted">Founder &amp; Principal Broker, NOVA Estates</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <a href="tel:+13055550188" className="underline decoration-1 underline-offset-4 hover:text-accent">(305) 555-0188</a>
                <a href="#viewing" className="underline decoration-1 underline-offset-4 hover:text-accent">Book time with Elena</a>
              </div>
            </div>
          </div>
        </section>

        <section id="viewing" className="scroll-mt-24 bg-paper-2">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-10 md:py-32 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <div className="reveal">
              <h2 className={h2}>Book a private viewing.</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Tell us which home — or what you&rsquo;re dreaming of — and an advisor will arrange a
                private tour at a time that suits you.
              </p>
            </div>
            <div className="reveal">
              <Viewing />
            </div>
          </div>
        </section>
      </main>

      {/* Ft1 mast-headed footer */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 sm:px-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-4 font-display text-[clamp(3.5rem,9vw,7rem)] leading-none font-semibold tracking-[0.12em]">
              <Mark className="size-[0.5em]" />
              NOVA
            </p>
            <p className="mt-4 text-paper/70">Estates · 1200 Brickell Bay Drive, Miami, FL</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-paper/70 md:items-end">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-paper">Instagram</a>
            <p>Concept site — NOVA Estates is a fictional brokerage. Photos via Unsplash.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
