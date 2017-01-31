import React, { Component } from 'react';
import classNames from 'classnames';
import './index.css';

class Monitor extends Component {
  render() {

    const classes = classNames('monitor', this.props.className);

    return (
      <div className={classes}>
        <div className="monitor__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Monitor;
