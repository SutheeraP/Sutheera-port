import { Caveat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand" });

const description =
  "Sutheera Pitakpalin is a full-stack developer with a multimedia background. Projects, notes and things learned along the way.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.shortName}`,
  },
  description,
  openGraph: {
    title: site.name,
    description,
    url: "/",
    siteName: site.name,
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#16181a" },
    { media: "(prefers-color-scheme: light)", color: "#f4f4f0" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only left-4 top-4 z-10 rounded bg-surface px-3 py-2 text-sm focus:not-sr-only focus:fixed"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="mx-auto max-w-page px-5 pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
