import React, { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    num: '01', emoji: '🤖',
    title: 'AI-Powered CRM System',
    desc: 'Modular CRM with AI-driven lead scoring, email automation via Gmail/Outlook/IMAP, call workflows, and smart customer analytics dashboards.',
    tags: [{ label: 'Laravel', color: 'blue' }, { label: 'PHP', color: 'blue' }, { label: 'AI', color: 'purple' }, { label: 'Gmail API', color: 'green' }, { label: 'IMAP', color: 'green' }],
    accent: '#2563EB',
  },
  {
    num: '02', emoji: '🏥',
    title: 'Hospital Management System',
    desc: '4 custom systems for Irish hospitals covering patient registration, billing, lab management, and inventory with RBAC and real-time data access.',
    tags: [{ label: 'Laravel', color: 'blue' }, { label: 'PHP', color: 'blue' }, { label: 'JavaScript', color: 'green' }, { label: 'RBAC', color: 'pink' }],
    accent: '#059669',
  },
  {
    num: '03', emoji: '📧',
    title: 'AI Email Agent (n8n)',
    desc: 'Automated email classification and intelligent response workflows using n8n and AI models, significantly reducing manual communication overhead.',
    tags: [{ label: 'n8n', color: 'purple' }, { label: 'AI Models', color: 'purple' }, { label: 'Email APIs', color: 'green' }],
    accent: '#7C3AED',
  },
   {
    num: '04',   emoji: '⌚',
    title: 'AI-Powered AR Watch Try-ON-Platform',
    desc: 'TryMyWatch is a modern web-based e-commerce platform that enhances online watch shopping using Augmented Reality (AR) and AI-powered wrist detection. It allows users to virtually try watches on their wrist in real-time, solving the biggest limitation of traditional online shopping—lack of physical visualization.',
   tags: [
  { label: 'Laravel', color: 'blue' },
  { label: 'PHP', color: 'blue' },
  { label: 'JavaScript', color: 'blue' },
  { label: 'MySQL', color: 'blue' },
  { label: 'AI', color: 'purple' },
  { label: 'AR', color: 'purple' },
  { label: 'MediaPipe', color: 'green' },
  { label: '3D Viewer', color: 'green' },
  { label: 'Stripe API', color: 'green' },
],
  },
  {
  num: '05',
  emoji: '🛠️',
  title: 'Online Complaint Management System',
  desc: 'A web-based complaint management system where users can submit issues and track their status, while admins manage, respond, and resolve complaints efficiently through a dedicated dashboard.',
  tags: [
    { label: 'Laravel', color: 'blue' },
    { label: 'PHP', color: 'blue' },
    { label: 'MySQL', color: 'green' },
    { label: 'Bootstrap', color: 'purple' },
    { label: 'Admin Panel', color: 'amber' },
    { label: 'CRUD', color: 'pink' }
  ],
  accent: '#2563EB',
},
  {
    num: '06', emoji: '📋',
    title: 'WorkDo Dashboard',
    desc: 'Project and task management dashboard with user roles, dynamic UI components, and real-time team collaboration features.',
    tags: [{ label: 'Laravel', color: 'blue' }, { label: 'Bootstrap', color: 'green' }, { label: 'jQuery', color: 'amber' }, { label: 'RBAC', color: 'pink' }],
    accent: '#D97706',
  },
];

function ProjectCard({ p, index }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      className={`reveal reveal-scale reveal-d${index % 3}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className={styles.card}
        style={{
          '--mx': `${mousePos.x}%`,
          '--my': `${mousePos.y}%`,
          '--accent': p.accent,
          transform: hovered
            ? `perspective(1000px) rotateX(${(mousePos.y - 50) * -0.04}deg) rotateY(${(mousePos.x - 50) * 0.04}deg) translateY(-8px)`
            : 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
        }}
      >
        <div className={styles.cardGlow} style={{ opacity: hovered ? 1 : 0 }} />
        <div className={styles.topRow}>
          <div className={styles.emoji}>{p.emoji}</div>
          <div className={styles.number}>{p.num}</div>
        </div>
        <div className={styles.cardTitle}>{p.title}</div>
        <div className={styles.desc}>{p.desc}</div>
        <div className={styles.tags}>
          {p.tags.map(t => (
            <span key={t.label} className={`${styles.tag} ${styles[t.color]}`}>{t.label}</span>
          ))}
        </div>
        <div className={styles.cardBar} style={{ background: p.accent, transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }} />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.sectionLabel}>Key Projects</div>
      <h2>What I've Built</h2>
      <p className={styles.sub}>Production systems solving real problems — from Irish hospitals to AI-driven sales automation.</p>
      <div className={styles.grid}>
        {projects.map((p, i) => <ProjectCard key={p.num} p={p} index={i} />)}
      </div>
    </section>
  );
}
