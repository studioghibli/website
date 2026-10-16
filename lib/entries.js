/*
 * Ordering and date formatting for content entries. Both renderers use these,
 * so the rules live here rather than being re-derived in each one.
 */

/*
 * `startYear` descending. Array.prototype.sort is stable (ES2019+), so
 * within-year ties keep the order they were authored in — which is why this
 * comparator deliberately looks at nothing but `startYear`.
 */
export function byStartYear(a, b) {
  return Number(b.startYear) - Number(a.startYear);
}

/*
 * Year-only dates. `endYear: null` means the role is current.
 *
 * ⚠️ Every entry authored so far has startYear === endYear, so a naive
 * `return startYear` passes every existing case and only breaks on the first
 * multi-year row (A4). The range branch is the one that matters.
 */
export function yearRange({ startYear, endYear }) {
  if (startYear === endYear) return startYear;
  if (!endYear) return `${startYear}–Present`;
  return `${startYear}–${endYear}`;
}

export function byKind(entries, kind) {
  return entries.filter((entry) => entry.kind === kind);
}
