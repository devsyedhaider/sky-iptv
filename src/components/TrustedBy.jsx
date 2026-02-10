import CSS from './TrustedBy.module.css';

const logos = [
  { name: 'Sony', icon: '📺' },
  { name: 'Samsung', icon: '📱' },
  { name: 'Chromecast', icon: '🎬' },
  { name: 'Fire TV Stick', icon: '🔥' },
  { name: 'Thomson', icon: '🖥️' },
];

const TrustedBy = () => {
  return (
    <div className={CSS.trusted}>
      <div className="container">
        <p className={CSS.label}>Compatible with leading devices</p>
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
