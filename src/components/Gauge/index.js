import React, { Component } from 'react';
import './../LiquidGauge/index.css';
import './index.css';

class Gauge extends Component {
  render() {

    const degrees = 20 + (this.props.value / 100) * 130 - 90;
    return (
      <div>
      <div className="liquid-gauge__wrapper">
          <div className="liquid-gauge">
            <div className="gauge__pointer">
              <svg style={{ 'transform': `rotate(${degrees}deg)`}}>
                <polygon points="50, 0 40, 50 60, 50" />
                <circle cx="50" cy="50" r="12" />
              </svg>
            </div>
          </div>
          <label className="liquid-gauge__label">{this.props.label.toUpperCase()}</label>
        </div>
      </div>
    );
  }
}

export default Gauge;