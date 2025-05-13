import React from 'react';
import './AddSpiderButton.css';

const AddSpiderButton = ({ onClick, isSpiderPresent }) => {
  return (
    <button 
      className="add-spider-button"
      onClick={onClick}
    >
      {isSpiderPresent ? 'Remove spider?' : 'Add spider?'}
    </button>
  );
};

export default AddSpiderButton; 