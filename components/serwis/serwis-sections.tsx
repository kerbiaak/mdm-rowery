"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { Accordion } from "@/components/ui/accordion";
import { CONTACT, FAQ, PROCESS, SERVICES, SERVICE_EXTRAS } from "@/lib/data";

export function ServiceGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Zakres usług"
          title={
            <>
              Wszystko, czego potrzebuje <Accent>Twój rower</Accent>
            </>
          }
          sub="Od szybkiej wymiany dętki po pełne przygotowanie do sezonu. Pracujemy na sprawdzonych częściach i dajemy gwarancję na wykonaną robotę."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <div className="group h-full rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-mist text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <service.icon className="size-5" strokeWidth={1.9} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{service.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-sm font-semibold text-zinc-500">Dodatkowo:</span>
            {SERVICE_EXTRAS.map((extra) => (
              <span
                key={extra}
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-mist px-4 py-2 text-sm font-medium text-zinc-700"
              >
                <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                {extra}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceProcess() {
  return (
    <section className="bg-mist py-24 sm:py-32">
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
    <section className="bg-white py-24 sm:py-32">
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
