import type { Metadata } from "next";
import {
  ServiceFaq,
  ServiceGrid,
  ServiceProcess,
} from "@/components/serwis/serwis-sections";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Serwis rowerowy",
  description:
    "Serwis rowerowy w Pniewach: naprawy, przeglądy, diagnostyka, montaż i przygotowanie do sezonu. Uczciwa wycena przed naprawą. Tel. 502 744 955.",
  alternates: { canonical: "/serwis" },
};

export default function SerwisPage() {
  return (
    <>
      <PageHero
        image="/images/workshop.jpg"
        imageAlt="Warsztat serwisowy mDM: rower na stojaku i ściana narzędzi"
        eyebrow="Serwis"
        title={
          <>
            Serwis, po którym jedzie się{" "}
            <span className="italic text-brand">jak na nowym</span>
          </>
        }
        lead="Miejscowy warsztat z prawdziwego zdarzenia. Uczciwa wycena przed naprawą i terminy, których pilnujemy."
      />
      <ServiceGrid />
      <ServiceProcess />
      <ServiceFaq />
      <CtaBand
        word="Serwis"
        title={
          <>
            Zostaw rower, <em className="italic">resztę zrobimy my</em>
          </>
        }
        sub="Zadzwoń i umów termin albo podjedź w godzinach otwarcia. Drobne naprawy często robimy od ręki."
        primary={{ href: CONTACT.phoneHref, label: `Zadzwoń: ${CONTACT.phoneDisplay}` }}
        secondary={{ href: "/kontakt", label: "Godziny i dojazd" }}
      />
    </>
  );
}
