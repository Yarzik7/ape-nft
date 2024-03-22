import Section from '../Section/Section';
import Title from '../Title/Title';
import CollectionCard from './CollectionCard/CollectionCard';
import SliderButton from '../SliderButton/SliderButton';
import styles from './Collection.module.css';

import collectionData from '../../data/collection.json';

const { title } = collectionData;

const Collection = () => {
  return (
    <Section>
      <Title title={title} className={styles.collectionTitle} />
      <ul className={styles.collectionList}>
        <CollectionCard key="0" />
      </ul>
      <div className={styles.sliderButtonsBox}>
        <SliderButton caption="Prev" />
        <SliderButton caption="Next" />
      </div>
    </Section>
  );
};

export default Collection;
