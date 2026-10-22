import { elsewhere, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-page px-5 pb-12 pt-24">
      <div className="flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {elsewhere.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
