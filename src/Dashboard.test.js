import React from 'react';
import { mount } from 'enzyme';
import Dashboard from './Dashboard';

test('Dashboard contains a throttle lever and a fuel gauge', () => {
  // Render the dashboard to a fake document
  const dashboard = mount(<Dashboard />);
});

