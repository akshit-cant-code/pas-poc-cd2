import React from 'react';
import { mount } from 'enzyme';
import TextInput from './TextInput';

const mockFn = jest.fn();

const setup = (props) => {
  const defaultProps = {
    identifier: 'mockedTextInputField',
    name: 'mockedTextInputField',
    maxLength: 15,
    autoFocus: true,
    onBlur: mockFn,
    ...props
  };

  return mount(<TextInput {...defaultProps} />);
};

describe('TextInput component', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render one TextField tag', () => {
    const wrapper = setup();

    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('should display value in view mode', () => {
    const props = {
      isEditable: false,
      value: 'mockedValue'
    };

    const wrapper = setup(props);

    expect(wrapper.find('span').text()).toBe(props.value);
  });

  it('should display valid error when passed from input props', () => {
    const props = {
      error: 'mockedErrorValue'
    };

    const wrapper = setup(props);

    expect(wrapper.find('TextInput').props().error).toEqual(props.error);
  });

  it('should display valid name when passed from input props', () => {
    const props = {
      name: 'mockedName'
    };

    const wrapper = setup(props);

    expect(wrapper.find('TextInput').props().name).toEqual(props.name);
  });

  it('should not be disabled by default', () => {
    const wrapper = setup();

    expect(wrapper.find('TextInput').props().disabled).toBeFalsy();
  });

  it('should not autocomplete by default', () => {
    const wrapper = setup();

    expect(wrapper.find('TextInput').props().autoComplete).toEqual('off');
  });

  it('should be of type text by default', () => {
    const wrapper = setup();

    expect(wrapper.find('TextInput').props().type).toEqual('text');
  });

  it('should autofocus by default', () => {
    const wrapper = setup();

    expect(wrapper.find('TextInput').props().autoFocus).toBeTruthy();
  });

  it('should set input value on onChange method', () => {
    const wrapper = setup();
    const event = {
      target: { value: 'mockedValue' }
    };

    wrapper.find('input').simulate('change', event);
  });

  it('should set input value on onFocus method', () => {
    const wrapper = setup();
    const inputRef = {
      current: null
    };

    wrapper.find('input').simulate('focus', inputRef);
  });

  it('should display valid placeholder when passed from input props', () => {
    const props = {
      placeholder: 'mockedValue'
    };

    const wrapper = setup(props);
    const { placeholder } = wrapper.find('TextInput').props();

    expect(placeholder).toEqual(props.placeholder);
  });

  it('should set input value on onPaste method if paste allowed', () => {
    const wrapper = setup({ isPasteAllowed: true });
    const event = {
      target: { value: 'mockedValue' }
    };

    wrapper.find('input').simulate('paste', event);
  });

  it('should set input value on onPaste method if paste is not allowed', () => {
    const wrapper = setup({ isPasteAllowed: false });
    const event = {
      target: { value: 'mockedValue' }
    };

    wrapper.find('input').simulate('paste', event);
  });

  it('should set input value on onCut method if cut is allowed', () => {
    const wrapper = setup({ isCutAllowed: true });
    const event = {
      target: { value: 'mockedValue' }
    };

    wrapper.find('input').simulate('cut', event);
  });

  it('should set input value on onCut method if cut is not allowed', () => {
    const wrapper = setup({ isCutAllowed: false });
    const event = {
      target: { value: 'mockedValue' }
    };

    wrapper.find('input').simulate('cut', event);
  });

  it('should set input value on onCopy method if copy is allowed', () => {
    const wrapper = setup({ isCopyAllowed: false });
    const event = {
      target: { value: 'mockedValue' }
    };

    wrapper.find('input').simulate('copy', event);
  });

  it('should set input value on onCopy method if copy is not allowed', () => {
    const wrapper = setup({ isCopyAllowed: true });
    const event = {
      target: { value: 'mockedValue' }
    };

    wrapper.find('input').simulate('copy', event);
  });

  it('should have valid snapshot', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
