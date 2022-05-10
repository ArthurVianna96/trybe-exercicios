function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function addToArrayFromKey(keysObject, stringToCompare) {
  const arrayOfCaracters = [];
  for (let letter of stringToCompare) {
    if (keysObject[letter]) {
      arrayOfCaracters.push(keysObject[letter]);
    } else {
      arrayOfCaracters.push(letter);
    }
  }
  return arrayOfCaracters.join('');
}

function encode(stringToEncode) {
  const encodeKeys = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return addToArrayFromKey(encodeKeys, stringToEncode);
}

function decode(encodedString) {
  const decodeKeys = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return addToArrayFromKey(decodeKeys, encodedString);
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };