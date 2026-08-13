"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";

export function HomeServices() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24 lg:py-32">
      <Image
        src="/images/workshop-blur.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/75" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
        <div>
          <SectionHeader
            dark
            eyebrow="Serwis"
            title={
              <>
                Warsztat, któremu <Accent>zaufasz</Accent>
              </>
            }
            sub="Naprawiamy rowery od lat. Zanim weźmiemy się do pracy, powiemy wprost, co jest do zrobienia i ile to będzie kosztować."
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
        </div>

        <Stagger
          className="grid border-t border-white/10 md:grid-cols-2 md:gap-x-12"
          step={0.05}
        >
          {SERVICES.map((service) => (
            <StaggerItem key={service.title} className="border-b border-white/10">
              <Link
                href="/serwis"
                className="group flex h-full items-start justify-between gap-6 py-6"
              >
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-brand sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1.5 size-5 shrink-0 -translate-x-1 translate-y-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem className="md:col-span-2">
            <p className="py-5 text-sm text-zinc-500">
              Dodatkowo: dorabianie kluczy, wymiana opon od ręki, centrowanie kół.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
