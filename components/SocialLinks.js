import Image from 'next/image';

import socialStyles from '../styles/social.module.css';

/* Shared social / contact links list for hero and footer. */
const LINKS = [
  { key: 'linkedin', href: 'https://www.linkedin.com/in/linda-fang-he/', src: '/linkedin.png', label: 'LinkedIn', ratio: 1 },
  { key: 'email', href: 'mailto:lfh32@cornell.edu', src: '/gmail.svg', label: 'Email', ratio: 0.75 },
  { key: 'github', href: 'https://github.com/studioghibli', src: '/github.svg', label: 'GitHub', ratio: 1 },
  { key: 'resume', href: '/resume.pdf', src: '/resume.svg', label: 'Résumé (PDF)', ratio: 512 / 448 },
];

export default function SocialLinks({ size = 50, muted = false }) {
  return (
    <ul className={`${socialStyles.list} ${muted ? socialStyles.muted : ''}`}>
      {LINKS.map(({ key, href, src, label, ratio }) => {
        const external = /^https?:/i.test(href);

        return (
          <li key={key} className={socialStyles.item}>
            <a
              className={socialStyles.link}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Image src={src} width={size} height={size * ratio} alt="" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
