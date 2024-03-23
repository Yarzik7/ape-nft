import Section from '../Section/Section';
import Text from '../Text/Text';
import Image from 'next/image';
import styles from './About.module.css';

import aboutData from '../../data/about.json';
const { title, text, src } = aboutData;

const About = () => {
  return (
    <Section>
      <div className={styles.aboutTitleBlock}>
        <p className={styles.aboutTitle}>
          {title[0]}
          <span className={styles.aboutTitleAccent}>{title[1]}</span>
          {/* <br /> */}
          <span className={styles.aboutTitleAccent}>{title[2]}</span>
        </p>
        <Text text={text[0]} className={styles.aboutTextInTitleBlock} />
      </div>
      <div className={styles.aboutImageBlock}>
        <Text text={text[1]} className={styles.aboutTextInImageBlock} />
        <div className={styles.aboutImageBox}>
          <Image src={src.mobile} alt="ape" width={216} height={292} className={styles.aboutImage} />
        </div>
      </div>
    </Section>
  );
};

export default About;
