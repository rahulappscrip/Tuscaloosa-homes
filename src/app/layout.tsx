import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { RudderAnalyticsProvider } from "@/components/analytics/RudderAnalyticsProvider";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webuytuscaloosahomes.com"),
  title: "We Buy Homes for Cash in Tuscaloosa | Local Home Buyer Joe",
  description:
    "Need to sell your house fast in Tuscaloosa? We buy homes for cash, as-is, with no repairs or closing costs. Get a fair local cash offer from Joe in 24 hours.",
  keywords: ["we buy houses tuscaloosa"],
  publisher: "We Buy Tuscaloosa Homes",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${plusJakarta.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <GoogleAnalytics />
        <RudderAnalyticsProvider>
          <Header />
          <main className="flex-1 pb-20 lg:pb-0">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </RudderAnalyticsProvider>
      </body>
    </html>
  );
}
