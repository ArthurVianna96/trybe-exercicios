const { sum, myRemove } = require('./functions');

describe('sum function', () => {
  it('should return 9 if a = 4 and b = 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('should return 0 if a = 0 and b = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('should throw an error when an input is not a number', () => {
    expect(() => sum(4,'5')).toThrow();
  });
  it('should throw an error with the message "parameters must be numbers" when an input is not a number', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });
});

describe('myRemove function', () => {
  const testArray = [1, 2, 3, 4];
  it('should return an array without the item input if it is contained inside the input array', () => {
    expect(myRemove(testArray, 3)).toEqual([1, 2, 4]);
  });
  it('should not return the same array if the item input is contained inside the input array', () => {
    expect(myRemove(testArray, 3)).not.toEqual(testArray);
  });
  it('should return the same array if the item input is not contained inside the input array', () => {
    expect(myRemove(testArray, 5)).toEqual(testArray);
  });
});