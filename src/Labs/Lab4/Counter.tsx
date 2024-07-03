import React, { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(7);


  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    console.log(count + 1);
  };


  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
    console.log(count - 1);
  };

  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={incrementCount}
        id="wd-counter-up-click">
        Up
      </button>
      <button
        onClick={decrementCount}
        id="wd-counter-down-click">
        Down
      </button>
      <hr/>
    </div>
  );
}
