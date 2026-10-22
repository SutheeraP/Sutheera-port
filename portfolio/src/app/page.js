import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import WritingList from "@/components/WritingList";
import { articles } from "@/content/writing";
import { projects } from "@/data/projects";
import { elsewhere, site } from "@/data/site";

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
            Hi, I'm Sutheera. I studied IT (Multimedia) at KMITL and I like the place where design
            and code meet. Several of my projects started as Figma designs before they became code.
          </p>
          <p>
            This is where I keep the things I've made, from a card-based tic tac toe game to a
            Python library that draws linked lists, and notes on how they work and what building
            them taught me.
          </p>
        </div>

        <p className="hand mt-6 inline-block -rotate-1">
          also: hobby artist, cat person, movie lover
        </p>
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

      <Section id="elsewhere" title="Elsewhere">
        <p className="text-muted">
          {elsewhere.map((link, i) => (
            <span key={link.label}>
              {i > 0 && ", "}
              <a href={link.href} className="link">
                {link.label}
              </a>
            </span>
          ))}
          . Or read a little more <Link href="/about" className="link">about me</Link>.
        </p>
      </Section>
    </>
  );
}
