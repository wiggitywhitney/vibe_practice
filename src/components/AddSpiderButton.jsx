import React from 'react';
import './AddSpiderButton.css';

const AddSpiderButton = ({ onClick, isSpiderPresent, shouldHaveOutline }) => {
  const buttonClasses = ['add-spider-button'];
  if (shouldHaveOutline) {
    buttonClasses.push('black-outline');
  }

  // Determine button text based on state
  let buttonText;
  if (shouldHaveOutline) {
    // Surprise spider is active
    buttonText = 'AHHHHHH!!!';
  } else if (isSpiderPresent) {
    // Regular spider is active
    buttonText = 'Remove spider?';
  } else {
    // No spider present
    buttonText = 'Add spider?';
  }

  return (
    <div className="add-spider-container lower-left"> 
      <button 
        className={buttonClasses.join(' ')}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AddSpiderButton; 