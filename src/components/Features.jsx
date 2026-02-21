import CSS from './Features.module.css';

const features = [
  { title: 'Fast Sharing', desc: 'Zero-lag screen sharing with proprietary optimization.', icon: '⚡' },
  { title: 'Secure Connection', desc: 'End-to-end encryption for all your data streams.', icon: '🛡️' },
  { title: 'Multi-Device', desc: 'Connect up to 10 devices simultaneously.', icon: '📱' },
  { title: 'Low Latency', desc: 'Industry-leading < 50ms latency for real-time interaction.', icon: '⏱️' },
  { title: '4K Support', desc: 'Ultra-HD resolution support for crystal clear visuals.', icon: '💎' },
  { title: 'Easy Setup', desc: 'No complex configuration needed. Connect in one tap.', icon: '✨' },
];

const Features = () => {
  return (
    <section className={CSS.features} id="features">
      <div className="container">
        <div className={`${CSS.header} reveal`}>
          <h2 className={CSS.title}>Why Choose <span className="gradient-text">SkyIPTV</span></h2>
          <p className={CSS.subtitle}>The most advanced screen sharing technology at your fingertips.</p>
        </div>
        <div className={CSS.grid}>
          {features.map((f, i) => (
            <div key={f.title} className={`${CSS.featureCard} glass reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={CSS.icon}>{f.icon}</div>
              <h3 className={CSS.featureTitle}>{f.title}</h3>
              <p className={CSS.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
