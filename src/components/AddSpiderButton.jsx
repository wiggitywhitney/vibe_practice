import { useState } from 'react';
import './AddSpiderButton.css';

export function AddSpiderButton() {
  return (
    <div data-testid="button-container" className="lower-left">
      <button className="add-spider-button">
        Add spider?
      </button>
    </div>
  );
} 