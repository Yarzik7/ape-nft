import CreepingLineText from './CreepingLineText/CreepingLineText';
import styles from './CreepingLine.module.css';

const CreepingLine = ({ creepingLine }) => {
  const creepingLineDouble = [...creepingLine, ...creepingLine];

  return (
    <div className={styles.creepingLineBox}>
      <ul className={styles.creepingLineList}>
        {creepingLineDouble.map((text, idx) => (
          <CreepingLineText key={idx} text={text} />
        ))}
      </ul>
    </div>
  );
};

export default CreepingLine;
