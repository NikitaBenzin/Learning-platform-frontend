'use client';
import { Moon, Send, SquarePlay } from 'lucide-react';
import styles from './Footer.module.scss';
import { COMPANY_LINKS, GENERAL_LINKS } from './footer.data';
const Footer = () => {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <footer className={styles.footer}>
      <div className={styles.linksLayout}>
        <div className={styles.footerLinks}>
          <div className={styles.logo}>Dev.Learn</div>
          <div className={styles.socialMedia}>
            <a href='https://www.youtube.com/@NikitaBenzin'>
              <SquarePlay />
            </a>
            <a href='https://t.me/benzingroupchannel'>
              <Send />
            </a>
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.footerItem}>
            <ul>
              <li>General links</li>
              {GENERAL_LINKS.map(item => (
                <li key={item.link}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerItem}>
            <ul>
              <li>Company</li>
              {COMPANY_LINKS.map(item => (
                <li key={item.link}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Learning Platform</p>
        <p>Dev.Learn © 2024 All rights reserved.</p>
        <Moon />
      </div>
    </footer>
  );
};

export default Footer;
