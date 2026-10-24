import { Caveat, Inter } from "next/font/google";
import Header from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand" });

const description =
  "I'm a software engineer with a passion for art and coding. This is where I keep the things I've made and what I've learned.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.shortName,
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
        <main id="main" className="mx-auto max-w-page px-5 pb-24 pt-16 sm:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
