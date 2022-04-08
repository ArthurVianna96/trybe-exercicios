// 3. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python is awesome', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let word of array) {
    word.length > biggestWord.length ? biggestWord = word : biggestWord;
    word.length < smallestWord.length ? smallestWord = word : smallestWord;
}

console.log(`the biggest word is "${biggestWord}"`);
console.log(`the smallest word is "${smallestWord}"`);