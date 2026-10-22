import Head from 'next/head';

import About from '../components/About';
import EntryList from '../components/EntryList';
import Nav from '../components/Nav';
import Section from '../components/Section';
import SocialLinks from '../components/SocialLinks';
import Timeline from '../components/Timeline';
import content from '../data/content';
import { byKind } from '../lib/entries';
import heroStyles from '../styles/hero.module.css';

const experience = byKind(content, 'experience');
const projects = byKind(content, 'project');

export default function Home() {
  return (
    <>
      <Head>
        <title>Linda He</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <section className={heroStyles.hero} aria-label="Introduction">
        <div className={heroStyles.intro}>
          <h1 className={heroStyles.name}>Linda He.</h1>
          <p className={heroStyles.role}>Backend Software Engineer</p>
          <p className={heroStyles.bio}>
            I love creating things, from reliable backend systems to handmade sewing projects.
          </p>
        </div>
        <div className={heroStyles.social}>
          <SocialLinks size={24} muted />
        </div>
        <p className={heroStyles.credit}>
          <svg
            className={heroStyles.creditIcon}
            viewBox="0 0 24 24"
            width="13"
            height="13"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>
          Rattlesnake Lake
        </p>
      </section>

      <main>
        <Section id="about" title="About Me">
          <About />
        </Section>

        <Section id="experience" title="Experience" showBackground>
          <Timeline entries={experience} />
        </Section>

        <Section id="projects" title="Projects" showBackground>
          <EntryList entries={projects} />
        </Section>
      </main>

      <footer className={heroStyles.footer}>
        <div className={heroStyles.footerSocial}>
          <SocialLinks size={30} />
        </div>
        <p className={heroStyles.copyright}>&copy; Linda He</p>
      </footer>
    </>
  );
}
