import React, { Component } from "react";

class Form extends Component {
  state = {
    title: "js",
    text: "js is awesome",
    library: "React",
  };
  handleChange = (e) => {
    console.log(e.target.value);
    // this.setState({ title: e.target.value });
    if (e.target.name === "text") {
      this.setState({ title: e.target.value });
    } else if (e.target.name === "textarea") {
      this.setState({ text: e.target.value });
    } else if (e.target.name === "select") {
      this.setState({ library: e.target.value });
    }
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="text"
            placeholder="enter"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <p>{this.state.title}</p>
          <textarea
            type="text"
            name="textarea"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
          <p>{this.state.text}</p>
          <select
            name="select"
            value={this.state.library}
            onChange={this.handleChange}
          >
            <option value="react">React</option>
            <option value="Angular">Angular</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
