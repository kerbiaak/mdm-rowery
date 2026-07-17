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
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Image
        src="/images/workshop-blur.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/75" />

      <div className="container-x relative grid items-start gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div>
          <SectionHeader
            dark
            eyebrow="Serwis"
            title={
              <>
                Warsztat, któremu <Accent>zaufasz</Accent>
              </>
            }
            sub="Autoryzowany serwis rowerów i jednośladów spalinowych. Zakres prac i wycenę przedstawiamy przed rozpoczęciem naprawy."
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
              Dodatkowo: dorabianie kluczy, serwis skuterów i motorowerów, wymiana opon,
              centrowanie kół.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
