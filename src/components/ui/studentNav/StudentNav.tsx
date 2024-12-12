'use client';
import { usePathname } from 'next/navigation';
import { MENU } from './nav.data';
import styles from './StudentNav.module.scss';
import { StudentNavItem } from './StudentNavItem';
export const StudentNav = () => {
  const asPath = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {MENU.map(item => (
        <StudentNavItem item={item} path={asPath} key={item.link} />
      ))}
    </nav>
  );
};
