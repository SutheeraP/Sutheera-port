import Link from "next/link";
import Signature from "@/components/Signature";
import { site } from "@/data/site";

const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-bar backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5">
        <Link
          href="/"
          aria-label={`${site.shortName}, home`}
          className="text-fg transition-colors hover:text-accent"
        >
          <Signature className="h-7 w-auto" />
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
