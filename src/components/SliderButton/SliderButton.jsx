import styles from './SliderButton.module.css';

const SliderButton = ({caption}) => {
    return <button className={styles.sliderButton}>{caption }</button>;
};

export default SliderButton;
