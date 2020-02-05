import React from "react";
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    // ...
  }

  handleClick() {
    // ...
  }

  render() {
    return (
      <button
         data-testid="button"
      >
      {this.props.children ? this.props.children : "Add text!"}
      </button>);
  }

}


export default Button;
