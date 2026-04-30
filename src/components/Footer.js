import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Crafted with care by{' '}
        <span className={styles.name}>Zain ul Abadin</span>
        {' '}·{' '}PHP Laravel Developer{' '}·{' '}Lahore, Pakistan{' '}·{' '}
      </p>
    </footer>
  );
}
