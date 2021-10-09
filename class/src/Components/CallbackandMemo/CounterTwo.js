import React from "react";

const CounterTwo = ({ count2, counterTwo }) => {
  console.log("counter two rendered");
  return (
    <div>
      <h1>{count2}</h1>
      <button onClick={counterTwo}>increment by five</button>
    </div>
  );
};

export default React.memo(CounterTwo);
