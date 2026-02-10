import PlatformCard from './PlatformCard';
import CSS from './Platforms.module.css';

const platforms = [
  { name: 'Windows', icon: '🪟' },
  { name: 'macOS', icon: '🍎' },
  { name: 'Android', icon: '🤖' },
  { name: 'Firestick', icon: '🔥' },
  { name: 'Samsung TV', icon: '📺' },
  { name: 'LG TV', icon: '🇰🇷' },
];

const Platforms = () => {
  return (
    <section className={CSS.platforms} id="download">
      <div className="container">
        <h2 className={CSS.title}>Supported Platforms</h2>
        <div className={CSS.grid}>
          {platforms.map((p, i) => (
            <PlatformCard key={p.name} {...p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
