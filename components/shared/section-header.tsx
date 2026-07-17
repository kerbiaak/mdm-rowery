"use client";

import { Reveal } from "@/components/motion/reveal";
import { SpeedLines } from "@/components/shared/speed-lines";
import { cn } from "@/lib/utils";

export function Accent({ children }: { children: React.ReactNode }) {
  return <em className="font-display italic text-brand">{children}</em>;
}

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  sub,
  dark,
  center,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em]",
            dark ? "text-zinc-400" : "text-zinc-500"
          )}
        >
          <SpeedLines className={dark ? "text-white" : "text-ink"} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              dark ? "text-zinc-400" : "text-zinc-600"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
