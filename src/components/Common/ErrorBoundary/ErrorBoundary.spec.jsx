import React, { Suspense } from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import configureStore from '../../../redux/store/configureStore';
import ErrorBoundary from './ErrorBoundary';

const store = configureStore({
  common: {
    loadingIndicator: { isLoading: true },
    application: {
      hasError: true,
      errorInformation: {
        error: {
          status: 403
        }
      }
    }
  }
});

jest.mock('../../../services/logging/logging', () => {
  return {
    logError: jest.fn(() => 'loggedInfo'),
    getCorrelationId: jest.fn(() => 'mockedCorrelationId')
  };
});

const errorInfo = {
  error: 'mockedError',
  status: 403
};

const Components = jest.fn(() => null);

const setup = (props = {}) => {
  const defaultProps = {
    application: {
      hasError: true,
      errorInformation: {
        error: {
          status: 403
        }
      }
    },
    actions: {
      setApplicationErrorState: jest.fn(),
      hideLoader: jest.fn()
    },
    history: {
      push: jest.fn()
    },
    session: {},
    ...props
  };

  return mount(
    <Provider store={store}>
      <Suspense fallback="loading">
        <Router>
          <Switch>
            <ErrorBoundary {...defaultProps}>
              <Components />
            </ErrorBoundary>
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
};

describe('Error Boundary', () => {
  it('should render without crashing when not in error state', () => {
    const wrapper = setup();

    expect(wrapper.find('ErrorBoundary').exists()).toBeTruthy();
  });

  it('should render without crashing whenIn error state', () => {
    const wrapper = setup();

    const error = new Error(errorInfo);
    wrapper.find(Components).simulateError(error);

    expect(wrapper.find('ErrorBoundary').state()).toHaveProperty(
      'hasError',
      true
    );
  });

  it('should have set showErrorPage state value', () => {
    const wrapper = setup();
    const instance = wrapper.find('ErrorBoundary').instance();

    instance.setState({ showErrorPage: true });

    expect(wrapper.find('ErrorBoundary').state()).toHaveProperty(
      'showErrorPage',
      true
    );
  });

  it('should have called onError method', () => {
    const wrapper = setup();
    const instance = wrapper.find('ErrorBoundary').instance();

    jest.spyOn(instance, 'onError');

    expect(instance.onError(errorInfo)).toEqual();
  });

  it('should have called getStatusCode method', () => {
    const error = { response: { status: 403 } };
    const wrapper = setup();
    const instance = wrapper.find('ErrorBoundary').instance();

    jest.spyOn(instance, 'getStatusCode');

    expect(instance.getStatusCode()).toEqual();
    expect(instance.getStatusCode(error)).toEqual(error.response.status);
  });

  it('should have called handleErrors method', () => {
    const errorInfo401 = {
      error: { response: { status: 401 } }
    };

    const errorInfo403 = {
      error: { response: { status: 403 } }
    };

    const errorInfo404 = {
      error: { response: { status: 404 } }
    };

    const errorInfo500 = {
      error: { response: { status: 500 } }
    };

    const correlationId = 'mockedId';

    const wrapper = setup();
    const instance = wrapper.find('ErrorBoundary').instance();

    jest.spyOn(instance, 'handleErrors');

    expect(instance.handleErrors(errorInfo401, correlationId)).toEqual();
    expect(instance.handleErrors(errorInfo403, correlationId)).toEqual();
    expect(instance.handleErrors(errorInfo404, correlationId)).toEqual();
    expect(instance.handleErrors(errorInfo500, correlationId)).toEqual();
    expect(instance.handleErrors()).toEqual();
  });

  it('should have valid snapshot', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
