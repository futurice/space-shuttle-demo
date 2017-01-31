import React, { Component } from 'react';
import Monitor from './components/Monitor';
import Lever from './components/Lever';
import LiquidGauge from './components/LiquidGauge';
import Button from './components/Button';
import Gauge from './components/Gauge';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Monitor>
          hello world
        </Monitor>
        <div className="levers">
          <LiquidGauge label="Fuel" value={50} />
          <Lever label="Turbo"></Lever>
          <Lever label="Throttle"></Lever>
          <Lever label="Radio"></Lever>
          <LiquidGauge label="Antifreeze" value={20} />
          <Button>Eject</Button>
          <Gauge label="Speed" value={30}></Gauge>
        </div>
      </div>
    );
  }
}

export default Dashboard;
