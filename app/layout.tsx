import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/shared/json-ld";
import { localBusinessSchema } from "@/lib/schema";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://everpeakroof.com"),
  title: {
    default: "Everpeak Roof | Seattle Roofing Repair & Replacement",
    template: "%s | Everpeak Roof",
  },
  description:
    "Licensed roofing contractor serving Seattle, Bellevue, Tacoma, and 17+ Puget Sound cities. Roof repair, replacement, emergency service, and free estimates.",
  keywords: [
    "roofing seattle",
    "roof repair seattle",
    "roof replacement seattle",
    "seattle roofing companies",
    "roofing contractor seattle",
    "everpeak roof",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://everpeakroof.com",
    siteName: "Everpeak Roof",
    title: "Everpeak Roof | Seattle Roofing Repair & Replacement",
    description:
      "Licensed roofing contractor serving Seattle and the greater Puget Sound. Free estimates, honest pricing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everpeak Roof | Seattle Roofing",
    description: "Roof repair, replacement, and emergency service across 20 Puget Sound cities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
