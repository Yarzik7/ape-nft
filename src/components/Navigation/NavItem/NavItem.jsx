import Link from 'next/link';
import styles from './NavItem.module.css';

const NavItem = ({ href = '#', caption, onClick }) => {
  return (
    <li className={styles.navItem}>
      <Link href={href} className={styles.navLink} onClick={onClick}>
        {caption}
      </Link>
    </li>
  );
};

export default NavItem;
