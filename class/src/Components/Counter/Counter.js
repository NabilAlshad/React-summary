import React from "react";
import WithCounter from "../../Hoc/WithCounter";
const Counter = ({ counter, incrementCounter }) => {
  //   const { count } = this.props;
  return (
    <div>
      <button onClick={incrementCounter}>clicked{counter} times</button>
    </div>
  );
};

// export default Counter;
export default WithCounter(Counter);
