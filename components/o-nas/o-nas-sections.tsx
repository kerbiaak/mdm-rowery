"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { TIMELINE, VALUES } from "@/lib/data";

export function Story() {
  return (
    <section className="overflow-x-clip bg-white py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Nasza historia"
            title={
              <>
                Rodzinnie, <Accent>od 2003 roku</Accent>
              </>
            }
          />
          <Reveal delay={0.15}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-600">
              <p>
                mDM to firma Michała Gryki — pniewianina, który zamienił pasję do
                jednośladów w codzienną robotę. Zaczynaliśmy od niewielkiego warsztatu
                przy ulicy Wolności; dziś prowadzimy pełny salon z rowerami,
                akcesoriami i autoryzowanym serwisem rowerów oraz skuterów.
              </p>
              <p>
                Przez te lata nauczyliśmy się jednego: klient nie kupuje ramy i dwóch
                kół, tylko spokój. Dlatego każdy rower wydajemy złożony, wyregulowany
                i przetestowany — a po sezonie czekamy na niego w serwisie.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/storefront.jpg"
                alt="Witryna sklepu mDM Rowery przy ulicy Wolności 32 w Pniewach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] sm:left-10">
            <MapPin className="size-5 shrink-0 text-brand" aria-hidden />
            <p className="text-sm font-semibold leading-tight">
              Wolności 32, Pniewy
              <span className="block text-xs font-normal text-zinc-500">
                szukaj szyldu ROWERY na ceglanej elewacji
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ValuesGrid() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          center
          eyebrow="Wartości"
          title={
            <>
              Na czym <Accent>stoimy</Accent>
            </>
          }
          sub="Cztery zasady, które słyszysz w rozmowie i widzisz na fakturze."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <div className="group h-full rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-mist text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <value.icon className="size-5" strokeWidth={1.9} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{value.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
        <SectionHeader
          eyebrow="Droga"
          title={
            <>
              Dwie dekady <Accent>na dwóch kółkach</Accent>
            </>
          }
          sub="Kilka dat, które ukształtowały mDM — od pierwszej naprawy po serwis rowerów elektrycznych."
        />
        <div className="relative border-l-2 border-black/[0.07] pl-8">
          {TIMELINE.map((entry, i) => (
            <Reveal
              key={entry.year}
              delay={i * 0.05}
              className="relative pb-10 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[41px] top-1 flex size-5 items-center justify-center rounded-full border-2 border-brand bg-white"
              >
                <span className="size-1.5 rounded-full bg-brand" />
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">
                {entry.year}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight">
                {entry.title}
              </h3>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-zinc-600">
                {entry.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
