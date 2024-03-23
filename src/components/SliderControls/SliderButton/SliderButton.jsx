import { classNameJoin } from '@/utils';
import styles from './SliderButton.module.css';

const SliderButton = ({ caption, className = '' }) => {
  return <button className={classNameJoin(styles.sliderButton, className)}>{caption}</button>;
};

export default SliderButton;
