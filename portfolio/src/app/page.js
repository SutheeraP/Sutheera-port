import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import WritingList from "@/components/WritingList";
import { articles } from "@/content/writing";
import { projects } from "@/data/projects";
import TypingText from "@/components/TypingText";
import Webring from "@/components/Webring";
import { site } from "@/data/site";

const roles = ["Sutheera", "Software Engineer", "Artist"];

export default function Home() {
  return (
    <>
      <section className="-mt-16 flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center text-center sm:-mt-20">
        <h1 className="sr-only">Hi, I'm {site.name}, a software engineer and an artist</h1>
        <div aria-hidden="true">
          <p className="font-hand text-2xl font-bold text-accent sm:text-3xl">Hi, I'm</p>
          <p className="mt-1 whitespace-nowrap text-3xl font-semibold sm:mt-3 sm:text-5xl">
            <TypingText phrases={roles} />
          </p>
        </div>
      </section>

      <section aria-labelledby="intro" className="pt-8">
        <div className="flex items-center gap-3 text-accent">
          <h2 id="intro" className="font-hand text-3xl font-bold leading-none tracking-wider sm:text-4xl">
            Hello
          </h2>
          <Webring domain={site.domain} className="h-7 w-7 transition-opacity hover:opacity-70 sm:h-8 sm:w-8" />
        </div>
        <div className="mt-4 space-y-4 text-muted">
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
