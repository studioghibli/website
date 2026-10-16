import sectionStyles from '../styles/section.module.css';

/*
 * A titled band plus its body — replaces Title.js, which rendered an <h1> per
 * section (C5: the page carried ~11 of them; the hero owns the only <h1> now).
 *
 * `showBackground` makes the section's ground transparent so the fixed page
 * backdrop reads through it. Experience and Projects want that; About keeps a
 * solid ground so the photo doesn't compete with the portrait sitting on it.
 * This used to happen by accident — opaque cards over a fixed body image — and
 * is deliberate here.
 *
 * `scroll-margin-top` is what replaces the anchor library's `offset` prop: the
 * fixed nav would otherwise cover the top of the section you just jumped to.
 * The property belongs on the scroll target, so it lives here rather than on
 * the anchors.
 */
export default function Section({ id, title, showBackground = false, children }) {
  return (
    <section
      id={id}
      className={`${sectionStyles.section} ${showBackground ? sectionStyles.open : ''}`}
    >
      <header className={sectionStyles.band}>
        <h2 className={sectionStyles.title}>{title}</h2>
        <hr className={sectionStyles.rule} />
      </header>
      <div className={sectionStyles.body}>{children}</div>
    </section>
  );
}
