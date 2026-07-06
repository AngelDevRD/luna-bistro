import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RESTAURANT } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lunabistro.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luna Bistro — Alta cocina bajo la luna",
    template: "%s — Luna Bistro",
  },
  description:
    "Luna Bistro es un restaurante de autor donde la cocina de temporada, los ingredientes frescos y un servicio impecable se encuentran. Reserva tu mesa y vive una experiencia gastronómica inolvidable.",
  keywords: [
    "Luna Bistro",
    "restaurante de lujo",
    "alta cocina",
    "reservas restaurante",
    "cocina de autor",
    "menú degustación",
  ],
  authors: [{ name: "Luna Bistro" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Luna Bistro",
    title: "Luna Bistro — Alta cocina bajo la luna",
    description:
      "Cocina de autor, ingredientes frescos de temporada y una experiencia gastronómica que se siente como una obra de arte.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Interior de Luna Bistro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luna Bistro — Alta cocina bajo la luna",
    description:
      "Cocina de autor, ingredientes frescos de temporada y una experiencia gastronómica inolvidable.",
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT.name,
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  "@id": siteUrl,
  url: siteUrl,
  telephone: RESTAURANT.phoneRaw,
  priceRange: "$$$",
  servesCuisine: ["Cocina de autor", "Cocina contemporánea"],
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT.address.street,
    addressLocality: RESTAURANT.address.city,
    addressCountry: RESTAURANT.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: RESTAURANT.geo.lat,
    longitude: RESTAURANT.geo.lng,
  },
  openingHoursSpecification: RESTAURANT.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [RESTAURANT.socials.instagram, RESTAURANT.socials.facebook, RESTAURANT.socials.tiktok],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
