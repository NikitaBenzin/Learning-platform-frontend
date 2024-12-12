import cn from 'clsx';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isFilled?: boolean;
  children: ReactNode;
}

const Button = ({ isFilled = false, children, isLoading, ...props }: Props) => {
  return (
    <button
      className={cn(isFilled ? styles.filled : null, styles.button)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
