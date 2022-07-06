import { Transform } from '../index';

describe('Transform component', () => {
  it('should validate serialize', () => {
    expect(Transform.serialize([{}]));
  });

  it('should validate  deserialize', () => {
    expect(Transform.deserialize([{}]));
  });
});
