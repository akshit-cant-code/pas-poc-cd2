import { CommonUtil } from '../index';

jest.useFakeTimers();

describe('CommonUtil', () => {
  it('should validate getUuid method', () => {
    expect(CommonUtil.getUuid()).toHaveLength(36);
  });

  it('should validate wait method', () => {
    expect(CommonUtil.wait(1000)).toBeDefined();
  });

  it('should validate scrollToTop method', () => {
    expect(CommonUtil.scrollToTop()).toBeUndefined();
  });

  it('should validate timestamp method', () => {
    expect(CommonUtil.timestamp()).toBeDefined();
  });

  it('should validate isOnClient method', () => {
    expect(CommonUtil.isOnClient()).toBeTruthy();
  });

  it('should validate isOnServer method', () => {
    expect(CommonUtil.isOnServer()).toBeFalsy();
  });

  it('should validate isIOS method', () => {
    expect(CommonUtil.isOnIOS()).toBeFalsy();
  });
});
