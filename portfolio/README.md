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
| Name, links, email | `src/data/site.js` |
| Projects (order = homepage order and "Next project" order) | `src/data/projects.js` |
| Articles | `src/content/writing/` |
| Colours, fonts, article/prose styles | `src/app/globals.css`, `tailwind.config.js` |

## Routes

- `/` – introduction, projects, recent writing
- `/projects` and `/projects/[slug]` – project list and detail pages
- `/writing` and `/writing/[slug]` – article list and article pages
- `/about` – background, experience and contact

## Adding a project

Add an entry to `projects` in `src/data/projects.js`. The array order is the order on the homepage, on `/projects`, and for the "Next project" link (the last project wraps around to the first). Set `featured: true` to show it on the homepage.

Only `slug`, `title` and `summary` are required. Any other field can be left out or empty and its section won't render. Text wrapped in `backticks` is shown as inline code.

`decisions`, `challenges` and `future` are empty on purpose. Fill them in only with things you've confirmed:

```js
decisions:  [{ title: "...", body: ["paragraph", "paragraph"] }],
challenges: [{ title: "...", body: "paragraph" }],
future:     ["idea", "idea"],
```

## Adding an article

1. Create a file in `src/content/writing/`, e.g. `my-article.js`, that default-exports a React component with the article body. Use plain elements (`<p>`, `<h2>`, `<ul>`, `<pre><code>`, `<blockquote>`…); the article page styles them.
2. Import it in `src/content/writing/index.js` and add an entry to `articles` (newest first):

```js
{
  slug: "my-article",
  title: "What I learned from …",
  description: "One or two sentences shown in lists and link previews.",
  date: "2025-06-01",
  project: "mearai",
  Body: MyArticle,
}
```

`date` (ISO format) and `project` (slug of a related project) are optional. The homepage shows the first three articles; `/writing` lists all of them.
