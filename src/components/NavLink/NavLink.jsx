import Link from 'next/link';
import styles from './NavLink.module.css';

const NavLink = ({ href, buttonAsLink = false, className = '', children, isSocial = false, onClick }) => {
  return !buttonAsLink ? (
    <Link href={href} className={styles.navLink + ' ' + className}>
      {children}
    </Link>
  ) : (
    <button className={styles.navLink + ' ' + className} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavLink;
