// Every project shown on the site. The array order is the order used on the
// homepage, on /projects, and by the "Next project" link at the bottom of each
// project page (the last project wraps around to the first).
//
// Only `slug`, `title` and `summary` are required. Any other field can be left
// out and its section simply won't render. Text wrapped in `backticks` is shown
// as inline code.

export const projects = [
  {
    slug: "mearai",
    title: "Mearai",
    summary: "A Twitter clone built on the T3 stack during my internship.",
    note: "มีอะไร?",
    context: "Internship project at MOHARA",
    role: "Built on my own, with guidance from MOHARA's docs and mentors",
    status: "Live",
    tags: ["Next.js", "tRPC", "Postgres"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "Zod",
      "Prisma",
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
      "Mearai (มีอะไร, roughly “what's up?” in Thai) is a small Twitter-style app: you sign up, post short messages with up to four images, like other people's posts and search the feed.",
      "I built it during my software engineering internship at MOHARA as a way to learn full-stack development on the T3 stack. Because the product itself is familiar, most of the work is in the layers underneath it: authentication, the database, file storage and a typed API between them.",
    ],
    features: [
      {
        title: "Accounts and profiles",
        body: "Sign up, sign in and edit your profile. Each user has a profile page at their username that lists their posts and the posts they've liked.",
      },
      {
        title: "Posts with images",
        body: "Create, edit and delete posts with up to four images. Removing an image while editing also removes the file from storage.",
      },
      {
        title: "Likes and search",
        body: "Like and unlike posts, and search posts from a dedicated search page.",
      },
    ],
    decisions: [
      {
        title: "A typed API with tRPC and Zod",
        body: [
          "The server exposes tRPC procedures instead of hand-written REST routes. Every input is described with a Zod schema (for example, a post is `text` plus at most four image keys), so the same definition validates the request on the server and types the call on the client through React Query.",
        ],
      },
      {
        title: "Images go straight from the browser to S3",
        body: [
          "When a user attaches images, the server only creates presigned upload URLs, one per file, each with a random key under `images/`. The browser uploads the files directly to S3 and the post stores just the keys.",
          "The server never has to stream image bytes, which suits serverless functions. The trade-off is that the upload and the database write are separate steps, so an upload can succeed for a post that is never saved.",
        ],
      },
      {
        title: "Clerk owns identity, Postgres owns relationships",
        body: [
          "Sign-in is handled by Clerk, but posts and likes need to reference users in the database. A webhook endpoint verifies Clerk's signed events with Svix and mirrors `user.created`, `user.updated` and `user.deleted` into a `User` table keyed by the Clerk ID.",
          "Next.js middleware redirects anyone who isn't signed in to the sign-in page, except on the sign-in, sign-up and webhook routes.",
        ],
      },
      {
        title: "Serverless Postgres through Prisma",
        body: [
          "The database is Neon's serverless Postgres, accessed through Prisma's Neon driver adapter. The Prisma client is cached on `globalThis` in development so hot reloads don't keep opening new connections.",
        ],
      },
    ],
    challenges: [
      {
        title: "Users without a username",
        body: "Test accounts created from Clerk's dashboard have a first name but no username. The webhook falls back to the first name so the `User` row can still be created.",
      },
      {
        title: "Keeping storage and the database in step",
        body: "Editing a post compares the old image keys with the new ones and deletes the removed files from S3; deleting a post removes all of its images.",
      },
    ],
    future: [
      "Every procedure checks for a signed-in user on its own. Moving that into a shared protected procedure would remove the repetition.",
      "Likes have no unique constraint on the post and user pair, so the database itself doesn't prevent a double like.",
      "Clean up uploaded images that never end up attached to a saved post.",
    ],
  },
  {
    slug: "ducky-lucky",
    title: "Ducky Lucky",
    summary: "Online tic tac toe with a twist: cards, special slots and a turn timer.",
    note: "play it with a friend",
    context: "Team project",
    status: "Live",
    tags: ["Next.js", "Firebase", "TypeScript"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "NextAuth",
      "Figma",
      "Vercel",
    ],
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
      "Ducky Lucky is an online, two-player tic tac toe game with extra rules on top: players draw cards with special skills, the board has special slots and events, and every turn is on a timer. It has cute, distinctive graphics to match.",
      "We built it as a team. Making a game that two people play at the same time, in two different browsers, taught me a lot, and so did working on it together.",
    ],
    features: [
      {
        title: "Accounts",
        body: "Register and sign in with a username or email, pick a profile picture and change your username.",
      },
      {
        title: "Rooms",
        body: "Create a room and invite someone, join an existing room, or jump into a random one.",
      },
      {
        title: "Cards and special events",
        body: "On top of placing X or O, players use cards with special skills, such as blocking cards, a blindness effect or extra action points, and the board has special slots and events.",
      },
      {
        title: "Turn timer, scores and leaderboard",
        body: "Each turn counts down, scores are tracked during a match and a global leaderboard ranks players. In-game tutorials explain the cards, events and rules.",
      },
    ],
    decisions: [
      {
        title: "The database is the game state",
        body: [
          "There is no separate game server. Each match lives at `Matching/{roomId}` in Firebase Realtime Database, split into small nodes such as `board`, `currentTurn`, `time`, `card`, `effect`, `score` and `winner`.",
          "Each player's browser subscribes to those nodes and re-renders when they change. A move is just a write, and both players see it as soon as Firebase pushes the update.",
        ],
      },
      {
        title: "A waiting room before the match",
        body: [
          "Rooms start under `waitingRoom`. When a second player joins, the room is copied into `Matching` with both players and starting scores, and the waiting entry is removed. Keeping the lobby separate makes it easy to list open rooms and pick a random one.",
        ],
      },
      {
        title: "NextAuth in front of Firebase Authentication",
        body: [
          "Sign-in uses a NextAuth credentials provider whose `authorize` step signs in with Firebase email and password. Firebase keeps the accounts, and NextAuth gives the Next.js app its session.",
        ],
      },
    ],
    challenges: [
      {
        title: "Keeping two browsers in agreement",
        body: "Turns, card effects, the timer and the winner all have to look the same for both players, and both browsers write to the same match. Card effects, for example, are written to the match and then shown to the other player through a short-lived notification node that is removed after it has been displayed.",
      },
    ],
    future: [
      "The turn timer is counted down by writing the remaining time to the database every second. Storing a turn deadline once and letting each client count down locally would mean far fewer writes.",
      "Game rules run in the browser. Checking moves with database rules or a server function would make the game harder to cheat.",
    ],
  },
  {
    slug: "visualdsa",
    title: "visualdsa",
    summary: "A Python library that draws data structures and sorting steps for students.",
    note: "made for a class",
    context: "Teaching assistant, Data Structures and Algorithms, KMITL",
    status: "Published on PyPI",
    tags: ["Python", "Matplotlib"],
    stack: ["Python", "Matplotlib", "PyPI"],
    links: [{ label: "PyPI", href: "https://pypi.org/project/visualdsa/" }],
    overview: [
      "visualdsa turns the data structures students write in class into pictures. Pass it a stack, a circular queue or a singly linked list and it draws it with Matplotlib; pass it a list of numbers and it shows each step of bubble sort, selection sort or insertion sort.",
      "I made it while working as a teaching assistant for the Data Structures and Algorithms course at KMITL, where I did code reviews and helped students debug their algorithms. The goal was to help students understand these structures by seeing them.",
    ],
    features: [
      {
        title: "Data structures",
        body: "`showStack`, `showCircularQueue` (including where the front and rear pointers are) and `showSinglyLinkedList`.",
      },
      {
        title: "Sorting",
        body: "`bubbleSort`, `selectionSort` and `insertionSort` draw the array at each step of the algorithm.",
      },
    ],
    code: {
      caption: "Visualising a student's own stack class",
      language: "python",
      source: `import visualdsa as vd

my_stack = ArrayStack()
my_stack._data = [3, 2, 1]

vd.showStack(my_stack)`,
    },
    decisions: [
      {
        title: "Work with the students' own classes",
        body: [
          "The library doesn't ship its own stack or linked list types. Instead it reads the attributes used by the classes taught in the course, such as `_data`, `_front`, `_rear`, `_head` and `_next`, so students can visualise the code they are actually writing.",
          "The trade-off is that it depends on those naming conventions. A class that names its fields differently won't draw.",
        ],
      },
    ],
    challenges: [
      {
        title: "Names that say exactly what they draw",
        body: "Early versions had `showQueue()` and `showLinkedList()`. Since the course uses a circular queue and a singly linked list, I renamed them to `showCircularQueue()` and `showSinglyLinkedList()` so the function name matches the structure.",
      },
      {
        title: "Helpful output for broken input",
        body: "A linked list's stored count can disagree with the nodes that are actually linked together, especially while a student is still debugging. The visualiser checks for that mismatch and shows a more informative warning.",
      },
    ],
  },
  {
    slug: "apex-heroic-academy",
    title: "Apex Heroic Academy",
    summary: "A world-guide website for an open art and story project set in 2099.",
    note: "designed and built by me",
    context: "Open community project",
    role: "Designed and built the whole website",
    status: "Live",
    tags: ["Next.js", "Framer Motion", "Figma"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
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
      "Apex Heroic Academy is an open project that invites anyone to join in through #AHA_AU on Facebook, Twitter and Instagram. The story is about a school for superheroes in the year 2099, and players create their own characters by drawing or writing, then play alongside each other.",
      "The website is where the world is written down: its courses, species, places and rules. I designed it in Figma and built all of it.",
    ],
    features: [
      {
        title: "A guide to the world",
        body: "Pages for the academy's courses (lectures, labs and clubs), its species, places, uniforms, mission, rules and team.",
      },
      {
        title: "How to join",
        body: "A joining section with registration, terms, and guides for creators.",
      },
    ],
    decisions: [
      {
        title: "Design first, then build",
        body: [
          "The whole site was designed in Figma first, then built with Next.js and Tailwind CSS, with Framer Motion for animation. Each part of the world has its own route, such as `/courses/lecture` or `/species/magic`, so every page can be linked to directly.",
        ],
      },
    ],
    challenges: [
      {
        title: "Being both the designer and the developer",
        body: "Doing both halves of the work improved my web design skills in Figma and made me more confident turning a design into a working site.",
      },
    ],
  },
  {
    slug: "coral-cojai",
    title: "Coral Cojai",
    summary: "An interactive museum kiosk about caring for Thailand's seas.",
    note: "best on an iPad",
    context: "Multimedia Programming course, with the School of Architecture, Art, and Design",
    role: "One of six web developers; design students designed the site",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "/coral-mockup.png",
      width: 4233,
      height: 3803,
      alt: "Coral Cojai kiosk screens with illustrated sea scenes on an iPad.",
    },
    links: [
      { label: "Krabi experience", href: "https://coralcorjai.netlify.app/landingkrabi/main/" },
      { label: "Similan experience", href: "https://coralcorjai.netlify.app/landingsimilan/main/" },
      { label: "Source", href: "https://github.com/professorkong/SDG" },
    ],
    overview: [
      "Coral Cojai is about looking after Thailand's seas. It was made for a museum display in a kiosk format, with two experiences, one for Krabi and one for Similan, and small games along the way.",
      "It came from a collaboration between two faculties: students from the School of Architecture, Art, and Design designed the website, and our IT team brought it to life.",
    ],
    decisions: [
      {
        title: "One screen size, on purpose",
        body: [
          "Because it runs on a kiosk, the site is built for a single 1194 × 834 viewport, the size of an iPad in landscape, rather than being responsive, so every layout is positioned for one known screen.",
          "The trade-off is that it doesn't work well on phones, so it's best viewed on a screen of about 11 inches or larger.",
        ],
      },
      {
        title: "Plain HTML, CSS and JavaScript",
        body: [
          "There is no framework: pages, animations and the small games are written directly in HTML, CSS and JavaScript.",
        ],
      },
    ],
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
