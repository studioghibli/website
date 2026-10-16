import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import navStyles from '../styles/nav.module.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

/*
 * Which section the reader is currently in, for the underline.
 *
 * A band across the middle of the viewport is the whole mechanism: whichever
 * section crosses it becomes current. Preferred over scroll arithmetic because
 * it needs to know nothing about section heights or nav offsets, and it doesn't
 * run on every scroll event the way a scroll handler would.
 *
 * In the hero nothing is current, since the hero sits above the first section.
 * That's the intended state rather than a gap to fill.
 */
function useCurrentSection() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const targets = SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);

    if (targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return [current, setCurrent];
}

/* The nav floats over the hero photo and takes a solid ground once you're past
   it. Boolean state, so repeated scroll events past the threshold don't
   re-render. */
function usePastHero() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.15);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return pastHero;
}

export default function Nav() {
  const [current, setCurrent] = useCurrentSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const pastHero = usePastHero();

  return (
    <header className={`${navStyles.header} ${pastHero || menuOpen ? navStyles.solid : ''}`}>
      <nav className={navStyles.bar} aria-label="Site">
        <Link href="/">
          <a className={navStyles.name}>Linda He</a>
        </Link>

        <ul id="site-menu" className={`${navStyles.links} ${menuOpen ? navStyles.linksOpen : ''}`}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              {/*
                Plain anchors, no smooth-scroll library: `scroll-behavior` on
                <html> and `scroll-margin-top` on each section already do what
                the library's `offset` prop did (globals.css, section.module.css).
              */}
              <a
                href={`#${id}`}
                className={`${navStyles.link} ${current === id ? navStyles.active : ''}`}
                aria-current={current === id ? 'location' : undefined}
                onClick={() => {
                  // Also set on click: the observer only reports once the scroll
                  // has actually arrived, which is a beat too late for feedback.
                  setCurrent(id);
                  setMenuOpen(false);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/*
          A <button>, not the old href-less <a onClick> — that was unfocusable
          and unannounced, so the menu could not be opened from a keyboard (C1).
          The icon is a plain <img>: next/image wraps its output in a <div>, and
          a <div> inside a <button> is invalid. SVGs aren't optimised anyway.
        */}
        <button
          type="button"
          className={navStyles.toggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hamburger.svg" width="24" height="24" alt="" />
        </button>
      </nav>
    </header>
  );
}
