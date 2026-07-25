import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SITE_URL } from "@/lib/data";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "mDM Rowery — Sklep i serwis rowerowy w Pniewach",
    template: "%s — mDM Rowery",
  },
  description:
    "Sklep i autoryzowany serwis rowerowy w Pniewach. Rowery górskie, elektryczne, trekkingowe, miejskie i dziecięce, akcesoria oraz fachowy serwis. Wolności 32, tel. 502 744 955.",
  keywords: [
    "sklep rowerowy Pniewy",
    "serwis rowerowy Pniewy",
    "rowery Pniewy",
    "rowery elektryczne Pniewy",
    "akcesoria rowerowe",
    "mDM Rowery",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "mDM Rowery",
    title: "mDM Rowery — Sklep i serwis rowerowy w Pniewach",
    description:
      "Rowery, akcesoria i autoryzowany serwis — od ponad 20 lat przy ulicy Wolności 32 w Pniewach.",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Salon rowerowy mDM Rowery w Pniewach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mDM Rowery — Sklep i serwis rowerowy w Pniewach",
    description: "Rowery, akcesoria i autoryzowany serwis — Pniewy, Wolności 32.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BikeStore",
  name: "mDM Rowery",
  alternateName: "MDM Michał Gryka",
  url: SITE_URL,
  image: `${SITE_URL}/images/storefront.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: "+48 502 744 955",
  email: "mdmgryka@o2.pl",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wolności 32",
    postalCode: "62-045",
    addressLocality: "Pniewy",
    addressRegion: "wielkopolskie",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.5065,
    longitude: 16.2564,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Przejdź do treści
        </a>
        <Navbar />
        <main id="tresc">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
