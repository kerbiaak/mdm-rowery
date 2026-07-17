"use client";

import Image from "next/image";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { CONTACT, HOURS } from "@/lib/data";

export function ContactCards() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StaggerItem className="h-full">
            <div className="h-full rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-mist text-brand">
                <MapPin className="size-5" strokeWidth={1.9} aria-hidden />
              </div>
              <h2 className="mt-5 font-display text-lg font-bold tracking-tight">Adres</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </p>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-opacity duration-300 hover:opacity-75"
              >
                Wyznacz trasę
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="h-full rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-mist text-brand">
                <Phone className="size-5" strokeWidth={1.9} aria-hidden />
              </div>
              <h2 className="mt-5 font-display text-lg font-bold tracking-tight">Telefon</h2>
              <a
                href={CONTACT.phoneHref}
                className="mt-2 block font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-300 hover:text-brand"
              >
                {CONTACT.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-zinc-600">
                Najszybsza droga do terminu serwisu
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="h-full rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-mist text-brand">
                <Mail className="size-5" strokeWidth={1.9} aria-hidden />
              </div>
              <h2 className="mt-5 font-display text-lg font-bold tracking-tight">E-mail</h2>
              <a
                href={CONTACT.emailHref}
                className="mt-2 block break-all text-[15px] font-semibold text-ink transition-colors duration-300 hover:text-brand"
              >
                {CONTACT.email}
              </a>
              <p className="mt-2 text-sm text-zinc-600">Odpowiadamy w dni robocze</p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="h-full rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.2)]">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-mist text-brand">
                <Clock className="size-5" strokeWidth={1.9} aria-hidden />
              </div>
              <h2 className="mt-5 font-display text-lg font-bold tracking-tight">
                Godziny otwarcia
              </h2>
              <ul className="mt-2 space-y-1.5 text-sm text-zinc-600">
                {HOURS.map((row) => (
                  <li key={row.days} className="flex justify-between gap-3">
                    <span>{row.days}</span>
                    <span className={row.open ? "font-semibold text-ink" : "text-zinc-400"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

export function MapSection() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Dojazd"
          title={
            <>
              Łatwo nas <Accent>znaleźć</Accent>
            </>
          }
          sub="Stoimy przy głównej ulicy Pniew. Szukaj ciemnej, ceglanej elewacji i żółtego napisu ROWERY w witrynie."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="h-[420px] overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] lg:h-full lg:min-h-[520px]">
              <iframe
                src={CONTACT.mapEmbedUrl}
                title="Mapa dojazdu do mDM Rowery — Wolności 32, 62-045 Pniewy"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale transition-[filter] duration-700 hover:grayscale-0"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-6">
            <figure className="group relative overflow-hidden rounded-[2rem] border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/storefront.jpg"
                  alt="Sklep mDM Rowery od strony ulicy Wolności"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-4 left-5 right-5 text-sm font-semibold text-white drop-shadow-sm">
                Nasz sklep od strony ulicy Wolności
              </figcaption>
            </figure>

            <div className="flex-1 rounded-[2rem] border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <h3 className="font-display text-lg font-bold tracking-tight">
                Zanim przyjedziesz
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  Miejsca parkingowe znajdziesz wzdłuż ulicy, tuż przed wejściem.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  Wejście prowadzi z poziomu chodnika — wjedziesz rowerem bez przenoszenia.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  Przy odbiorze serwisowym warto mieć numer telefonu podany przy przyjęciu.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
