import { classNameJoin } from '@/utils';
import styles from './Icon.module.css';

const Icon = ({ iconName = '', size = 24, className = '' }) => {
  return (
    <svg width={size} height={size} className={classNameJoin(styles.icon, className)}>
      <use xlinkHref={`/images/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;
