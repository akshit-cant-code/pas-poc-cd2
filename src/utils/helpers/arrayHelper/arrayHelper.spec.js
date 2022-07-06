import ArrayHelper from './arrayHelper';

describe('ArrayHelper component', () => {
  it('should validate value is array', () => {
    const params = ['mockedValue'];
    expect(ArrayHelper.isArray(params)).toBe(true);
  });
});
