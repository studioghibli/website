import Description from './Description';
import entryStyles from '../styles/entry.module.css';

/*
 * The body of one entry, shared by both renderers. Timeline and List differ
 * only in how they lay entries out and whether they draw a rail — the heading,
 * description, tags, media and links are identical, so they live here once
 * rather than in each renderer.
 */
function heading(entry) {
  if (entry.kind === 'experience') {
    return (
      <>
        <span className={entryStyles.role}>{entry.role}</span>
        <span className={entryStyles.org}>{entry.org}</span>
      </>
    );
  }

  return entry.name;
}

function Media({ item }) {
  if (item.type === 'video') {
    return (
      <video className={entryStyles.media} controls loop muted playsInline poster={item.poster}>
        <source src={item.src} type="video/mp4" />
      </video>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={entryStyles.media} src={item.src} alt={item.alt} />
  );
}

export default function Entry({ entry }) {
  const hasMedia = entry.media && entry.media.length > 0;

  return (
    <article className={entryStyles.entry}>
      <div className={entryStyles.text}>
        {/*
          The heading holds the entry's only <a>, and `::after` stretches it over
          this column (entry.module.css) rather than wrapping the card in a link
          — one well-named link instead of one giant anonymous one. A heading
          with no `url` renders as plain text, so a dead destination is never
          linked.
        */}
        <h3 className={entryStyles.heading}>
          {entry.url ? (
            <a className={entryStyles.headingLink} href={entry.url}>
              {heading(entry)}
            </a>
          ) : (
            heading(entry)
          )}
        </h3>

        <div className={entryStyles.description}>
          <Description>{entry.description}</Description>
        </div>

        {entry.tech && entry.tech.length > 0 && (
          <ul className={entryStyles.tags}>
            {entry.tech.map((tag) => (
              <li key={tag} className={entryStyles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        {entry.links && entry.links.length > 0 && (
          <ul className={entryStyles.links}>
            {entry.links.map((link) => (
              <li key={link.href}>
                <a className={entryStyles.extraLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasMedia && (
        <div className={entryStyles.mediaWrapper}>
          {entry.media.map((item) => (
            <Media key={item.src} item={item} />
          ))}
        </div>
      )}
    </article>
  );
}
