import React from "react";
import ClassComponents from "../ClassComponents/ClassComponents";

const ClockList = ({ quantities = [] }) => {
  return (
    <div>
      {quantities.map(() => (
        <ClassComponents key={Math.random()}></ClassComponents>
      ))}
    </div>
  );
};

export default ClockList;
