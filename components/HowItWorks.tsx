'use client'
import { useState } from 'react'
import styles from './HowItWorks.module.css'

const demoMessages: { role: 'user' | 'bot'; text: string }[] = [
  { role: 'user', text: 'Where is the Registrar\'s Office?' },
  { role: 'bot', text: 'The Registrar\'s Office is located at the Bates Building, Main Floor, Right side of the stairs. It\'s open Monday–Friday, 8:00 AM to 5:00 PM. You can also reach them at registrar@university.edu.' },
  { role: 'user', text: 'How do I request a copy of my transcript?' },
  { role: 'bot', text: 'To request your official transcript: (1) Visit the Registrar\'s Office or the student portal at my.university.edu, (2) Fill out the Transcript Request Form, (3) Pay the ₱150 fee at the Cashier\'s Office, (4) Pick it up within 3–5 business days. Rush requests are available for an additional fee.' },
]

const steps = [
  { num: '01', title: 'Ask in plain language', desc: 'Type your question naturally no special commands or keywords needed. Just ask like you\'d ask a friend.' },
  { num: '02', title: 'AI understands context', desc: 'HNU-ChatBot is trained on your university\'s information: offices, schedules, forms, contacts, and policies.' },
  { num: '03', title: 'Get accurate answers', desc: 'Receive clear, specific answers with locations, contact details, and step-by-step instructions when needed.' },
]

export default function HowItWorks() {
  const [shown, setShown] = useState(0)

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={`${styles.label} scroll-animate-left`}>How It Works</span>
          <h2 className={`${styles.title} scroll-animate-left`}>
            Simple as asking<br />
            <span className={styles.serif}>a friend.</span>
          </h2>
          <p className={`${styles.sub} scroll-animate-left`}>
            No forms, no waiting, no phone tag. HNU-ChatBot understands natural language and knows your campus inside and out.
          </p>

          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={i} className={`${styles.step} scroll-animate-left`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <span className={styles.stepNum}>{s.num}</span>
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={`${styles.chatWindow} scroll-animate-right`}>
            <div className={styles.chatHeader}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
              <span className={styles.chatTitle}>HNU-ChatBot</span>
            </div>

            <div className={styles.chatBody}>
              <div className={styles.botIntro}>
                <span className={styles.avatar}>HNU</span>
                <p className={styles.introMsg}>Hi! I&apos;m HNU-ChatBot. Ask me anything about your university — I&apos;m here to help 24/7.</p>
              </div>

              {demoMessages.slice(0, shown + 1).map((m, i) => (
                <div key={i} className={m.role === 'user' ? styles.userMsg : styles.botMsg}>
                  {m.role === 'bot' && <span className={styles.avatarSmall}>HNU</span>}
                  <p className={styles.msgText}>{m.text}</p>
                </div>
              ))}

              {shown < demoMessages.length - 1 && (
                <button
                  className={styles.nextBtn}
                  onClick={() => setShown(v => Math.min(v + 1, demoMessages.length - 1))}
                >
                  Continue demo →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
