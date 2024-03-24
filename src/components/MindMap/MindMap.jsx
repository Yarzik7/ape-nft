import Section from '../Section/Section';
import Title from '../Title/Title';
import MindMapCard from './MindMapCard/MindMapCard';
import StagesSlider from './StagesSlider/StagesSlider';
import styles from './MindMap.module.css';

import mindMapData from '../../data/mindMap.json';
const { title, stagesData } = mindMapData;

const MindMap = () => {
  return (
    <Section>
      <Title title={title} />
      <StagesSlider stagesData={stagesData} />
      <ul className={styles.stagesList}>
        {stagesData.map((stage, idx) => (
          <MindMapCard key={idx} stageInfo={stage} />
        ))}
      </ul>
    </Section>
  );
};

export default MindMap;
