import { useState } from 'react';
import './SpiderButton.css';

export function SpiderButton() {
  const [buttonText, setButtonText] = useState('Add spiders?');
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    setButtonText('No spiders for you!');
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <button 
      className={`spider-button ${isHovered ? 'spider-button-hover' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
    </button>
  );
} 