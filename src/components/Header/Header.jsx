import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';
import styles from './Header.module.css';

const Header = ({ className = '', buttonClasses, logoClasses }) => {
  return (
    <header className={styles.header + ' ' + className}>
      <Logo className={logoClasses} />
      <NavLink buttonAsLink className={buttonClasses}>
        Menu
      </NavLink>
    </header>
  );
};

export default Header;
