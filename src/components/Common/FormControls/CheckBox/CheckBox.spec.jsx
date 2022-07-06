import React from 'react';
import { mount } from 'enzyme';
import { FormHelperText } from '@material-ui/core';
import CheckBox from './CheckBox';

const mockFn = jest.fn(() => true);

const setup = (props) => {
  const defaultProps = {
    name: 'mockedCheckBoxField',
    value: false,
    isDisabled: false,
    identifier: 'mockedCheckBoxField',
    className: 'mockedClassName',
    inputLabel: 'mockedLabel',
    error: 'mockedError',
    isEditable: true,
    onBlur: mockFn,
    ...props
  };

  return mount(<CheckBox {...defaultProps} />);
};

describe('CheckBox component', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render one <CheckBox> tag', () => {
    const wrapper = setup();

    expect(wrapper.find('CheckBox')).toHaveLength(1);
  });

  it('should set valid class name on checkbox', () => {
    const wrapper = setup();
    wrapper.setProps({ className: 'form-select' });

    expect(wrapper.find('CheckBox').props().className).toBe('form-select');
  });

  it('should show the error message on error prop', () => {
    const props = {
      error: 'mockedErrorValue'
    };
    const wrapper = setup(props);

    expect(wrapper.find(FormHelperText).text()).toBe(props.error);
  });

  it('should display editable view', () => {
    const props = {
      isEditable: false
    };
    const wrapper = setup(props);

    expect(wrapper.find('CheckBox').props().isEditable).toBe(false);
  });

  it('should set valid checkbox value from value prop', () => {
    const props = {
      value: true
    };
    const wrapper = setup(props);

    expect(wrapper.find('CheckBox').props().value).toBe(true);
  });

  it('should call onChange prop method when input param changes', () => {
    const event = {
      target: { name: 'mockedOption1' }
    };
    const wrapper = setup();

    wrapper.find('span').find('input').simulate('change', event);
  });

  it('should not be disabled by default', () => {
    const wrapper = setup();

    expect(wrapper.find('input').props().disabled).toBeFalsy();
  });

  it('should have valid input of type checkbox', () => {
    const wrapper = setup();

    expect(wrapper.find('input').props().type).toEqual('checkbox');
  });

  it('should not be checked by default', () => {
    const wrapper = setup();

    expect(wrapper.find('input').props().checked).toBeFalsy();
  });

  it('should have valid snapshot', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
