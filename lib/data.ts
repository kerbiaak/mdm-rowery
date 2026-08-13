import {
  Backpack,
  BadgeCheck,
  CircleDot,
  ClipboardCheck,
  Clock,
  Cog,
  Flashlight,
  Gauge,
  GlassWater,
  HandCoins,
  HardHat,
  Lock,
  MapPin,
  PackageOpen,
  Sun,
  Zap,
  Umbrella,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdm-rowery.vercel.app";

export const CONTACT = {
  name: "mDM Rowery",
  legalName: "MDM Michał Gryka",
  phoneDisplay: "502 744 955",
  phoneHref: "tel:+48502744955",
  email: "mdmgryka@o2.pl",
  emailHref: "mailto:mdmgryka@o2.pl",
  street: "Wolności 32",
  city: "62-045 Pniewy",
  region: "woj. wielkopolskie",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=MDM+Micha%C5%82+Gryka+rowery+Wolno%C5%9Bci+32+Pniewy",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Wolno%C5%9Bci%2032%2C%2062-045%20Pniewy&z=16&output=embed",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/oferta", label: "Oferta" },
  { href: "/serwis", label: "Serwis" },
  { href: "/akcesoria", label: "Akcesoria" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const HOURS = [
  { days: "Poniedziałek – Piątek", hours: "09:00 – 18:00", open: true },
  { days: "Sobota", hours: "09:00 – 13:00", open: true },
  { days: "Niedziela", hours: "nieczynne", open: false },
] as const;

export type Category = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  fit: "contain" | "cover";
  href: string;
  features: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "gorskie",
    title: "Rowery górskie",
    img: "/images/bike-mtb.webp",
    fit: "contain",
    href: "/oferta#gorskie",
    desc: "Sztywne hardtaile i rowery do skakania. Na leśne szlaki, wertepy i codzienną dawkę adrenaliny.",
    features: [
      "Hardtaile i rowery dirtowe",
      "Hamulce tarczowe, amortyzacja przednia",
      "Na leśne szlaki i bezdroża",
    ],
  },
  {
    slug: "elektryczne",
    title: "Rowery elektryczne",
    img: "/images/bike-city.webp",
    fit: "contain",
    href: "/oferta#elektryczne",
    desc: "Wspomaganie, które zmienia wszystko. Dojazdy bez potu i wycieczki bez limitu kilometrów.",
    features: [
      "Silniki centralne i tylne",
      "Realny zasięg 60–120 km",
      "Jazda testowa przed zakupem",
    ],
  },
  {
    slug: "trekkingowe",
    title: "Rowery trekkingowe",
    img: "/images/bike-gravel.jpg",
    fit: "contain",
    href: "/oferta#trekkingowe",
    desc: "Komfort na długich dystansach: do pracy, nad jezioro i na weekendową wyprawę za miasto.",
    features: [
      "Komfortowa geometria",
      "Bagażnik, błotniki i oświetlenie",
      "Na asfalt i utwardzone ścieżki",
    ],
  },
  {
    slug: "miejskie",
    title: "Rowery miejskie",
    img: "/images/bike-miejski.webp",
    fit: "contain",
    href: "/oferta#miejskie",
    desc: "Eleganckie i praktyczne. Niska rama, pełne wyposażenie i wygoda każdego dnia.",
    features: [
      "Wyprostowana, wygodna pozycja",
      "Niska rama i łatwe wsiadanie",
      "Pełne wyposażenie miejskie",
    ],
  },
  {
    slug: "dzieciece",
    title: "Rowery dziecięce",
    img: "/images/bike-kids.webp",
    fit: "contain",
    href: "/oferta#dzieciece",
    desc: "Pierwsze rowery i kolejne rozmiary. Lekkie, bezpieczne i dobrane do wzrostu dziecka.",
    features: [
      "Koła od 12 do 24 cali",
      "Lekkie ramy aluminiowe",
      "Boczne kółka i prowadniki",
    ],
  },
  {
    slug: "akcesoria",
    title: "Akcesoria i części",
    img: "/images/accessories.jpg",
    fit: "cover",
    href: "/akcesoria",
    desc: "Kaski, oświetlenie, zapięcia, opony i części zamienne. Wszystko, czego potrzebuje Twój rower.",
    features: [
      "Kaski i oświetlenie",
      "Opony, dętki i części",
      "Sakwy i foteliki dziecięce",
    ],
  },
];

export type Service = { icon: LucideIcon; title: string; desc: string; img: string };

export const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Naprawy rowerów",
    desc: "Od wymiany dętki po remont całego napędu. Mniejsze naprawy często robimy od ręki.",
    img: "/images/service-1.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Przeglądy okresowe",
    desc: "Sprawdzimy hamulce, przerzutki i łożyska, dokręcimy i nasmarujemy co trzeba.",
    img: "/images/service-2.jpg",
  },
  {
    icon: Gauge,
    title: "Diagnostyka",
    desc: "Coś stuka albo przeskakuje? Najpierw znajdziemy przyczynę, zamiast od razu wymieniać części.",
    img: "/images/service-3.jpg",
  },
  {
    icon: PackageOpen,
    title: "Montaż i regulacja",
    desc: "Złożymy nowy rower i ustawimy go pod Ciebie: siodło, kierownicę i przerzutki.",
    img: "/images/service-4.jpg",
  },
  {
    icon: Zap,
    title: "Serwis rowerów elektrycznych",
    desc: "E-bike też ogarniemy: napęd, hamulce i podstawowa kontrola elektryki.",
    img: "/images/service-5.jpg",
  },
  {
    icon: Sun,
    title: "Przygotowanie do sezonu",
    desc: "Po zimie przesmarujemy, wyregulujemy i sprawdzimy, czy wszystko gra.",
    img: "/images/service-6.jpg",
  },
];

export const SERVICE_EXTRAS = [
  "Dorabianie kluczy",
  "Wymiana opon od ręki",
  "Centrowanie kół",
] as const;

export const BRANDS = [
  "Tabou",
  "Kross",
  "Merida",
  "Romet",
  "Unibike",
  "Kands",
  "Kellys",
  "Shimano",
  "Schwalbe",
  "Continental",
] as const;

export type Testimonial = { name: string; text: string; stars: number };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Użytkownik Google",
    stars: 5,
    text: "Świetny serwis i bardzo dobry mechanik rowerowy! Wszystko zostało zrobione szybko, profesjonalnie i bez żadnych problemów. Bardzo dobre podejście do klienta i fachowa robota. Z czystym sumieniem mogę polecić!",
  },
  {
    name: "Arleta",
    stars: 5,
    text: "Polecam, wymiana opon i serwis bardzo szybko i sprawnie.",
  },
  {
    name: "Adam Lisek",
    stars: 5,
    text: "Super sklep, każda część na miejscu.",
  },
];

export type ProcessStep = { n: string; title: string; desc: string };

export const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Przyjęcie i wycena",
    desc: "Oglądamy rower przy Tobie i mówimy, co jest do zrobienia i mniej więcej za ile.",
  },
  {
    n: "02",
    title: "Diagnostyka",
    desc: "Sprawdzamy napęd, hamulce i osprzęt, także to, czego nie widać na pierwszy rzut oka.",
  },
  {
    n: "03",
    title: "Naprawa",
    desc: "Jeśli w trakcie wyjdzie coś więcej, najpierw dzwonimy, potem naprawiamy.",
  },
  {
    n: "04",
    title: "Odbiór",
    desc: "Krótka jazda próbna, parę wskazówek i możesz ruszać w trasę.",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "Czy muszę wcześniej umawiać się na serwis?",
    a: "Najlepiej zadzwoń pod 502 744 955 albo po prostu podjedź. Drobne rzeczy często robimy od ręki, przy większych umówimy konkretny termin.",
  },
  {
    q: "Ile trwa standardowy przegląd?",
    a: "Zwykle dzień albo dwa, zależnie od tego, co się dzieje w warsztacie. Przy oddawaniu roweru powiemy, na kiedy będzie gotowy.",
  },
  {
    q: "Czy serwisujecie rowery elektryczne?",
    a: "Tak, e-bike'i też naprawiamy: mechanikę i podstawową elektrykę. Rowery elektryczne mamy zresztą również w sprzedaży.",
  },
  {
    q: "Czy naprawiacie rowery kupione w innym sklepie?",
    a: "Jasne. Nieważne, skąd masz rower, u nas każdy jest traktowany tak samo.",
  },
];

export type AccessoryGroup = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string;
};

export const ACCESSORY_GROUPS: AccessoryGroup[] = [
  {
    icon: HardHat,
    title: "Kaski i ochraniacze",
    desc: "Dla dzieci i dorosłych. Rozmiar dobierzemy na miejscu.",
    tags: "MTB · miejskie · dziecięce",
  },
  {
    icon: Flashlight,
    title: "Oświetlenie",
    desc: "Lampki ładowane przez USB, dynama i odblaski na jesienne wieczory.",
    tags: "przód · tył · zestawy",
  },
  {
    icon: Lock,
    title: "Zapięcia",
    desc: "U-locki, łańcuchy i linki o różnych klasach zabezpieczenia.",
    tags: "U-lock · łańcuch · składane",
  },
  {
    icon: CircleDot,
    title: "Opony i dętki",
    desc: "Schwalbe, Continental i Kenda, z wymianą od ręki w serwisie.",
    tags: "szosa · MTB · miasto",
  },
  {
    icon: Backpack,
    title: "Sakwy i bagażniki",
    desc: "Na codzienne zakupy i na dłuższą wyprawę. Montaż przy zakupie gratis.",
    tags: "sakwy · kosze · torby",
  },
  {
    icon: GlassWater,
    title: "Bidony i uchwyty",
    desc: "Nawodnienie na każdą trasę i koszyki pasujące do każdej ramy.",
    tags: "bidony · koszyki",
  },
  {
    icon: Umbrella,
    title: "Błotniki i osłony",
    desc: "Sucho i czysto niezależnie od pogody i nawierzchni.",
    tags: "błotniki · osłony łańcucha",
  },
  {
    icon: Cog,
    title: "Części zamienne",
    desc: "Łańcuchy, kasety, klocki i linki od ręki. Resztę zamówimy pod Twój model.",
    tags: "napęd · hamulce · linki",
  },
];

export type TimelineEntry = { year: string; title: string; desc: string };

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2003",
    title: "Pierwsze naprawy",
    desc: "Mały warsztat i kilka rowerów na stanie. Tak przy ulicy Wolności zaczyna się mDM.",
  },
  {
    year: "2008",
    title: "Większy warsztat",
    desc: "Rozbudowujemy warsztat i kompletujemy porządny zestaw narzędzi.",
  },
  {
    year: "2015",
    title: "Nowy salon",
    desc: "Więcej przestrzeni, pełna oferta polskich i światowych marek oraz ściana akcesoriów.",
  },
  {
    year: "2021",
    title: "Era elektryków",
    desc: "Do oferty wchodzą rowery elektryczne, a do warsztatu serwis napędów e-bike.",
  },
  {
    year: "Dziś",
    title: "Drugie pokolenie klientów",
    desc: "Rowery, które sprzedaliśmy lata temu, wracają na przeglądy, tym razem z dziećmi naszych klientów.",
  },
];

export type CompanyValue = { icon: LucideIcon; title: string; desc: string };

export const VALUES: CompanyValue[] = [
  {
    icon: HandCoins,
    title: "Uczciwość",
    desc: "Doradzamy tak, jak sami chcielibyśmy być obsłużeni. Bez wciskania i sztucznych kosztów.",
  },
  {
    icon: BadgeCheck,
    title: "Fachowość",
    desc: "Właściwe narzędzia i wiedza zbierana przez ponad dwadzieścia lat pracy przy rowerach.",
  },
  {
    icon: Clock,
    title: "Terminowość",
    desc: "Umówiony termin to termin. Wiesz, kiedy zostawiasz rower i kiedy go odbierasz.",
  },
  {
    icon: MapPin,
    title: "Lokalność",
    desc: "Jesteśmy z Pniew i dla Pniew. Od lat obsługują Cię te same, dobrze znane ręce.",
  },
];
