import Image from 'next/image';

import aboutStyles from '../styles/about.module.css';

/*
 * Static prose — deliberately not a data kind, so it has no entry in
 * `data/content.js` and no renderer. Content is unchanged from the old
 * pages/about.js; A2 rewrites it and folds in a line on IDP and Rise Dance,
 * which were a section of their own until P2 dropped it.
 */
export default function About() {
  return (
    <div className={aboutStyles.binder}>
      <div className={aboutStyles.leftPane}>
        <Image
          className={aboutStyles.image}
          src="/linda.jpg"
          width={350}
          height={350}
          alt="photo of Linda"
        />
      </div>
      <div className={aboutStyles.rightPane}>
        <p className={aboutStyles.text}>
          Hi! I&apos;m Linda, a senior studying computer science at Cornell University. I love
          solving problems, whether it&apos;s working on a coding project, writing mathematical
          proofs, or figuring out whether a straw has one or two holes (it&apos;s two). I am
          pursuing a career in software development and I&apos;m particularly interested in cloud
          platforms and services.
        </p>
      </div>
    </div>
  );
}
