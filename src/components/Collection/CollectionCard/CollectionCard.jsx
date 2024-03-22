import Image from 'next/image';
import styles from './CollectionCard.module.css';

const CollectionCard = ({ src }) => {
  return (
    <li className={styles.collectionCardItem}>
      <div className={styles.collectionImageBox}>
        <Image
          src={src}
          alt="chimpanzee"
          width={216}
          height={256}
          className={styles.collectionImage}
        />
      </div>
    </li>
  );
};

export default CollectionCard;
