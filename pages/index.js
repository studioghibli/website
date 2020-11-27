
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import About from './about'
import Experience from './experience'
import Interests from './interests'

import Nav from './components/Nav'
import Title from './components/Title'

import { useEffect, useState } from 'react'


export default function Home() {

  const isMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true)
      return () => {
        setMounted(false)
      }
    });
    return mounted;
  }

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("lang", "en");
  }, [isMounted])

  return (
    <div>
      <Nav />

      <section className={styles.hero}>
        <div className={styles.intro}>
          <p className={styles.namePrecursor}>Hi, my name is</p>
          <h1 className={styles.name}>Linda He.</h1>
          <p className={styles.bio}>
            I'm a senior studying computer science at Cornell University.
            I spend most of my time coding, teaching, and dancing.
          </p>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/linda-fang-he/"
              target="_blank"
              aria-label="LinkedIn">
              <Image src={"/linkedin.png"} height={50} width={50} alt="LinkedIn logo" />
            </a>
          </div>
          <div className={styles.social}>
            <a href="mailto:lfh32@cornell.edu"
              target="_blank"
              aria-label="Gmail">
              <Image src={"/gmail.svg"} height={37.5} width={50} alt="Gmail logo" />
            </a>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/studioghibli"
              target="_blank"
              aria-label="GitHub">
              <Image src={"/github.svg"} height={50} width={50} alt="GitHub logo" />
            </a>
          </div>
        </div>
      </section>

      <main className={styles.main}>

        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Title
            title="Experience"
            width={350}
          />
          <Experience />
        </div>
        <div id="interests">
          <Title
            title="Interests"
            width={290}
          />
          <Interests />
        </div>
      </main>
    </div>
  )
}
