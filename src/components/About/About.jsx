import Section from '../Section/Section';
import Container from '../Section/Container/Container';
import Text from '../Text/Text';
import Image from 'next/image';
import CreepingLine from './CreepingLine/CreepingLine';
import styles from './About.module.css';

import aboutData from '../../data/about.json';
const { title, text, src, creepingLine } = aboutData;

const About = () => {
  return (
    <Section id="About" withoutContainer>
      <Container>
        <div className={styles.aboutTitleBlock}>
          <h2 className={styles.aboutTitle}>
            {title[0]}
            <span className={styles.aboutTitleAccent}>{title[1]}</span>
            <span className={styles.aboutTitleAccent + ' ' + styles.aboutTitleApe}>{title[2]}</span>
          </h2>
          <Text text={text[0]} className={styles.aboutTextInTitleBlock} />
        </div>

        <div className={styles.aboutImageBlock}>
          <div className={styles.aboutTextInImageBlock}>
            <Text text={text[1]} withCrossIcon crossIconClasses={styles.crossIconInImageBlock} />
          </div>

          <div className={styles.aboutImageBox}>
            <Image
              src={src.mobile}
              alt="ape"
              width={216}
              height={292}
              className={styles.aboutImage + ' ' + styles.mobile}
            />
            <Image
              src={src.tablet}
              alt="ape"
              width={313}
              height={422}
              className={styles.aboutImage + ' ' + styles.tablet}
            />
            <Image
              src={src.desktop}
              alt="ape"
              width={492}
              height={662}
              className={styles.aboutImage + ' ' + styles.desktop}
            />
          </div>
        </div>
      </Container>
      <CreepingLine creepingLine={creepingLine} />
    </Section>
  );
};

export default About;
