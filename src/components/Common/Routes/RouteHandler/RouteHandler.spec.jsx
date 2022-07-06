import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../../../../redux/store/configureStore';
import { APP_CONSTANTS } from '../../../../constants';

import RouteHandler from './RouteHandler';
import { Home } from '../../..';

const setup = (props) => {
  const store = configureStore();

  const defaultProps = {
    component: Home,
    type: APP_CONSTANTS.ROUTE_TYPES.PUBLIC,
    location: { pathname: '/home' },
    path: '/home',
    ...props
  };

  return mount(
    <Router>
      <Provider store={store}>
        <RouteHandler {...defaultProps} />
      </Provider>
    </Router>
  );
};

describe('The route handler', () => {
  it('should renders without crashing', () => {
    const wrapper = setup(true);

    expect(wrapper.find('PublicRoute').exists());
    expect(wrapper.find('Route').exists()).toBe(true);
  });

  it('should have valid props for public types', () => {
    const wrapper = setup(false, {
      type: APP_CONSTANTS.ROUTE_TYPES.PUBLIC,
      routes: {}
    });

    const { type } = wrapper.find('RouteHandler').props();

    expect(wrapper.find('PublicRoute').exists()).toBe(true);
    expect(type).toBe('publicRoute');
  });

  it('should have valid snapshot', () => {
    const wrapper = setup(true);

    expect(wrapper).toMatchSnapshot();
  });
});
