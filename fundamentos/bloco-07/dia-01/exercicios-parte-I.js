function testingScope(escopo) {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);
testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function mergeArrays(leftArray, rightArray) {
    const mergedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            mergedArray.push(leftArray[0]);
            leftArray.shift();
        } else {
            mergedArray.push(rightArray[0]);
            rightArray.shift();
        }
    }

    return [...mergedArray, ...leftArray, ...rightArray];
}

function mergeSortArray(listOfNumbers) {
    if (listOfNumbers.length === 1) return listOfNumbers;
    const middle = Math.ceil(listOfNumbers.length / 2);
    const left = listOfNumbers.slice(0, middle);
    const right = listOfNumbers.slice(middle, middle * 2);
    const sortedArrayLeft = mergeSortArray(left);
    const sortedArrayRight = mergeSortArray(right);
    return mergeArrays(sortedArrayLeft, sortedArrayRight);
}

console.log(mergeSortArray(oddsAndEvens));
console.log(oddsAndEvens.sort((a, b) => a - b));