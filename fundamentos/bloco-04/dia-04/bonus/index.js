// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function decodeRomanNumber(numberInRomanNumber) {
    const numberDictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    if (numberInRomanNumber.length === 1) {
        return numberDictionary[numberInRomanNumber];
    }

    let lettersArray = numberInRomanNumber.split('');
    let number = numberDictionary[lettersArray[0]];
    for (let i = 0; i < lettersArray.length - 1; i += 1){
        if (numberDictionary[lettersArray[i]] >= numberDictionary[lettersArray[i + 1]]) {
            number += numberDictionary[lettersArray[i + 1]]
        } else {
            number = numberDictionary[lettersArray[i + 1]] - number;
        }
    }
    return number;
}

console.log(decodeRomanNumber('MDXI'));

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let evenNumbers = [];
    for (let direction of vector) {
        for (let number of direction) {
            if (number % 2 === 0) {
                evenNumbers.push(number)
            }
        }
    }
    return evenNumbers;
}

console.log(arrayOfNumbers(vector));

// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];
  
function basketFruitOrganizer(arrayOfFruits) {
    let basket = {};
    for (let fruit of arrayOfFruits) {
        if (!basket[fruit]) {
            basket[fruit] = 0;
        }
        basket[fruit] += 1;
    }
    let fruits = [];
    for (item in basket) {
        let message = basket[item] > 1 ? basket[item] + ' ' + item + 's' : basket[item] + ' ' + item;
        fruits.push(message);
    }
    return `Sua cesta possui: ${fruits.join(', ')}.`;
}

console.log(basketFruitOrganizer(basket));

// 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
};
  
console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome + ' ' + moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}° andar, apartamento ${moradores.blocoDois[1].apartamento}`);

// ou

const lastResidentInBlock2 = moradores.blocoDois[1];

console.log(`O morador do bloco 2 de nome ${lastResidentInBlock2.nome + ' ' + lastResidentInBlock2.sobrenome} mora no ${lastResidentInBlock2.andar}° andar, apartamento ${lastResidentInBlock2.apartamento}`);

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

const residentsBlock1 = moradores.blocoUm;
const residentsBlock2 = moradores.blocoDois;

console.log('----- Moradores do bloco 1 -----')
for (let resident of residentsBlock1) {
    console.log(resident.nome + ' ' + resident.sobrenome);
}

console.log('----- Moradores do bloco 2 -----')
for (let resident of residentsBlock2) {
    console.log(resident.nome + ' ' + resident.sobrenome);
}