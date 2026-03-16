'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import logoSrc from '../assets/hnu-logo.png'

const links = ['Features', 'How It Works', 'About']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <Image src={logoSrc} alt="HNU logo" className={styles.logoImage} priority />
          <span className={styles.srOnly}>HNU-ChatBot</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => handleNav(l)} className={styles.link}>{l}</button>
            </li>
          ))}
        </ul>

        <button className={styles.cta} onClick={() => handleNav('how-it-works')}>
          Download
        </button>

        <button className={styles.burger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span className={menuOpen ? styles.lineOpen1 : styles.line} />
          <span className={menuOpen ? styles.lineOpen2 : styles.line} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobile}>
          {links.map(l => (
            <button key={l} onClick={() => handleNav(l)} className={styles.mobileLink}>{l}</button>
          ))}
          <button className={styles.mobileCta} onClick={() => handleNav('how-it-works')}>Try Now</button>
        </div>
      )}
    </nav>
  )
}
