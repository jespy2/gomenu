import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => { 
  return (
    <footer className={styles.footerContainer}>
      <a
        href="https://www.linkedin.com/in/jamesespy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Handmade artisanal app by James Espy
      </a>
    </footer>
  )
}