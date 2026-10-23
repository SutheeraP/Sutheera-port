import Link from "next/link";
import ProjectDoodle from "@/components/ProjectDoodle";

// Compact project entries: doodle, name, one sentence, a few tags.
export default function ProjectList({ projects }) {
  return (
    <ul className="-mx-3 flex flex-col">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-[2.75rem_1fr_auto] items-start gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-surface"
          >
            <Thumbnail project={project} />
            <span className="min-w-0">
              <span className="block font-medium text-fg">{project.title}</span>
              <span className="block text-sm leading-snug text-muted">{project.summary}</span>
              {project.tags && (
                <span className="label mt-1 block normal-case tracking-normal">
                  {project.tags.join(" · ")}
                </span>
              )}
            </span>
            <span
              aria-hidden="true"
              className="self-center text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Thumbnail({ project }) {
  return (
    <span
      aria-hidden="true"
      className="flex aspect-square w-11 items-center justify-center rounded-md border border-line bg-surface text-fg"
    >
      <ProjectDoodle slug={project.slug} className="w-7" />
    </span>
  );
}
