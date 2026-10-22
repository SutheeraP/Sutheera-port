# sutheerap.vercel.app

My personal website, built with Next.js (App Router) and Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

| What | File |
| --- | --- |
| Name, links, résumé, email | `src/data/site.js` |
| Projects (order = homepage order and "Next project" order) | `src/data/projects.js` |
| Articles | `src/content/writing/` (see `index.js` for how to add one) |
| Colours, fonts, article/prose styles | `src/app/globals.css`, `tailwind.config.js` |

## Routes

- `/` – introduction, projects, recent writing
- `/projects` and `/projects/[slug]` – project list and detail pages
- `/writing` and `/writing/[slug]` – article list and article pages
- `/about` – background, experience and contact
