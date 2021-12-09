import React, { useContext, useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Context from '../context/Context';
import StartStopBtn from './StartStopBtn';

function CircularBar() {
  const { time, setTime } = useContext(Context);
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  useEffect(() => { 
    const timeConverter = () => {
      const convertedSeconds = Number(time.split(':')[1]);
      const convertedMinutes = (Number(time.split(':')[0]) * 60);
      setTimeInSeconds(convertedSeconds + convertedMinutes);
    }
    
    timeConverter() 
  }, [time]);

  return (
    <>
      <div className="circular-bar-container">
        <CircularProgressbar
          value={1300}
          maxValue={timeInSeconds}
          text={`${time}`}
        />
      </div>
      <StartStopBtn />
    </>
  )
}

export default CircularBar;