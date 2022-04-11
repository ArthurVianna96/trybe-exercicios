// 4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

const maxRange = 50;
let biggestPrimeNumber = 0;

for (let i = 0; i <= maxRange; i += 1) {
    let isDivisableByOtherNumber = 0;
    for (let j = 2; j <= maxRange; j += 1) {
        if (j === i) continue;
        if (i % j === 0) {
            isDivisableByOtherNumber += 1;
        }
    }
    if (isDivisableByOtherNumber === 0) {
        biggestPrimeNumber = i;
    }
}

console.log(biggestPrimeNumber);