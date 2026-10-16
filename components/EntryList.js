import Entry from './Entry';
import { byStartYear } from '../lib/entries';
import listStyles from '../styles/list.module.css';

/*
 * Projects renderer. Flat list, newest first.
 *
 * The year is not shown here — every project shown has one, and the description
 * and screenshot carry more than a bare year does. If that stops being true,
 * Timeline's `yearRange` is the thing to reuse rather than reinvent.
 */
export default function EntryList({ entries }) {
  const ordered = [...entries].sort(byStartYear);

  return (
    <ol className={listStyles.list}>
      {ordered.map((entry) => (
        <li key={entry.id}>
          <Entry entry={entry} />
        </li>
      ))}
    </ol>
  );
}
