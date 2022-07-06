import React from 'react';
import { mount } from 'enzyme';
import ButtonGroup from './ButtonGroup';

const mockFn = jest.fn();

const setup = (props) => {
  const defaultProps = {
    name: 'mocked',
    options: [
      { id: '1', name: 'one' },
      { id: '2', name: 'two' },
      { id: '3', name: 'three' }
    ],
    ...props
  };

  return mount(<ButtonGroup {...defaultProps} />);
};

describe('ButtonGroup component', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render one ButtonGroup tag', () => {
    const wrapper = setup();

    expect(wrapper.find('ButtonGroup')).toHaveLength(1);
  });

  it('should set valid class name on ButtonGroup', () => {
    const wrapper = setup();
    wrapper.setProps({ className: 'form-select' });

    expect(wrapper.find('ButtonGroup').props().className).toBe('form-select');
  });

  it('should set valid checkbox value from value prop', () => {
    const props = {
      value: '1'
    };

    const wrapper = setup(props);

    expect(wrapper.find('ButtonGroup').props().value).toBe(props.value);
  });

  it('should call onChange prop method when input param changes', () => {
    const event = 'mockedValue';
    const props = {
      onChange: mockFn
    };

    const wrapper = setup(props);
    wrapper.find('button').first().simulate('click', event);

    expect(mockFn).toHaveBeenCalled();
  });

  it('should display valid error when passed from input props', () => {
    const props = {
      error: 'mockedErrorValue'
    };

    const wrapper = setup(props);

    expect(wrapper.find('ButtonGroup').props().error).toEqual(props.error);
  });

  it('should have valid snapshot', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
