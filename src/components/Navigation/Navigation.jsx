import NavItem from './NavItem/NavItem';
import styles from './Navigation.module.css';

import navigationData from '../../data/header.json';
const { navigation } = navigationData;

const Navigation = ({ onClose, className, navListClasses }) => {
  return (
    <nav className={styles.navigationBox + (className ? ' ' + className : '')}>
      <ul className={navListClasses ? ' ' + navListClasses : ''}>
        {navigation.map((navItem, idx) => (
          <NavItem key={idx} caption={navItem} href={'#' + navItem} onClick={onClose} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
