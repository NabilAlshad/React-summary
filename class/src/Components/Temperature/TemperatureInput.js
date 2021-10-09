import React from "react";

const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};

const TemperatureInput = ({ temperature, onTemperatureChange, scale }) => {
  // const {scale, temperature} =this.props;
  return (
    <div>
      <fieldset>
        <label htmlFor="">enter temperature {scaleNames[scale]}</label>
        <input
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
          type="text"
        />
      </fieldset>
    </div>
  );
};

export default TemperatureInput;
