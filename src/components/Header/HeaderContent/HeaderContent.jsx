'use client';

import Logo from '@/components/Logo/Logo';
import NavLink from '@/components/NavLink/NavLink';
import Icon from '@/components/Icon/Icon';
import styles from './HeaderContent.module.css';

import headerData from '../../../data/header.json';
const { socials } = headerData;

const HeaderContent = ({ className, buttonClasses, socialsMenuClasses, logoClasses, showMenu, toggleShowMenu }) => {
  return (
    <div className={styles.headerContentContainer + (className ? ' ' + className : '')}>
      <Logo className={logoClasses} />
      <ul className={styles.menu + (socialsMenuClasses ? ' ' + socialsMenuClasses : '')}>
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
    </div>
  );
};

export default HeaderContent;
