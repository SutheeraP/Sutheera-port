import Link from "next/link";
import { site } from "@/data/site";

const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="mx-auto flex max-w-page items-baseline justify-between gap-4 px-5 pt-10 sm:pt-14">
      <Link href="/" className="font-medium text-fg transition-colors hover:text-accent">
        {site.shortName}
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
    </header>
  );
}
