import styles from './Features.module.css'

const features = [
  {
    icon: '⊕',
    title: 'Campus Navigation',
    desc: 'Find any office, building, or facility on campus instantly. CampusAI knows every corner — from the Registrar to the Dean\'s office.',
    tags: ['Registrar', 'Library', 'Cafeteria', 'Clinic'],
  },
  {
    icon: '◎',
    title: 'Enrollment & Deadlines',
    desc: 'Never miss a deadline again. Ask about enrollment schedules, add/drop periods, tuition due dates, and graduation application windows.',
    tags: ['Enrollment', 'Deadlines', 'Tuition', 'Graduation'],
  },
  {
    icon: '△',
    title: 'Academic Records',
    desc: 'Instantly get guidance on requesting transcripts, grades, certifications, and Form 137. No more waiting in long queues.',
    tags: ['Transcript', 'Grades', 'Certification', 'Form 137'],
  },
  {
    icon: '□',
    title: 'Faculty & Contacts',
    desc: 'Look up faculty schedules, department contacts, and office hours in seconds. Connect with the right person on your first try.',
    tags: ['Faculty', 'Office Hours', 'Departments', 'Contacts'],
  },
  {
    icon: '◇',
    title: 'Student Services',
    desc: 'Scholarship applications, counseling appointments, ID renewal, and more — CampusAI guides you through every student service available.',
    tags: ['Scholarships', 'Counseling', 'Student ID', 'OSA'],
  },
  {
    icon: '●',
    title: '24 / 7 Availability',
    desc: 'Unlike offices, CampusAI never closes. Get answers at midnight before your exam, or early morning before the admin offices open.',
    tags: ['Always On', 'Instant', 'No Queue', 'Real-time'],
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.label} scroll-animate`}>Features</span>
          <h2 className={`${styles.title} scroll-animate`}>
            Everything campus,<br />
            <span className={styles.serif}>in one place.</span>
          </h2>
          <p className={`${styles.sub} scroll-animate`}>
            Built specifically for university life — CampusAI covers every question a student might have, from day one to graduation.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.card} scroll-animate`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <div className={styles.tags}>
                {f.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
