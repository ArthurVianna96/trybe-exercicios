// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    for (let secondIndex = index + 1; secondIndex < numbers.length; secondIndex += 1) {
        if (numbers[secondIndex] < numbers[index]) {
            let temporaryValue = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = temporaryValue;
        } 
    }
}
console.log(numbers);

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index = 0; index < numbers.length; index += 1) {
    for (secondIndex = index + 1; secondIndex < numbers.length; secondIndex += 1) {
        if (numbers[secondIndex] > numbers[index]) {
            let temporaryValue = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = temporaryValue;
        }  
    }
}
console.log(numbers);

// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbersArray = [];
for (index = 0; index < numbers.length; index += 1) {

    //test if it's the last item in array
    if (index === numbers.length - 1) {
        newNumbersArray.push(numbers[index] * 2);
        break;
    }
    
    newNumbersArray.push(numbers[index] * numbers[index + 1]);
}
console.log(newNumbersArray);