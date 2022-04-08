// 5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

const n = 9;
let midleOfN = (n + 1) / 2;
let pivotLeft = pivotRight = midleOfN;
let finalDrawing = '';
for (let row = 0; row < midleOfN; row += 1){
    for (let column = 0; column <= n; column += 1){
        if (row === midleOfN - 1 && column !== 0) {
            finalDrawing += ' * ';
        }
        else if (column === pivotLeft || column === pivotRight) {
            finalDrawing += ' * ';
        } else {
            finalDrawing += '   ';
        }
    }
    finalDrawing += '\n';
    pivotRight += 1;
    pivotLeft -= 1
}

console.log(finalDrawing);