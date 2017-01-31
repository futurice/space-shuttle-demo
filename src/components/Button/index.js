import React, { Component } from 'react';
import classNames from 'classnames';
import './index.css';

class Button extends Component {
  render() {
    const classes = classNames('button', this.props.className);

    return (
      <button onClick={this.props.onClick} className={classes}>
        {this.props.children.toUpperCase()}
      </button>
    );
  }
}

export default Button;
