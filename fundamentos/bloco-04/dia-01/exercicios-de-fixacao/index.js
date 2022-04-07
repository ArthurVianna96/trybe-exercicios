// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// - Adição (a + b)
// - Subtração (a - b)
// - Multiplicação (a * b)
// - Divisão (a / b)
// - Módulo (a % b)

const a = 6;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const n1 = 10;
const n2 = 15;

if (n1 > n2) {
    console.log('o maior número é ' + n1);
} else if (n2 > n1) {
    console.log('o maior número é ' + n2);
} else {
    console.log('ambos os números são iguas');
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const n3 = 10;

if (n1 > n2 && n1 > n3) {
    console.log('o maior número é ' + n1);
} else if (n2 > n1 && n2 > n3) {
    console.log('o maior número é ' + n2);
} else if (n3 > n1 && n3> n1) {
    console.log('o maior número é ' + n3);
} else if (n1 === n2 && n1 !== n3 && n2 !== n3) {
    console.log('n1 e n2 são iguais');
} else if (n2 === n3 && n3 !== n1 && n2 !== n1) {
    console.log('n2 e n3 são iguais');
} else if (n1 === n3 && n1 !== n2 && n3 !== n2) {
    console.log('n1 e n3 são iguais');
} else {
    console.log('todos os números são iguas');
}

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const positiveOrNegativeValue = -10;
let isPositive = undefined;

if (positiveOrNegativeValue >= 0) {
    isPositive = true;
} else {
    isPositive = false;
}

console.log(isPositive);

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angle1 = 40;
const angle2 = 50;
const angle3 = 80;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log('erro: os ângulos informados devem ser positivos');
} else if ((angle1 + angle2 + angle3) === 180) {
    console.log('É um triângulo válido? ' + true);
} else {
    console.log('É um triângulo válido? ' + false);
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const chessPiece = 'REi';
let chessPieceDescription = null;

switch (chessPiece.toLowerCase()) {
    case 'rei':
        chessPieceDescription = 'Rei -> pode andar 1 casa em qualquer direção';
        break;
    case 'rainha':
        chessPieceDescription = 'Rainha -> pode andar quantas casas o jogador desejar em qualquer direção';
        break;
    case 'bispo':
        chessPieceDescription = 'Bispo -> pode andar quantas casas o jogador desejar nas diagonais'
        break;
    case 'cavalo':
        chessPieceDescription = 'Cavalo -> anda em formato de "L", também pode "pular" peças';
        break;
    case 'torre':
        chessPieceDescription = 'Torre -> pode andar quantas casas o jogador desejar para frente, para trás ou para os lados';
        break;
    case 'peão':
        chessPieceDescription = 'Peão -> pode andar uma casa para frente (na saída da posição inicial, pode andar duas casas para frente)';
        break;
    default:
        chessPieceDescription = 'Erro: a peça informada não existe no jogo de xadrez!'
};

console.log(chessPieceDescription);

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const score = 75;
let percentageText = null;

if (score < 0 || score > 100) {
    percentageText = 'a nota deve estar entre 0 e 100';
} else if (score < 50) {
    percentageText = 'F';
} else if (score < 60) {
    percentageText = 'E';
} else if (score < 70) {
    percentageText = 'D';
} else if (score < 80) {
    percentageText = 'C';
} else if (score < 90) {
    percentageText = 'B';
} else {
    percentageText = 'A';
}

console.log(score + ' -> ' + percentageText);

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const number1 = 2;
const number2 = 3;
const number3 = 5;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    console.log('Pelo menos um dos números é par? ' + true);
} else {
    console.log('Pelo menos um dos números é par? ' + false);
}

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
    console.log('Pelo menos um dos números é ímpar? ' + true);
} else {
    console.log('Pelo menos um dos números é ímpar? ' + false);
}

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const productCost = 1200;
const productSalePrice = 1500;
const productCostTax = 0.2;
let numberOfSoldProducts = 1000;

if (productCost < 0 || productSalePrice < 0 || numberOfSoldProducts < 0 || productCostTax < 0) {
    console.log('erro: um dos valores de entrada é menor que zero');
} else {
    let totalProductCost = productCost * (1 + productCostTax);
    let revenue = (productSalePrice - totalProductCost)*numberOfSoldProducts;
    console.log('Lucro = R$ ' + revenue.toFixed(2));
}


// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const wage = 3000.00;
let inssTax = 0.08;
let inssTaxCost = 0;
let irTax = 0;
let irTaxCost = 0;

if (wage > 1556.94 && wage <= 2594.92) {
    inssTax = 0.09;
} else if (wage > 2594.92 && wage <= 5189.82) {
    inssTax = 0.11;
} else if (wage > 5189.82) {
    inssTax = 0;
    inssTaxCost = 570.88;
}

let baseWage = wage * (1 - inssTax) - inssTaxCost;

if (baseWage > 1903.98 && baseWage <= 2826.65) {
    irTax = 0.075;
    irTaxCost = 142.80;
} else if (baseWage > 2826.65 && baseWage <= 3751.05) {
    irTax = 0.15;
    irTaxCost = 354.80;
} else if (baseWage > 3751.05 && baseWage <= 4664.68) {
    irTax = 0.225;
    irTaxCost = 636.13;
} else if (baseWage > 4664.68) {
    irTax = 0.275;
    irTaxCost = 869.36;
}

let netWage = baseWage * (1 - irTax) + irTaxCost;

console.log(`Para uma pessoa que recebe R$ ${wage.toFixed(2)}, o seu salário líquido será de R$ ${netWage.toFixed(2)}`);






