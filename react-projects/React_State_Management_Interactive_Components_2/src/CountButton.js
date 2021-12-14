import React, { useState } from "react";

function CountButton () {
const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  
 return (
      <div>
        <button onClick={handleIncrement}>Click Count: {count}</button>
      </div>
  );
}

export default CountButton;