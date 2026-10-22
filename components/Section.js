import sectionStyles from '../styles/section.module.css';

/* Renders a section with title band and body container. */
export default function Section({ id, title, showBackground = false, children }) {
  return (
    <section id={id} className={sectionStyles.section}>
      <header
        className={`${sectionStyles.band} ${showBackground ? sectionStyles.open : ''}`}
        data-photo-band={showBackground ? '' : undefined}
      >
        <h2 className={sectionStyles.title}>{title}</h2>
        <hr className={sectionStyles.rule} />
      </header>
      <div className={sectionStyles.ground}>
        <div className={sectionStyles.body}>{children}</div>
      </div>
    </section>
  );
}
