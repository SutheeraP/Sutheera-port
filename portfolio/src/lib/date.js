export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
