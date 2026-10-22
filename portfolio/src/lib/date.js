// "2025-06-01" -> "Jun 2025". Parsed as UTC so the month never shifts by timezone.
export function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
