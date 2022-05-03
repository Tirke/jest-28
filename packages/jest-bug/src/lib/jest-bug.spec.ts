import { jestBug } from './jest-bug';

describe('jestBug', () => {
  it('should work', () => {
    expect(jestBug()).toEqual('jest-bug');
  });
});
