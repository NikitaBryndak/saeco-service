import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sofia-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saeco сервіс",
  description: "Ремонт та обслуговування кавомашин",
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
    title: "Saeco сервіс",
    description: "Ремонт та обслуговування кавомашин",
    url: 'https://www.remont-saeco.in.ua',
    siteName: "Saeco сервіс",
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saeco сервіс",
    description: "Ремонт та обслуговування кавомашин",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${sofiaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
