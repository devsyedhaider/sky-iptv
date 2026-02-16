import { useState } from 'react';
import CSS from './PlatformCard.module.css';

const PlatformCard = ({ name, icon, description, downloadUrl, version, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleDownload = (e) => {
    e.stopPropagation();
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`${CSS.card} animate-fade-in`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {/* Shine effect overlay */}
      <div className={CSS.shine} />

      {/* Glow border */}
      <div className={CSS.glowBorder} />

      {/* Card content */}
      <div className={CSS.cardInner}>
        <div className={CSS.iconWrapper}>
          <div className={CSS.iconBg} />
          <span className={CSS.icon}>{icon}</span>
        </div>

        <h3 className={CSS.name}>{name}</h3>
        <p className={CSS.description}>{description}</p>

        <div className={CSS.versionBadge}>
          <span className={CSS.versionDot} />
          {version}
        </div>

        <button
          className={CSS.downloadBtn}
          onClick={handleDownload}
          aria-label={`Download for ${name}`}
        >
          <svg
            className={CSS.downloadIcon}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
          <svg
            className={CSS.arrowIcon}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlatformCard;
