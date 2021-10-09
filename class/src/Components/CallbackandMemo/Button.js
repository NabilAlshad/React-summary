import React from "react";

const Button = ({ t, counterOne, counterTwo }) => {
  return (
    <div>
      <button onClick={() => counterOne}> increment by {t}</button>
    </div>
  );
};

export default Button;
