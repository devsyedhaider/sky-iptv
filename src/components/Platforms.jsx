import PlatformCard from './PlatformCard';
import CSS from './Platforms.module.css';

const platforms = [
  {
    name: 'Windows',
    icon: '🪟',
    description: 'Windows 10 & 11 supported',
    downloadUrl: 'https://example.com/download/windows',
    version: 'v3.2.1',
  },
  {
    name: 'macOS',
    icon: '🍎',
    description: 'macOS Monterey & above',
    downloadUrl: 'https://example.com/download/macos',
    version: 'v3.2.1',
  },
  {
    name: 'Android',
    icon: '🤖',
    description: 'Android 8.0+ devices',
    downloadUrl: 'https://example.com/download/android',
    version: 'v3.2.0',
  },
  {
    name: 'Firestick',
    icon: '🔥',
    description: 'All Fire TV editions',
    downloadUrl: 'https://example.com/download/firestick',
    version: 'v3.1.8',
  },
  {
    name: 'Samsung TV',
    icon: '📺',
    description: 'Tizen OS Smart TVs',
    downloadUrl: 'https://example.com/download/samsung-tv',
    version: 'v3.1.5',
  },
  {
    name: 'LG TV',
    icon: '📺',
    description: 'WebOS Smart TVs',
    downloadUrl: 'https://example.com/download/lg-tv',
    version: 'v3.1.5',
  },
];

const Platforms = () => {
  return (
    <section className={CSS.platforms} id="download">
      <div className="container">
        <p className={CSS.subtitle}>Download & Install</p>
        <h2 className={CSS.title}>Supported Platforms</h2>
        <p className={CSS.desc}>
          Enjoy seamless streaming on all your favorite devices. Download the app
          and start watching in minutes.
        </p>
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
