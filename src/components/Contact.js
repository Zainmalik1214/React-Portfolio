import React, { useState } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'zm8881665@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+92 322 4649724' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/zain-malik' },
  { icon: '📍', label: 'Location', value: 'Lahore, Pakistan' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.grid}>
        {/* Left Info */}
        <div>
          <div className={styles.label}>Contact</div>
          <h2 className={styles.heading}>Let's Work Together</h2>
          <p className={styles.sub}>
            Open to freelance projects, full-time roles, or just a friendly conversation about tech.
          </p>
          {contactInfo.map((c) => (
            <div key={c.label} className={styles.item}>
              <div className={styles.badge}>{c.icon}</div>
              <div>
                <div className={styles.itemLabel}>{c.label}</div>
                <div className={styles.itemVal}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Form */}
        <div className={`reveal ${styles.form}`}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label>Subject</label>
            <input
              name="subject"
              type="text"
              placeholder="Project inquiry..."
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            className={`${styles.sendBtn} ${sent ? styles.sent : ''}`}
            onClick={handleSend}
          >
            {sent ? 'Message Sent! ✓' : 'Send Message ✉️'}
          </button>
        </div>
      </div>
    </section>
  );
}
