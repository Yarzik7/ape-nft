import { classNameJoin } from '@/utils';
import styles from './Icon.module.css';

const Icon = ({ width, height, iconName = '', className = '' }) => {
  return (
    <svg width={width} height={height} className={classNameJoin(styles.icon, className)}>
      <use xlinkHref={`/images/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;
