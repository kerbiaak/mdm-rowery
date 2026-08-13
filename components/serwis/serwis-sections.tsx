"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { Accordion } from "@/components/ui/accordion";
import { CONTACT, FAQ, PROCESS, SERVICES, SERVICE_EXTRAS } from "@/lib/data";

export function ServiceGrid() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Zakres usług"
          title={
            <>
              Wszystko, czego potrzebuje <Accent>Twój rower</Accent>
            </>
          }
          sub="Od szybkiej wymiany dętki po pełne przygotowanie do sezonu. Jak czegoś nie mamy na stanie, zamówimy i damy znać, kiedy wpadać."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <div className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden border border-black/[0.08] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_64px_-28px_rgba(0,0,0,0.45)] sm:aspect-square sm:p-8">
                <Image
                  src={service.img}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25"
                />
                <service.icon className="relative size-6 text-white" strokeWidth={1.7} aria-hidden />
                <div className="relative">
                  <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-14">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Dodatkowo w warsztacie
          </p>
          <div className="mt-4 grid gap-px border border-black/[0.08] bg-black/[0.08] sm:grid-cols-3">
            {SERVICE_EXTRAS.map((extra) => (
              <div
                key={extra}
                className="flex items-center justify-center bg-white px-6 py-5 text-center text-sm font-semibold text-zinc-700"
              >
                {extra}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceProcess() {
  return (
    <section className="bg-mist py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          center
          eyebrow="Jak pracujemy"
          title={
            <>
              Cztery kroki do <Accent>sprawnego roweru</Accent>
            </>
          }
          sub="Prosty proces, zero niespodzianek. Na każdym etapie wiesz, co dzieje się z Twoim rowerem."
        />
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-black/10 lg:block"
          />
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
            {PROCESS.map((step) => (
              <StaggerItem key={step.n} className="relative text-center">
                <span className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border border-black/[0.08] bg-white font-display text-sm font-bold text-brand shadow-sm">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[26ch] text-sm leading-relaxed text-zinc-600">
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function ServiceFaq() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Częste <Accent>pytania</Accent>
            </>
          }
          sub={`Nie znalazłeś odpowiedzi? Zadzwoń pod ${CONTACT.phoneDisplay} — powiemy wprost, czy i kiedy damy radę pomóc.`}
        />
        <Reveal delay={0.1}>
          <Accordion items={FAQ} />
        </Reveal>
      </div>
    </section>
  );
}
