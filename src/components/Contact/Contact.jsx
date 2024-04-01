'use client';

import Section from '../Section/Section';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './Contact.module.css';

import contactData from '../../data/contact.json';
const { title, invitationText } = contactData;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState('Mint');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', values: { discord: '', metamask: '' } });

  const onSubmit = () => {
    setSubmitStatus('Minted');
  };

  const onError = () => {
    setSubmitStatus('Error');
  };

  return (
    <Section id="Mint">
      <Title title={title} className={styles.contactTitle} />
      <div className={styles.contactContentBox}>
        <div className={styles.invitationText}>
          <Text text={invitationText} withCrossIcon crossIconClasses={styles.crossIconInContactBlock} />
        </div>

        <Form buttonCaption={submitStatus} onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            label="discord"
            name="discord"
            placeholder="@username"
            labelClasses={styles.discordLabel}
            errors={errors}
            errorMessage={errors.discord?.message}
            register={{
              ...register('discord', {
                required: 'Discord is required',
                minLength: 2,
                pattern: { value: /^@[A-Za-z0-9]+$/i, message: 'Wrong discord' },
              }),
            }}
          />
          <Input
            label="metamask"
            name="metamask"
            placeholder="Wallet address"
            errors={errors}
            errorMessage={errors.metamask?.message}
            register={{
              ...register('metamask', {
                required: 'Metamask is required',
                pattern: { value: /^0x[A-Za-z0-9]{5}$/i, message: 'Wrong metamask' },
              }),
            }}
          />
        </Form>
      </div>
    </Section>
  );
};

export default Contact;
