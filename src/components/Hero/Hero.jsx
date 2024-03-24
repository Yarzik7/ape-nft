import Section from '../Section/Section';
import Container from '../Section/Container/Container';
import Image from 'next/image';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { classNameJoin } from '@/utils';
import styles from './Hero.module.css';

import heroData from '../../data/hero.json';
const { title, slogan, description, src, buttonCaption } = heroData;

const Hero = () => {
  return (
    <Section className={styles.heroSection} containerClassName={styles.heroContainer} withoutContainer>
      <div className={styles.heroContainerWrapper}>
        <Container className={styles.heroContainer}>
          <div className={styles.heroTitleBox}>
            <p className={styles.heroSlogan}>{slogan[0]}</p>
            <h1 className={styles.heroTitle}>
              <p>{title[0]}</p>
              <p>{title[1]}</p>
            </h1>
            <p className={classNameJoin(styles.heroSlogan, styles.heroSloganWithPadding)}>{slogan[1]}</p>
          </div>
          <div className={styles.heroImageBox}>
            <Image src={src.mobile} alt="chimpanzee" width={216} height={284} className={styles.heroImage} />
          </div>
          <div className={styles.heroDescriptionBox}>
            <Button content={buttonCaption} className={styles.meetApesButton} />
            <Text text={description} className={styles.heroDescription} />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
