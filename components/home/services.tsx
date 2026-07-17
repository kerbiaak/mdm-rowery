"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { SERVICES, SERVICE_EXTRAS } from "@/lib/data";

export function HomeServices() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div>
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
          <Reveal delay={0.15} className="mt-9">
            <Button href="/serwis" variant="outlineLight" size="md">
              Zobacz szczegóły
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Button>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="/images/workshop.jpg"
                alt="Warsztat serwisowy mDM — rower na stojaku i ściana narzędzi"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Stagger className="divide-y divide-white/10 border-y border-white/10" step={0.06}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href="/serwis"
                className="group flex items-center justify-between gap-8 py-7"
              >
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-brand sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
                    {service.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="size-6 shrink-0 -translate-x-1 translate-y-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <p className="py-6 text-sm text-zinc-500">
              Dodatkowo: {SERVICE_EXTRAS.join(" · ").toLowerCase()}.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
