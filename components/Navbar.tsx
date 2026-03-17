'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import logoSrc from '../assets/hnu-logo.png'

const links = ['Home', 'Features', 'How It Works', 'About']

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
    if (id === 'Home') {
      window.location.href = '/'
    } else if (id === 'chat') {
      window.location.href = '/chat'
    } else {
      // Check if we're on the chat page
      if (window.location.pathname === '/chat') {
        // Redirect to main page with hash for the specific section
        window.location.href = `/#${id.toLowerCase().replace(/\s+/g, '-')}`
      } else {
        // On main page, scroll to section
        document.getElementById(id.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })
      }
    }
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

        <div className={styles.buttonGroup}>
          <button className={styles.chatButton} onClick={() => handleNav('chat')}>
            Chat Now
          </button>
          <button className={styles.cta} onClick={() => handleNav('how-it-works')}>
            Download
          </button>
        </div>

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
          <button className={styles.mobileChatButton} onClick={() => handleNav('chat')}>Chat Now</button>
          <button className={styles.mobileCta} onClick={() => handleNav('how-it-works')}>Download</button>
        </div>
      )}
    </nav>
  )
}
