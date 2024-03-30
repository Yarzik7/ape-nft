'use client';

import Section from '../Section/Section';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import { useForm } from 'react-hook-form';
import styles from './Contact.module.css';

import contactData from '../../data/contact.json';
const { title, invitationText } = contactData;

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log('onSubmit');
  };

  return (
    <Section id="Mint">
      <Title title={title} className={styles.contactTitle} />
      <div className={styles.contactContentBox}>
        <div className={styles.invitationText}>
          <Text text={invitationText} withCrossIcon crossIconClasses={styles.crossIconInContactBlock} />
        </div>

        <Form buttonCaption="Mint" onSubmit={handleSubmit(onSubmit)}>
          <Input label="discord" placeholder="@username" labelClasses={styles.discordLabel} />
          <Input label="metamask" placeholder="Wallet address" />
        </Form>
      </div>
    </Section>
  );
};

export default Contact;
