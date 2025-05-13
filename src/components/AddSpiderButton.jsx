import { useState } from 'react';
import './AddSpiderButton.css';

export function AddSpiderButton() {
  return (
    <div className="add-spider-container lower-left" data-testid="button-container">
      <button className="add-spider-button">
        Add spider?
      </button>
    </div>
  );
} 