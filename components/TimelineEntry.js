import Description from './Description';
import ExternalLinkMark from './ExternalLinkMark';
import entryStyles from '../styles/entry.module.css';
import { EntryMedia } from './ProjectEntry';

/*
 * Experience timeline entry component. Renders role, organization, year, tags,
 * and description in a split layout alongside the timeline rail.
 */
export default function TimelineEntry({ entry, year }) {
  const hasMedia = entry.media && entry.media.length > 0;
  const mediaHrefs = new Set((entry.media || []).map((item) => item.href).filter(Boolean));

  const linkIcon = entry.url && (
    <ExternalLinkMark className={entryStyles.linkIcon} size={17} />
  );

  const headingNode = entry.url ? (
    <a
      className={entryStyles.headingLink}
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={entryStyles.role}>{entry.role}</span>
      <span className={entryStyles.org}>{entry.org}</span>
      {linkIcon}
    </a>
  ) : (
    <>
      <span className={entryStyles.role}>{entry.role}</span>
      <span className={entryStyles.org}>{entry.org}</span>
    </>
  );

  const tags = entry.tech && entry.tech.length > 0 && (
    <ul className={entryStyles.tags}>
      {entry.tech.map((tag) => (
        <li key={tag} className={entryStyles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );

  const links = entry.links && entry.links.length > 0 && (
    <ul className={entryStyles.links}>
      {entry.links.map((link) => (
        <li
          key={link.href}
          className={mediaHrefs.has(link.href) ? entryStyles.linkForMedia : undefined}
        >
          <a
            className={entryStyles.extraLink}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkMark className={entryStyles.chipIcon} size={12} />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const media = hasMedia && (
    <div className={entryStyles.mediaWrapper}>
      {entry.media.map((item) => (
        <EntryMedia key={item.src} item={item} />
      ))}
    </div>
  );

  const description = (
    <div className={entryStyles.description}>
      <Description>{entry.description}</Description>
    </div>
  );

  return (
    <article
      className={`${entryStyles.entry} ${entryStyles.split} ${
        entry.url ? entryStyles.linked : ''
      }`}
    >
      <div className={entryStyles.meta}>
        <p className={entryStyles.year}>{year}</p>
        <h3 className={entryStyles.heading}>{headingNode}</h3>
        {tags}
      </div>

      <div className={entryStyles.text}>
        {description}
        {links}
        {media}
      </div>
    </article>
  );
}
