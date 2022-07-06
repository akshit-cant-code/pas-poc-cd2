import FormatUtil from './format';

describe('DateFormat', () => {
  it('should validate formatMessage method', () => {
    const expectedResult = 'mocked message';
    const data = 'mocked message';

    expect(FormatUtil.formatMessage(data)).toEqual(expectedResult);
  });
});
