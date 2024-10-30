import React from 'react';
import './style.css';
import Image from 'next/image';

const MetricCard = ({ title, value, unit, status, accentColor, iconSrc, altText, waveAltText, waveSrc }) => {
  return (
    <div className="metric-card" style={{ borderLeftColor: accentColor }}>
      <div className="metric-card-header">
        <Image
        src={iconSrc}
        alt={altText}
          width={58}
          height={58} />
        <h3>{title}</h3>
      </div>
      <div className="metric-card-body">
        <span className="metric-value">{value}</span>
        <span className="metric-unit">{unit}</span>
      </div>
      <div className="metric-status">
        <span className={`status-indicator ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className=" pt-1">
        <Image
            src={waveSrc}
            alt={waveAltText}
            width={173}
            height={72.5} />
      </div>
    </div>
  );
};

export default MetricCard;
