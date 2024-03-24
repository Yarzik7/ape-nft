'use client';

import SliderControls from '@/components/SliderControls/SliderControls';
import CollectionCard from '../CollectionCard/CollectionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './CollectionSlider.module.css';

import 'swiper/css';

const CollectionSlider = ({ collectionData }) => {
  return (
    <Swiper
      wrapperTag="ul"
      hashNavigation={true}
      navigation={{
        nextEl: '.swiper-collection-next',
        prevEl: '.swiper-collection-prev',
      }}
      initialSlide={0}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      spaceBetween={24}
      grabCursor={true}
      modules={[Navigation]}
      wrapperClass={styles.collectionList}
    >
      {collectionData.map((collection, idx) => (
        <SwiperSlide key={idx} tag="li" className={styles.collectionCardItem}>
          <CollectionCard collectionInfo={collection} />
        </SwiperSlide>
      ))}
      <SliderControls prevClasses="swiper-collection-prev" nextClasses="swiper-collection-next" />
    </Swiper>
  );
};

export default CollectionSlider;
