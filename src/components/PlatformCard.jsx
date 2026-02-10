import CSS from './PlatformCard.module.css';
import Button from './Button';

const PlatformCard = ({ name, icon, delay }) => {
  return (
    <div className={`${CSS.card} glass animate-fade-in`} style={{ animationDelay: `${delay}s` }}>
      <div className={CSS.icon}>{icon}</div>
      <h3 className={CSS.name}>{name}</h3>
      <Button variant="ghost" size="sm" className={CSS.downloadBtn}>Download</Button>
    </div>
  );
};

export default PlatformCard;
