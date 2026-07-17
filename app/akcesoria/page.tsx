import type { Metadata } from "next";
import {
  AccessoriesFeatured,
  AccessoryGroups,
} from "@/components/akcesoria/akcesoria-sections";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Akcesoria rowerowe",
  description:
    "Akcesoria rowerowe w Pniewach: kaski, oświetlenie, zapięcia, opony Schwalbe i Continental, sakwy, bidony i części zamienne. Doradztwo i montaż na miejscu.",
  alternates: { canonical: "/akcesoria" },
};

export default function AkcesoriaPage() {
  return (
    <>
      <PageHero
        image="/images/accessories.jpg"
        imageAlt="Ściana akcesoriów rowerowych — kaski, sakwy, bidony i zapięcia"
        eyebrow="Akcesoria"
        title={
          <>
            Wszystko, czego potrzebuje{" "}
            <span className="italic text-brand">Twój rower</span>
          </>
        }
        lead="Kaski, oświetlenie, zapięcia, opony i części zamienne — przymierzysz, porównasz i zabierzesz od razu."
      />
      <AccessoryGroups />
      <AccessoriesFeatured />
      <CtaBand
        word="Sklep"
        title={
          <>
            Przymierz, porównaj, <em className="italic">dotknij</em>
          </>
        }
        sub="Kask musi leżeć, a sakwa pasować do bagażnika. Dlatego akcesoria najlepiej wybiera się na miejscu — z doradcą, nie z opisem produktu."
        primary={{ href: "/kontakt", label: "Odwiedź sklep" }}
        secondary={{ href: CONTACT.phoneHref, label: `Zadzwoń: ${CONTACT.phoneDisplay}` }}
      />
    </>
  );
}
