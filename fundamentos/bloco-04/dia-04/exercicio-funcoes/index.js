// 1 - Faça cinco funções, um para cada operação aritmética básica. Sua função deve ter dois argumentos, a e b. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 2;
const b = 6;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplay(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiplay(a, b));
console.log(divide(a, b));
console.log(remainder(a, b));

//2. Faça uma função que retorne o maior de dois números.

function biggestOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'os números são iguais';
    }
}

console.log(biggestOfTwoNumbers(a, b));

// 3. Faça uma função que retorne o maior de três números.

const c = 9;

function biggestOfThreeNumbers(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    } else {
        return 'pelo menos dois números são os maiores e iguais';
    }
}

console.log(biggestOfThreeNumbers(a, b, c));


// 4. Faça uma função que retorne "positive" se for passado um valor positivo, "negative" se for negativo e "zero" caso contrário.

function isPositive(numberToBeTested) {
    if (numberToBeTested > 0) {
        return 'positive';
    } else if (numberToBeTested < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

console.log(isPositive(a));

// 5. Faça uma função receba os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido a função deve retornar uma mensagem de erro.

function isValidTriangle(angle1, angle2, angle3) {
    if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
        throw new Error('Erro: os ângulos devem ser positivos, reveja os parâmetros informados a função.');
    } else if (angle1 + angle2 + angle3 === 180) {
        return true;
    } else {
        return false;
    }

}

console.log(isValidTriangle(130, 20, 30));

//Bônus - exercício número 2 e 3 para qualquer quantidade de números

function biggestNumber(arrayOfNumbers) {
    if (!arrayOfNumbers && !Array.isArray(arrayOfNumbers)) {
        throw new Error('Deve ser especificado um array de número para a comparação');
    }
    let biggestNumber = arrayOfNumbers[0];
    for (let index in arrayOfNumbers) {
        if (arrayOfNumbers[index] > biggestNumber) {
            biggestNumber = arrayOfNumbers[index];
        }
    }
    return biggestNumber;
}

console.log(biggestNumber([-4, 10, 200, 4, 6, 27]));