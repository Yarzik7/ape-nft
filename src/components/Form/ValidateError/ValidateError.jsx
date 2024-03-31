import styles from './ValidateError.module.css';

const ValidateError = ({ text }) => {
  return (
    <p role="alert" className={styles.validateError}>
      {text}
    </p>
  );
};

export default ValidateError;
