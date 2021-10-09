import { Component } from "react";

class Emoji extends Component {
  addEmoji = (text, emoji) => `${text} ${emoji} ${text}}`;
  render(override) {
    let text = "i am from emoji component";
    if (override) text = override;

    return <div>{text}</div>;
  }
}

export default Emoji;
