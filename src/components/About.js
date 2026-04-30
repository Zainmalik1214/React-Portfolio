import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>

        {/* Left Card */}
        <div className={`reveal ${styles.left}`}>
          <div className={styles.card}>
            <div className={styles.avatar}>ZA</div>
            <div className={styles.name}>Zain ul Abadin</div>
            <div className={styles.role}>PHP Laravel Developer</div>
            <div className={styles.contacts}>
              {[
                { icon: '📧', text: 'zm8881665@gmail.com' },
                { icon: '📱', text: '+92 322 4649724' },
                { icon: '📍', text: 'Lahore, Pakistan' },
                { icon: '💼', text: 'linkedin.com/in/zain-malik', href: 'https://linkedin.com/in/zain-malik' },
              ].map(({ icon, text, href }) => (
                <div key={text} className={styles.contactRow}>
                  <div className={styles.contactIcon}>{icon}</div>
                  {href
                    ? <a href={href} target="_blank" rel="noreferrer">{text}</a>
                    : <span>{text}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.eduBlock}>
            <div className={styles.eduLabel}>Education</div>
            <div className={styles.eduName}>BS Computer Science – UMT Lahore</div>
            <div className={styles.eduSub}>2022 – 2026 &nbsp;|&nbsp; CGPA: 3.02 / 4.00</div>
            <div className={styles.eduName} style={{ marginTop: '0.75rem' }}>
              Intermediate (FSc) – Punjab College
            </div>
            <div className={styles.eduSub}>2020 – 2022</div>
          </div>
        </div>

        {/* Right Text */}
        <div className={`reveal reveal-d1 ${styles.text}`}>
          <div className={styles.sectionLabel}>About Me</div>
          <h2>Building Digital Solutions That Scale</h2>
          <p>
            I'm a PHP Laravel Developer with nearly 2 years of hands-on experience building
            scalable web applications. I specialize in hospital management systems deployed
            across Ireland, and AI-powered CRMs with intelligent automation.
          </p>
          <p>
            Passionate about clean code, performance optimization, and delivering user-centric
            solutions. I bridge backend architecture with intuitive front-end experiences,
            always keeping real users in mind.
          </p>
          <p>
            Currently pursuing my BS in Computer Science at UMT Lahore while working full-time
            at Custom Software — balancing academic rigor with real-world engineering
            challenges every day.
          </p>
        </div>
      </div>
    </section>
  );
}
