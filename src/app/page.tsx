import intensiveBgImage from '@/assets/images/main-bg.png';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Button from './components/ui/button/Button';
import Footer from './components/ui/footer/Footer';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.siteOverview}>
          <h1>Become a developer with us</h1>
          <section className={styles.siteStatistics}>
            <ul className={styles.statistic}>
              <li>
                <h3>3</h3>
                <p>Courses offered</p>
              </li>
              <li>
                <h3>1</h3>
                <p>Teachers in the platform</p>
              </li>
              <li>
                <h3>0</h3>
                <p>Students enrolled</p>
              </li>
            </ul>
            <p>
              Discover the best courses and resources for learning front-end
              development. We provide a wide range of intensives, interactive,
              and hands-on courses to help you build your skills and become a
              full-stack developer.
            </p>
            <div className={styles.statisticButtons}>
              <Button className='text-[#000000]' isFilled={true}>
                Start learning now <MdOutlineKeyboardArrowRight />
              </Button>
              <Button>Join our Discord</Button>
            </div>
          </section>
        </section>

        <section className={styles.intensives}>
          <h2>Our Intensives</h2>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
