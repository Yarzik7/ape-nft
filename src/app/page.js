import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Footer />
    </main>
  );
}
