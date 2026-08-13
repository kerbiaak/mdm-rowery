import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, HOURS, NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { href: CONTACT.phoneHref, label: "Zadzwoń do nas", icon: Phone, external: false },
  { href: CONTACT.emailHref, label: "Napisz e-mail", icon: Mail, external: false },
  { href: CONTACT.mapsUrl, label: "Zobacz nas w Mapach Google", icon: MapPin, external: true },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-10">
        <div>
          <Image
            src="/images/logo-light.png"
            alt="Logo mDM Rowery"
            width={600}
            height={318}
            className="h-14 w-auto"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-400">
            Rodzinny sklep i serwis rowerowy w Pniewach. Od ponad 20 lat pomagamy
            wybrać rower i dbamy o niego przez kolejne sezony.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {SOCIALS.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Nawigacja w stopce">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Na skróty
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Godziny otwarcia
          </h3>
          <ul className="mt-5 space-y-3">
            {HOURS.map((row) => (
              <li
                key={row.days}
                className={cn(
                  "flex items-baseline justify-between gap-4 text-sm",
                  row.open ? "text-zinc-400" : "text-zinc-600"
                )}
              >
                <span>{row.days}</span>
                <span className={cn("font-medium", row.open && "text-white")}>{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Kontakt
          </h3>
          <address className="mt-5 space-y-3 text-sm not-italic text-zinc-400">
            <p>
              {CONTACT.legalName}
              <br />
              {CONTACT.street}, {CONTACT.city}
            </p>
            <p>
              <a
                href={CONTACT.phoneHref}
                className="font-display text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-brand"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={CONTACT.emailHref}
                className="transition-colors duration-300 hover:text-white"
              >
                {CONTACT.email}
              </a>
            </p>
            <p>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-brand transition-opacity duration-300 hover:opacity-80"
              >
                Wyznacz trasę
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {year} {CONTACT.name} · {CONTACT.legalName}
          </p>
          <p>
            {CONTACT.street}, {CONTACT.city} · {CONTACT.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
