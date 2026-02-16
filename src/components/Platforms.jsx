import PlatformCard from './PlatformCard';
import CSS from './Platforms.module.css';

import windowImg from '../assets/window.png';
import macImg from '../assets/mac.png';
import androidImg from '../assets/andriod.png';
import amazonImg from '../assets/Amazon.png';
import smarttvImg from '../assets/smarttv.png';
import iosImg from '../assets/ios.png';

const platforms = [
  {
    name: 'Windows',
    image: windowImg,
    description: 'Windows 10 & 11 supported',
    downloadUrl: 'https://example.com/download/windows',
    version: 'v3.2.1',
  },
  {
    name: 'macOS',
    image: macImg,
    description: 'macOS Monterey & above',
    downloadUrl: 'https://example.com/download/macos',
    version: 'v3.2.1',
  },
  {
    name: 'Android',
    image: androidImg,
    description: 'Android 8.0+ devices',
    downloadUrl: 'https://example.com/download/android',
    version: 'v3.2.0',
  },
  {
    name: 'Firestick',
    image: amazonImg,
    description: 'All Fire TV editions',
    downloadUrl: 'https://example.com/download/firestick',
    version: 'v3.1.8',
  },
  {
    name: 'Samsung TV',
    image: smarttvImg,
    description: 'Tizen OS Smart TVs',
    downloadUrl: 'https://example.com/download/samsung-tv',
    version: 'v3.1.5',
  },
  {
    name: 'iOS',
    image: iosImg,
    description: 'iPhone & iPad',
    downloadUrl: 'https://example.com/download/ios',
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
