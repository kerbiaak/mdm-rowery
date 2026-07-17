# mDM Rowery — strona internetowa

Strona sklepu i serwisu rowerowego **mDM Rowery** (Rowery Skutery MDM Michał Gryka) w Pniewach — Wolności 32, 62-045 Pniewy.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion (animacje wejścia, liczniki, mikrointerakcje)
- shadcn/ui (konwencja komponentów `components/ui`)
- Lucide Icons
- next/image + sharp (optymalizacja zdjęć)

## Struktura

```
app/            strony (/, /oferta, /serwis, /akcesoria, /o-nas, /kontakt)
components/
  home/         sekcje strony głównej
  oferta/ serwis/ akcesoria/ o-nas/ kontakt/   sekcje podstron
  layout/       navbar + footer
  motion/       Reveal / Stagger / CountUp
  shared/       PageHero, SectionHeader, CtaBand, logo, karty
  ui/           button, accordion (styl shadcn/ui)
lib/data.ts     całe treści strony (kontakt, godziny, oferta, cennik, FAQ…)
scripts/        pipeline przygotowania zdjęć (sharp)
public/images/  zoptymalizowane zdjęcia
```

## Rozwój lokalny

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
npm start
```

## SEO

Metadane per strona, Open Graph, `sitemap.xml`, `robots.txt` oraz dane
strukturalne JSON-LD (`BikeStore`) z adresem, telefonem i godzinami otwarcia.
Adres produkcyjny można nadpisać zmienną `NEXT_PUBLIC_SITE_URL`.
