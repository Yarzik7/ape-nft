import CrossIcon from '@/components/CrossIcon/CrossIcon';
import styles from './CreepingLineText.module.css';

const CreepingLineText = ({ text }) => {
  return (
    <li className={styles.creepingLineItem}>
      <p className={styles.creepingLineText}>{text}</p>
      <CrossIcon className={styles.crossIconInCreepingLine} />
    </li>
  );
};

export default CreepingLineText;
