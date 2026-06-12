import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/shared/json-ld";
import AnalyticsEvents from "@/components/shared/analytics-events";
import { localBusinessSchema } from "@/lib/schema";

// GA4 (G-M6EY8LTNGF) now loads through GTM, not directly. See container GTM-PLNHDTLG.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PLNHDTLG";

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
  verification: {
    google: "W87c1COSwmMJtV9qqK0fgmHq_gXmCkw3hSyLnf91wSk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSerif.variable} h-full`}>
      {/* Layer B — client-side analytics gate. Sets window.__noTrack=1 for
          automated/headless clients. GTM (which loads GA4 + conversion tags) is
          only initialized when the flag is unset, so headless bots spoofing a
          real Chrome UA never register a GA4 session. beforeInteractive ensures
          the flag is set before the afterInteractive GTM init below. */}
      <Script id="notrack-gate" strategy="beforeInteractive">
        {`window.__noTrack=(function(){try{var n=navigator,w=window,u=(n.userAgent||'').toLowerCase();if(n.webdriver)return 1;if(/headless|phantom|puppeteer|playwright|selenium|electron|bot|crawl|spider|scrap|slurp|lighthouse|pagespeed|gtmetrix|pingdom|uptimerobot|statuscake|monitor\\b|prerender|dataprovider|python|curl|wget|node-fetch|axios|okhttp|java\\//.test(u))return 1;if(w.outerWidth===0&&w.outerHeight===0)return 1;return 0;}catch(e){return 0;}})();`}
      </Script>
      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`if(!window.__noTrack){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');}`}
        </Script>
      )}
      <body className="min-h-full flex flex-col">
        <JsonLd data={localBusinessSchema()} />
        <AnalyticsEvents />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="+ws0hE3ziNOZiM1vZ+4T0g"
        strategy="afterInteractive"
      />
    </html>
  );
}
