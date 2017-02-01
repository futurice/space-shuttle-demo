import React, { Component } from 'react';
import DashboardRow from './components/DashboardRow';
import EngineInfo from './containers/EngineInfo';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <DashboardRow>
          <EngineInfo />
        </DashboardRow>
      </div>
    );
  }
}

export default Dashboard;
