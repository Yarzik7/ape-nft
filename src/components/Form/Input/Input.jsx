import Icon from '@/components/Icon/Icon';
import ValidateError from '../ValidateError/ValidateError';
import { useId } from 'react';
import styles from './Input.module.css';

const Input = ({ name, label, placeholder, labelClasses, errors, errorMessage, register = {} }) => {
  const inputId = useId();

  return (
    <div className={styles.inputBox}>
      <label htmlFor={inputId} className={styles.label + ' ' + labelClasses}>
        <Icon iconName={label} width={24} height={24} className={styles.labelIcon} />
      </label>
      <input
        id={inputId}
        name={name}
        className={styles.input + (errors[name] ? ' ' + styles.inputError : '')}
        placeholder={placeholder}
        {...register}
      />
      {errors[name] && <ValidateError text={errorMessage} />}
    </div>
  );
};

export default Input;
