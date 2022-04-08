// 1. Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

const n = 5;
let finalDrawing = '';
for (let column = 0; column < n; column += 1){
    for (let row = 0; row < n; row += 1){
        finalDrawing += '* ';
    }
    finalDrawing += '\n';
}

console.log(finalDrawing);