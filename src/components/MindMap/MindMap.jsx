import Section from '../Section/Section';
import Title from '../Title/Title';
import MindMapCard from './MindMapCard/MindMapCard';
import StagesSlider from './StagesSlider/StagesSlider';
import styles from './MindMap.module.css';

import mindMapData from '../../data/mindMap.json';
const { title, stagesData } = mindMapData;

const MindMap = () => {
  return (
    <Section id="M-map">
      <Title title={title} />
      <StagesSlider stagesData={stagesData} />
      <ul className={styles.stagesList}>
        {stagesData.map((stage, idx) => (
          <li key={idx}>
            <MindMapCard stageInfo={stage} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default MindMap;
