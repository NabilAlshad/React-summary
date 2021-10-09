import { Component } from "react";

class MainCounter extends Component {
  state = {
    count: 0,
  };
  incrementCounter = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  render() {
    const { render } = this.props;
    const { count } = this.state;
    return render(count, this.incrementCounter);
  }
}

export default MainCounter;
