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
        <p className="text-muted">{site.role}</p>

        <div className="mt-8 space-y-4">
          <p>
            Hi, I'm Sutheera. I studied IT (Multimedia) at KMITL, and I love both web design and
            coding. Many of my projects started as Figma designs before I built them.
          </p>
          <p>
            This is where I keep the things I've made, like a tic tac toe game with cards and a
            Python library that draws linked lists.
          </p>
        </div>
      </section>

      <Section
        id="projects"
        title="Projects"
        aside="things I've built"
        more={{ href: "/projects", label: "All projects" }}
      >
        <ProjectList projects={projects} />
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
