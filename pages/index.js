import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import navStyles from '../styles/nav.module.css'
import styles from '../styles/Home.module.css'
import About from './about'
import Experience from './experience'
import Interests from './interests'
import { useEffect, useState } from 'react'

export default function Home() {

  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("");

  useEffect(() => {
    function onScroll() {
      const currentScroll = window.pageYOffset;
      const viewHeight = 0.2 * Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

      if (currentScroll >= viewHeight) {
        setHeaderBackgroundColor("black")
      } else {
        setHeaderBackgroundColor("")
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Linda He</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={navStyles.header} style={{ backgroundColor: headerBackgroundColor }}>
        <nav className={navStyles.navbar}>
          {/* name */}
          <div>
            <Link href="/">
              <a className={navStyles.name}>Linda He</a>
            </Link>
          </div>

          {/* links */}
          <div className={navStyles.anchorLinks}>
            <AnchorLink offset='100' href="#about">About</AnchorLink>
            <AnchorLink offset='100' href="#experience">Experience</AnchorLink>
            <AnchorLink offset='100' href="#interests">Interests</AnchorLink>
          </div>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.intro}>
          <p className={styles.namePrecursor}>Hi, my name is</p>
          <h1 className={styles.name}>Linda He.</h1>
          <p className={styles.bio}>
            I'm a senior studying computer science at Cornell University. I spend most of my time teaching, dancing, and snacking.
          </p>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/linda-fang-he/" target="_blank">
              <Image src={"/linkedin.png"} height={50} width={50} />
            </a>
          </div>
          <div className={styles.social}>
            <a href="mailto:lfh32@cornell.edu" target="_blank">
              <Image src={"/gmail.svg"} height={37.5} width={50} />
            </a>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/studioghibli" target="_blank">
              <Image src={"/github.svg"} height={50} width={50} />
            </a>
          </div>
        </div>
      </section>

      <main className={styles.main}>

        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="interests">
          <Interests />
        </div>
      </main>
    </div>
  )
}
