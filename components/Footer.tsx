import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.dot} />
          <span className={styles.name}>HNU-ChatBot</span>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} HNU-ChatBot. Built for students, by students.</p>
        <div className={styles.links}>
          <a href="mailto:hello@campusai.edu">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
