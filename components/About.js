import Image from 'next/image';

import aboutStyles from '../styles/about.module.css';

/* Static prose section. */
export default function About() {
  return (
    <div className={aboutStyles.binder}>
      <div className={aboutStyles.leftPane}>
        <Image
          className={aboutStyles.image}
          src="/linda.jpg"
          width={350}
          height={465}
          alt="Linda wearing a baseball cap with two tennis balls."
        />
      </div>
      <div className={aboutStyles.rightPane}>
        <p className={aboutStyles.text}>
          Hi! I’m Linda, a backend software engineer who loves untangling complex problems.
          Whether it’s breaking a legacy service into microservices, figuring out how to sew a
          hat (pictured on the left), or debating whether a straw has one hole or two (I say
          two), I enjoy taking something complicated and breaking it down into manageable
          pieces. I’m especially drawn to the challenge of making systems more efficient,
          reliable, and easier to understand.
        </p>
      </div>
    </div>
  );
}
