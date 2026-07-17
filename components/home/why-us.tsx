"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { SpeedLines } from "@/components/shared/speed-lines";
import { Button } from "@/components/ui/button";
import { WHY_US } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="overflow-x-clip bg-white py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Dlaczego mDM"
            title={
              <>
                Kupujesz u ludzi, <Accent>nie w sieciówce</Accent>
              </>
            }
            sub="W mDM obsłuży Cię właściciel, nie przypadkowy sprzedawca. Znamy nasze rowery od śruby po sakwę — i bierzemy za nie odpowiedzialność także po zakupie."
          />
          <Stagger className="mt-11 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {WHY_US.map((item) => (
              <StaggerItem key={item.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mist text-brand">
                  <item.icon className="size-5" strokeWidth={1.9} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15} className="mt-11">
            <Button href="/o-nas" variant="dark">
              Poznaj naszą historię
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative lg:pl-4">
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.4)]">
            <Image
              src="/images/workshop.jpg"
              alt="Warsztat serwisowy mDM Rowery — rower na stojaku serwisowym i ściana narzędzi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-4 bottom-10 hidden w-56 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.35)] sm:block">
            <SpeedLines className="text-ink" />
            <p className="mt-3 font-display text-lg font-bold leading-tight tracking-tight">
              Autoryzowany serwis
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">
              rowerów i jednośladów spalinowych
            </p>
          </div>
          <div className="absolute -right-3 -top-8 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block lg:-right-7">
            <Image
              src="/images/parts.jpg"
              alt="Komponenty rowerowe ułożone na blacie warsztatowym"
              width={200}
              height={200}
              className="size-44 object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
