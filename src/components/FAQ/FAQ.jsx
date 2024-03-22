import Section from '../Section/Section';
import Title from '../Title/Title';
import FAQCard from './FAQCard/FAQCard';
import styles from './FAQ.module.css';

import FAQData from '../../data/FAQ.json';
const { title, questions } = FAQData;

const FAQ = () => {
  return (
    <Section>
      <Title title={title} />
      <ul>
        <FAQCard key="0" questionNumber={1} info={questions[0]} />
      </ul>
    </Section>
  );
};

export default FAQ;
