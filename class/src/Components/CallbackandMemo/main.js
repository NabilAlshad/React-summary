import React, { useState } from "react";
import CounterTwo from "./CounterTwo";

const Main = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const counterOne = () => {
    setCount1((prev) => prev + 1);
  };
  const counterTwo = () => {
    setCount2((prev) => prev + 5);
  };
  console.log("counterOne rendered");
  return (
    <div>
      <p>{count1}</p>
      <button onClick={counterOne}>increase by one</button>
      {/* <Button></Button> */}
      <CounterTwo count2={count2} counterTwo={counterTwo}></CounterTwo>
    </div>
  );
};

export default Main;
