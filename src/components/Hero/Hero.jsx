import Section from '../Section/Section';
import Container from '../Section/Container/Container';
import Image from 'next/image';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { classNameJoin } from '@/utils';
import { clsx } from 'clsx';
import styles from './Hero.module.css';

import heroData from '../../data/hero.json';
const { title, slogan, description, src, buttonCaption } = heroData;

const Hero = () => {
  const heroImageClass = styles.heroImage;

  return (
    <Section className={styles.heroSection} containerClassName={styles.heroContainer} withoutContainer>
      <div className={styles.heroContainerWrapper}>
        <Container className={styles.heroContainer}>
          <div className={styles.heroTitleBox}>
            <p className={styles.heroSlogan}>{slogan[0]}</p>
            <h1 className={styles.heroTitle}>
              <span>{title[0]}</span>
              <span>{title[1]}</span>
            </h1>
            <p className={classNameJoin(styles.heroSlogan, styles.heroSloganWithPadding)}>{slogan[1]}</p>
          </div>

          <div className={styles.heroImageBox}>
            <Image
              src={src.mobile}
              alt="ape"
              width={216}
              height={284}
              className={clsx(heroImageClass, 'mobileImage')}
            />
            <Image
              src={src.tablet}
              alt="ape"
              width={283}
              height={386}
              className={clsx(heroImageClass, 'tabletImage')}
            />
            <Image
              src={src.desktop}
              alt="ape"
              width={463}
              height={612}
              className={clsx(heroImageClass, 'desktopImage')}
            />
          </div>

          <div className={styles.heroDescriptionBox}>
            <Button content={buttonCaption} className={styles.meetApesButton} linkAsButton href="#Mint" />
            <Text text={description} className={styles.heroDescription} />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
