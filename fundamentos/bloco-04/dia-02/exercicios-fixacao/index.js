let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let number of numbers) {
    console.log(number);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sumOfNumbers = 0;
for (number of numbers) {
    sumOfNumbers += number;
}
console.log(sumOfNumbers);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let meanOfNumbers = sumOfNumbers / numbers.length;
console.log(meanOfNumbers);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let message = meanOfNumbers > 20 ? 'Valor maior que 20' : 'Valor menor ou igual a 20';
console.log(message);

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let biggestNumber = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i];
    }
}
console.log(biggestNumber);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numberOfOddNumbers = 0;
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        numberOfOddNumbers += 1;
    }
}
numberOfOddNumbers ? console.log(numberOfOddNumbers) : console.log('nenhum valor ímpar encontrado');

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let smallestNumber = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }
}
console.log(smallestNumber);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let newArray = [];
for (i = 1; i <= 25; i += 1) {
    newArray.push(i);
}
console.log(newArray);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (number of newArray) {
    console.log(number / 2);
}