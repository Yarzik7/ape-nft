import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  return (
    <div className={styles.backdrop}>
      <Header buttonClasses={styles.mobileMenuLink} logoClasses={styles.mobileMenuLogo} />
      <Footer />
    </div>
  );
};

export default MobileMenu;
