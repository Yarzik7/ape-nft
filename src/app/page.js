import Hero from '@/components/Hero/Hero';
import FAQ from '@/components/FAQ/FAQ';
import Collection from '@/components/Collection/Collection';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <FAQ />
      <Collection />
      <Contact />
      <Footer />
    </main>
  );
}
