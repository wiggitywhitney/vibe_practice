import React, { useState, useRef, useEffect } from 'react';
import Rainbow from './components/Rainbow';
import AddSpiderButton from './components/AddSpiderButton';
import SpiderImage from './components/SpiderImage';
import SurpriseSpider from './components/SurpriseSpider';
import { selectSpiderType } from './utils/spiderUtils';
import './App.css';

const App = () => {
  const [spiderVisible, setSpiderVisible] = useState(false);
  const [spiderType, setSpiderType] = useState(null); // 'regular' or 'surprise'
  const [rainbowWidth, setRainbowWidth] = useState(0);
  const rainbowRef = useRef(null);
  
  useEffect(() => {
    const updateRainbowWidth = () => {
      if (rainbowRef.current) {
        const currentWidth = rainbowRef.current.offsetWidth;
        // console.log('[App.jsx] Rainbow offsetWidth captured:', currentWidth);
        setRainbowWidth(currentWidth);
      } else {
        // console.log('[App.jsx] rainbowRef.current is NOT available in updateRainbowWidth');
      }
    };

    updateRainbowWidth(); // Initial call
    // Call after a short delay to catch initial layout
    const timeoutId = setTimeout(updateRainbowWidth, 50); // Increased delay slightly

    window.addEventListener('resize', updateRainbowWidth);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateRainbowWidth);
    };
  }, []); // Empty dependency array: runs on mount and cleanup on unmount
  
  const handleSpiderButtonClick = () => {
    if (!spiderVisible) {
      // Add spider
      const type = selectSpiderType();
      // console.log('Selected spider type:', type);
      setSpiderType(type);
      setSpiderVisible(true);
    } else {
      // Remove spider
      setSpiderVisible(false);
      setSpiderType(null);
    }
  };
  
  return (
    <div className="app-container">
      <div className="rainbow-layout">
        <Rainbow 
          ref={rainbowRef}
          isSpiderPresent={spiderVisible} 
        />
        
        {spiderVisible && spiderType === 'regular' && (
          <SpiderImage rainbowWidth={rainbowWidth} />
        )}
        
        {spiderVisible && spiderType === 'surprise' && (
          <SurpriseSpider rainbowWidth={rainbowWidth} />
        )}
        
        <AddSpiderButton 
          onClick={handleSpiderButtonClick}
          isSpiderPresent={spiderVisible}
        />
      </div>
    </div>
  );
};

export default App;
