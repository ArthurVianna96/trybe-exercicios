// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(word) {
    let lettersInWord = word.split('');
    let reversedWord = lettersInWord.reverse().join('');
    return word === reversedWord ? true : false
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indexOfBiggestNumber(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
        throw new Error('the argument of the function should be an array')
    }
    let indexOfBiggestNumber = 0;
    for (let index in arrayOfNumbers) {
        if (arrayOfNumbers[index] > arrayOfNumbers[indexOfBiggestNumber]) {
            indexOfBiggestNumber = index;
        }
    }
    return indexOfBiggestNumber;
}

console.log(indexOfBiggestNumber([2, 3, 60, 7, 10, -10]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indexOfSmallestNumber(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
        throw new Error('the argument of the function should be an array')
    }
    let indexOfSmallestNumber = 0;
    for (let index in arrayOfNumbers) {
        if (arrayOfNumbers[index] < arrayOfNumbers[indexOfSmallestNumber]) {
            indexOfSmallestNumber = index;
        }
    }
    return indexOfSmallestNumber;
}

console.log(indexOfSmallestNumber( [2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestNameFinder(arrayOfNames) {
    if (!Array.isArray(arrayOfNames)) {
        throw new Error('the argument of the function should be an array')
    }
    let biggestName = arrayOfNames[0];
    for (let name of arrayOfNames) {
        if (name.length > biggestName.length) {
            biggestName = name;
        }
    }
    return biggestName;
}

console.log(biggestNameFinder(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeatedNumber(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
        throw new Error('the argument of the function should be an array')
    }
    let maxNumberOfRepetition = 1;
    let numberThatRepeatsMost = arrayOfNumbers[0];
    for (let i = 0; i < arrayOfNumbers.length; i += 1){
        let repetitionForNumber = 1;
        for (let j = i + 1; j < arrayOfNumbers.length; j += 1) {
            if (arrayOfNumbers[i] === arrayOfNumbers[j]) repetitionForNumber += 1;
        }
        if (repetitionForNumber > maxNumberOfRepetition) {
            maxNumberOfRepetition = repetitionForNumber;
            numberThatRepeatsMost = arrayOfNumbers[i];
        }
    }
    return numberThatRepeatsMost;
}

console.log(mostRepeatedNumber([5, 5, 5, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumFromOneToNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        throw new Error('o número especificado deve ser inteiro e não negativo')
    }
    let sum = 0;
    for (let index = 1; index <= number; index += 1){
        sum += index;
    }
    return sum;
}

console.log(sumFromOneToNumber(10));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function isEndingOfWord(ending, word) {
    if (ending.length > word.length) {
        throw new Error('the ending argument should be smaller than the word to look into');
    }
    let wordLettersArray = word.split('');
    let endingStringLength = ending.length;
    let lettersToRemoveFromWord = word.length - endingStringLength;
    for (let letter = 0; letter < lettersToRemoveFromWord; letter += 1){
        wordLettersArray.shift();
    }
    let wordEnding = wordLettersArray.join('');
    return ending === wordEnding ? true : false;
}

console.log(isEndingOfWord('be', 'trybe'));
console.log(isEndingOfWord('fernan', 'joaofernando'));