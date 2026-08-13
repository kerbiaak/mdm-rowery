import type { Metadata } from "next";
import { Brands } from "@/components/home/brands";
import { Categories } from "@/components/home/categories";
import { Hero } from "@/components/home/hero";
import { HomeServices } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBand } from "@/components/shared/cta-band";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: "mDM Rowery | Sklep i serwis rowerowy w Pniewach" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Brands />
      <HomeServices />
      <Testimonials />
      <CtaBand
        title={
          <>
            Gotowy na <em className="italic">nowy sezon?</em>
          </>
        }
        sub="Wpadnij obejrzeć rowery albo zostaw swój na przegląd. Jesteśmy na miejscu sześć dni w tygodniu."
        primary={{ href: "/oferta", label: "Zobacz ofertę" }}
        secondary={{ href: CONTACT.phoneHref, label: `Zadzwoń: ${CONTACT.phoneDisplay}` }}
        note="Wolności 32, 62-045 Pniewy · pn–pt 9:00–18:00 · sob 9:00–13:00"
      />
    </>
  );
}
