import PlayfulHello from "@/components/PlayfulHello";
import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import WritingList from "@/components/WritingList";
import { articles } from "@/content/writing";
import { projects } from "@/data/projects";
import TypingText from "@/components/TypingText";
import { site } from "@/data/site";

const roles = ["Sutheera", "a software engineer", "an artist"];

export default function Home() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-[calc(100svh-4rem)] flex-col justify-center sm:-mt-20">
        <h1 className="sr-only">Hi, I'm {site.name}, a software engineer and an artist</h1>
        <div aria-hidden="true">
          <p className="font-medium text-accent">Hi, I'm</p>
          <p className="mt-2 whitespace-nowrap text-3xl font-semibold sm:text-5xl">
            <TypingText phrases={roles} />
          </p>
        </div>
        <a
          href="#intro"
          aria-label="Scroll to introduction"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-fg motion-safe:animate-bounce"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <section aria-labelledby="intro" className="scroll-mt-24 pt-8">
        <PlayfulHello id="intro" />
        <div className="mt-10 space-y-4 text-muted">
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
