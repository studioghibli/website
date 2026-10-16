import Image from 'next/image';

import socialStyles from '../styles/social.module.css';

/*
 * One list, rendered at two sizes (hero and footer), replacing the two
 * copy-pasted blocks in index.js that had drifted apart — the hero's Gmail icon
 * was 50x37.5 and the footer's was 40x30, and the two rows disagreed on
 * dimensions for every icon. This scales from one set.
 *
 * No `target="_blank"` (C12): users who want a new tab can ask for one.
 * Icons are `alt=""` because the anchor already carries the label — the old
 * markup had both, so screen readers announced every icon twice.
 *
 * A7 adds the résumé icon as one more array entry — no new markup.
 */
const LINKS = [
  { key: 'linkedin', href: 'https://www.linkedin.com/in/linda-fang-he/', src: '/linkedin.png', label: 'LinkedIn', ratio: 1 },
  { key: 'email', href: 'mailto:lfh32@cornell.edu', src: '/gmail.svg', label: 'Email', ratio: 0.75 },
  { key: 'github', href: 'https://github.com/studioghibli', src: '/github.svg', label: 'GitHub', ratio: 1 },
];

export default function SocialLinks({ size = 50 }) {
  return (
    <ul className={socialStyles.list}>
      {LINKS.map(({ key, href, src, label, ratio }) => (
        <li key={key} className={socialStyles.item}>
          <a className={socialStyles.link} href={href} aria-label={label}>
            <Image src={src} width={size} height={size * ratio} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
}
