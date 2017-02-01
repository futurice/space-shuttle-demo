import React, { Component } from 'react';
import Lever from '../../components/Lever';
import Gauge from '../../components/Gauge';
import LiquidGauge from '../../components/LiquidGauge';
import Button from '../../components/Button';
import { speed$, fuel$, setThrottle, boost } from '../../modules/engine';

import './index.css';

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
      <div className="engine-info">
        <div className="engine-info__meters">
          <Gauge label="Speed" value={this.state.speed} />
          <LiquidGauge label="Fuel" value={this.state.fuel} />
        </div>
        <div className="engine-info__levers">
          <Lever className="engine-info__throttle" onChange={this.setThrottle} label="Throttle"></Lever>
          <Lever label="Radio"></Lever>
          <Button onClick={boost} className="engine-info__boost">Boost</Button>
        </div>
      </div>
    );
  }
}

export default EngineInfo;
