import avatar from '@/assets/images/avatar.jpg';
import { Wrench } from 'lucide-react';
import Image from 'next/image';
import styles from './Student.module.scss';
const Student = () => {
  return (
    <>
      <div className={styles.profileInfo}>
        <Image
          src={avatar}
          alt='Profile image'
          className={styles.profileImage}
        />
        <h2 className={styles.profileName}>John Doe</h2>
        <div className={styles.studentStatistics}>
          <Wrench />
          <p>Student statistic - Soon</p>
        </div>
      </div>
    </>
  );
};

export default Student;
