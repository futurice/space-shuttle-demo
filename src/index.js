import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { backgroundAmbient } from './modules/sounds';

import './index.css';

backgroundAmbient();

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);

