import type { Metadata } from 'next';
import { AuthForm } from '../login/auth-form/AuthForm';
import style from './Register.module.scss';

export const metadata: Metadata = {
  title: 'Register',
};

export default function RegisterPage() {
  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <h2 className={style.heading}>Registration</h2>
        <AuthForm isLogin={false} />
      </main>
    </div>
  );
}
