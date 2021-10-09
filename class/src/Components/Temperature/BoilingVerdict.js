import React from "react";

const BoilingVerdict = ({ celsius = 0 }) => {
  if (celsius >= 100) {
    return <p>water will boil</p>;
  }
  return <p>not boil</p>;
};
export default BoilingVerdict;
