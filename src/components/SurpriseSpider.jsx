import React from 'react';
import './SurpriseSpider.css';

const SurpriseSpider = ({ rainbowWidth }) => {
  // The image should take the full width of the rainbowWidth prop
  const imageStyle = {
    width: `${rainbowWidth}px`,
  };

  return (
    <div className="surprise-spider-container">
      <img 
        src="/spidersspidersspiders.png" 
        alt="Surprise Spiders"
        className="surprise-spider-image"
        style={imageStyle}
      />
    </div>
  );
};

export default SurpriseSpider; 