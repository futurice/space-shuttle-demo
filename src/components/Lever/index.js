import React, { Component } from 'react';
import classNames from 'classnames';
import './index.css';

class Lever extends Component {

  emitValue = (event) => {
    this.props.onChange(parseInt(event.target.value, 10));
  }
  render() {

    const value =
      this.props.value === undefined ? undefined : this.props.value;

    const classes = classNames('lever__wrapper', this.props.className);

    return (
      <div className={classes}>
        <div className="lever">
          <input value={value} defaultValue="0" onChange={this.emitValue} type="range" className="lever__input" />
        </div>
        <label className="lever__label">
          { this.props.label.toUpperCase() }
        </label>
      </div>
    );
  }
}

Lever.defaultProps = {
  onChange: () => {}
};

export default Lever;
