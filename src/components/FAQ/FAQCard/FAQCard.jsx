import Text from '@/components/Text/Text';
import styles from './FAQCard.module.css';

const FAQCard = ({ questionNumber, activeQuestion, setActiveQuestion, info: { question, answer } }) => {
  const isActive = questionNumber === activeQuestion;

  const onSetActiveQuestion = () => setActiveQuestion(questionNumber - 1);

  return (
    <li className={styles.FAQCardItem} tabIndex={0} onClick={onSetActiveQuestion}>
      <p className={styles.questionNumber}>{`[${questionNumber + 1}]`}</p>
      <div>
        <h3 className={styles.FAQCardQuestion}>{question}</h3>
        {isActive && <Text text={answer} className={styles.FAQCardAnswer} />}
      </div>
    </li>
  );
};

export default FAQCard;
