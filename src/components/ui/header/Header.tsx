'use client';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.scss';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const asPath = usePathname();
  return (
    <header className={styles.header}>
      <Link href='/'>Dev.Learn</Link>

      {asPath.startsWith('/student') ? (
        <div>Build skills, shape the future.</div>
      ) : (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.hamburgerButton}
          >
            {isOpen ? <ChevronUp /> : <ChevronDown />}
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
            <Link className={styles.studentPage} href='/student/intensives'>
              Student <ChevronRight />
            </Link>
          </nav>
        </>
      )}
    </header>
  );
};
