import type { IIntensive } from '@/types/intensive.types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';

export function IntensiveItem(intensive: IIntensive) {
  return (
    <Link href={intensive.slug} className={styles.intensive}>
      <div className={styles.intensiveInfo}>
        <div className={styles.intensiveDetails}>
          <span>{intensive.additionalInfo.lessonsAmount} lessons</span>
          <span>{intensive.additionalInfo.hoursAmount} hours</span>
          <span>{intensive.additionalInfo.exerciseAmount} exercises</span>
        </div>
        <Image
          width={80}
          height={80}
          src={intensive.previewImage}
          alt={intensive.title}
          className='flex self-start object-contain'
        />
      </div>
      <h3>{intensive.title}</h3>
    </Link>
  );
}
