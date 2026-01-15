import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sofia-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ремонт та обслуговування кавомашин Хмельницький | Saeco сервіс",
  description: "Сервісний центр кавового обладнання Saeco, DeLonghi у Хмельницькому надає послуги з ремонту кавомашин в Хмельницькому, сервісу та оренди кавомашин",
  icons: {
    icon: "/image/website-icon.png",
  },
  metadataBase: new URL('https://www.saeco-remont.com.ua'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Ремонт та обслуговування кавомашин Хмельницький | Saeco сервіс",
    description: "Сервісний центр кавового обладнання Saeco, DeLonghi у Хмельницькому надає послуги з ремонту кавомашин в Хмельницькому, сервісу та оренди кавомашин",
    url: 'https://www.saeco-remont.com.ua',
    siteName: "Saeco сервіс",
    locale: 'uk-UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ремонт та обслуговування кавомашин Хмельницький | Saeco сервіс",
    description: "Сервісний центр кавового обладнання Saeco, DeLonghi у Хмельницькому надає послуги з ремонту кавомашин в Хмельницькому, сервісу та оренди кавомашин",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saeco сервіс",
    "image": "https://www.saeco-remont.com.ua/image/website-icon.png",
    "@id": "https://www.saeco-remont.com.ua",
    "url": "https://www.saeco-remont.com.ua",
    "telephone": "+380689070070",
    "email": "khmsaeco@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Подільська, 171",
      "addressLocality": "Хмельницький",
      "postalCode": "29000",
      "addressCountry": "UA"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://t.me/saeco_khmel",
      "https://instagram.com/saeco_service_km"
    ]
  };

  return (
    <html lang="uk">
      <body
        className={`${sofiaSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
