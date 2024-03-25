import Icon from '@/components/Icon/Icon';
import styles from './MindMapCard.module.css';

const MindMapCard = ({ stageInfo: { caption, description, link } }) => {
  const Wrapper = ({ children }) =>
    link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={styles.mindMapCardItem + ' ' + styles.link}
      >
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
        <Icon iconName="up-left-arrow" className={styles.stageArrowIcon} width={24} height={24} />
      )}
      <h3 className={styles.stageCaption}>{caption}</h3>
    </Wrapper>
  );
};

export default MindMapCard;
