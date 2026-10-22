import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichText from "@/components/RichText";
import { articles } from "@/content/writing";
import { getNextProject, getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      ...(project.image && { images: [project.image.src] }),
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);
  const related = articles.filter((article) => article.project === project.slug);

  const meta = [
    ["Context", project.context],
    ["Role", project.role],
    ["Status", project.status],
    ["Built with", project.stack?.join(", ")],
  ].filter(([, value]) => value);

  return (
    <article>
      <Link href="/projects" className="text-sm text-muted transition-colors hover:text-fg">
        ← Projects
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h1 className="text-2xl font-medium tracking-tight">{project.title}</h1>
          {project.note && <span className="hand -rotate-2">{project.note}</span>}
        </div>
        <p className="mt-2 text-muted">{project.summary}</p>

        {meta.length > 0 && (
          <dl className="mt-8 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[7rem_1fr]">
            {meta.map(([key, value]) => (
              <div key={key} className="contents">
                <dt className="label pt-[3px]">{key}</dt>
                <dd className="mb-2 text-fg sm:mb-0">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.links?.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className="link">
                  {link.label}
                  <span aria-hidden="true" className="text-muted"> ↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {project.image && (
        <figure className="mt-10">
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            sizes="(min-width: 640px) 600px, 100vw"
            priority
            className="h-auto w-full rounded-lg border border-line bg-surface"
          />
        </figure>
      )}

      <div className="prose mt-10">
        {project.overview?.map((paragraph, i) => (
          <p key={i}>
            <RichText>{paragraph}</RichText>
          </p>
        ))}

        {project.features && (
          <>
            <h2>What it does</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature.title}>
                  <span className="font-medium">{feature.title}.</span>{" "}
                  <RichText>{feature.body}</RichText>
                </li>
              ))}
            </ul>
          </>
        )}

        {project.code && (
          <figure>
            <pre className="code-block">
              <code>{project.code.source}</code>
            </pre>
            {project.code.caption && (
              <figcaption className="mt-2 text-sm text-muted">{project.code.caption}</figcaption>
            )}
          </figure>
        )}

        {project.decisions && (
          <>
            <h2>Technical decisions</h2>
            {project.decisions.map((decision) => (
              <section key={decision.title} className="space-y-3">
                <h3>{decision.title}</h3>
                {decision.body.map((paragraph, i) => (
                  <p key={i}>
                    <RichText>{paragraph}</RichText>
                  </p>
                ))}
              </section>
            ))}
          </>
        )}

        {project.challenges && (
          <>
            <h2>Challenges and lessons</h2>
            {project.challenges.map((challenge) => (
              <section key={challenge.title} className="space-y-3">
                <h3>{challenge.title}</h3>
                <p>
                  <RichText>{challenge.body}</RichText>
                </p>
              </section>
            ))}
          </>
        )}

        {project.future && (
          <>
            <h2>What I'd improve next</h2>
            <ul>
              {project.future.map((item, i) => (
                <li key={i}>
                  <RichText>{item}</RichText>
                </li>
              ))}
            </ul>
          </>
        )}

        {related.length > 0 && (
          <>
            <h2>Related writing</h2>
            <ul>
              {related.map((article) => (
                <li key={article.slug}>
                  <Link href={`/writing/${article.slug}`}>{article.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <nav
        aria-label="Project navigation"
        className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6"
      >
        <Link href="/projects" className="text-sm text-muted transition-colors hover:text-fg">
          ← All projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="group ml-auto text-right" rel="next">
          <span className="label block">Next project</span>
          <span className="text-fg transition-colors group-hover:text-accent">
            {next.title}{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </Link>
      </nav>
    </article>
  );
}
