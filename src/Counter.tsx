import React, { useState } from "react";

interface CounterProps {
  initialValue: number;
}

export const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="p-4" >
      <h1>Counter: {count}</h1>
      <button  className="p-4" onClick={increment}>Increment</button>
      <button  className="p-4" onClick={decrement}>Decrement</button>
    </div>
  );
};
