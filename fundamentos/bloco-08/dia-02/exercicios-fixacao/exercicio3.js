const books = require('./books');

function getNamedBook(booksList) {
  return booksList.find((book) => book.name.length === 26);
}

console.log(getNamedBook(books));