"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion/reveal";
import { SpeedLines } from "@/components/shared/speed-lines";

type PageHeroProps = {
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
};

export function PageHero({
  image,
  imageAlt = "",
  imagePosition,
  eyebrow,
  title,
  lead,
}: PageHeroProps) {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-ink pb-14 pt-32 sm:pb-16">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition ?? "center" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      <div className="container-x relative">
        <motion.span
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-300"
        >
          <SpeedLines className="text-white" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: EASE }}
          className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300"
          >
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  );
}
