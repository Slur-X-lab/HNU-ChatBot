import styles from './About.module.css'

const stats = [
  { val: '3,200+', label: 'Students served' },
  { val: '98%', label: 'Accuracy rate' },
  { val: '< 2s', label: 'Average response time' },
  { val: '24/7', label: 'Uptime availability' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.left}>
            <span className={styles.label}>About</span>
            <h2 className={styles.title}>
              Built for the
              <br />
              <span className={styles.serif}>modern campus.</span>
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.body}>
              HNU-ChatBot was born from a simple frustration students spending hours finding basic information that should take seconds. Long lines at the Registrar, unanswered emails to the OSA, confusion about enrollment deadlines.
            </p>
            <p className={styles.body}>
              We built an AI assistant trained specifically on university knowledge: offices, procedures, contacts, schedules, and policies. It&apos;s not a generic chatbot it knows your campus, your systems, and your processes.
            </p>
            <p className={styles.body}>
              HNU-ChatBot integrates directly with your university&apos;s information systems, keeping answers up-to-date in real time. Every student gets instant, accurate guidance any time of day.
            </p>
          </div>
        </div>

        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.val}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Ready to bring HNU-ChatBot to your university?</h3>
          <p className={styles.ctaSub}>Setup takes under a day. Students love it from day one.</p>
          <a href="mailto:hello@campusai.edu" className={styles.ctaBtn}>Get in touch →</a>
        </div>
      </div>
    </section>
  )
}
