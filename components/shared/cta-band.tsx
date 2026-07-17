"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

type CtaAction = { href: string; label: string };

type CtaBandProps = {
  title: React.ReactNode;
  sub?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  note?: string;
  word?: string;
};

export function CtaBand({ title, sub, primary, secondary, note, word = "mDM" }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-deep">
      <div className="absolute inset-0 bg-[radial-gradient(110%_130%_at_85%_0%,rgba(255,255,255,0.16),transparent_50%)]" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display text-[30vw] font-bold italic leading-none tracking-tighter text-white/[0.07] sm:text-[19vw]"
      >
        {word}
      </span>
      <div className="container-x relative py-24 text-center sm:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        {sub && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{sub}</p>
          </Reveal>
        )}
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={primary.href} variant="light" size="xl">
              {primary.label}
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="outlineLight" size="xl">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
        {note && (
          <Reveal delay={0.26}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              {note}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
