import { useState } from 'react';
import './AddSpiderButton.css';

export function AddSpiderButton() {
  return (
    <div data-testid="button-container" className="lower-left">
      <button className="add-spider-button spider-font">
        Add spider?
      </button>
    </div>
  );
} 