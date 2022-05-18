const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(_2Darray) {
  return _2Darray.reduce((accumulatedArray, currentArray) => {
    return accumulatedArray = [...accumulatedArray,...currentArray];
  }, [])
}

console.log(flatten(arrays));