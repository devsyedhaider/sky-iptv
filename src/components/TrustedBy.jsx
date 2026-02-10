import CSS from './TrustedBy.module.css';

const logos = [
  { name: 'TechFlow', icon: '💎' },
  { name: 'CloudNet', icon: '🌌' },
  { name: 'GlobalStream', icon: '🌐' },
  { name: 'PureConnect', icon: '🔗' },
  { name: 'VisionAI', icon: '🧠' },
];

const TrustedBy = () => {
  return (
    <div className={CSS.trusted}>
      <div className="container">
        <p className={CSS.label}>Trusted by leading tech teams worldwide</p>
        <div className={CSS.logoGrid}>
          {logos.map((logo) => (
            <div key={logo.name} className={CSS.logoItem}>
              <span className={CSS.icon}>{logo.icon}</span>
              <span className={CSS.name}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
