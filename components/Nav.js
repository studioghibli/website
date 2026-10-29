import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import navStyles from '../styles/nav.module.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

/* Track active section via IntersectionObserver for nav underline, resetting to null in hero. */
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

    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.3) {
        setCurrent(null);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [current, setCurrent];
}

/* Track scroll state (pastHero, overPhoto) for nav background and border rules. */
function useBarState(headerRef) {
  const [pastHero, setPastHero] = useState(false);
  const [overPhoto, setOverPhoto] = useState(false);

  useEffect(() => {
    const photoBands = Array.from(document.querySelectorAll('[data-photo-band]'));

    const onScroll = () => {
      const nowPastHero = window.scrollY > window.innerHeight * 0.15;
      const height = headerRef.current ? headerRef.current.getBoundingClientRect().height : 0;
      const foot = height - 1;

      setPastHero(nowPastHero);
      setOverPhoto(
        nowPastHero &&
          photoBands.some((band) => {
            const rect = band.getBoundingClientRect();
            return rect.top < foot && rect.bottom > foot;
          })
      );
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [headerRef]);

  return { pastHero, overPhoto };
}

/* Responsive navigation bar with active section indicator and mobile support. */
export default function Nav() {
  const headerRef = useRef(null);
  const [current, setCurrent] = useCurrentSection();
  const { pastHero, overPhoto } = useBarState(headerRef);
  const currentLabel = SECTIONS.find(({ id }) => id === current)?.label;

  return (
    <header
      ref={headerRef}
      className={`${navStyles.header} ${pastHero ? navStyles.pastHero : ''} ${
        overPhoto ? navStyles.overPhoto : ''
      } ${current ? navScrollActive(current) : ''}`}
    >
      <nav className={navStyles.bar} aria-label="Site">
        <Link href="/" className={navStyles.name}>
          Linda He
        </Link>

        <ul className={navStyles.links}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${navStyles.link} ${current === id ? navStyles.active : ''}`}
                aria-current={current === id ? 'location' : undefined}
                onClick={() => {
                  setCurrent(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <span className={navStyles.current}>{currentLabel}</span>
      </nav>
    </header>
  );
}

function navScrollActive(current) {
  return current ? navStyles.inSection : '';
}
