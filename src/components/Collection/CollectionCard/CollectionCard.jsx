import Image from 'next/image';
import styles from './CollectionCard.module.css';

const CollectionCard = ({ collectionInfo: { src } }) => {
  return (
    <div className={styles.collectionImageBox}>
      <Image src={src} alt="ape" width={216} height={256} className={styles.collectionImage} />
    </div>
  );
};

export default CollectionCard;
