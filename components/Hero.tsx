'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import robot from '../assets/robot.png'

const examples = [
  "Where is the Registrar's Office?",
  'When does enrollment open?',
  'How do I get my transcript?',
  'What are the library hours?',
  'Who is my academic advisor?',
]

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsSmallMobile(window.innerWidth <= 480)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let i = 0
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const el = typingRef.current
      if (!el) return
      const word = examples[i]

      if (!deleting) {
        el.textContent = word.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === word.length) {
          deleting = true
          timer = setTimeout(tick, 1800)
          return
        }
      } else {
        el.textContent = word.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          i = (i + 1) % examples.length
        }
      }
      timer = setTimeout(tick, deleting ? 38 : 56)
    }

    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.badge}>AI-Powered · Always Available</div>
        <h1 className={styles.heading}>
          <span className={styles.headingLine}>Ask anything about your</span>
          <span className={styles.headingLineCampus}>campus</span>
        </h1>
        <p className={styles.sub}>
          Our AI-powered campus assistant provides instant answers about <span className={styles.subBold}>offices, schedules, events, and services — all in one place.</span>
        </p>

        <div className={styles.chatPreview}>
          <div className={styles.chatBar}>
            <span className={styles.typingText} ref={typingRef} />
            <span className={styles.cursor}>|</span>
          </div>
          <button
            className={styles.askBtn}
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ask →
          </button>
        </div>

        <p className={styles.hint}>Get Started Now!</p>
        
        <div className={styles.robotContainer}>
          <Image 
            src={robot} 
            alt="Robot assistant waving" 
            width={480} 
            height={480}
            className={styles.robot}
          />
        </div>
      </div>

      <div className={styles.grid} aria-hidden>
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className={styles.dot} />
        ))}
      </div>
    </section>
  )
}
