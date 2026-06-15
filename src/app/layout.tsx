import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
  title: "We Buy Houses in Tuscaloosa, AL | Sell Your House Fast for Cash",
  description:
    "Need to sell your house fast in Tuscaloosa, Alabama? We buy houses for cash in any condition with no repairs, commissions, or closing costs. Get a fair cash offer from a trusted local home buyer today.",
  keywords: [
    "sell house fast tuscaloosa",
    "we buy houses tuscaloosa",
    "cash home buyer tuscaloosa",
    "sell house for cash alabama",
  ],
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
