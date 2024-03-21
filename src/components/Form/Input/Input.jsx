import { useId } from 'react';
import styles from './Input.module.css';

const Input = ({ label, placeholder }) => {
  const inputId = useId();

  return (
    <div className={styles.inputBox}>
      <label htmlFor={inputId} className={styles.label}></label>
      <input id={inputId} className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
