import Button from '../Button/Button';
import styles from './Form.module.css';

const Form = ({ buttonCaption, onSubmit, children }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <Button content={buttonCaption} className={styles.submitButton} />
    </form>
  );
};

export default Form;
