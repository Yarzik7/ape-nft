import SliderButton from './SliderButton/SliderButton';
import styles from './SliderControls.module.css';

const SliderControls = ({ prevClasses, nextClasses }) => {
  return (
    <div className={styles.sliderControlsBox}>
      <SliderButton caption="Prev" className={prevClasses} />
      <SliderButton caption="Next" className={nextClasses} />
    </div>
  );
};

export default SliderControls;
