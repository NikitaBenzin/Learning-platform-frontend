import { type InputHTMLAttributes } from 'react';
import styles from './Field.module.scss';

import cn from 'clsx';
import type { UseFormRegisterReturn } from 'react-hook-form';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

const Field = ({
  label = '',
  placeholder,
  type,
  error,
  registration,
  ...props
}: Props) => {
  return (
    <div className={styles.layout}>
      <label className={styles.inputLabel}>
        <span>{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          className={cn(styles.inputField, error ? 'border-red-500' : '')}
          {...registration}
          {...props}
        />
      </label>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default Field;
