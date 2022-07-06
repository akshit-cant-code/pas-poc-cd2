import React from 'react';
import { mount } from 'enzyme';
import { FormHelperText } from '@material-ui/core';
import RadioButtonGroup from './RadioButtonGroup';

const mockFn = jest.fn();

const setup = (props) => {
  const defaultProps = {
    name: 'mockedName',
    options: [
      {
        id: 1, name: 'mockedOption1', isDisabled: false, labelPrefix: 'mockedLabel'
      },
      { id: 2, name: 'mockedOption2', isDisabled: false },
      { id: null, name: 'mockedOption3', isDisabled: false }
    ],
    value: 1,
    onBlur: mockFn,
    ...props
  };

  return mount(<RadioButtonGroup {...defaultProps} />);
};

describe('RadioButtonGroup component', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render two <input> tag for two options', () => {
    const wrapper = setup();

    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('should display value in view mode', () => {
    const props = {
      isEditable: false,
      value: 1
    };

    const expectedValue = 'mockedOption1';

    const wrapper = setup(props);

    expect(wrapper.find('span').text()).toBe(expectedValue);
  });

  it('should display error message on error prop', () => {
    const props = {
      error: 'mockedErrorValue'
    };

    const wrapper = setup(props);

    expect(wrapper.find(FormHelperText).last().text()).toEqual(props.error);
  });

  it('should set valid default value from value props', () => {
    const props = {
      value: null
    };

    const wrapper = setup(props);

    expect(wrapper.prop('value')).toEqual(props.value);
  });

  it('should call onChange prop method on input change', () => {
    const props = {
      onChange: mockFn
    };

    const wrapper = setup(props);

    wrapper
      .find('input')
      .first()
      .simulate('change', { target: { value: 1 } });

    expect(mockFn).toHaveBeenCalled();
  });

  it('should set input value on onFocus method', () => {
    const wrapper = setup();

    const inputRef = {
      current: null
    };

    wrapper.find('input').first().simulate('focus', inputRef);
  });

  it('should have valid snapshot', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
