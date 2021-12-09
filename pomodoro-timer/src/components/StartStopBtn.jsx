import React, { useContext } from 'react';
import Context from '../context/Context';

function StartStopBtn() {
  const { startStopBtn, setStartStopBtn } = useContext(Context);

  return (
    <button
      type="button"
      onClick={ () => setStartStopBtn(!startStopBtn)}
    >
      Start / Stop
    </button>
  )
}

export default StartStopBtn;
