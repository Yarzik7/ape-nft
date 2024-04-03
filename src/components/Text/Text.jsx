import CrossIcon from '../CrossIcon/CrossIcon';
import { clsx } from 'clsx';
import styles from './Text.module.css';

const Text = ({ text, className = '', withCrossIcon = false, crossIconClasses = '' }) => {
  return (
    <>
      {withCrossIcon && <CrossIcon className={clsx(styles.crossIconInTextBlock, crossIconClasses)} />}
      <p className={clsx(styles.text, className)}>{text}</p>
    </>
  );
};

export default Text;
