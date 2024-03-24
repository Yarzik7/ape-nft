import CreepingLineText from './CreepingLineText/CreepingLineText';
import styles from './CreepingLine.module.css';

const CreepingLine = ({ creepingLine }) => {
  return (
    <div className={styles.creepingLineBox}>
      <ul className={styles.creepingLineList}>
        {creepingLine.map((text, idx) => (
          <CreepingLineText key={idx} text={text} />
        ))}
      </ul>
    </div>
  );
};

export default CreepingLine;
