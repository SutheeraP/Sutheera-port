export const projects = [
  {
    slug: "thaitober",
    featured: true,
    title: "Thaitober",
    summary: "A 31 day drawing challenge with a Thai theme.",
    note: "draw every day in October",
    context: "Personal project",
    role: "Built on my own",
    status: "Live",
    updated: "Oct, 2026",
    tags: ["Next.js", "tRPC", "Neon"],
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "shadcn/ui",
      "Neon Postgres",
      "Better Auth",
      "Cloudflare R2",
      "PostHog",
      "Tally",
      "Vercel",
    ],
    image: {
      src: "/thaitober.jpg",
      width: 1073,
      height: 630,
      alt: "Thaitober homepage with a grid of community drawings next to the title and a cartoon cat.",
    },
    links: [{ label: "Live site", href: "https://www.thaitober.com/" }],
    overview: [
      "Thaitober is a drawing challenge with a Thai theme. There are 31 prompts for the 31 days of October, starting on October 1. You can draw, paint or just sketch, and read each prompt any way you like. Then share your work on the site.",
      "I loved drawing long before I learned to code. This idea sat in my head for years. It's inspired by Artober, mixed with a Thai twist. This year my skills felt ready, I had the time, and tools have come far enough that I could build it much faster. So I went for it.",
    ],
    features: [
      {
        title: "Daily prompts",
        body: "A new drawing prompt is released every day.",
      },
      {
        title: "Easy to join",
        body: "Anyone can submit their work and take part.",
      },
      {
        title: "Community",
        body: "Like, comment on and follow other artists.",
      },
      {
        title: "More to come",
        body: "New features are on the way.",
      },
    ],
    decisions: [
      {
        title: "Design first, then the real system",
        body: [
          "The first version ran fully in the browser with mock data. I polished the UX and UI until it felt right, and only then connected the real backend.",
        ],
      },
      {
        title: "Working with AI agents",
        body: [
          "I used spec-driven development so the AI agent and I agreed on what to build, and its work was easy to review. Test-driven development added confidence, and I made sure I understood every test the AI wrote.",
          "I planned the work in Linear and wrote a skill that drafts stories and links them to branches and pull requests, so it's easy to trace a change back later.",
        ],
      },
      {
        title: "The stack",
        body: [
          "The T3 Stack (TypeScript, Next.js and tRPC) is familiar, quick to set up and a good fit for a small project. shadcn/ui keeps the interface clean and polished.",
          "Neon gives me serverless Postgres that is easy to manage and free. Better Auth handles sign in. Images go to Cloudflare R2, converted to `.webp` and always compressed under 1 MB. PostHog shows how people use the site, and Tally covers simple forms that don't need to live in the database.",
        ],
      },
    ],
    challenges: [],
    future: [],
  },
  {
    slug: "retirekub",
    title: "Retirekub",
    summary: "A simple one page retirement calculator made for first jobbers.",
    note: "retirement calculator",
    context: "Personal project",
    role: "Built on my own",
    status: "Live",
    updated: "Aug, 2026",
    tags: ["Astro", "Tailwind CSS", "Playwright"],
    stack: ["Astro", "TypeScript", "Tailwind CSS", "PostHog", "Playwright", "GitHub Pages"],
    image: {
      src: "/retirekub.png",
      width: 1200,
      height: 630,
      alt: "Retirekub preview card showing a result of 12.4 million baht against a 10 million baht goal.",
    },
    links: [
      { label: "Live site", href: "https://www.retirekub.com" },
      { label: "Source", href: "https://github.com/SutheeraP/retirekub" },
    ],
    overview: [
      "I'm only a few years into work and my salary isn't big yet, but I've started thinking about the future. I tried many retirement calculators, and most felt far from my reality. They assume your salary grows fast or that you already have a lot saved. As a first jobber, I don't.",
      "So I built a small one for myself and friends who are just starting out. We wanted to see where we'd be at 40 or 50 if we save and invest a certain amount each month. It's free, it's one page, and it doesn't collect anyone's data.",
    ],
    features: [
      {
        title: "Salary growth",
        body: "Set your own yearly raise.",
      },
      {
        title: "Saving as a percent of salary",
        body: "Savings and investments grow along with your income.",
      },
      {
        title: "Separate returns",
        body: "Savings and investments have their own returns, so you can see how compound interest works.",
      },
      {
        title: "Yearly view",
        body: "See your money year by year, or summed up by age range.",
      },
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
  {
    slug: "bb-shop",
    featured: true,
    title: "BB Shop",
    summary: "An order management system for my family's school uniform shop.",
    note: "made for mom",
    context: "Family business, BB Accessories",
    role: "Built on my own",
    status: "In use",
    updated: "Sep, 2026",
    tags: ["Next.js", "tRPC", "Supabase", "Electron"],
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "TanStack Query",
      "Supabase",
      "Tailwind CSS",
      "Zod",
      "Recharts",
      "Electron",
    ],
    overview: [
      "BB Accessories sells and embroiders school uniforms. Before this system, my mom tracked every order by hand, sometimes keeping two or three paper copies, and typed the totals into a spreadsheet to follow income and restock.",
      "BB Shop replaces that whole routine. I kept the scope tight on purpose. The goal was to fix the problems my mom actually had, not to build a general shop system.",
    ],
    features: [
      {
        title: "Orders",
        body: "Staff create orders with the student's name and the items, sizes and quantities.",
      },
      {
        title: "Drafts and approval",
        body: "Orders start as drafts. An approver checks and approves them before the receipt can be printed.",
      },
      {
        title: "Receipt printing",
        body: "A small Electron app on the shop computer picks up print jobs and sends them to a USB thermal printer.",
      },
      {
        title: "Reports",
        body: "Filter sales, export to CSV and see sales charts.",
      },
    ],
    decisions: [
      {
        title: "How I work with AI",
        body: [
          "My process changed a lot over the few months of this project. At first I wrote everything myself and used AI like a search engine. Then I started letting Claude Code build features, and found it made assumptions I didn't agree with.",
          "Now every feature starts with a spec. I break it into the smallest tasks I can, and keep one task to one plan, one diff and one commit. Small steps mean I read every diff and push back before anything is committed.",
        ],
      },
    ],
    challenges: [],
    future: [],
  },
  {
    slug: "duni",
    title: "Duni",
    summary: "A movie scheduler that plans the most films you can watch in a day with M-Pass.",
    note: "make the most of movie day",
    context: "Personal project",
    role: "Built on my own",
    status: "Live",
    updated: "Apr, 2025",
    tags: ["Next.js", "TypeScript", "i18n"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    links: [
      { label: "Live site", href: "https://duni.vercel.app" },
      { label: "Source", href: "https://github.com/SutheeraP/Duni" },
    ],
    overview: [
      "M-Pass is a Major Cineplex subscription that lets you watch as many movies as you want, with one rule. There must be a two hour gap between showings. As a regular M-Pass user, I found it hard to plan the best schedule by hand.",
      "Duni does the math for me. Add the movies you want to see, and it finds every schedule that fits the rule, from the time the cinema opens until it closes.",
    ],
    features: [
      {
        title: "Add movies",
        body: "Enter several movies and their showtimes.",
      },
      {
        title: "Plan the day",
        body: "See every schedule with no overlaps that keeps the two hour gap.",
      },
      {
        title: "Saved on your device",
        body: "Your movies are kept in local storage.",
      },
      {
        title: "Thai and English",
        body: "Switch between the two languages.",
      },
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
  {
    slug: "mearai",
    title: "Mearai",
    summary: "A Twitter clone I built during my internship to grow my full-stack skills.",
    note: "มีอะไร?",
    context: "Learning side quest during my internship at MOHARA",
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
      "A Twitter clone built with the T3 Stack as a side quest during my internship at MOHARA. It wasn't a client project. It was a way to improve my full-stack skills. I developed it on my own and kept improving its features, guided by MOHARA's documentation and mentorship.",
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
    featured: true,
    title: "Ducky Lucky",
    summary: "An online tic tac toe game with cards, special slots and cute graphics.",
    note: "play it with a friend",
    context: "Team project, Web Design and Development course",
    role: "Front-end",
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
      "Ducky Lucky is an online tic tac toe game with a twist, made as a team project for a web design and development course at university. We added a system of cards and special slots for extra fun, along with cute and distinctive graphics.",
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
    summary: "An information website for an open art and story project about a superhero school in 2099.",
    note: "#AHA_AU",
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
      "I developed the entire website, an information site about the academy's world. It helped me improve my web design and development skills. Check it out!",
    ],
    features: [
      {
        title: "The world",
        body: "Pages about the academy's courses, species, places, uniforms, mission, rules and team.",
      },
      {
        title: "How to join",
        body: "The terms and guides for creators.",
      },
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
  {
    slug: "coral-cojai",
    title: "Coral Cojai",
    summary: "An interactive museum kiosk website about Thailand's seas.",
    note: "caring for Thailand's seas",
    context: "Team project, Multimedia Programming course",
    role: "Most of the front-end mechanics and animations",
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
      "Our project is about caring for Thailand's seas, made in a kiosk format for museum displays. It's best viewed on a screen of 11 inches or larger, such as an iPad or laptop, and may not work well on phones.",
    ],
    decisions: [],
    challenges: [],
    future: [],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
