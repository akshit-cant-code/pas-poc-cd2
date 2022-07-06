import React from 'react';
import { mount } from 'enzyme';
import { FormHelperText } from '@material-ui/core';
import AutoSuggest from './AutoSuggest';

const mockFn = jest.fn();

const setup = (props) => {
  const defaultProps = {
    name: 'mockedOption1',
    identifier: 'mockedSelect',
    options: [
      { id: '1', name: 'mockedOption1' },
      { id: '2', name: 'mockedOption2' },
      { id: '3', name: 'mockedOption3' }
    ],
    label: 'mockedSelect',
    onBlur: mockFn,
    dataTextField: 'name',
    value: '1',
    ...props
  };

  return mount(<AutoSuggest {...defaultProps} />);
};

describe('AutoSuggest component', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render one <AutoSuggest> tag', () => {
    const wrapper = setup();

    expect(wrapper.find('AutoSuggest')).toHaveLength(1);
  });

  it('should display error message on error prop', () => {
    const props = {
      error: 'mockedErrorValue'
    };

    const wrapper = setup(props);

    expect(wrapper.find(FormHelperText).text()).toEqual(props.error);
  });

  it('should set the class name', () => {
    const wrapper = setup();
    wrapper.setProps({ className: 'form-select' });

    expect(wrapper.find('AutoSuggest').props().className).toBe('form-select');
  });

  it('should call onChange prop method', () => {
    const selectedOption = { id: 1, name: 'mockedOption1' };
    const event = { target: { value: '1' } };

    const wrapper = setup();

    wrapper.find('input').simulate('change', [event, selectedOption]);
  });

  it('should display editable view', () => {
    const props = {
      isEditable: false
    };

    const wrapper = setup(props);

    expect(wrapper.find('AutoSuggest').props().isEditable).toBe(false);
  });

  it('should have valid snapshot', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
