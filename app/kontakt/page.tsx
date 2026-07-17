import type { Metadata } from "next";
import { ContactCards, MapSection } from "@/components/kontakt/kontakt-sections";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt z mDM Rowery: Wolności 32, 62-045 Pniewy, tel. 502 744 955, mdmgryka@o2.pl. Otwarte pn–pt 9:00–18:00, sob 9:00–13:00. Mapa dojazdu.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        image="/images/tyres.jpg"
        imageAlt="Wnętrze sklepu rowerowego mDM — opony i akcesoria"
        eyebrow="Kontakt"
        title={
          <>
            Porozmawiajmy o <span className="italic text-brand">Twoim rowerze</span>
          </>
        }
        lead="Zadzwoń, napisz albo po prostu wpadnij — Wolności 32 w Pniewach, sześć dni w tygodniu."
      />
      <ContactCards />
      <MapSection />
      <CtaBand
        word="Kontakt"
        title={
          <>
            Wpadnij, zadzwoń, <em className="italic">napisz</em>
          </>
        }
        sub="Najszybciej złapiesz nas telefonicznie w godzinach otwarcia. Na e-maile odpowiadamy w dni robocze."
        primary={{ href: CONTACT.phoneHref, label: `Zadzwoń: ${CONTACT.phoneDisplay}` }}
        secondary={{ href: CONTACT.emailHref, label: "Napisz e-mail" }}
      />
    </>
  );
}
