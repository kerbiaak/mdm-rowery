import type { Metadata } from "next";
import {
  AccessoriesBanner,
  CategoriesDetail,
} from "@/components/oferta/oferta-sections";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oferta rowerów",
  description:
    "Rowery górskie, elektryczne, trekkingowe, miejskie i dziecięce w Pniewach. Sprawdzone marki: Tabou, Kross, Merida, Romet. Dobór rozmiaru i regulacja przy odbiorze.",
  alternates: { canonical: "/oferta" },
};

export default function OfertaPage() {
  return (
    <>
      <PageHero
        image="/images/showroom-right-blur.jpg"
        imageAlt="Rozmyte wnętrze salonu rowerowego z rzędami rowerów"
        eyebrow="Oferta"
        title={
          <>
            Znajdź swój <span className="italic text-brand">następny rower</span>
          </>
        }
        lead="Górskie, elektryczne, trekkingowe, miejskie i dziecięce. Każdy złożony, wyregulowany i sprawdzony przed wydaniem."
      />
      <CategoriesDetail />
      <AccessoriesBanner />
      <CtaBand
        word="Oferta"
        title={
          <>
            Najlepiej rozmawia się <em className="italic">przy rowerze</em>
          </>
        }
        sub="Aktualne modele i ceny znajdziesz w salonie. Zadzwoń albo wpadnij, doradzimy bez zobowiązań."
        primary={{ href: CONTACT.phoneHref, label: `Zadzwoń: ${CONTACT.phoneDisplay}` }}
        secondary={{ href: "/kontakt", label: "Jak dojechać" }}
      />
    </>
  );
}
