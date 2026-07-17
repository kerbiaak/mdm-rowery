import {
  Backpack,
  Baby,
  BadgeCheck,
  Bike,
  Building2,
  CircleDot,
  ClipboardCheck,
  Clock,
  Cog,
  Compass,
  Flashlight,
  Gauge,
  GlassWater,
  HandCoins,
  HardHat,
  Lock,
  MapPin,
  Mountain,
  PackageOpen,
  ShieldCheck,
  ShoppingBag,
  Sun,
  Umbrella,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdm-rowery.vercel.app";

export const CONTACT = {
  name: "mDM Rowery",
  legalName: "Rowery Skutery MDM Michał Gryka",
  phoneDisplay: "502 744 955",
  phoneHref: "tel:+48502744955",
  email: "mdmgryka@o2.pl",
  emailHref: "mailto:mdmgryka@o2.pl",
  street: "Wolności 32",
  city: "62-045 Pniewy",
  region: "woj. wielkopolskie",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rowery+Skutery+MDM+Micha%C5%82+Gryka+Wolno%C5%9Bci+32+Pniewy",
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

export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 20, suffix: "+", label: "lat doświadczenia" },
  { value: 4.3, decimals: 1, label: "ocena klientów w Google" },
  { value: 1000, suffix: "+", label: "serwisowanych rowerów rocznie" },
  { value: 6, label: "dni w tygodniu do Twojej dyspozycji" },
];

export type Category = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  fit: "contain" | "cover";
  icon: LucideIcon;
  href: string;
  features: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "gorskie",
    title: "Rowery górskie",
    icon: Mountain,
    img: "/images/bike-mtb.webp",
    fit: "contain",
    href: "/oferta#gorskie",
    desc: "Sztywne hardtaile i rowery do skakania — na leśne szlaki, wertepy i codzienną dawkę adrenaliny.",
    features: [
      "Hardtaile i rowery dirtowe",
      "Hamulce tarczowe, amortyzacja przednia",
      "Na szlaki wokół Jeziora Pniewskiego",
    ],
  },
  {
    slug: "elektryczne",
    title: "Rowery elektryczne",
    icon: Zap,
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
    icon: Compass,
    img: "/images/bike-gravel.jpg",
    fit: "contain",
    href: "/oferta#trekkingowe",
    desc: "Komfort na długich dystansach — do pracy, nad jezioro i na weekendową wyprawę za miasto.",
    features: [
      "Komfortowa geometria",
      "Bagażnik, błotniki i oświetlenie",
      "Na asfalt i utwardzone ścieżki",
    ],
  },
  {
    slug: "miejskie",
    title: "Rowery miejskie",
    icon: Building2,
    img: "/images/bike-trekking.webp",
    fit: "contain",
    href: "/oferta#miejskie",
    desc: "Eleganckie i praktyczne. Niska rama, pełne wyposażenie i wygoda każdego dnia.",
    features: [
      "Wyprostowana, wygodna pozycja",
      "Niska rama — łatwe wsiadanie",
      "Pełne wyposażenie miejskie",
    ],
  },
  {
    slug: "dzieciece",
    title: "Rowery dziecięce",
    icon: Baby,
    img: "/images/bike-kids.webp",
    fit: "contain",
    href: "/oferta#dzieciece",
    desc: "Pierwsze rowery i kolejne rozmiary — lekkie, bezpieczne i dobrane do wzrostu dziecka.",
    features: [
      "Koła od 12 do 24 cali",
      "Lekkie ramy aluminiowe",
      "Boczne kółka i prowadniki",
    ],
  },
  {
    slug: "akcesoria",
    title: "Akcesoria i części",
    icon: ShoppingBag,
    img: "/images/accessories.jpg",
    fit: "cover",
    href: "/akcesoria",
    desc: "Kaski, oświetlenie, zapięcia, opony i części zamienne — wszystko, czego potrzebuje Twój rower.",
    features: [
      "Kaski i oświetlenie",
      "Opony, dętki i części",
      "Sakwy i foteliki dziecięce",
    ],
  },
];

export type Service = { icon: LucideIcon; title: string; desc: string };

export const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Naprawy rowerów",
    desc: "Od wymiany dętki po generalny remont napędu. Sprawnie, uczciwie i z gwarancją na wykonaną pracę.",
  },
  {
    icon: ClipboardCheck,
    title: "Przeglądy okresowe",
    desc: "Regularna kontrola hamulców, przerzutek i łożysk — żeby drobiazg nie stał się kosztowną awarią.",
  },
  {
    icon: Gauge,
    title: "Diagnostyka",
    desc: "Stuka, trze, przeskakuje? Znajdziemy przyczynę, zanim zaczniemy cokolwiek wymieniać.",
  },
  {
    icon: PackageOpen,
    title: "Montaż i regulacja",
    desc: "Składamy rowery z kartonu i regulujemy je pod Ciebie — siodło, kierownica, klamki, wszystko.",
  },
  {
    icon: ShieldCheck,
    title: "Serwis gwarancyjny",
    desc: "Autoryzowany serwis gwarancyjny rowerów z naszego salonu. Bez odsyłania i czekania tygodniami.",
  },
  {
    icon: Sun,
    title: "Przygotowanie do sezonu",
    desc: "Po zimie: smarowanie, regulacje, ciśnienie i kontrola bezpieczeństwa. Wiosną wsiadasz i jedziesz.",
  },
];

export const SERVICE_EXTRAS = [
  "Dorabianie kluczy",
  "Serwis skuterów i motorowerów",
  "Wymiana opon od ręki",
  "Centrowanie kół",
] as const;

export type WhyUsItem = { icon: LucideIcon; title: string; desc: string };

export const WHY_US: WhyUsItem[] = [
  {
    icon: BadgeCheck,
    title: "Doświadczenie od 2003 roku",
    desc: "Przez nasz warsztat przeszły tysiące rowerów — znamy każdą konstrukcję na pamięć.",
  },
  {
    icon: ShieldCheck,
    title: "Autoryzowany serwis",
    desc: "Serwisujemy rowery i jednoślady zgodnie z wymogami producentów.",
  },
  {
    icon: HandCoins,
    title: "Uczciwa wycena",
    desc: "Koszt znasz przed naprawą. Wymieniamy to, co trzeba — nie to, co się opłaca.",
  },
  {
    icon: Clock,
    title: "Szybkie terminy",
    desc: "Drobne naprawy często od ręki, a standardowe przeglądy zwykle w 1–2 dni.",
  },
  {
    icon: Bike,
    title: "Sprawdzone marki",
    desc: "Tabou, Kross, Merida, Romet — sprzedajemy rowery, które sami byśmy kupili.",
  },
  {
    icon: MapPin,
    title: "Na miejscu, w Pniewach",
    desc: "Bez wysyłek i infolinii. Wpadasz, rozmawiasz i odjeżdżasz sprawnym rowerem.",
  },
];

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
    name: "Marek",
    stars: 5,
    text: "Rower po przeglądzie działa jak nowy, a termin udało się złapać z dnia na dzień. Widać, że robi to ktoś, kto na rowerach zjadł zęby.",
  },
  {
    name: "Agnieszka",
    stars: 5,
    text: "Kupowaliśmy córce pierwszy rower. Pan Michał cierpliwie dobrał rozmiar, wyregulował wszystko na miejscu i jeszcze wytłumaczył małej zasady bezpieczeństwa.",
  },
  {
    name: "Tomasz",
    stars: 5,
    text: "Uczciwe podejście, jakiego dziś się nie spotyka. Zamiast wciskać nowe części, naprawili dokładnie to, co było do naprawy. Ceny bardzo rozsądne.",
  },
];

export type ProcessStep = { n: string; title: string; desc: string };

export const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Przyjęcie i wycena",
    desc: "Oglądamy rower przy Tobie i ustalamy zakres prac oraz orientacyjny koszt.",
  },
  {
    n: "02",
    title: "Diagnostyka",
    desc: "Sprawdzamy napęd, hamulce i osprzęt — również to, czego nie widać gołym okiem.",
  },
  {
    n: "03",
    title: "Naprawa",
    desc: "Pracujemy na sprawdzonych częściach. Gdy coś wykracza poza wycenę — najpierw dzwonimy.",
  },
  {
    n: "04",
    title: "Odbiór",
    desc: "Krótka jazda próbna, kilka wskazówek na przyszłość i możesz ruszać w trasę.",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "Czy muszę wcześniej umawiać się na serwis?",
    a: "Najlepiej zadzwoń pod 502 744 955. Drobne naprawy wykonujemy często od ręki, a przy większych ustalimy termin — wiosną kolejka bywa dłuższa, więc warto rezerwować z wyprzedzeniem.",
  },
  {
    q: "Ile trwa standardowy przegląd?",
    a: "Zwykle 1–2 dni robocze, w zależności od sezonu i zakresu prac. Przy przyjęciu roweru podamy konkretny termin odbioru.",
  },
  {
    q: "Czy serwisujecie rowery elektryczne?",
    a: "Tak. Zajmujemy się mechaniką e-bike'ów oraz podstawową diagnostyką napędów i baterii. Rowery elektryczne znajdziesz też w naszej ofercie sprzedaży.",
  },
  {
    q: "Czy naprawiacie rowery kupione w innym sklepie?",
    a: "Oczywiście. Marka i miejsce zakupu nie mają znaczenia — każdy rower traktujemy tak samo.",
  },
  {
    q: "Czy zajmujecie się też skuterami?",
    a: "Tak, jesteśmy autoryzowanym dealerem i serwisem pojazdów spalinowych. Skutery i motorowery obsługujemy w tym samym warsztacie.",
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
    desc: "Dla dzieci i dorosłych — rozmiar dobierzemy na miejscu.",
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
    desc: "Schwalbe, Continental, Kenda — z wymianą od ręki w serwisie.",
    tags: "szosa · MTB · miasto",
  },
  {
    icon: Backpack,
    title: "Sakwy i bagażniki",
    desc: "Na codzienne zakupy i na dłuższą wyprawę — montaż przy zakupie gratis.",
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
    desc: "Łańcuchy, kasety, klocki i linki od ręki — resztę zamówimy pod Twój model.",
    tags: "napęd · hamulce · linki",
  },
];

export type TimelineEntry = { year: string; title: string; desc: string };

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2003",
    title: "Pierwsze naprawy",
    desc: "Mały warsztat i kilka rowerów na stanie — tak przy ulicy Wolności zaczyna się mDM.",
  },
  {
    year: "2008",
    title: "Autoryzowany dealer i serwis",
    desc: "Rozszerzamy działalność o skutery i motorowery z pełną autoryzacją producentów.",
  },
  {
    year: "2015",
    title: "Nowy salon",
    desc: "Więcej przestrzeni, pełna oferta polskich i światowych marek oraz ściana akcesoriów.",
  },
  {
    year: "2021",
    title: "Era elektryków",
    desc: "Do oferty wchodzą rowery elektryczne, a do warsztatu — serwis napędów e-bike.",
  },
  {
    year: "Dziś",
    title: "Drugie pokolenie klientów",
    desc: "Rowery, które sprzedaliśmy lata temu, wracają na przeglądy — z dziećmi naszych klientów.",
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
    desc: "Autoryzacje producentów, właściwe narzędzia i wiedza zbierana od ponad dwóch dekad.",
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
