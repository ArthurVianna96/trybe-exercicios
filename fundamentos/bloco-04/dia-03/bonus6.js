// 6. Faça um programa que diz se um número definido numa variável é primo ou não.

// - Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// - Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

const numberToTest = 42;
let isPrime = true;

for (let number = 2; number <= numberToTest; number += 1) {
    if (number === numberToTest) continue;
    if (numberToTest % number === 0) {
        isPrime = false;
    }
}

if (!isPrime) {
    console.log(numberToTest + ' não é um número primo');
} else {
    console.log(numberToTest + ' é um número primo');
}
