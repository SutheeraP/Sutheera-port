export const articles = [];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
