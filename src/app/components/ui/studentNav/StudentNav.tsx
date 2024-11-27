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
        <span className='w-2 h-2 bg-gray-500 rounded-full opacity-5'></span>
        <span className='w-2 h-2 bg-gray-500 rounded-full opacity-5'></span>
        <span className='w-2 h-2 bg-gray-500 rounded-full opacity-5'></span>
      </div>
      {MENU.map(item => (
        <StudentNavItem item={item} path={asPath} key={item.link} />
      ))}
    </nav>
  );
};
