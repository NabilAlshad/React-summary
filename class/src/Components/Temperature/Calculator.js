import React, { Component } from "react";
import { converter, toCelsius, toFahrenheit } from "../../lib/Converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? converter(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? converter(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <>
          <TemperatureInput
            temperature={celsius}
            onTemperatureChange={this.handleChange}
            scale="c"
          ></TemperatureInput>
          <TemperatureInput
            temperature={fahrenheit}
            onTemperatureChange={this.handleChange}
            scale="f"
          ></TemperatureInput>
          <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
        </>
      </div>
    );
  }
}

export default Calculator;
