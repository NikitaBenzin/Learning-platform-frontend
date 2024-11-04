import type { Metadata } from 'next';
import { AuthForm } from './auth-form/AuthForm';
import style from './Login.module.scss';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <h2 className={style.heading}>Вход</h2>
        <AuthForm isLogin />
      </main>
    </div>
  );
}
