'use client';

import Button from '@/app/components/ui/button/Button';
import Field from '@/app/components/ui/input/Field';
import { Eye, EyeOff } from 'lucide-react';
import { FC, useState } from 'react';
import styles from './Settings.module.scss';
const Settings: FC = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <form
      className={styles.form}
      autoComplete='off'
      encType='multipart/form-data'
    >
      <div className={styles.fieldsLayout}>
        <Field
          label='Email'
          type='email'
          placeholder='Email: '
          value='test@test.com'
        />
        <div className={styles.fieldPassword}>
          <Field
            label='Password'
            type={isShown ? 'text' : 'password'}
            value='123456'
            placeholder='Password: '
          />

          <Button
            type='button'
            className={styles.showButton}
            onClick={() => setIsShown(!isShown)}
          >
            {isShown ? <EyeOff /> : <Eye />}
          </Button>
        </div>
        <Button type='submit' isFilled={true}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default Settings;
