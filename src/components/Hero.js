import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const ROLES = ['PHP Laravel Developer', 'Backend Engineer', 'React Developer'];

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: Math.random() * 6 + 5,
    delay: Math.random() * 4,
    dx: (Math.random() - 0.5) * 60,
    dy: (Math.random() - 0.5) * 60,
  }));
  return (
    <div className={styles.particles} aria-hidden>
      {particles.map(p => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            width: p.size, height: p.size,
            left: `${p.x}%`, top: `${p.y}%`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            '--dx': `${p.dx}px`, '--dy': `${p.dy}px`,
          }}
        />
      ))}
    </div>
  );
}

function TypedRole() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = ROLES[idx];
    let timer;
    if (!deleting) {
      if (charIdx < current.length) {
        timer = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 80);
      } else {
        timer = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 45);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx]);

  return (
    <div className={styles.typedRole}>
      <span>{text}</span>
      <span className={styles.cursor}>|</span>
    </div>
  );
}

function CountUp({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setVal(target); clearInterval(timer); }
          else setVal(Math.floor(start));
        }, 35);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Particles />
      <div className={styles.heroBg} />

      <div className={styles.heroFloat}>
        <div className={styles.orbitRing} />
        <div className={styles.orbitRing2} />
        <div className={styles.heroAvatar}>ZA</div>
        <div className={styles.orbitDot} style={{ '--angle': '0deg' }} />
        <div className={styles.orbitDot} style={{ '--angle': '120deg' }} />
        <div className={styles.orbitDot} style={{ '--angle': '240deg' }} />
      </div>

      <div className={styles.heroContent}>
        {/* <div className={styles.badge}>
          <span className={styles.dot} /> Available for new opportunities
        </div> */}

        <h1 className={styles.heading}>
          <span className={styles.line1}>Zain ul</span>
          <br />
          <span className={styles.gradientName}>Abadin</span>
        </h1>

        <TypedRole />

        <p className={styles.sub}>
          PHP Laravel Developer crafting scalable web applications,
          hospital management systems, and AI-powered CRMs with
          clean code and modern architecture.
        </p>

        <div className={styles.btns}>
          <a href="#projects" className={styles.btnPrimary}>
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" className={styles.btnOutline}>Get in Touch</a>
        </div>

        {/* <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNum}><CountUp target={2} suffix="+" /></div>
            <div className={styles.statLabel}>Years Exp.</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}><CountUp target={4} suffix="+" /></div>
            <div className={styles.statLabel}>Live Systems</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>3.02</div>
            <div className={styles.statLabel}>CGPA / 4.0</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
