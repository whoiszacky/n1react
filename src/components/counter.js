import React, { useState } from 'react';
import '../styles.css';
/* import "./couner.css";
 */
const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="text-center">
      <h1>Counter: {count}</h1>
      <div className="mt-10 space-x-4">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;