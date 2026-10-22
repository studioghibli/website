import Description from './Description';
import ExternalLinkMark from './ExternalLinkMark';
import entryStyles from '../styles/entry.module.css';

/* Renders media item, wrapping in a link if item.href is present. */
export function EntryMedia({ item }) {
  const media =
    item.type === 'video' ? (
      <video className={entryStyles.media} controls loop muted playsInline poster={item.poster}>
        <source src={item.src} type="video/mp4" />
      </video>
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={entryStyles.media} src={item.src} alt={item.alt} />
    );

  if (!item.href) return media;

  return (
    <a className={entryStyles.mediaLink} href={item.href}>
      {media}
    </a>
  );
}

/* Project card component. */
export default function ProjectEntry({ entry, padded = false }) {
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
      {entry.name}
      {linkIcon}
    </a>
  ) : (
    entry.name
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
      className={`${entryStyles.entry} ${entry.url ? entryStyles.linked : ''} ${
        padded ? entryStyles.padded : ''
      }`}
    >
      <div className={entryStyles.text}>
        <h3 className={entryStyles.heading}>{headingNode}</h3>
        {description}
        {tags}
        {links}
      </div>

      {media}
    </article>
  );
}
