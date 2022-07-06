const React = require('react');
const reactI18next = require('react-i18next');

const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = {};

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => (props) => <Component t={(k) => k} {...props} />,
  // eslint-disable-next-line react/jsx-fragments, react/prop-types, no-unused-vars
  Trans: ({ children }) => <React.Fragment>(children)</React.Fragment>,
  Translation: ({ children }) => children((k) => k, { i18n: {} }),
  useTranslation: () => useMock,

  // mock if needed
  I18nextProvider: reactI18next.I18nextProvider,
  initReactI18next: reactI18next.initReactI18next,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n
};
