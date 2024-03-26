import NavItem from './NavItem/NavItem';
import styles from './Navigation.module.css';

import navigationData from '../../data/header.json';
const { navigation } = navigationData;

const Navigation = () => {
  return (
    <nav className={styles.navigationBox}>
      <ul>
        {navigation.map((navItem, idx) => (
          <NavItem key={idx} caption={navItem} href="#" />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
