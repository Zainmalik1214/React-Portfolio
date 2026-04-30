import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

const categories = [
  { icon: '⚙️', bg: '#EFF6FF', title: 'Backend', tags: ['PHP', 'Laravel', 'OOP', 'MVC Architecture', 'REST APIs', 'Eloquent ORM'], color: 'blue', level: 90 },
  { icon: '🎨', bg: '#ECFDF5', title: 'Frontend', tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'Ajax'], color: 'green', level: 78 },
  { icon: '🗄️', bg: '#FFFBEB', title: 'Database & APIs', tags: ['MySQL', 'Postman','Srripe', 'Gmail API', 'Outlook API', 'IMAP'], color: 'amber', level: 85 },
  { icon: '🤖', bg: '#F5F3FF', title: 'Automation & AI', tags: ['n8n Workflows', 'AI/ML Integration', 'Lead Scoring', 'Email Automation'], color: 'purple', level: 72 },
  { icon: '🛠️', bg: '#FDF2F8', title: 'Tools & Dev', tags: ['Git', 'VS Code', 'RBAC', 'Real-time Dashboards'], color: 'pink', level: 88 },
  { icon: '🏥', bg: '#F9FAFB', title: 'Domains', tags: ['Hospital Management', 'CRM Systems', 'Billing Systems', 'Inventory'], color: 'gray', level: 92 },
];

const delays = [0, 1, 2, 0, 1, 2];

function SkillBar({ level, color }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimated(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={styles.barTrack}>
      <div
        className={`${styles.barFill} ${styles[color + 'Bar']}`}
        style={{ width: animated ? `${level}%` : '0%', transition: 'width 1.2s cubic-bezier(.22,1,.36,1)' }}
      />
      <span className={styles.barLabel}>{level}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.sectionLabel}>Technical Skills</div>
      <h2>What I Work With</h2>
      <p className={styles.sub}>A well-rounded stack covering backend, frontend, databases, APIs, and automation.</p>
      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className={`reveal reveal-scale reveal-d${delays[i]}`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.icon} style={{ background: cat.bg }}>{cat.icon}</div>
                <div className={styles.cardTitle}>{cat.title}</div>
                <SkillBar level={cat.level} color={cat.color} />
              </div>
              <div className={styles.tags}>
                {cat.tags.map((t, j) => (
                  <span
                    key={t}
                    className={`${styles.tag} ${styles[cat.color]}`}
                    style={{ animationDelay: `${j * 0.06}s` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
