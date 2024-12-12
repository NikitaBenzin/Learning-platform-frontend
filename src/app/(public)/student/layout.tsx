import { StudentNav } from '@ui/studentNav/StudentNav';
import type { PropsWithChildren } from 'react';
import styles from './Student.module.scss';
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <StudentNav />
    </div>
  );
}
