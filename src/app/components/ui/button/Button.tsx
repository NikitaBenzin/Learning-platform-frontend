import cn from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';
import { IButton } from './button.types';

const Button: FC<{ isFilled?: boolean } & IButton> = ({
  isFilled = false,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(isFilled ? styles.filled : null, styles.button, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
