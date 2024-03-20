import Section from "../Section/Section";
import Image from "next/image";
import Text from "../Text/Text";
import styles from "./Hero.module.css";

import heroData from "../../data/hero.json";
const { title, slogan, description, src } = heroData;

const Hero = () => {
  return (
    <Section
      className={styles.heroSection}
      containerClassName={styles.heroContainer}
    >
      <p className={styles.heroSlogan}>{slogan[0]}</p>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroSlogan}>{slogan[1]}</p>
      <Image src={src.mobile} alt="chimpanzee" width={216} height={284} />
      <Text text={description} className={styles.heroDescription} />
    </Section>
  );
};

export default Hero;
