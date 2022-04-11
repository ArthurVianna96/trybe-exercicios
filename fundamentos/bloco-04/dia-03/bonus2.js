// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

const n = 3;
let finalDrawing = '';
for (let row = 0; row < n; row += 1){
    for (let column = 0; column <= row; column += 1){
        finalDrawing += '* ';
    }
    finalDrawing += '\n';
}

console.log(finalDrawing);