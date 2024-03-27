import HeaderContent from '../Header/HeaderContent/HeaderContent';
import Navigation from '../Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ showMenu, toggleShowMenu }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const modalRoot = document.getElementById('menu-root');

  return createPortal(
    <div className={styles.backdrop}>
      <HeaderContent
        className={styles.mobileMenuHeaderContentBox}
        buttonClasses={styles.mobileMenuLink}
        logoClasses={styles.mobileMenuLogo}
        socialsMenuClasses={styles.mobileMenuSocialsMenu}
        showMenu={showMenu}
        toggleShowMenu={toggleShowMenu}
      />
      <Navigation onClose={toggleShowMenu} />
      <Footer className={styles.mobileMenuFooter} />
    </div>,
    modalRoot
  );
};

export default MobileMenu;
