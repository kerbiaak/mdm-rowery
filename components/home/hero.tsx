"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, BadgeCheck, ChevronDown, MapPin, Star, Wrench } from "lucide-react";
import { EASE } from "@/components/motion/reveal";
import { SpeedLines } from "@/components/shared/speed-lines";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

export function Hero() {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
  };

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <Image
          src="/images/showroom.jpg"
          alt="Salon rowerowy mDM Rowery — rzędy rowerów w nowoczesnym wnętrzu"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "46% 60%" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/30" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x relative pb-28 pt-36"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-300"
        >
          <SpeedLines className="text-white" />
          Sklep i serwis rowerowy · Pniewy
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Twój sklep rowerowy{" "}
          <span className="italic text-brand">od lat.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
        >
          Od ponad dwóch dekad pomagamy mieszkańcom Pniew i okolic wybrać idealny
          rower — a potem dbamy o niego w naszym autoryzowanym serwisie.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href="/oferta" size="xl">
            Zobacz ofertę
            <ArrowRight
              className="size-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Button>
          <Button href="/serwis" variant="outlineLight" size="xl">
            <Wrench className="size-4.5" aria-hidden />
            Umów serwis
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-14 flex flex-wrap gap-3">
          {[
            { icon: Star, label: "4,3/5 w Google", starred: true },
            { icon: BadgeCheck, label: "Autoryzowany serwis" },
            { icon: MapPin, label: "Pniewy, Wolności 32" },
          ].map(({ icon: Icon, label, starred }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <Icon
                className={
                  starred ? "size-4 fill-amber-400 text-amber-400" : "size-4 text-brand"
                }
                aria-hidden
              />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-white/50"
        >
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em]">
            Przewiń
          </span>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
