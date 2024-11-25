import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { useRouter } from 'next/navigation';

import styles from './AuthForm.module.scss';

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
  const router = useRouter();

  return (
    <div className={styles.authToggle}>
      {isLogin ? (
        <p>
          Don't have an account?{' '}
          <button
            type='button'
            className={styles.switchAuth}
            onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
          >
            Signup
          </button>
        </p>
      ) : (
        <p>
          Already have an account?{' '}
          <button
            type='button'
            className={styles.switchAuth}
            onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
          >
            Login
          </button>
        </p>
      )}
    </div>
  );
}
