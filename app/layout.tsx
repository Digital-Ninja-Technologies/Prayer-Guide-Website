import type { Metadata } from "next";
import { Manrope, Spectral } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const title = "Prayer Guide — A quiet place to return to, each day.";
const description =
  "Guided prayers, daily scripture, and gentle reminders — a calm companion for a prayer life you can actually keep. Free to use, every feature, no subscription.";

export const metadata: Metadata = {
  metadataBase: new URL("https://prayer-guide-website.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Prayer Guide",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${spectral.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <div style={{ position: "relative", overflow: "clip" }}>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
