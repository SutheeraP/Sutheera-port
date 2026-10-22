// Registry of articles. Newest first.
//
// To publish an article:
//   1. Create a file in this folder, e.g. `my-article.js`, that default-exports
//      a React component containing the article body. Use plain elements
//      (<p>, <h2>, <ul>, <pre><code>, <blockquote>…); the article page styles them.
//   2. Import it below and add an entry:
//        {
//          slug: "my-article",                 // URL: /writing/my-article
//          title: "What I learned from …",
//          description: "One or two sentences shown in lists and link previews.",
//          date: "2025-06-01",                 // optional, ISO format
//          project: "mearai",                  // optional, slug of a related project
//          Body: MyArticle,
//        }
//
// The homepage shows the first three entries; /writing lists all of them.

export const articles = [];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
