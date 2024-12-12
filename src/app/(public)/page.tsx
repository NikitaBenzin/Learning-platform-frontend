import Button from '@/ui/button/Button';
import Footer from '@/ui/footer/Footer';

import { intensivesService } from '@/services/intensives.service';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import styles from './Home.module.scss';
import { IntensiveItem } from './IntensiveItem';

export const revalidate = 100000;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Home',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Dev.Learn',
  },
};

export default async function Home() {
  const data = await intensivesService.getAll();

  return (
    <>
      <main>
        <section className={styles.siteOverview}>
          <h1>Become a developer with us</h1>
          <section className={styles.siteStatistics}>
            <p>
              Discover the best courses and resources for learning front-end
              development. We provide a wide range of intensives, interactive,
              and hands-on courses to help you build your skills and become a
              full-stack developer.
            </p>
            <div className={styles.statisticButtons}>
              <Button isFilled={true}>
                Start learning now <ChevronRight />
              </Button>
              <Button>Join our Discord</Button>
            </div>
          </section>
        </section>

        <section className={styles.intensives}>
          <h2>Our Intensives</h2>
          <div className={styles.intensivesGallery}>
            {data.data.map(item => (
              <IntensiveItem key={item.slug} {...item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
