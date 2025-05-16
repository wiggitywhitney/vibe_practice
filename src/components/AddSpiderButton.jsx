import React from 'react';
import './AddSpiderButton.css';

const AddSpiderButton = ({ onClick, isSpiderPresent, shouldHaveOutline }) => {
  const buttonClasses = ['add-spider-button'];
  if (shouldHaveOutline) {
    buttonClasses.push('black-outline');
  }

  return (
    <div className="add-spider-container lower-left"> 
      <button 
        className={buttonClasses.join(' ')}
        onClick={onClick}
      >
        {isSpiderPresent ? 'Remove spider?' : 'Add spider?'}
      </button>
    </div>
  );
};

export default AddSpiderButton; 