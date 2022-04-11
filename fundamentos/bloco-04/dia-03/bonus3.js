// 3. Agora inverta o lado do triângulo

const n = 5;
let finalDrawing = '';
for (let row = 0; row < n; row += 1){
    for (let column = 0; column < n; column += 1){
        if (column >= n - 1 - row) {
            finalDrawing += ' *';
        } else {
            finalDrawing += '  ';
        }
    }
    finalDrawing += '\n';
}

console.log(finalDrawing);