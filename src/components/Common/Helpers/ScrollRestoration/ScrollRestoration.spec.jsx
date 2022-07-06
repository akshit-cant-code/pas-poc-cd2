import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../../redux/store/configureStore';
import ScrollRestoration from './ScrollRestoration';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: 'mockedPath'
  })
}));

const setup = () => {
  const store = configureStore();
  return mount(
    <Provider store={store}>
      <ScrollRestoration />
    </Provider>
  );
};

describe('The ScrollRestoration component', () => {
  it('should renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('ScrollRestoration').exists()).toBe(true);
  });

  it('should have valid snapshot', () => {
    const wrapper = setup(true);
    expect(wrapper).toMatchSnapshot();
  });
});
