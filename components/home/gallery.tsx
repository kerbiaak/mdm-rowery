"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { GALLERY } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          center
          eyebrow="Nasze miejsce"
          title={
            <>
              Zajrzyj do <Accent>środka</Accent>
            </>
          }
          sub="Salon, warsztat i ściana akcesoriów — wszystko pod jednym dachem przy ulicy Wolności."
        />
        <Stagger
          className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[225px]"
          step={0.07}
        >
          {GALLERY.map((item) => (
            <StaggerItem key={item.img} className={cn("h-full", item.span)}>
              <figure className="group relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.img}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                />
                <figcaption className="absolute bottom-4 left-5 text-sm font-semibold text-white drop-shadow-sm transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
