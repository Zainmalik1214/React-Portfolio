import React from 'react';
import styles from './Experience.module.css';

const jobs = [
  {
    title: 'Associate Software Developer',
    company: 'Custom Software — Lahore, Pakistan',
    date: 'Dec 2024 – Present',
    color: 'blue',
    bullets: [
      'Develop and maintain 4 hospital management systems deployed in Ireland, covering patient registration, appointments, billing, inventory, and lab modules.',
      'Built an AI-powered CRM with lead scoring, Gmail/Outlook/IMAP email automation, call workflows, and customer analytics dashboards.',
      'Designed and maintained secure RESTful PHP APIs with comprehensive Postman testing.',
      'Implemented Role-Based Access Control (RBAC) and real-time dashboards across all platforms.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Custom Software — Lahore, Pakistan',
    date: 'Aug 2024 – Nov 2024',
    color: 'green',
    bullets: [
      'Developed responsive Laravel web applications, converting client requirements into functional, user-friendly websites.',
      'Debugged and optimized backend code and built database-driven features to improve performance and reliability.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.sectionLabel}>Work Experience</div>
      <h2>My Journey</h2>
      <p className={styles.sub}>Building production systems from day one — real impact in real healthcare environments.</p>
      <div className={styles.timeline}>
        {jobs.map((job, i) => (
          <div key={job.title} className={`reveal reveal-d${i}`} style={{ '--i': i }}>
            <div className={styles.item}>
              <div className={`${styles.dot} ${styles[job.color]}`} />
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <div className={styles.jobTitle}>{job.title}</div>
                    <div className={`${styles.company} ${styles[job.color + 'Text']}`}>{job.company}</div>
                  </div>
                  <span className={styles.date}>{job.date}</span>
                </div>
                <ul className={styles.bullets}>
                  {job.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
