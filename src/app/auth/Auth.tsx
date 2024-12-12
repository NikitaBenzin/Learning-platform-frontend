'use client';
import { useWindowSize } from '@/hooks/useWindowSize';
import Button from '@/ui/button/Button';
import Field from '@/ui/input/Field';
import cn from 'clsx';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './Auth.module.scss';
import type { IAuthForm } from './auth-form';

export function Auth() {
  const { width } = useWindowSize();
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm<IAuthForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthForm> = data => {
    if (isLogin) {
    } else {
    }
  };
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div>
          <div className={styles.authToggle}>
            <button
              className={cn(
                'border-b-2 py-2',
                !isLogin ? 'border-b-white' : 'border-b-transparent'
              )}
              type='button'
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>

            <button
              className={cn(
                'border-b-2 py-2',
                isLogin ? ' border-b-white' : 'border-b-transparent'
              )}
              type='button'
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
            <Field
              label='Email'
              type='email'
              placeholder='Enter email'
              registration={register('email', { required: true })}
              error={errors.email?.message}
            />
            <Field
              label='Password'
              type='password'
              placeholder='Enter password'
              registration={register('password', { required: true })}
              error={errors.password?.message}
            />
            {!isLogin && (
              <Field
                label='Password confirmation'
                type='password'
                placeholder='Enter password again'
                registration={register('confirmPassword', {
                  required: 'Password confirmation is required',
                  validate: value =>
                    value === watch('password') || "Passwords don't match!",
                })}
                error={errors.confirmPassword?.message}
              />
            )}

            <ReCAPTCHA
              // ref={recaptchaRef}
              size={width > 424 ? 'normal' : 'compact'}
              theme='light'
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              className={styles.recaptcha}
            />

            <div className='mt-3 flex justify-center'>
              <Button isFilled={true} type='submit' disabled={isLoading}>
                {isLoading ? 'Loading...' : isLogin ? 'Login' : 'Signup'}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
