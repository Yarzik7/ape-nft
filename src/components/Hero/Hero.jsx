import Section from '../Section/Section';
import Image from 'next/image';
import Button from '../Button/Button';
import Text from '../Text/Text';
import styles from './Hero.module.css';

import heroData from '../../data/hero.json';
const { title, slogan, description, src, buttonCaption } = heroData;

const Hero = () => {
  return (
    <Section
      className={styles.heroSection}
      containerClassName={styles.heroContainer}
    >
      <div className={styles.heroTitleBox}>
        <p className={styles.heroSlogan}>{slogan[0]}</p>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSlogan}>{slogan[1]}</p>
      </div>

      {/* <Image
        src={src.mobile}
        alt="chimpanzee"
        width={216}
        height={284}
        className={styles.heroImage}
      /> */}

      <div className={styles.heroDescriptionBox}>
        <Button content={buttonCaption} className={styles.meetApesButton} />
        <Text text={description} className={styles.heroDescription} />
      </div>
    </Section>
  );
};

export default Hero;
