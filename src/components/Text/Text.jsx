import CrossIcon from '../CrossIcon/CrossIcon';
import styles from './Text.module.css';

const Text = ({ text, className = '', withCrossIcon = false, crossIconClasses = '' }) => {
  return (
    <>
      {withCrossIcon && <CrossIcon className={`${styles.crossIconInTextBlock + ' ' + crossIconClasses}`} />}
      <p className={styles.text + ' ' + className}>{text}</p>
    </>
  );
};

export default Text;
