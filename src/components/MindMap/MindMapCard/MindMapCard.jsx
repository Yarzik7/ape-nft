import styles from './MindMapCard.module.css';

const MindMapCard = ({ stageInfo: { caption, description } }) => {
  return (
    <div className={styles.mindMapCardItem}>
      <p className={styles.stageDescription}>{description}</p>
      <h3 className={styles.stageCaption}>{caption}</h3>
    </div>
  );
};

export default MindMapCard;
