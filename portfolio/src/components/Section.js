import Link from "next/link";

export default function Section({ id, title, aside, more, children }) {
  return (
    <section aria-labelledby={id} className="mt-16">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 id={id} className="flex items-baseline gap-3 text-sm font-medium text-fg">
          {title}
          {aside && (
            <span className="hand -rotate-2 text-lg" aria-hidden="true">
              {aside}
            </span>
          )}
        </h2>
        {more && (
          <Link href={more.href} className="text-sm text-muted transition-colors hover:text-fg">
            {more.label}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
