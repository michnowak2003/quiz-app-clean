import React from 'react';
import './LoadingSpinner.scss';
const LoadingSpinner = () => {
  return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default LoadingSpinner;
