import Link from 'next/link';
import styles from './NavLink.module.css';

const NavLink = ({ href, buttonAsLink = false, className = '', children }) => {
  return !buttonAsLink ? (
    <Link href={href} className={styles.navLink + ' ' + className}>
      {children}
    </Link>
  ) : (
    <button className={styles.navLink + ' ' + className}>{children}</button>
  );
};

export default NavLink;
