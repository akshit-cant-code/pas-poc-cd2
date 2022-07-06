import { LoggingUtil } from '../index';

describe('LoggingUtil', () => {
  it('should validate generateReferenceId method with null parameters', () => {
    expect(LoggingUtil.generateReferenceId()).toBeDefined();
  });

  it('should validate generateReferenceId method', () => {
    const currentUserId = 'mockeId123';

    expect(LoggingUtil.generateReferenceId(currentUserId)).toBeDefined();
  });

  it('should validate getFormattedCurrentDateTime method', () => {
    expect(LoggingUtil.getFormattedCurrentDateTime()).toBeDefined();
  });

  it('should validate generateCorrelationId method', () => {
    expect(LoggingUtil.generateCorrelationId()).toBeDefined();
  });
});
