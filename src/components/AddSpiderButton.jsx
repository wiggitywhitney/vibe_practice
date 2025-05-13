import React from 'react';
import './AddSpiderButton.css';

const AddSpiderButton = ({ onClick, isSpiderPresent }) => {
  return (
    <div className="add-spider-container lower-left"> 
      <button 
        className="add-spider-button"
        onClick={onClick}
      >
        {isSpiderPresent ? 'Remove spider?' : 'Add spider?'}
      </button>
    </div>
  );
};

export default AddSpiderButton; 