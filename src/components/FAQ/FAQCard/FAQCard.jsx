import Text from '@/components/Text/Text';
import Image from 'next/image';
import styles from './FAQCard.module.css';

const FAQCard = ({ questionNumber, activeQuestion, setActiveQuestion, info: { question, answer, src } }) => {
  const isActive = questionNumber === activeQuestion;

  const onSetActiveQuestion = () => setActiveQuestion(questionNumber);

  return (
    <li
      className={styles.FAQCardItem + (isActive ? ' ' + styles.active : '')}
      tabIndex={0}
      onClick={onSetActiveQuestion}
    >
      {isActive && (
        <div className={styles.questionCardImageBox}>
          <Image src={src} alt="ape" width={216} height={256} className={styles.questionCardImage} />
        </div>
      )}
      <p className={styles.questionNumber}>{`[${questionNumber + 1}]`}</p>
      <div>
        <h3 className={styles.FAQCardQuestion}>{question}</h3>
        {isActive && <Text text={answer} className={styles.FAQCardAnswer} />}
      </div>
    </li>
  );
};

export default FAQCard;
