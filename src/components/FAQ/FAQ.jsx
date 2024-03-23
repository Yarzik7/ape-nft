'use client';

import Section from '../Section/Section';
import Title from '../Title/Title';
import FAQCard from './FAQCard/FAQCard';
import { useState } from 'react';
import styles from './FAQ.module.css';

import FAQData from '../../data/FAQ.json';
const { title, questions } = FAQData;

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <Section>
      <Title title={title} />
      <ul>
        {questions.map((question, idx) => (
          <FAQCard
            key={idx}
            questionNumber={idx}
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            info={question}
          />
        ))}
        {/* <FAQCard
          key="0"
          questionNumber={0}
          activeQuestion={activeQuestion}
          setActiveQuestion={setActiveQuestion}
          info={questions[0]}
        />
        <FAQCard
          key="1"
          questionNumber={1}
          activeQuestion={activeQuestion}
          setActiveQuestion={setActiveQuestion}
          info={questions[1]}
        /> */}
      </ul>
    </Section>
  );
};

export default FAQ;
