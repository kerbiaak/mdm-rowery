"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { SpeedLines } from "@/components/shared/speed-lines";
import { CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

const BIKE_CATEGORIES = CATEGORIES.filter((c) => c.slug !== "akcesoria");

export function CategoriesDetail() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Kategorie"
          title={
            <>
              Wybierz swój <Accent>styl jazdy</Accent>
            </>
          }
          sub="Każdy rower przed wydaniem składamy, regulujemy i testujemy. Aktualne modele i ceny poznasz na miejscu, a przez telefon chętnie doradzimy, co mamy na stanie."
        />

        <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-20 lg:mt-20 lg:space-y-28">
          {BIKE_CATEGORIES.map((cat, i) => (
            <article
              key={cat.slug}
              id={cat.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <div className="overflow-hidden border border-black/[0.06] bg-white shadow-[0_25px_60px_-35px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={
                        cat.fit === "contain" ? "object-contain p-10" : "object-cover"
                      }
                    />
                  </div>
                </div>
              </Reveal>

              <div className={cn(i % 2 === 1 && "lg:order-1")}>
                <Reveal>
                  <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {cat.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="mt-3 text-lg leading-relaxed text-zinc-600">{cat.desc}</p>
                </Reveal>
                <Stagger className="mt-6 space-y-3" delay={0.15}>
                  {cat.features.map((feature) => (
                    <StaggerItem key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-brand/10 text-brand">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span className="text-[15px] text-zinc-700">{feature}</span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AccessoriesBanner() {
  return (
    <section className="bg-mist py-14 sm:py-20">
      <div className="container-x">
        <Reveal>
          <Link
            href="/akcesoria"
            className="group relative block overflow-hidden shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]"
          >
            <div className="relative min-h-[300px] sm:aspect-[21/9] sm:min-h-0">
              <Image
                src="/images/accessories.jpg"
                alt="Ściana akcesoriów rowerowych w sklepie mDM: kaski, sakwy i bidony"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-ink/10" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-14">
              <p className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                <SpeedLines className="text-white" />
                Akcesoria i części
              </p>
              <h3 className="mt-4 max-w-md font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Dopakuj swój rower
              </h3>
              <p className="mt-3 hidden max-w-sm leading-relaxed text-zinc-300 sm:block">
                Kaski, oświetlenie, opony, sakwy i części zamienne. Zobacz, co czeka
                na ścianie akcesoriów.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition-colors duration-300 group-hover:text-brand">
                Przejdź do akcesoriów
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

