"use client";

import { CountUp } from "@/components/motion/count-up";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-18 text-white sm:py-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]"
      />
      <div className="container-x relative">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4" step={0.1}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="relative border-l border-white/10 pl-6">
              <span aria-hidden className="absolute -left-px top-1 h-9 w-px bg-brand" />
              <div className="font-display text-5xl font-bold tracking-tight tabular-nums sm:text-6xl">
                <CountUp value={stat.value} decimals={stat.decimals ?? 0} />
                {stat.suffix && <span className="text-brand">{stat.suffix}</span>}
              </div>
              <p className="mt-3 max-w-[16ch] text-sm leading-snug text-zinc-400">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
