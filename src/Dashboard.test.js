import React from 'react';
import { mount } from 'enzyme';
import Dashboard from './Dashboard';
import Lever from './components/Lever';
import LiquidGauge from './components/LiquidGauge';

import { fuel$ } from './modules/engine';

const wait = (ms) =>
  new Promise((resolve) => setInterval(resolve, ms));

test('Dashboard contains a throttle lever and a fuel gauge', () => {
  // Render the dashboard to a fake document
  const dashboard = mount(<Dashboard />);

  expect(dashboard.find(Lever)).toHaveLength(1);
  expect(dashboard.find(LiquidGauge)).toHaveLength(1);
});

test('The fuel gauge show the current amount of fuel in the fuel tank', async () => {
  const dashboard = mount(<Dashboard />);

  expect(dashboard.find(Lever)).toHaveLength(1);

  const fuelInTank = await fuel$.first().toPromise();

  expect(dashboard.find(LiquidGauge).props().value).toBeDefined();
  expect(dashboard.find(LiquidGauge).props().value).toEqual(fuelInTank);
});

test('Going full throttle decreses the amount of fuel', async () => {
  const dashboard = mount(<Dashboard />);

  dashboard.find(Lever).find('input').simulate('change', { target: { value: 100 }});

  await wait(1000);

  expect(dashboard.find(LiquidGauge).props().value).toBeLessThan(100);
});
