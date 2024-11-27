'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import styles from './Header.module.scss';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const asPath = usePathname();
  return asPath.startsWith('/student') ? (
    ''
  ) : (
    <header className={styles.header}>
      <Link href='/'>Dev.Learn</Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.hamburgerButton}
      >
        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </button>
      <nav className={isOpen ? styles.open : styles.headerNavigation}>
        <Link
          className={asPath === '/intensives' ? styles.active : ''}
          href='/intensives'
        >
          Intensives
        </Link>
        <Link
          className={asPath === '/plans' ? styles.active : ''}
          href='/plans'
        >
          Plans
        </Link>
        <Link className={styles.studentPage} href='/student'>
          Student <MdOutlineKeyboardArrowRight />
        </Link>
      </nav>
    </header>
  );
};
