// 1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// - O fatorial é representado pelo sinal !
// - 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

const number = 10;
let numberFactorial = 1;

for (let index = number; index > 0; index -= 1){
    numberFactorial *= index;
}

console.log(numberFactorial);
