import React, { useContext, useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Context from '../context/Context';
import StartStopBtn from './StartStopBtn';

function CircularBar() {
  const { time, setTime } = useContext(Context);
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0);
  const [updateTimeInSeconds, setUpdateTimeInSeconds] = useState(0)

  useEffect(() => { 
    const timeConverter = () => {
      const convertedSeconds = Number(time.split(':')[1]);
      const convertedMinutes = (Number(time.split(':')[0]) * 60);
      setTotalTimeInSeconds(convertedSeconds + convertedMinutes);
    }
    
    timeConverter() 
  }, [time]);

  const timeFormater = (timeInSeconds) => {
    const formatedTime = `${Math.floor(timeInSeconds / 60)}:${timeInSeconds % 60}`
    setTime(formatedTime);
    console.log(time);
  }

  useEffect(() => {
    const ONE_SECOND = 1000;
    let timeLeftInSeconds = totalTimeInSeconds;
    const timeInterval = setInterval(() => { 
      if (totalTimeInSeconds !== 0 && timeLeftInSeconds >= 1) {
        timeLeftInSeconds -= 1;
        setUpdateTimeInSeconds(timeLeftInSeconds);
      } else {
        clearInterval(timeInterval);
      }
    }, ONE_SECOND)
  }, [totalTimeInSeconds]);

  useEffect(() => { 
    timeFormater(updateTimeInSeconds)
    console.log(updateTimeInSeconds);
   }, [updateTimeInSeconds]);

  return (
    <>
      <div className="circular-bar-container">
        <CircularProgressbar
          value={updateTimeInSeconds}
          maxValue={totalTimeInSeconds}
          text={`${time}`}
        />
      </div>
      {/* <StartStopBtn /> */}
    </>
  )
}

export default CircularBar;