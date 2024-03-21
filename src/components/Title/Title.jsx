import { classNameJoin } from '@/utils';
import styles from './Title.module.css';

const Title = ({ title, className = '' }) => {
  return <h2 className={classNameJoin(styles.title, className)}>{title}</h2>;
};

export default Title;
