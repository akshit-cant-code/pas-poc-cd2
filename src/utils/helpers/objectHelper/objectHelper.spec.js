import ObjectHelper from './objectHelper';

describe('ObjectHelper component', () => {
  it('should validate empty object', () => {
    const params = {};
    expect(ObjectHelper.isEmpty(params)).toBe(true);
  });

  it('should validate cloneDeep method', () => {
    expect(ObjectHelper.cloneDeep({ mockedProperty: 'mockedProperty' })).toBeDefined();
  });
});
