import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import PublicRoute from './PublicRoute';
import { Home } from '../../..';
import { ROUTE_CONSTANTS } from '../../../../constants';
import configureStore from '../../../../redux/store/configureStore';

function setup() {
  const store = configureStore();

  const props = {
    routes: {},
    component: Home,
    path: ROUTE_CONSTANTS.ROOT
  };

  return mount(
    <Router>
      <Provider store={store}>
        <PublicRoute {...props} />
      </Provider>
    </Router>
  );
}

describe('This public route', () => {
  it('should renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('PublicRoute').exists()).toBe(true);
    expect(wrapper.find('Route').exists()).toBe(true);
  });

  it('should have valid props when session is public', () => {
    const wrapper = setup();
    const { path } = wrapper.find('PublicRoute').props();
    const { render } = wrapper.find('Route').props();
    const renderResult = render({
      location: ROUTE_CONSTANTS.ROOT
    });

    expect(renderResult.props.location).toBe(ROUTE_CONSTANTS.ROOT);
    expect(path).toBe(ROUTE_CONSTANTS.ROOT);
  });
});

describe('This public route', () => {
  it('should redirects without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('PublicRoute').exists()).toBe(true);
    expect(wrapper.find('Route').exists()).toBe(true);
  });
});

describe('The public Route', () => {
  it('should have valid snapshot', () => {
    const wrapper = setup(true);
    expect(wrapper).toMatchSnapshot();
  });
});
