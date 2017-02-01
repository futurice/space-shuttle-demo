import React, { Component } from 'react';
import Lever from '../../components/Lever';
import Gauge from '../../components/Gauge';

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
        <Gauge label="Speed" value={this.state.speed} />
        <Lever onChange={this.setThrottle} label="Throttle"></Lever>
      </div>
    );
  }
}

export default EngineInfo;
