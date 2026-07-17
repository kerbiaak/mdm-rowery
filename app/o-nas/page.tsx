import type { Metadata } from "next";
import { Story, Timeline, ValuesGrid } from "@/components/o-nas/o-nas-sections";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "mDM Rowery — rodzinny sklep i autoryzowany serwis rowerowy Michała Gryki w Pniewach. Ponad 20 lat doświadczenia, uczciwe podejście i klienci, którzy wracają.",
  alternates: { canonical: "/o-nas" },
};

export default function ONasPage() {
  return (
    <>
      <PageHero
        image="/images/parts.jpg"
        imageAlt="Komponenty rowerowe rozłożone na blacie warsztatowym"
        eyebrow="O nas"
        title={
          <>
            Z pasji do <span className="italic text-brand">dwóch kółek</span>
          </>
        }
        lead="Rodzinny sklep rowerowy z Pniew — dwie dekady doświadczenia, autoryzowany serwis i klienci, którzy przyprowadzają do nas swoje dzieci."
      />
      <Story />
      <ValuesGrid />
      <Timeline />
      <CtaBand
        word="mDM"
        title={
          <>
            Poznajmy się <em className="italic">przy Wolności 32</em>
          </>
        }
        sub="Najlepiej opowiada się o rowerach między rowerami. Wpadnij na rozmowę — kawa z ekspresu, doradztwo gratis."
        primary={{ href: "/kontakt", label: "Dane kontaktowe i dojazd" }}
        secondary={{ href: CONTACT.phoneHref, label: `Zadzwoń: ${CONTACT.phoneDisplay}` }}
      />
    </>
  );
}
