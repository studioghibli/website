import TimelineEntry from './TimelineEntry';
import { byStartYear, yearRange } from '../lib/entries';
import timelineStyles from '../styles/timeline.module.css';

/* Renders experience timeline entries, sorted newest-first. */
export default function Timeline({ entries }) {
  const ordered = [...entries].sort(byStartYear);

  return (
    <ol className={timelineStyles.timeline}>
      {ordered.map((entry) => (
        <li key={entry.id} className={timelineStyles.item}>
          <TimelineEntry entry={entry} year={yearRange(entry)} />
        </li>
      ))}
    </ol>
  );
}
