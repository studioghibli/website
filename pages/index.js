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

/*
 * Splitting by `kind` is all this page knows about the content. Ordering, year
 * formatting and every entry's markup belong to the renderers, so adding an
 * entry is a one-file edit in data/content.js.
 */
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

      {/*
        The page's only <h1>. Everything below it is <h2> sections and <h3>
        entries — the old layout emitted an <h1> per section heading and per
        card, about eleven per page (C5).
      */}
      <section className={heroStyles.hero} aria-label="Introduction">
        <div className={heroStyles.intro}>
          <p className={heroStyles.namePrecursor}>Hi, my name is</p>
          <h1 className={heroStyles.name}>Linda He.</h1>
          <p className={heroStyles.bio}>
            I&apos;m a senior studying computer science at Cornell University. I spend most of my
            time coding, teaching, and dancing.
          </p>
        </div>
        <div className={heroStyles.social}>
          <SocialLinks size={50} />
        </div>
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
