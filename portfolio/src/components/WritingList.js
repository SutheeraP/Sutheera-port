import Link from "next/link";
import { formatDate } from "@/lib/date";

export default function WritingList({ articles, empty }) {
  if (articles.length === 0) {
    return <p className="text-sm text-muted">{empty}</p>;
  }
  return (
    <ul className="-mx-3 flex flex-col">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={`/writing/${article.slug}`}
            className="group flex flex-col gap-0.5 rounded-lg px-3 py-3 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="min-w-0">
              <span className="block font-medium text-fg group-hover:text-accent">
                {article.title}
              </span>
              {article.description && (
                <span className="block text-sm leading-snug text-muted">{article.description}</span>
              )}
            </span>
            {article.date && (
              <time dateTime={article.date} className="label shrink-0 normal-case tracking-normal">
                {formatDate(article.date)}
              </time>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
