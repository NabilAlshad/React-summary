import React, { useEffect, useState } from "react";
const Effect = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");

  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  // useEffect(() => {
  //   console.log("rendered");

  //   document.title = `clicked ${count} times`;
  //   // addCount();
  // }, [count]);
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    setInterval(tick, 1000);
  });

  const inputHandler = (e) => {
    let value = e.target.value;
    setText(value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={(e) => inputHandler(e)} />
      <h1>{date.toLocaleTimeString("bn-BD")}</h1>
      <button onClick={addCount}>increase</button>
      {/* <Show></Show> */}
    </div>
  );
};

export default Effect;
