'use client';

import Button from '@/app/components/ui/button/Button';
import Field from '@/app/components/ui/input/Field';
import { useWindowSize } from '@/app/hooks/useWindowSize';
import clsx from 'clsx';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './AuthForm.module.scss';
import { AuthToggle } from './AuthToggle';
import { useAuthForm } from './useAuthForm';
interface AuthFormProps {
  isLogin: boolean;
}

export function AuthForm({ isLogin }: AuthFormProps) {
  const { width } = useWindowSize();

  const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
    useAuthForm(isLogin);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
      <Field
        type='email'
        placeholder='Enter email: '
        {...register('email', { required: true })}
        className={styles.inputField}
      />
      <Field
        type='password'
        placeholder='Enter password: '
        {...register('password', { required: true })}
        className={styles.inputField}
      />

      <ReCAPTCHA
        ref={recaptchaRef}
        size={width > 424 ? 'normal' : 'compact'}
        theme='light'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        className={styles.recaptcha}
      />

      <div className='mb-3'>
        <Button
          isFilled={true}
          type='submit'
          className={clsx(
            isLoading ? 'opacity-75 cursor-not-allowed' : '',
            'w-full justify-center mt-4'
          )}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : isLogin ? 'Login' : 'Signup'}
        </Button>
      </div>

      {/* <SocialMediaButtons /> */}

      <AuthToggle isLogin={isLogin} />
    </form>
  );
}
