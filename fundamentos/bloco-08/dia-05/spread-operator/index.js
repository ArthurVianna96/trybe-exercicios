// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mamão', 'uva', 'abacaxi'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));