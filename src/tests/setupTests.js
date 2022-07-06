import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import 'mutationobserver-shim';

Enzyme.configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

const FileReaderMock = jest.fn().mockImplementation(() => {
  return {
    readAsDataURL: jest.fn()
  };
});

const locationMock = {
  reload: jest.fn(),
  replace: jest.fn()
};

const URLMock = {
  createObjectURL: jest.fn(),
  revokeObjectURL: jest.fn()
};

const fetchMock = jest.fn(() => Promise.resolve({ json: jest.fn((x) => Promise.resolve(x)) }));

const openMock = jest.fn();

const jqueryMock = jest.fn(() => {
  return {
    animate: jest.fn()
  };
});

const scrollToMock = jest.fn();

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.localStorage = localStorageMock;
global.sessionStorage = sessionStorageMock;
global.FileReader = FileReaderMock;
global.URL = URLMock;
global.open = openMock;
global.location = locationMock;
global.$ = jqueryMock;
global.fetch = fetchMock;
global.scrollTo = scrollToMock;
