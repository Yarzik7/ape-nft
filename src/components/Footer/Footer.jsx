import Container from '../Section/Container/Container';
import styles from './Footer.module.css';

import footerData from '../../data/footer.json';
const { copyright } = footerData;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.copyright}>{`${
          copyright[0]
        } ${new Date().getFullYear()} ${copyright[1]}`}</p>
      </Container>
    </footer>
  );
};

export default Footer;
