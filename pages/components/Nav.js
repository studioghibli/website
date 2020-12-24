import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import navStyles from '../../styles/nav.module.css'

function toggleNav() {
  var drop = document.getElementsByClassName(navStyles.mobileLinks)[0];

  if (drop.style.display === "block") {
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
}

function NavMobile(props) {
  return (
    <div>
      <header className={navStyles.mobileHeader} style={{ backgroundColor: props.backgroundColor }}>
        <nav className={navStyles.mobileNav}>
          <a href="/" className={navStyles.name}>Linda He</a>
          <div className={navStyles.mobileLinks}>
            <AnchorLink offset='86' href="#about">About</AnchorLink>
            <AnchorLink offset='86' href="#journey">Journey</AnchorLink>
            <AnchorLink offset='86' href="#passions">Passions</AnchorLink>
          </div>
          <a className={navStyles.icon} onClick={toggleNav}>
            <Image src='/hamburger.svg'
              width='25px'
              height='25px' />
          </a>
        </nav>
      </header>
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
        <nav className={navStyles.navBar}>
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