import THEME_CONSTANTS from './index';
import { Transform } from '../../utils';

const variablesDefault = jest.mock('../../styles/themes/_default.module.scss');
const variablesDark = jest.mock('../../styles/themes/_dark.module.scss');

const transformedVariablesDefault = Transform.serialize(variablesDefault);
const transformedVariablesDark = Transform.serialize(variablesDark);

describe('THEME_CONSTANTS', () => {
  it('should create default theme from scss variable', () => {
    expect(THEME_CONSTANTS.DEFAULT(transformedVariablesDefault)).toBeDefined();
  });

  it('should create dark theme from scss variable', () => {
    expect(THEME_CONSTANTS.DARK(transformedVariablesDark)).toBeDefined();
  });

  it('should have valid snapshot', () => {
    expect(
      THEME_CONSTANTS.DEFAULT(transformedVariablesDefault)
    ).toMatchSnapshot();
    expect(THEME_CONSTANTS.DARK(transformedVariablesDark)).toMatchSnapshot();
  });
});
