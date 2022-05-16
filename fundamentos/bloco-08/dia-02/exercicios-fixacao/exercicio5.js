const books = require('./books');

function everyoneWasBornOnSecXX(booksList) {
  return booksList.every((book) => book.author.birthYear > 1900);
}

console.log(everyoneWasBornOnSecXX(books));