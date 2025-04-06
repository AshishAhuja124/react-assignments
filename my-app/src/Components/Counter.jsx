import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <div>Counter</div>
      <button className="p-4" onClick={handleIncrement}>Increment</button>
      <span className="px-4">{count}</span>
      <button className="p-4" onClick={handleDecrement}>Decrement</button>
      <button className="p-4" onClick={handleReset}>Reset</button>

    </>
  );
};

export default Counter;
