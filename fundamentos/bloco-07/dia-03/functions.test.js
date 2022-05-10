const { sum } = require('./functions');

describe('função sum', () => {
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