import Icon from '../Icon/Icon';
import styles from './Logo.module.css';

const Logo = ({ className = '', iconClasses = '' }) => {
  return (
    <a href="/" className={styles.logoLink + ' ' + className}>
      <Icon iconName="logo" className={styles.logoIcon + ' ' + iconClasses} />
    </a>
  );
};

export default Logo;
