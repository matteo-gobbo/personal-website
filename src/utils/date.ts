export function formatDate(date: Date | string): string {
  const d = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(d);
}
