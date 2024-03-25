import Icon from '@/components/Icon/Icon';
import { useId } from 'react';
import styles from './Input.module.css';

const Input = ({ label, placeholder, labelClasses }) => {
  const inputId = useId();

  return (
    <div className={styles.inputBox}>
      <label htmlFor={inputId} className={styles.label + ' ' + labelClasses}>
        <Icon iconName={label} width={24} height={24} className={styles.labelIcon} />
      </label>
      <input id={inputId} className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
