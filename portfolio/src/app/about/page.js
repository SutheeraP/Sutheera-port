import Link from "next/link";
import { elsewhere } from "@/data/site";

export const metadata = {
  title: "About",
  description: "A little about Sutheera: background, experience and how to get in touch.",
};

const experience = [
  {
    role: "Teaching Assistant, Data Structures and Algorithms",
    place: "KMITL",
    dates: "Nov 2024 – Mar 2025",
    body: (
      <>
        Gave students one-to-one code reviews, helped them debug their algorithms and answered
        questions about data structures. I also built{" "}
        <Link href="/projects/visualdsa" className="link">visualdsa</Link>, a Python library that
        draws those data structures so they're easier to understand.
      </>
    ),
  },
  {
    role: "Software Engineer Intern",
    place: "MOHARA",
    dates: "Jul – Oct 2024",
    body: (
      <>
        Full-stack work across several projects with international teams, often picking up a new
        framework or library to ship a feature. Along the way I used Next.js, Tailwind CSS,
        shadcn/ui, tRPC, REST APIs, Node.js, Express, MongoDB, Clerk and FlutterFlow, and built{" "}
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
          I'm Sutheera, a full-stack developer. I graduated from KMITL with a Bachelor of Science in
          Information Technology (Multimedia), and my interest in both web design and coding has
          shaped most of what I build.
        </p>
        <p>
          I speak Thai natively and English at an intermediate level (TOEIC 925/990).
        </p>
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
          The easiest way to reach me is by email. You can also find me on{" "}
          {elsewhere
            .filter((link) => link.label !== "Email")
            .map((link, i, list) => (
              <span key={link.label}>
                {i > 0 && (i === list.length - 1 ? " or read my " : ", ")}
                <a href={link.href} className="link">
                  {link.label === "Résumé" ? "résumé" : link.label}
                </a>
              </span>
            ))}
          .
        </p>
      </section>
    </>
  );
}
