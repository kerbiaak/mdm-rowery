"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";

export function HomeServices() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="absolute -right-40 -top-40 size-[480px] rounded-full bg-brand/10 blur-[160px]"
      />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            dark
            eyebrow="Serwis"
            title={
              <>
                Warsztat, któremu <Accent>zaufasz</Accent>
              </>
            }
            sub="Autoryzowany serwis rowerów i jednośladów. Uczciwa wycena przed naprawą, sprawdzone części i terminy, na których można polegać."
          />
          <Reveal delay={0.2}>
            <Button href="/serwis" variant="outlineLight" size="md">
              Zobacz szczegóły
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.08]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/25 transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <service.icon className="size-5" strokeWidth={1.9} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
