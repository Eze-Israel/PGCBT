import React, { useState, useEffect } from 'react';

const ToggleCount = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const toggleCounting = () => setIsActive(!isActive);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={toggleCounting}>
        {isActive ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default ToggleCount;