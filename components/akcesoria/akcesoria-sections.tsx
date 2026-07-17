"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { SpeedLines } from "@/components/shared/speed-lines";
import { Button } from "@/components/ui/button";
import { ACCESSORY_GROUPS, CONTACT } from "@/lib/data";

export function AccessoryGroups() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Asortyment"
          title={
            <>
              Wyposażenie <Accent>od kasku po opony</Accent>
            </>
          }
          sub="Wszystko do codziennej jazdy znajdziesz na miejscu. A jeśli czegoś akurat brakuje — zamówimy pod Twój rower."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" step={0.06}>
          {ACCESSORY_GROUPS.map((group) => (
            <StaggerItem key={group.title} className="h-full">
              <div className="group flex h-full flex-col border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
                <div className="flex size-12 items-center justify-center bg-mist text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <group.icon className="size-5" strokeWidth={1.9} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                  {group.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const FEATURED = [
  {
    img: "/images/tyres.jpg",
    alt: "Stos opon rowerowych Schwalbe w sklepie mDM",
    eyebrow: "Opony i dętki",
    title: "Guma na każdą nawierzchnię",
    desc: "Schwalbe, Continental i Kenda — od szybkich opon szosowych po agresywny bieżnik MTB. Wymienimy od ręki w serwisie i podpowiemy właściwe ciśnienie.",
    cta: "Zapytaj o rozmiar",
  },
  {
    img: "/images/parts.jpg",
    alt: "Komponenty rowerowe — kaseta, tarcza hamulcowa i narzędzia",
    eyebrow: "Części zamienne",
    title: "Serce roweru zawsze na stanie",
    desc: "Łańcuchy, kasety, klocki, linki i pancerze mamy na półce. Rzadsze części zamawiamy pod konkretny model — zwykle w kilka dni roboczych.",
    cta: "Zapytaj o część",
  },
];

export function AccessoriesFeatured() {
  return (
    <section className="bg-mist py-16 sm:py-24 lg:py-32">
      <div className="container-x space-y-20 lg:space-y-24">
        {FEATURED.map((row, i) => (
          <div
            key={row.title}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="relative aspect-[4/3] overflow-hidden shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
                <Image
                  src={row.img}
                  alt={row.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
              </div>
            </Reveal>
            <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
              <Reveal>
                <span className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  <SpeedLines className="text-ink" />
                  {row.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {row.title}
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-600">
                  {row.desc}
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-8">
                <Button href={CONTACT.phoneHref} variant="outline" size="md">
                  <Phone className="size-4 text-brand" aria-hidden />
                  {row.cta}
                </Button>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
