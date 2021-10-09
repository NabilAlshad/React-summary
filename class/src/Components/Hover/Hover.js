import React from "react";

const Hover = ({ count, incrementCounter }) => {
  return (
    <div>
      <h1 onMouseOver={incrementCounter}>hover {count}</h1>
    </div>
  );
};

export default Hover;
