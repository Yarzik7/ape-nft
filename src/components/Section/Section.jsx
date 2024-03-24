import Container from './Container/Container';
import { classNameJoin } from '@/utils';
import styles from './Section.module.css';

const Section = ({ id, withoutContainer = false, className = '', containerClassName, children }) => {
  return (
    <section id={id} className={classNameJoin(styles.section, className)}>
      {withoutContainer ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
};

export default Section;
