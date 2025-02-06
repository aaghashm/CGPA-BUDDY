import React, { useState, useEffect } from 'react';
import './PopupModal.css';

const PopupModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCloseEnabled, setIsCloseEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCloseEnabled(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="friskence-popup-overlay">
      <div className="friskence-popup-content">
        <div className="friskence-popup-header">
          <h2>Access Free AI Tools on Friskence AI</h2>
          <p>Transform Your Workflow in Minutes</p>
        </div>
        
        <div className="friskence-popup-features">
          <div className="friskence-feature">
            <span className="friskence-icon">🎥</span>
            <p>Create YouTube Shorts Instantly</p>
          </div>
          <div className="friskence-feature">
            <span className="friskence-icon">📝</span>
            <p>Enhance Writing Across Platforms</p>
          </div>
          <div className="friskence-feature">
            <span className="friskence-icon">🌐</span>
            <p>Multi-Language Text Extraction</p>
          </div>
        </div>
        
        <div className="friskence-popup-buttons">
          <button 
            className="friskence-try-now-btn"
            onClick={() => window.open('https://friskence.tech', '_blank')}
          >
            Explore Friskence AI
          </button>
          <button 
            className={`friskence-close-btn ${isCloseEnabled ? 'enabled' : 'disabled'}`}
            onClick={() => {
              if (isCloseEnabled) {
                setIsVisible(false);
                onClose && onClose();
              }
            }}
            disabled={!isCloseEnabled}
          >
            {isCloseEnabled ? 'Close' : 'Wait 2 seconds...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;