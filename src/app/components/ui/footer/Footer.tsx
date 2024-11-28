'use client';
import { useState } from 'react';
import { FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';
import styles from './Footer.module.scss';
const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <footer className={styles.footer}>
      <div className={styles.linksLayout}>
        <div className={styles.footerLinks}>
          <div className={styles.logo}>Dev.Learn</div>
          <div className={styles.socialMedia}>
            <a href='https://www.youtube.com/@NikitaBenzin'>
              <FaYoutube />
            </a>
            <a href='https://t.me/benzingroupchannel'>
              <FaTelegramPlane />
            </a>
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.footerItem}>
            <ul>
              <li>General links</li>
              <li>
                <a href='/intensives'>Intensives</a>
              </li>
              <li>
                <a href='/premium'>Premium</a>
              </li>
              <li>
                <a href='/links'>Links</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <ul>
              <li>Company</li>
              <li>
                <a href='/docs/agreement'>Agreement</a>
              </li>
              <li>
                <a href='/docs/privacy'>Privacy</a>
              </li>
              <li>
                <a href='/docs/details'>Details</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Learning Platform</p>
        <p>Dev.Learn © 2024 All rights reserved.</p>
        <div className={styles.lightModeToggle}>
          <MdOutlineDarkMode />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
