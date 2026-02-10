import { useState } from 'react';
import CSS from './HowItWorks.module.css';

const steps = {
  Android: [
    { step: 1, title: 'Install App', text: 'Download the SkyIPTV app from Play Store.' },
    { step: 2, title: 'Open App', text: 'Grant necessary permissions for screen recording.' },
    { step: 3, title: 'Scan Code', text: 'Scan the QR code on your TV or enter PIN.' },
  ],
  Windows: [
    { step: 1, title: 'Download Client', text: 'Install the SkyIPTV Windows executable.' },
    { step: 2, title: 'Pair Devices', text: 'Ensure both devices are on the same Wi-Fi.' },
    { step: 3, title: 'Start Mirror', text: 'Click "Start Mirroring" and select your TV.' },
  ],
  'Samsung TV': [
    { step: 1, title: 'Launch App', text: 'Open SkyIPTV from the Samsung Smart Hub.' },
    { step: 2, title: 'Wait for PIN', text: 'A 6-digit pairing code will appear on screen.' },
    { step: 3, title: 'Ready', text: 'Connect from your mobile or PC using the PIN.' },
  ],
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('Android');

  return (
    <section className={CSS.section} id="how-it-works">
      <div className="container">
        <h2 className={CSS.title}>How It Works</h2>
        <div className={CSS.tabs}>
          {Object.keys(steps).map((tab) => (
            <button 
              key={tab} 
              className={`${CSS.tabBtn} ${activeTab === tab ? CSS.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={CSS.stepper}>
          {steps[activeTab].map((s) => (
            <div key={s.step} className={`${CSS.stepItem} animate-fade-in`}>
              <div className={CSS.number}>{s.step}</div>
              <h3 className={CSS.stepTitle}>{s.title}</h3>
              <p className={CSS.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
