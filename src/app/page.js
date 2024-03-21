import Hero from '@/components/Hero/Hero';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
}
