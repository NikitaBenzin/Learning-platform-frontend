import type { Metadata } from 'next';
import styles from '../Auth.module.scss';
import { AuthForm } from '../login/auth-form/AuthForm';

export const metadata: Metadata = {
  title: 'Register',
};

export default function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Registration</h1>
        <AuthForm isLogin={false} />
      </main>
    </div>
  );
}
