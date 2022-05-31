const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá
const [message, callback] = saudacoes;
callback(message);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água
const newArray = [comida, animal, bebida];
[animal, bebida, comida] = newArray;
console.log(comida, animal, bebida); 

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo