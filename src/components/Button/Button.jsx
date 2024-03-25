import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({ content = '', linkAsButton = false, href = '', className = '' }) => {
  const classNames = [styles.button, className].join(' ');
  return !linkAsButton ? (
    <button className={classNames}>{content}</button>
  ) : (
    <Link href={href} className={classNames}>
      {content}
    </Link>
  );
};

export default Button;
