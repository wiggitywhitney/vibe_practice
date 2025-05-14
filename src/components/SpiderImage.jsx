import React from 'react';
import './SpiderImage.css';

const SpiderImage = ({ rainbowWidth }) => {
  // console.log('[SpiderImage.jsx] Received rainbowWidth:', rainbowWidth);
  const spiderWidth = rainbowWidth * 0.25; // 25% of rainbow width
  // const spiderWidth = 50; // TEMPORARY FIXED WIDTH
  
  return (
    <div className="spider-container">
      <img 
        src="/Spider.png" 
        alt="Spider"
        className="spider-image"
        style={{ width: `${spiderWidth}px` }}
      />
    </div>
  );
};

export default SpiderImage; 