import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h3>Counter: {count}</h3>
      <div className="counter-buttons">
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
        <button onClick={reset}>🔄 Reset</button>
      </div>
    </div>
  );
};

export default Counter;
