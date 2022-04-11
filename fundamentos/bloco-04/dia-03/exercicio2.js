// 2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Sou estudante da Trybe, portanto sou um tryber';
let reversedWord = '';

for (let letter = word.length - 1; letter >= 0 ; letter -= 1) {
    reversedWord += word[letter];
}

console.log(reversedWord);
