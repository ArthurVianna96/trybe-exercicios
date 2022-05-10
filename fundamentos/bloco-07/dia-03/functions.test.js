const { sum, myRemove, myFizzBuzz } = require('./functions');

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

describe('myFizzBuzz', () => {
  it('should return "fizzbuzz" if "num" is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it('should return "fizz" if "num" is divisible only by 3', () => {
    expect(myFizzBuzz(6)).toBe("fizz");
  });
  it('should return "buzz" if "num" is divisible only by 5', () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  it('should return "num" if "num" is not divisible by 3 and 5', () => {
    const num = 11;
    expect(myFizzBuzz(num)).toBe(num);
  });
  it('should return false if "num" is not a number', () => {
    const notANumber = 'notANumber';
    expect(myFizzBuzz(notANumber)).toBeFalsy();
  });
});