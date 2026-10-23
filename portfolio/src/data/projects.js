// Every project shown on the site. The array order is the order used on the
// homepage, on /projects, and by the "Next project" link at the bottom of each
// project page (the last project wraps around to the first).
//
// Only `slug`, `title` and `summary` are required. Any other field can be left
// out or left empty and its section simply won't render. Text wrapped in
// `backticks` is shown as inline code.
//
// `decisions`, `challenges` and `future` are empty on purpose. Fill them in
// only with things you've confirmed, and the sections appear on the page.
//   decisions:  [{ title: "...", body: ["paragraph", "paragraph"] }]
//   challenges: [{ title: "...", body: "paragraph" }]
//   future:     ["idea", "idea"]

export const projects = [
  {
    slug: "mearai",
    title: "Mearai",
    summary: "A Twitter clone I built with the T3 stack during my internship.",
    note: "มีอะไร?",
    context: "Internship project at MOHARA",
    role: "Built on my own, with guidance from MOHARA's docs and mentors",
    status: "Live",
    updated: "Mar, 2025",
    tags: ["Next.js", "tRPC", "Postgres"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "Neon Postgres",
      "Clerk",
      "AWS S3",
      "Vercel",
    ],
    image: {
      src: "/mearai.png",
      width: 1562,
      height: 1497,
      alt: "Mearai's home feed showing posts with images, likes and a sidebar.",
    },
    links: [
      { label: "Live site", href: "https://mearai.vercel.app/" },
      { label: "Source", href: "https://github.com/SutheeraP/Mearai" },
    ],
    overview: [
      "A Twitter clone developed during my internship at MOHARA, built using the T3 Stack. This project provided valuable experience in full-stack development, and I was responsible for independently developing and continuously improving its features, guided by MOHARA's documentation and mentorship.",
      "The name Mearai (มีอะไร) means “what's up?” in Thai.",
    ],
    features: [
      {
        title: "Accounts",
        body: "Sign up, log in, log out and edit your profile.",
      },
      {
        title: "Posts",
        body: "Write, read, edit and delete posts, and add images to them.",
      },
      {
        title: "Search",
        body: "Search for posts.",
      },
      {
        title: "Likes",
        body: "Like and unlike posts.",
      },
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
  {
    slug: "ducky-lucky",
    title: "Ducky Lucky",
    summary: "An online tic tac toe game with cards, special slots and cute graphics.",
    note: "play it with a friend",
    context: "Team project",
    status: "Live",
    updated: "Mar, 2024",
    tags: ["Next.js", "Firebase", "TypeScript"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase Realtime Database"],
    image: {
      src: "/duck.png",
      width: 1866,
      height: 1500,
      alt: "Ducky Lucky game screens with a tic tac toe board, cards and duck illustrations.",
    },
    links: [
      { label: "Play it", href: "https://duckylucky.vercel.app" },
      { label: "Source", href: "https://github.com/SutheeraP/duckylucky" },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/BAPHTQeKHM1O4x7IEUUp8P/Ducky-Lucky?type=design&node-id=1-2&t=ec6l1jEzcYTZIoJ3-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design",
      },
    ],
    overview: [
      "Ducky Lucky was created under the theme of an online tic tac toe game with a twist. We added a system of cards and special slots for extra fun, along with cute and distinctive graphics.",
      "I gained new knowledge and improved my teamwork skills a lot, and I hope you enjoy our work. Give it a try and play Ducky Lucky!",
    ],
    features: [
      {
        title: "Accounts",
        body: "Log in, log out and register with a username or email. Pick a profile picture and change your username.",
      },
      {
        title: "Play together",
        body: "Play tic tac toe with another person in real time.",
      },
      {
        title: "Rooms",
        body: "Create a room, join a room, or join a random one.",
      },
      {
        title: "Cards and special events",
        body: "Take turns placing X or O, and use cards with special skills along the way.",
      },
      {
        title: "Timer, scores and leaderboard",
        body: "Each turn has a timer. Scores are kept during the game, and a leaderboard ranks all players.",
      },
      {
        title: "Tutorials",
        body: "Short guides in the game explain the cards, the special events and the rules.",
      },
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
  {
    slug: "visualdsa",
    title: "visualdsa",
    summary: "A Python library that draws data structures and sorting steps for students.",
    note: "made for a class",
    context: "Teaching assistant, Data Structures and Algorithms, KMITL",
    status: "Published on PyPI",
    updated: "Feb, 2025",
    tags: ["Python", "Matplotlib"],
    stack: ["Python", "Matplotlib"],
    links: [{ label: "PyPI", href: "https://pypi.org/project/visualdsa/" }],
    overview: [
      "visualdsa draws data structures as pictures. It uses Matplotlib to show stacks, queues, linked lists and the steps of simple sorting algorithms.",
      "I made it for the Data Structures and Algorithms course at KMITL, where I was a teaching assistant. I wanted it to help students understand these ideas more easily.",
    ],
    features: [
      {
        title: "Data structures",
        body: "Draw a stack, a circular queue or a singly linked list.",
      },
      {
        title: "Sorting",
        body: "See each step of bubble sort, selection sort and insertion sort.",
      },
    ],
    code: {
      caption: "Drawing a stack",
      language: "python",
      source: `import visualdsa as vd

my_stack = ArrayStack()
my_stack._data = [3, 2, 1]

vd.showStack(my_stack)`,
    },
    decisions: [],
    challenges: [],
    future: [],
  },
  {
    slug: "apex-heroic-academy",
    title: "Apex Heroic Academy",
    summary: "A website for an open art and story project about a superhero school in 2099.",
    note: "designed and built by me",
    context: "Open community project",
    role: "Built the whole website",
    status: "Live",
    updated: "May, 2024",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: {
      src: "/Apex.png",
      width: 1000,
      height: 696,
      alt: "Apex Heroic Academy website shown on a laptop and a phone.",
    },
    links: [
      { label: "Live site", href: "https://apexheroic.vercel.app" },
      { label: "Source", href: "https://github.com/SutheeraP/AHA_AU" },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/XOt0rAtJY7xiDIIhduhQua/AHA-Project?node-id=2-589&starting-point-node-id=2%3A589&scaling=scale-down&t=TvJlZKbAvP95QKbi-1&mode=design",
      },
    ],
    overview: [
      "Apex Heroic Academy is an open project inviting everyone to join the adventure through #AHA_AU on various platforms such as Facebook, Twitter, and Instagram. The content revolves around a school for superheroes in 2099. Players have the freedom to create their own characters through drawing or storytelling and playing with other players.",
      "I was responsible for developing the entire website, which enhanced my web design and development skills. Check it out!",
    ],
    features: [
      {
        title: "The world",
        body: "Pages about the academy's courses, species, places, uniforms, mission, rules and team.",
      },
      {
        title: "How to join",
        body: "Pages for signing up, the terms, and guides for creators.",
      },
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
  {
    slug: "coral-cojai",
    title: "Coral Cojai",
    summary: "An interactive museum kiosk website about caring for Thailand's seas.",
    note: "best on an iPad",
    context: "Multimedia Programming course, with the School of Architecture, Art, and Design",
    status: "Live",
    updated: "Oct, 2023",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "/coral-mockup.png",
      width: 4233,
      height: 3803,
      alt: "Coral Cojai kiosk screens with illustrated sea scenes on an iPad.",
    },
    links: [
      { label: "Krabi", href: "https://coralcorjai.netlify.app/landingkrabi/main/" },
      { label: "Similan", href: "https://coralcorjai.netlify.app/landingsimilan/main/" },
      { label: "Source", href: "https://github.com/professorkong/SDG" },
    ],
    overview: [
      "Coral Cojai is a project from the Multimedia Programming course, where we collaborated with the School of Architecture, Art, and Design. They were responsible for web design, and then the IT team brought the website to life.",
      "Our project addresses the care of Thailand's seas, using a kiosk format for museum displays. This design ensures the website is best viewed on iPads.",
      "The website is best viewed on devices with a screen size of 11 inches or larger, such as an iPad or laptop, and may not be optimized for mobile viewing.",
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

// The project after `slug`, wrapping from the last project back to the first.
export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
