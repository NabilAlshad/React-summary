import React, { Component } from "react";

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { change, locale, show, enable } = this.props;
    if (!enable) {
      return null;
    }
    console.log("button rendered");
    return (
      <div>
        <button onClick={() => change(locale)}>
          {locale === "en-US" ? "show English Time" : " show Bangladesh Time"}
        </button>
        {/* {locale === "en-Us" ? <p>hello</p> : <p>bangla</p>} */}
      </div>
    );
  }
}

export default Button;
