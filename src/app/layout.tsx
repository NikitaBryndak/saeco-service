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
