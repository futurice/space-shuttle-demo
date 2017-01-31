import React, { Component } from 'react';

import './index.css';

class DashboardRow extends Component {
  render() {
    return (
      <div className="dashboard-row">
        {this.props.children}
      </div>
    );
  }
}

export default DashboardRow;
