import React, { Component } from 'react';
import DashboardRow from './components/DashboardRow';
import EngineInfo from './containers/EngineInfo';
import TweetBox from './containers/TweetBox';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <DashboardRow>
          <EngineInfo />
          <TweetBox />
        </DashboardRow>
      </div>
    );
  }
}

export default Dashboard;
