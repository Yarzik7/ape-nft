import Container from "./Container/Container";
import { classNameJoin } from "@/utils";
import styles from "./Section.module.css";

const Section = ({ className = "", containerClassName, children }) => {
  return (
    <section className={classNameJoin(styles.section, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default Section;
