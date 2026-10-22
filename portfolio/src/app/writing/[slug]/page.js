import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/writing";
import { getProject } from "@/data/projects";
import { formatDate } from "@/lib/date";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/writing/${article.slug}`,
      type: "article",
      ...(article.date && { publishedTime: article.date }),
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const { Body } = article;
  const project = article.project && getProject(article.project);

  return (
    <article>
      <Link href="/writing" className="text-sm text-muted transition-colors hover:text-fg">
        ← Writing
      </Link>

      <header className="mt-8">
        <h1 className="text-2xl font-medium tracking-tight">{article.title}</h1>
        {(article.date || project) && (
          <p className="label mt-3 normal-case tracking-normal">
            {article.date && <time dateTime={article.date}>{formatDate(article.date)}</time>}
            {article.date && project && " · "}
            {project && (
              <>
                on <Link href={`/projects/${project.slug}`} className="link">{project.title}</Link>
              </>
            )}
          </p>
        )}
      </header>

      <div className="prose mt-10">
        <Body />
      </div>

      <nav aria-label="Article navigation" className="mt-16 border-t border-line pt-6">
        <Link href="/writing" className="text-sm text-muted transition-colors hover:text-fg">
          ← All writing
        </Link>
      </nav>
    </article>
  );
}
