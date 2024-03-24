import styles from './MindMapCard.module.css';

const MindMapCard = ({ stageInfo: { caption, description, link } }) => {
  const Wrapper = ({ children }) =>
    link ? (
      <a href={link} className={styles.mindMapCardItem + ' ' + styles.link}>
        {children}
      </a>
    ) : (
      <div className={styles.mindMapCardItem}>{children}</div>
    );

  return (
    <Wrapper>
      {description ? (
        <p className={styles.stageDescription}>{description}</p>
      ) : (
        <div className={styles.stageArrowIcon}></div>
      )}
      <h3 className={styles.stageCaption}>{caption}</h3>
    </Wrapper>
  );
};

export default MindMapCard;
