"use client";

import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { CONTACT, TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Opinie"
            title={
              <>
                Klienci o <Accent>mDM</Accent>
              </>
            }
            sub="Najlepszą reklamą jest rower, który wraca do nas tylko na przegląd — i klient, który wraca z sąsiadem."
          />
          <Reveal delay={0.15}>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-black/[0.06] bg-white p-4 pr-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.25)]"
            >
              <span className="font-display text-4xl font-bold tracking-tight">4,3</span>
              <span className="flex flex-col gap-1">
                <span className="flex gap-0.5" aria-label="Ocena 4,3 na 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden
                      className={cn(
                        "size-3.5 fill-amber-400 text-amber-400",
                        i === 4 && "opacity-35"
                      )}
                    />
                  ))}
                </span>
                <span className="text-xs text-zinc-500 transition-colors group-hover:text-zinc-700">
                  15 opinii w Google →
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
                <div className="flex gap-1" aria-label={`Ocena ${t.stars} na 5`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} aria-hidden className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-zinc-700">
                  „{t.text}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-mist font-display text-base font-bold text-ink">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-zinc-500">Opinia z Google</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
