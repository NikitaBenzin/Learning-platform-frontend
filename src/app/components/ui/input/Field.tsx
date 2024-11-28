import { FC } from 'react';
import styles from './Field.module.scss';

import clsx from 'clsx';
import { IField } from './Field.types';
const Field: FC<{ label: string } & IField> = ({
  label = '',
  children,
  className = '',
  placeholder,
  type,
  ...rest
}) => {
  return (
    <div className={clsx(styles.layout, className)}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.inputField}
        {...rest}
      />
    </div>
  );
};

export default Field;
