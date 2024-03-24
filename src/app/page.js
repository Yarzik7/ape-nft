import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import MindMap from '@/components/MindMap/MindMap';
import FAQ from '@/components/FAQ/FAQ';
import Collection from '@/components/Collection/Collection';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
// import MobileMenu from '@/MobileMenu/MobileMenu';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <MobileMenu /> */}
      <Hero />
      <About />
      <MindMap />
      <FAQ />
      <Collection />
      <Contact />
      <Footer />
    </main>
  );
}
