/* Entry sorting and date formatting helpers. */

export function byStartYear(a, b) {
  return Number(b.startYear) - Number(a.startYear);
}

export function yearRange({ startYear, endYear }) {
  if (startYear === endYear) return startYear;
  if (!endYear) return `${startYear} – Present`;
  return `${startYear} – ${endYear}`;
}

export function byKind(entries, kind) {
  return entries.filter((entry) => entry.kind === kind);
}
