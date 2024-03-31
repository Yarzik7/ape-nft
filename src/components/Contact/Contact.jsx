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
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = () => {
    console.log('onSubmit');
  };

  console.log(errors);

  return (
    <Section id="Mint">
      <Title title={title} className={styles.contactTitle} />
      <div className={styles.contactContentBox}>
        <div className={styles.invitationText}>
          <Text text={invitationText} withCrossIcon crossIconClasses={styles.crossIconInContactBlock} />
        </div>

        <Form buttonCaption="Mint" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="discord"
            name="discord"
            placeholder="@username"
            labelClasses={styles.discordLabel}
            errors={errors}
            errorMessage="Wrong discord"
            register={{ ...register('discord', { required: true, minLength: 2, pattern: /^@[A-Za-z0-9]+$/i }) }}
          />
          <Input
            label="metamask"
            name="metamask"
            placeholder="Wallet address"
            errors={errors}
            errorMessage="Wrong address"
            register={{
              ...register('metamask', {
                required: true,
                minLength: 42,
                maxLength: 42,
                pattern: /^[0-9][Xx][A-Za-z0-9]+$/i,
              }),
            }}
          />
        </Form>
      </div>
    </Section>
  );
};

export default Contact;
