import type { Metadata } from "next";
import { inter, playfair } from './fonts';
import "./globals.css";
import '@/lib/polyfills';

export const metadata: Metadata = {
  title: "Indraneel Sarode",
  description: "Indraneel Sarode's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
