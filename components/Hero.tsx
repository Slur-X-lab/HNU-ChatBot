'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import pic1 from '../assets/pic-1.png'
import pic2 from '../assets/pic-2.png'
import pic3 from '../assets/pic-3.png'
import pic4 from '../assets/pic-4.png'
import pic5 from '../assets/pic-5.png'
import pic6 from '../assets/pic-6.png'
import pic7 from '../assets/pic-7.png'
import pic8 from '../assets/pic-8.png'
import pic10 from '../assets/pic-10.png'

const examples = [
  "Where is the Registrar's Office?",
  'When does enrollment open?',
  'How do I get my transcript?',
  'What are the library hours?',
  'Who is my academic advisor?',
]

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null)

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

  const floatingImages = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic10,
  ]

  const positions = [
    { top: '12%', side: 'left', offset: '6%' },
    { top: '18%', side: 'right', offset: '8%' },
    { top: '28%', side: 'left', offset: '10%' },
    { top: '35%', side: 'right', offset: '12%' },
    { top: '42%', side: 'left', offset: '14%' },
    { top: '50%', side: 'right', offset: '10%' },
    { top: '58%', side: 'left', offset: '12%' },
    { top: '65%', side: 'right', offset: '8%' },
    { top: '72%', side: 'left', offset: '6%' },
  ]

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
      </div>

      <div className={styles.floatingImages} aria-hidden>
        {floatingImages.map((src, i) => {
          const pos = positions[i] || positions[0]
          const floatClass = i % 2 === 0 ? styles.floatLeft : styles.floatRight
          return (
            <div
              key={i}
              className={`${styles.floatingImage} ${floatClass}`}
              style={{
                top: pos.top,
                [pos.side]: pos.offset,
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <Image src={src} alt={`Floating ${i + 1}`} width={200} height={200} />
            </div>
          )
        })}
      </div>

      <div className={styles.grid} aria-hidden>
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className={styles.dot} />
        ))}
      </div>
    </section>
  )
}
