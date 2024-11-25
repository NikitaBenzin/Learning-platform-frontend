import intensiveBgImage from '@/assets/images/next-js.svg';
import Image from 'next/image';
import Button from './components/ui/button/Button';
import Footer from './components/ui/footer/Footer';
import { Header } from './components/ui/header/Header';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <main>
        <section className={styles.siteOverview}>
          <h1>Welcome to our Learning Platform</h1>
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
            <div className='flex gap-3'>
              <Button className='bg-white text-primary font-semibold'>
                Learn more
              </Button>
              <Button>Join our Discord</Button>
            </div>
          </section>
        </section>

        <ul className={styles.intensivesGallery}>
          <li className={styles.intensive}>
            <Image src={intensiveBgImage} alt='Front-end for beginners' />
            <div className={styles.intensiveInfo}>
              <h2>Front-end for beginners</h2>
              <p>From 0 to full professionals</p>
            </div>
          </li>
          <li className={styles.intensive}>
            <Image src={intensiveBgImage} alt='Front-end for beginners' />
            <div className={styles.intensiveInfo}>
              <h2>Front-end for beginners</h2>
              <p>From 0 to full professionals</p>
            </div>
          </li>
          <li className={styles.intensive}>
            <Image src={intensiveBgImage} alt='Front-end for beginners' />
            <div className={styles.intensiveInfo}>
              <h2>Front-end for beginners</h2>
              <p>From 0 to full professionals</p>
            </div>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
