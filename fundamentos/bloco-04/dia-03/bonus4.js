// 4. Depois, faça uma pirâmide com n asteriscos de base:

const n = 5;
let midleOfN = (n + 1) / 2;
let pivotLeft = pivotRight = midleOfN;
let finalDrawing = '';
for (let row = 0; row <= midleOfN; row += 1){
    for (let column = 0; column <= n; column += 1){
        if (column > pivotLeft && column < pivotRight) {
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