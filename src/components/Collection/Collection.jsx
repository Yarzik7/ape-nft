import Section from '../Section/Section';
import Title from '../Title/Title';
import CollectionSlider from './CollectionSlider/CollectionSlider';
import styles from './Collection.module.css';

import collectionData from '../../data/collection.json';

const { title, collection } = collectionData;

const Collection = () => {
  return (
    <Section>
      <Title title={title} className={styles.collectionTitle} />
      <CollectionSlider collectionData={collection} />
    </Section>
  );
};

export default Collection;
