import Section from "../Section/Section";
import styles from "./Hero.module.css";

import heroData from "../../data/hero.json";
const { title, slogan, description } = heroData;

const Hero = () => {
  return (
    <Section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>{title}</h1>
    </Section>
  );
};

export default Hero;
