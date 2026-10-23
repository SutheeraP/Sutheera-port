import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
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
        <p className="mt-6">
          I'm a software engineer with a passion for art and coding. This is where I keep the things
          I've made and what I've learned.
        </p>
        <div className="mt-6">
          <SocialLinks />
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
