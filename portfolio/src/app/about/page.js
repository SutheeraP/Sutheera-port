import Link from "next/link";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: "A little about Sutheera, my experience and how to get in touch.",
};

const experience = [
  {
    role: "Teaching Assistant, Data Structures and Algorithms",
    place: "KMITL",
    dates: "Nov 2024 to Mar 2025",
    body: (
      <>
        I gave students personal code reviews, helped them debug their algorithms and answered
        their questions about data structures. I also built{" "}
        <Link href="/projects/visualdsa" className="link">visualdsa</Link>, a Python library that
        draws data structures to help students understand them.
      </>
    ),
  },
  {
    role: "Software Engineer Intern",
    place: "MOHARA",
    dates: "Jul to Oct 2024",
    body: (
      <>
        I worked on many different full stack projects with international teams, and learned new
        frameworks and libraries quickly to build features. I used Next.js, Tailwind CSS, shadcn/ui,
        tRPC, REST APIs, Node.js, Express, MongoDB, Clerk and FlutterFlow. I also built{" "}
        <Link href="/projects/mearai" className="link">Mearai</Link> to learn the T3 stack.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <h1 className="text-lg font-medium">About</h1>

      <div className="mt-8 space-y-4">
        <p>
          I'm Sutheera, a full stack developer. I graduated from KMITL with a Bachelor of Science in
          Information Technology (Multimedia). I love both web design and coding, and I'm always
          happy to keep learning.
        </p>
        <p>I speak Thai and English.</p>
      </div>
      <p className="hand mt-6 inline-block -rotate-1">hobby artist · cat person · movie lover</p>

      <section aria-labelledby="experience" className="mt-16">
        <h2 id="experience" className="mb-6 text-sm font-medium">
          Experience
        </h2>
        <ol className="space-y-8">
          {experience.map((item) => (
            <li key={item.role} className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
              <p className="label pt-[3px] normal-case tracking-normal">{item.dates}</p>
              <div>
                <h3 className="font-medium">
                  {item.role} <span className="text-muted">· {item.place}</span>
                </h3>
                <p className="mt-1 text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="contact" className="mt-16">
        <h2 id="contact" className="mb-3 text-sm font-medium">
          Get in touch
        </h2>
        <p className="text-muted">
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
      </section>
    </>
  );
}
