"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CategoryCard } from "@/components/shared/category-card";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/data";

export function Categories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 20 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowClass =
    "flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-25";

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
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
            <div className="flex items-center gap-4">
              <Button href="/oferta" variant="outline" size="md">
                Cała oferta
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canPrev}
                  aria-label="Przewiń kategorie w lewo"
                  className={arrowClass}
                >
                  <ArrowLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  disabled={!canNext}
                  aria-label="Przewiń kategorie w prawo"
                  className={arrowClass}
                >
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            role="region"
            aria-label="Kategorie rowerów"
            className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CATEGORIES.map((category) => (
              <div
                key={category.slug}
                className="w-[78vw] max-w-[300px] shrink-0 snap-start sm:w-[320px] sm:max-w-none lg:w-[340px]"
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
