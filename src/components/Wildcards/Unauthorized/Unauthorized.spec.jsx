import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/store/configureStore';
import Unauthorized from './Unauthorized';

const mockFn = jest.fn();

const store = configureStore({
  session: {
    currentTheme: 'DEFAULT',
    hasCheckedSession: true
  },
  common: {
    loadingIndicator: { isLoading: true }
  }
});

const setup = (props) => {
  const defaultProps = {
    t: mockFn,
    correlationId: 'mockedCorrelationId',
    ...props
  };

  return mount(
    <Router>
      <Provider store={store}>
        <Unauthorized {...defaultProps} />
      </Provider>
    </Router>
  );
};

describe('Unauthorized component', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render one Unauthorized tag', () => {
    const wrapper = setup();

    expect(wrapper.find('Unauthorized')).toHaveLength(1);
  });

  it('should have valid t props', () => {
    const wrapper = setup();

    expect(wrapper.find('Unauthorized').props().t).toBe(mockFn);
  });

  it('should have valid snapshot', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
