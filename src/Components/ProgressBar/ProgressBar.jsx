import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ maxValue, currentValue }) => {
    const progress = (currentValue / maxValue) * 100;

    return (
        <div className="progress-bar">
            <div className="progress-bar__text">
                <span><span className="progress-bar__text--bold">{currentValue}</span> z {maxValue}</span>
            </div>
            <div
                className="progress-bar__fill"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;
