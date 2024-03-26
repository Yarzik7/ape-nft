import Container from '../Section/Container/Container';
import styles from './Footer.module.css';

import footerData from '../../data/footer.json';
const { copyright } = footerData;

const Footer = ({className}) => {
  return (
    <footer className={styles.footer + (className ? " "+className:"")}>
      <Container>
        <p className={styles.copyright}>{`${
          copyright[0]
        } ${new Date().getFullYear()} ${copyright[1]}`}</p>
      </Container>
    </footer>
  );
};

export default Footer;
