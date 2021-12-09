import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [time, setTime] = useState('25:00');
  const [startStopBtn, setStartStopBtn] = useState(false);

  const contextValues = { 
    time,
    setTime,
    startStopBtn,
    setStartStopBtn
  }

  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  )
}

export default Provider
