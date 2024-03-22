import Text from '@/components/Text/Text';
import styles from './FAQCard.module.css';

const FAQCard = ({ questionNumber, info: { question, answer } }) => {
  return (
    <li className={styles.FAQCardItem}>
      <p className={styles.questionNumber}>{`[${questionNumber}]`}</p>
      <div>
        <h3 className={styles.FAQCardQuestion}>{question}</h3>
        <Text text={answer} className={styles.FAQCardAnswer} />
      </div>
    </li>
  );
};

export default FAQCard;
