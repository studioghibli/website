import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import navStyles from '../../styles/nav.module.css'

function NavMobile(props) {
  return (
    <div>
    </div>
  )
}

function NavDesktop(props) {
  return (
    <div>
      <Head>
        <title>Linda He</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={navStyles.header} style={{ backgroundColor: props.backgroundColor }}>
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
            <AnchorLink offset='100' href="#journey">Journey</AnchorLink>
            <AnchorLink offset='100' href="#passions">Passions</AnchorLink>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default function Nav(props) {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("");

  useEffect(() => {
    function onScroll() {
      const currentScroll = window.pageYOffset;
      const viewHeight = 0.15 * Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

      if (currentScroll > viewHeight) {
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

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  });

  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width < 1000 ? <NavMobile backgroundColor={headerBackgroundColor} /> : <NavDesktop backgroundColor={headerBackgroundColor} />
}