import StringHelper from './stringHelper';

describe('StringHelper component', () => {
  it('should validate camelize', () => {
    expect(StringHelper.camelize('mock')).toBe('mock');
  });

  it('should validate dasherize', () => {
    expect(StringHelper.dasherize('mock')).toBe('mock');
  });

  it('should validate underscored', () => {
    expect(StringHelper.underscored('mock')).toBe('mock');
  });

  it('should validate classify', () => {
    expect(StringHelper.classify('mock')).toBe('Mock');
  });

  it('should validate titleize', () => {
    expect(StringHelper.titleize('mock')).toBe('Mock');
  });

  it('should validate humanize', () => {
    expect(StringHelper.humanize('mock')).toBe('Mock');
  });

  it('should validate decapitalize', () => {
    expect(StringHelper.decapitalize('mock')).toBe('mock');
  });

  it('should validate capitalize', () => {
    expect(StringHelper.capitalize('mock')).toBe('Mock');
  });

  it('should validate pluralize', () => {
    expect(StringHelper.pluralize('mock')).toBe('mocks');
  });
});
