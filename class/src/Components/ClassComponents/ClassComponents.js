import React, { Component } from "react";
import Button from "../Button/Button";

class ClassComponents extends Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.timerClock = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerClock);
  }
  tick() {
    this.setState({ date: new Date() });
  }

  handleClick = (locale) => {
    this.setState({ locale });
  };
  render() {
    const { date, locale } = this.state;

    console.log("clock rendered");
    return (
      <div>
        <h1>
          {locale === "bn-BD" ? "Bd time is" : "english time is"}:
          {date.toLocaleTimeString(locale)}
        </h1>
        {/* <Button change={() => this.handleClick.bind(this, "en-US")}></Button> */}
        {locale === "en-US" ? (
          <Button
            change={this.handleClick}
            show
            enable={false}
            locale="bn-BD"
          ></Button>
        ) : (
          <Button
            change={this.handleClick}
            show={false}
            locale="en-US"
            enable
          ></Button>
        )}
      </div>
    );
  }
}

export default ClassComponents;
