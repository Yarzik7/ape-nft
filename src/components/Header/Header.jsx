'use client';

import HeaderContent from './HeaderContent/HeaderContent';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <header className={styles.header}>
      <HeaderContent showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
      {showMenu && <MobileMenu showMenu={showMenu} toggleShowMenu={toggleShowMenu} />}
    </header>
  );
};

export default Header;
