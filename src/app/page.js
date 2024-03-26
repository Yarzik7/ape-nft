import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import MindMap from '@/components/MindMap/MindMap';
import FAQ from '@/components/FAQ/FAQ';
import Collection from '@/components/Collection/Collection';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import MobileMenu from '@/components/MobileMenu/MobileMenu';

export default function Home() {
  return (
    <>
      <MobileMenu />
      {/* <Header />
      <main>
        <Hero />
        <About />
        <MindMap />
        <FAQ />
        <Collection />
        <Contact />
      </main>
      <Footer /> */}
    </>
  );
}
