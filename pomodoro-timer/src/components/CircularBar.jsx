import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 56;


function CircularBar() {
  return (
    <div className="circular-bar-container">
      <CircularProgressbar
        value={125}
        maxValue={250}
        text={`${percentage}%`}
      />
    </div>
  )
}

export default CircularBar;