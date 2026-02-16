import { useState } from 'react';
import CSS from './HowItWorks.module.css';

// Samsung Smart TV screenshots
import S1 from '../assets/S1.jpeg';
import S2 from '../assets/S2.jpeg';
import S3 from '../assets/S3.jpeg';
import S4 from '../assets/S4.jpeg';
import S5 from '../assets/S5.jpeg';

// LG Smart TV screenshots
import L1 from '../assets/1.jpeg';
import L2 from '../assets/2.jpeg';
import L3 from '../assets/3.jpeg';
import L4 from '../assets/4.jpeg';
import L5 from '../assets/5.jpeg';

const platformSteps = {
  Android: [
    {
      step: 1,
      title: 'Download the App',
      text: (
        <>
          Download our app <strong>IPTV Smarters Pro</strong>{' '}
          <a href="https://example.com/download/android" target="_blank" rel="noopener noreferrer" className="hiw-link">(here)</a>
        </>
      ),
    },
    {
      step: 2,
      title: 'Login with Your Details',
      text: 'Login to the application with your subscription details (Get details from your service provider)',
    },
    {
      step: 3,
      title: 'Get Premium',
      text: (
        <>
          After Login &gt;&gt; <strong>Get Premium Version</strong> to unlock exclusive features.
        </>
      ),
    },
  ],
  iOS: [
    {
      step: 1,
      title: 'Download the App',
      text: (
        <>
          Download our app <strong>IPTV Smarters Pro</strong>{' '}
          <a href="https://example.com/download/ios" target="_blank" rel="noopener noreferrer" className="hiw-link">(here)</a>
        </>
      ),
    },
    {
      step: 2,
      title: 'Login with Your Details',
      text: 'Login to the application with your subscription details (Get details from your service provider)',
    },
    {
      step: 3,
      title: 'Get Premium',
      text: (
        <>
          After Login &gt;&gt; <strong>Get Premium Version</strong> to unlock exclusive features.
        </>
      ),
    },
  ],
  'Window / Mac': [
    {
      step: 1,
      title: 'Download & Install',
      text: (
        <>
          <strong>For Windows:</strong> Download <code>.exe</code> and install the application IPTV Smarters Pro<br />
          <strong>For Mac:</strong> Download <code>.dmg</code> and install the application IPTV Smarters Pro
        </>
      ),
    },
    {
      step: 2,
      title: 'Login with Your Details',
      text: 'Login to the application with your subscription details (Get details from your service provider)',
    },
    {
      step: 3,
      title: 'Note',
      text: 'The Premium Version features are not available for Win/Mac.',
      isNote: true,
    },
  ],
  Firestick: [
    {
      step: 1,
      title: 'Download APK',
      text: (
        <>
          Download <strong>IPTV Smarters Pro</strong> direct APK{' '}
          <a href="https://example.com/download/firestick" target="_blank" rel="noopener noreferrer" className="hiw-link">(here)</a>.
        </>
      ),
    },
    {
      step: 2,
      title: 'Get Downloader App',
      text: 'Download the Downloader app on Firestick.',
    },
    {
      step: 3,
      title: 'Enable Unknown Sources',
      text: (
        <>
          Go to <strong>Settings</strong> of Firestick &gt;&gt; <strong>My Fire TV</strong> &gt;&gt; <strong>Developer Options</strong> &gt;&gt; <strong>Install from Unknown Apps</strong> &gt;&gt; Click <strong>Downloader</strong> to change the status to <strong>ON</strong>.
        </>
      ),
    },
    {
      step: 4,
      title: 'Install via Downloader',
      text: 'Open the Downloader app and put the complete APK link on Downloader and then install the app.',
    },
  ],
  'Samsung Smart TV': [
    {
      step: 1,
      title: 'Access the Source',
      text: 'Press the Source button on your Samsung remote to get started.',
      images: [S1],
    },
    {
      step: 2,
      title: 'Download IPTV Smarters Pro',
      text: 'Navigate to Search and type in IPTV Smarters Pro to download the app.',
      images: [S2, S3, S4],
    },
    {
      step: 3,
      title: 'Log In to the App',
      text: 'Open the application and log in using your subscription details: Username, Password, and Portal URL.',
      images: [S5],
    },
    {
      step: 4,
      title: 'Important Note',
      text: (
        <>
          Ensure that your service provider has their DNS registered with us for optimal performance.{' '}
          <a href="#" className="hiw-link">More Info</a>
          <br /><br />
          <strong>Please be aware:</strong> The Premium Version features are not available for Samsung Smart TVs.
        </>
      ),
      isNote: true,
    },
  ],
  'LG Smart TV': [
    {
      step: 1,
      title: 'Access the Home Menu',
      text: 'Press the Home button on your LG remote to begin.',
      images: [L1],
    },
    {
      step: 2,
      title: 'Open the LG Content Store',
      text: 'Navigate to the LG Content Store and open it.',
      images: [L2],
    },
    {
      step: 3,
      title: 'Download IPTV Smarters Pro',
      text: 'Select the Search button and type in IPTV Smarters Pro to download the app.',
      images: [L3, L4],
    },
    {
      step: 4,
      title: 'Log In to the Application',
      text: 'Open the application and log in using your subscription details: Username, Password, and Portal URL.',
      images: [L5],
    },
    {
      step: 5,
      title: 'Important Note',
      text: (
        <>
          Please ensure that your service provider has their DNS registered with us for optimal performance.{' '}
          <a href="#" className="hiw-link">More Info</a>
          <br /><br />
          <strong>Note:</strong> Premium version features are not available for LG Smart TVs.
        </>
      ),
      isNote: true,
    },
  ],
};

const tabIcons = {
  Android: '🤖',
  iOS: '🍎',
  'Window / Mac': '🖥️',
  Firestick: '🔥',
  'Samsung Smart TV': '📺',
  'LG Smart TV': '📺',
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('Android');

  return (
    <section className={CSS.section} id="how-it-works">
      <div className="container">
        <p className={CSS.subtitle}>Setup Guide</p>
        <h2 className={CSS.title}>How It Works</h2>
        <p className={CSS.desc}>
          Follow the simple steps below to get started on your favorite device.
        </p>

        {/* Tab buttons */}
        <div className={CSS.tabs}>
          {Object.keys(platformSteps).map((tab) => (
            <button
              key={tab}
              className={`${CSS.tabBtn} ${activeTab === tab ? CSS.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className={CSS.tabIcon}>{tabIcons[tab]}</span>
              {tab}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className={CSS.stepper} key={activeTab}>
          {platformSteps[activeTab].map((s) => (
            <div
              key={s.step}
              className={`${CSS.stepItem} ${s.isNote ? CSS.noteItem : ''} animate-fade-in`}
              style={{ animationDelay: `${(s.step - 1) * 0.12}s` }}
            >
              <div className={`${CSS.number} ${s.isNote ? CSS.noteNumber : ''}`}>
                {s.isNote ? '!' : s.step}
              </div>
              <h3 className={CSS.stepTitle}>{s.title}</h3>
              <p className={CSS.stepText}>{s.text}</p>

              {/* Step images */}
              {s.images && s.images.length > 0 && (
                <div className={CSS.stepImages}>
                  {s.images.map((img, idx) => (
                    <a key={idx} href={img} target="_blank" rel="noopener noreferrer">
                      <img
                        src={img}
                        alt={`${s.title} screenshot ${idx + 1}`}
                        className={CSS.stepImg}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
