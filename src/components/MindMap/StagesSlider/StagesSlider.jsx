'use client';

import MindMapCard from '../MindMapCard/MindMapCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './StagesSlider.module.css';

import 'swiper/css';
import 'swiper/css/keyboard';

const StagesSlider = ({ stagesData }) => {
  return (
    <Swiper
      wrapperTag="ul"
      hashNavigation={true}
      navigation={{
        nextEl: '.swiper-stage-next',
        prevEl: '.swiper-stage-prev',
      }}
      initialSlide={0}
      slidesPerView={1}
      spaceBetween={24}
      modules={[Navigation]}
      className={styles.stagesList}
    >
      {stagesData.map((stage, idx) => (
        <SwiperSlide key={idx} tag="li">
          <MindMapCard stageInfo={stage} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StagesSlider;
