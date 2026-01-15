import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
// @ts-expect-error error with module types
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
  metadataBase: new URL('https://www.remont-saeco.in.ua'),
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
    url: 'https://www.remont-saeco.in.ua',
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
  return (
    <html lang="uk">
      <body
        className={`${sofiaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
