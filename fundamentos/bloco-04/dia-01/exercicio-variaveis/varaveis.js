const myName = "Arthur Vianna";
const birthCity = "Brasília";
let birthYear = 1996;

console.log('Nome:' + myName);
console.log('Cidade: ' + birthCity);
console.log('Ano de Nascimento: ' + birthYear);

birthYear = 2030;

console.log('Novo ano de Nascimento: ' + birthYear);

// Não é possível fazer a reatribuição para uma variável inicializada por "const", pois ela tem característica de constante.
// birthCity = "São Paulo";