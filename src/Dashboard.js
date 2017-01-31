import React, { Component } from 'react';
import DashboardRow from './components/DashboardRow';
import Lever from './components/Lever';
import LiquidGauge from './components/LiquidGauge';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <DashboardRow>
          <LiquidGauge label="Fuel" />
          <Lever label="Throttle"></Lever>
        </DashboardRow>

      </div>
    );
  }
}

export default Dashboard;
