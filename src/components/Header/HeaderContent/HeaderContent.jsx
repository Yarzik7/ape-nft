'use client';

import Logo from '@/components/Logo/Logo';
import NavLink from '@/components/NavLink/NavLink';
import Icon from '@/components/Icon/Icon';
// import MobileMenu from '@/components/MobileMenu/MobileMenu';
// import { useState } from 'react';
import styles from './HeaderContent.module.css';

import headerData from '../../../data/header.json';
const { socials } = headerData;

const HeaderContent = ({ className, buttonClasses, logoClasses, showMenu, toggleShowMenu }) => {
  // const [showMenu, setShowMenu] = useState(false);
  // const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <div className={styles.headerContentContainer + (className ? ' ' + className : '')}>
      <Logo className={logoClasses} />
      <ul className={styles.menu}>
        <li key={0} className={styles.menuItem}>
          <NavLink buttonAsLink className={buttonClasses} onClick={toggleShowMenu}>
            {showMenu ? 'Close' : 'Menu'}
          </NavLink>
        </li>
        {socials.map(({ iconName, href }, idx) => (
          <li key={idx + 1} className={styles.menuItem}>
            <NavLink href={href} className={buttonClasses}>
              <Icon iconName={iconName} width={16} height={16} className={styles.socialIcon} />
            </NavLink>
          </li>
        ))}
      </ul>
      {/* {showMenu && <MobileMenu />} */}
    </div>
  );
};

export default HeaderContent;
