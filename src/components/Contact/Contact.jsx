import Section from '../Section/Section';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import styles from './Contact.module.css';

import contactData from '../../data/contact.json';
const { title, invitationText } = contactData;

const Contact = () => {
  return (
    <Section>
      <Title title={title} className={styles.contactTitle} />
      <Text text={invitationText} className={styles.invitationText} />
      <Form buttonCaption="Mint">
        <Input placeholder="@username" />
        <Input placeholder="Wallet address" />
      </Form>
    </Section>
  );
};

export default Contact;
