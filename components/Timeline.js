import Entry from './Entry';
import { byStartYear, yearRange } from '../lib/entries';
import timelineStyles from '../styles/timeline.module.css';

/*
 * Experience renderer. Sorts a copy rather than the caller's array, so the
 * section order in index.js doesn't depend on `data/content.js` staying sorted.
 */
export default function Timeline({ entries }) {
  const ordered = [...entries].sort(byStartYear);

  return (
    <ol className={timelineStyles.timeline}>
      {ordered.map((entry) => (
        <li key={entry.id} className={timelineStyles.item}>
          <p className={timelineStyles.year}>{yearRange(entry)}</p>
          <div className={timelineStyles.content}>
            <Entry entry={entry} />
          </div>
        </li>
      ))}
    </ol>
  );
}
