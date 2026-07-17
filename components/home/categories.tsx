"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CategoryCard } from "@/components/shared/category-card";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/data";

export function Categories() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Oferta"
            title={
              <>
                Rower dla <Accent>każdego</Accent>
              </>
            }
            sub="Od pierwszego roweru dziecka po elektryczne wsparcie na co dzień. Doradzimy, dopasujemy rozmiar i wyregulujemy wszystko przed wyjazdem ze sklepu."
          />
          <Reveal delay={0.2}>
            <Button href="/oferta" variant="outline" size="md">
              Cała oferta
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <StaggerItem key={category.slug} className="h-full">
              <CategoryCard category={category} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
