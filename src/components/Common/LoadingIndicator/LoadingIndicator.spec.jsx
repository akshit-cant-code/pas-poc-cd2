import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/store/configureStore';
import LoadingIndicator from './LoadingIndicator';

const setup = () => {
  const store = configureStore();
  return mount(
    <Provider store={store}>
      <LoadingIndicator />
    </Provider>
  );
};

describe('The loading indicator', () => {
  it('should renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('LoadingIndicator').exists()).toBe(true);
  });
});

describe('The loading indicator', () => {
  it('should have valid snapshot', () => {
    const wrapper = setup(true);
    expect(wrapper).toMatchSnapshot();
  });
});
