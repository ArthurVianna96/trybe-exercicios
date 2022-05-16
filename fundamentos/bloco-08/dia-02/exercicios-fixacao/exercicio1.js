const books = require('./books');

function authorBornIn1947(booksArray) {
  return booksArray.find((book) => book.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947(books));