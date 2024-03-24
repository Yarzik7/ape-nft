import Icon from '../Icon/Icon';
import styles from './CrossIcon.module.css';

const CrossIcon = ({ className = '' }) => {
  return (
    <div className={className}>
      <Icon iconName="cross" width={24} height={24} />
    </div>
  );
};

export default CrossIcon;
