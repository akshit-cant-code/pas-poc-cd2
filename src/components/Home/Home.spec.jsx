import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';
import Home from './Home';

const setup = (props = {}) => {
  const store = configureStore();
  const defaultProps = {
    isLoading: false,
    ...props
  };

  return mount(
    <Router>
      <Provider store={store}>
        <Home {...defaultProps} />
      </Provider>
    </Router>
  );
};

describe('Home component', () => {
  it('should renders without crashing', () => {
    const props = { t: jest.fn((x) => x) };
    const wrapper = setup(props);
    const { isLoading } = wrapper.find('Home').props();

    expect(isLoading).toBeFalsy();
  });

  it('should have valid snapshot', () => {
    const props = { t: jest.fn((x) => x) };
    const wrapper = setup(props);

    expect(wrapper).toMatchSnapshot();
  });
});
