import Link from "next/link";

export const metadata = {
  title: "About",
  description: "A little about Sutheera and my experience.",
};

const experience = [
  {
    role: "Full-stack Engineer",
    place: "Lionheart Pacific",
    dates: "Nov 2025 - Now",
    body: (
      <>
        Design, build and maintain full-stack applications. Practice TDD and continuous
        refactoring.
      </>
    ),
    tags: [
      "React",
      "Kotlin",
      "Spring",
      "Gradle",
      "Vitest",
      "Playwright",
      "Figma",
      "Pair programming",
    ],
  },
  {
    role: "Python Developer",
    place: "Duckgrammer",
    dates: "Jun - Oct 2025",
    body: (
      <>
        Built custom Odoo ERP modules in Python and a LINE LIFF app that shows real-time customer
        data from Odoo. Also built a React website for a company pop-up event in one week.
      </>
    ),
    tags: ["Python", "Odoo", "React", "LINE LIFF", "Lovable"],
  },
  {
    role: "Software Engineer (Part time)",
    place: "Pilot Projects",
    dates: "May - Dec 2025",
    body: (
      <>
        Built a job-finding platform with FlutterFlow and Google Cloud, including international
        payments. Worked in a small remote team and took full ownership to deliver it on time.
      </>
    ),
    tags: ["FlutterFlow", "GCP", "Firebase", "Stripe"],
  },
  {
    role: "Data Structures and Algorithms Teaching Assistant",
    place: "KMITL",
    dates: "Nov 2024 - Mar 2025",
    body: (
      <>
        Delivered personalized code review, algorithmic debugging, and guidance on data structures
        and algorithms, clarifying concepts and addressing inquiries. Also,{" "}
        <Link href="/projects/visualdsa" className="link">developed a Python library</Link> with
        interactive visualizations to enhance student comprehension.
      </>
    ),
    tags: ["Python"],
  },
  {
    role: "Software Engineer Intern",
    place: "MOHARA",
    dates: "Jul - Oct 2024",
    body: (
      <>
        Developed full-stack development experience in diverse projects during my internship,
        collaborating with international teams to enhance communication and teamwork. Implemented
        project features by quickly adapting to new frameworks and libraries.
      </>
    ),
    tags: [
      "Next.js",
      "Tailwind CSS",
      "FlutterFlow",
      "shadcn/ui",
      "tRPC",
      "RESTful APIs",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <h1 className="text-lg font-medium">About</h1>

      <div className="mt-8 space-y-4">
        <p>
          I graduated from KMITL with a Bachelor of Science in Information Technology (Multimedia).
          My passion for web design and coding has driven me throughout my studies, and I'm eager
          to continue learning and growing. I hope you like my projects, and let's explore
          opportunities together!
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
                {item.tags && (
                  <p className="mt-2 font-mono text-[11px] text-muted">{item.tags.join(" · ")}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
