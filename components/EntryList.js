import ProjectEntry from './ProjectEntry';
import { byStartYear } from '../lib/entries';
import listStyles from '../styles/list.module.css';

/* Renders projects list, sorted newest-first. */
export default function EntryList({ entries }) {
  const ordered = [...entries].sort(byStartYear);

  return (
    <ol className={listStyles.list}>
      {ordered.map((entry) => (
        <li key={entry.id}>
          <ProjectEntry entry={entry} padded />
        </li>
      ))}
    </ol>
  );
}
