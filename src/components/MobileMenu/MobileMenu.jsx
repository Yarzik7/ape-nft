// import Header from '@/components/Header/Header';
import HeaderContent from '../Header/HeaderContent/HeaderContent';
import Navigation from '../Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  return (
    <div className={styles.backdrop}>
      <HeaderContent
        className={styles.mobileMenuHeaderContentBox}
        buttonClasses={styles.mobileMenuLink}
        logoClasses={styles.mobileMenuLogo}
      />
      <Navigation />
      <Footer className={styles.mobileMenuFooter} />
    </div>
  );
};

export default MobileMenu;
