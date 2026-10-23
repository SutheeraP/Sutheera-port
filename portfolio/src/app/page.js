import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import WritingList from "@/components/WritingList";
import { articles } from "@/content/writing";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section aria-labelledby="intro">
        <h1 id="intro" className="text-lg font-medium">
          {site.name}
        </h1>
        <div className="mt-6 space-y-4 text-muted">
          <p>
            I'm a <span className="text-fg">software engineer</span> with a passion for art and
            coding. This is where I keep the things I've made and what I've learned.
          </p>
          <p>
            The easiest way to reach me is by{" "}
            <a href={`mailto:${site.links.email}?subject=Just%20say%20hi`} className="link">
              email
            </a>
            . You can also find me on{" "}
            <a href={site.links.github} className="link">
              GitHub
            </a>{" "}
            and{" "}
            <a href={site.links.linkedin} className="link">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      <Section
        id="projects"
        title="Projects"
        aside="things I've built"
        more={{ href: "/projects", label: "All projects" }}
      >
        <ProjectList projects={projects.filter((project) => project.featured)} />
      </Section>

      <Section
        id="writing"
        title="Writing"
        more={articles.length > 3 ? { href: "/writing", label: "All writing" } : undefined}
      >
        <WritingList
          articles={articles.slice(0, 3)}
          empty="Nothing published yet. Articles will be listed here."
        />
      </Section>
    </>
  );
}
