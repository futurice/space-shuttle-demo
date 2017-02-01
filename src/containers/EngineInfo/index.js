import React, { Component } from 'react';
import Lever from '../../components/Lever';
import LiquidGauge from '../../components/LiquidGauge';

import { speed$, fuel$, setThrottle } from '../../modules/engine';

class EngineInfo extends Component {
  state = {
    fuel: 0,
    speed: 0
  }
  componentDidMount = () => {
    speed$.subscribe((currentSpeed) => this.setState({ speed: currentSpeed }));
    fuel$.subscribe((currentFuel) => this.setState({ fuel: currentFuel }));
  }
  setThrottle = (amount) => {
    setThrottle(amount);
  }
  render() {
    return (
      <div>
        <LiquidGauge label="Fuel" value={this.state.fuel} />
        <Lever onChange={this.setThrottle} label="Throttle"></Lever>
      </div>
    );
  }
}

export default EngineInfo;
