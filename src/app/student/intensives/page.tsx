import intensiveBgImage from '@/assets/images/main-bg.png';
import Image from 'next/image';
import styles from './Intensives.module.scss';
const Intensives = () => {
  return (
    <>
      <h2>Intensives</h2>
      <ul className={styles.intensivesGallery}>
        <li className={styles.intensive}>
          <div className={styles.intensiveInfo}>
            <h3>Front-end for beginners</h3>
            <div className={styles.intensiveDetails}>
              <span>30 lessons</span>
              <span>50 hours</span>
              <span>8 exercise</span>
            </div>
          </div>
          <Image src={intensiveBgImage} alt='Front-end for beginners' />
        </li>
        <li className={styles.intensive}>
          <div className={styles.intensiveInfo}>
            <h3>Front-end for beginners</h3>
            <div className={styles.intensiveDetails}>
              <span>30 lessons</span>
              <span>50 hours</span>
              <span>8 exercise</span>
            </div>
          </div>
          <Image src={intensiveBgImage} alt='Front-end for beginners' />
        </li>
        <li className={styles.intensive}>
          <div className={styles.intensiveInfo}>
            <h3>Front-end for beginners</h3>
            <div className={styles.intensiveDetails}>
              <span>30 lessons</span>
              <span>50 hours</span>
              <span>8 exercise</span>
            </div>
          </div>
          <Image src={intensiveBgImage} alt='Front-end for beginners' />
        </li>
      </ul>
    </>
  );
};

export default Intensives;
