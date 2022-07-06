import React from 'react';
import { mount } from 'enzyme';
import { FormHelperText } from '@material-ui/core';
import SelectBox from './SelectBox';

const setup = (props) => {
  const defaultProps = {
    identifier: 'mockedSelect',
    name: 'mockedSelect',
    options: [
      { id: 1, name: 'mockedOption1' },
      { id: 2, name: 'mockedOption2' },
      { id: 3, name: 'mockedOption3' }
    ],
    value: 1,
    label: 'mockedSelect',
    dataTextField: 'name',
    dataValueField: 'id',
    ...props
  };

  return mount(<SelectBox {...defaultProps} />);
};

describe('SelectBox component', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render one <select> tag', () => {
    const wrapper = setup();

    expect(wrapper.find('SelectBox')).toHaveLength(1);
  });

  it('should display value in view mode', () => {
    const props = {
      isEditable: false,
      value: 1
    };

    const wrapper = setup(props);
    const expectedValue = 'mockedOption1';

    expect(wrapper.find('span').text()).toBe(expectedValue);
  });

  it('should display error message on error prop', () => {
    const props = {
      error: 'mockedErrorValue'
    };

    const wrapper = setup(props);

    expect(wrapper.find(FormHelperText).text()).toEqual(props.error);
  });

  it('should set default value from value prop', () => {
    const wrapper = setup();
    wrapper.setProps({ value: 2 });

    expect(wrapper.find('SelectBox').props().value).toBe(2);
  });

  it('should set valid class name from props', () => {
    const wrapper = setup();
    wrapper.setProps({ className: 'form-select' });
    expect(wrapper.find('SelectBox').props().className).toBe('form-select');
  });

  it('should call onChange prop method on select change', () => {
    const wrapper = setup();
    wrapper.find('input').simulate('change', { target: { value: 1 } });
  });

  it('should set the value and defaultOption', () => {
    const props = {
      defaultOption: false,
      value: ''
    };

    const wrapper = setup(props);
    expect(wrapper.find('SelectBox').props().value).toBe('');
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
