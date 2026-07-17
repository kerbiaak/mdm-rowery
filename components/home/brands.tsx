"use client";

import { Reveal } from "@/components/motion/reveal";
import { BRANDS } from "@/lib/data";

export function Brands() {
  return (
    <section className="overflow-hidden border-y border-black/5 bg-mist py-14 sm:py-16">
      <Reveal className="container-x">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Marki, które znajdziesz w naszym salonie
        </p>
      </Reveal>
      <div className="marquee marquee-mask mt-9">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              aria-hidden={i >= BRANDS.length || undefined}
              className="whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight text-ink/20 transition-colors duration-300 hover:text-ink/60 sm:text-3xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
