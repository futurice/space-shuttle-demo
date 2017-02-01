import React, { Component } from 'react';
import DashboardRow from './components/DashboardRow';
import Lever from './components/Lever';
import LiquidGauge from './components/LiquidGauge';

import { speed$, fuel$, setThrottle } from './modules/engine';

import './Dashboard.css';

class Dashboard extends Component {
  state = {
    fuel: 100,
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
      <div className="dashboard">
        <DashboardRow>
          <LiquidGauge label="Fuel" value={this.state.fuel} />
          <Lever onChange={this.setThrottle} label="Throttle"></Lever>
        </DashboardRow>
      </div>
    );
  }
}

export default Dashboard;
