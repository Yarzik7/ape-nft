'use client';

import MindMapCard from '../MindMapCard/MindMapCard';
import SliderControls from '@/components/SliderControls/SliderControls';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './StagesSlider.module.css';

import 'swiper/css';

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
      className={styles.stagesListSliderBox}
      wrapperClass={styles.stagesList}
    >
      {stagesData.map((stage, idx) => (
        <SwiperSlide key={idx} tag="li">
          <MindMapCard stageInfo={stage} />
        </SwiperSlide>
      ))}
      <SliderControls prevClasses="swiper-stage-prev" nextClasses="swiper-stage-next" />
    </Swiper>
  );
};

export default StagesSlider;
