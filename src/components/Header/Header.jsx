import HeaderContent from './HeaderContent/HeaderContent';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderContent />
    </header>
  );
};

export default Header;
